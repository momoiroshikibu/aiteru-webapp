import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserNewComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    getTitle() {
        return 'New User';
    }

    render() {
        const presenter = super.getPresenter();
        return (
            <div className="input-screen">
                <p>
                    You can create a user.<br />
                    Input user's information, and Tap CREATE button.
                </p>
                <p className="message">
                    {presenter.getMessage()}
                </p>
                <form onSubmit={::presenter.register}>
                    <div>
                        <TextField
                            hintText="User Name"
                            floatingLabelText="User Name"
                            value={presenter.getName()}
                            onChange={::this.onChangeName}
                        />
                    </div>
                    <div className="action-buttons">
                        <RaisedButton className="action-button"
                                      label="Create"
                                      primary={true}
                                      onClick={::presenter.register}
                        />
                    </div>
                </form>
            </div>
        );
    }

    onChangeName(event, newValue) {
        this.state.presenter.setName(newValue);
    }
}
