import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class PlaceNewComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    render() {
        const presenter = this.state.presenter;
        return (
            <div className="input-screen">
                <p>
                    You can create a place.<br />
                    Input place's information, and Tap CREATE button.
                </p>
                <p className="message">
                    {presenter.getMessage()}
                </p>
                <form onSubmit={presenter.register}>
                    <div>
                        <TextField
                            hintText="Place Name"
                            floatingLabelText="Place Name"
                            value={presenter.getName()}
                            onChange={::this.onChangeName}
                        />
                    </div>
                </form>
                <div className="action-buttons">
                    <RaisedButton className="action-button"
                                  label="Create"
                                  primary={true}
                                  onClick={::presenter.register}
                    />
                </div>
            </div>
        );
    }

    onChangeName(event, value) {
        this.state.presenter.setName(value);
    }

}
