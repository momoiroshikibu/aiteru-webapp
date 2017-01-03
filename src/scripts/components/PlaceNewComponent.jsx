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
            <div className="place-new-component">
                <h1>New Place</h1>
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
                    <div>
                        <RaisedButton className="place-create-button"
                                      label="Create"
                                      primary={true}
                                      onClick={::presenter.register}
                        />
                    </div>
                </form>
            </div>
        );
    }

    onChangeName(event, value) {
        this.state.presenter.setName(value);
    }

}
