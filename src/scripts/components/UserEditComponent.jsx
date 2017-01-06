import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import LoadingComponent from './LoadingComponent.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DateFormatter from '../utils/DateFormatter.es';

export default class UserEditComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    render() {
        const presenter = super.getPresenter();
        const user = presenter.getUser();

        if (!user) {
            return (<LoadingComponent />);
        }

        return (
            <div className="user-edit-component">
                <p>
                    You can edit the user.<br />
                    Input user's information, and Tap UPDATE button.
                </p>
                <p className="message">
                    {presenter.getMessage()}
                </p>
                <form onSubmit={::presenter.update}>
                    <div>
                        <TextField
                            hintText="User Name"
                            floatingLabelText="User Name"
                            value={presenter.getName()}
                            onChange={::this.onChangeName}
                        />
                    </div>
                    <div>
                        <p>User info updated: <span>{DateFormatter.formatTimeAgo(user.updatedAt)}</span></p>
                    </div>
                    <div>
                        <RaisedButton className="user-update-button"
                                      label="update"
                                      primary={true}
                                      onClick={::presenter.update}
                        />
                        <RaisedButton className="user-edit-cancel-button"
                                      label="cancel"
                                      secondary={true}
                                      onClick={::presenter.navigateToUser}
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
