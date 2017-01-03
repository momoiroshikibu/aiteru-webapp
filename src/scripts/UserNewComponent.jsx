import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';
import EventBus from './utils/EventBus.es';
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
            <div className="user-new-component">
                <h1>New User</h1>
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
                    <div>
                        <RaisedButton className="user-create-button"
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
