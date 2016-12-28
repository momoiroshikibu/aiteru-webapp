import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import UserWorker from './UserWorker.es';

export default class UserComponent extends WorkerComponent {

    constructor(props) {
        super(UserWorker, props.args[0]);
    }


    renderPending() {
        return (<p>fetching</p>
        );
    }

    renderFailure(failure) {
        return (<p>User Not Found</p>);
    }

    renderSuccess(user) {
        return (
            <div className="user">
                <h1 className="user-name">{user.name}</h1>
                <p className="message">
                    {this.state.message}
                </p>
                <table className="user-attributes">
                    <tr>
                        <th>ID</th>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <th>createdAt</th>
                        <td>{user.createdAt}</td>
                    </tr>
                    <tr>
                        <th>createdUserId</th>
                        <td><UserLinkComponent userId={user.id} /></td>
                    </tr>
                    <tr>
                        <th>updatedAt</th>
                        <td>{user.updatedAt}</td>
                    </tr>
                    <tr>
                        <th>updatedUserId</th>
                        <td><UserLinkComponent userId={user.id} /></td>
                    </tr>
                </table>
            </div>
        );
    }

}
