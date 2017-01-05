import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import LoadingComponent from './LoadingComponent.jsx';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserComponent extends PresenterComponent {

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
            <div className="user">
                <h1 className="user-name">{user.name}</h1>
                <div className="user-info">
                    <div className="attribute-section">
                        <div className="attribute">
                            <div className="attribute-label">ID</div>
                            <div className="attribute-content">{user.id}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Created At</div>
                            <div className="attribute-content">{user.createdAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Created User ID</div>
                            <div className="attribute-content"><UserLinkComponent userId={user.createdUserId} /></div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Updated At</div>
                            <div className="attribute-content">{user.updatedAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Updated User ID</div>
                            <div className="attribute-content"><UserLinkComponent userId={user.updatedUserId} /></div>
                        </div>
                    </div>
                </div>
                <div className="user-edit-button">
                    <RaisedButton label="Edit"
                                  primary={true}
                                  onClick={::presenter.navigateToEdit}
                    />
                </div>
            </div>
        );
    }

}
