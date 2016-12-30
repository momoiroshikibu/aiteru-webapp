import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import UserWorker from './UserWorker.es';

export default class UserComponent extends WorkerComponent {

    constructor(props) {
        super(UserWorker, props.args, {
            renderers: {
                pending: Renderer.pending,
                failure: Renderer.failure,
                success: Renderer.success
            }
        });
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
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        );
    }

}


class Renderer {
    static pending() {
        return (<p>fetching</p>);
    }

    static failure() {
        return (<p>User Not Found</p>);
    }

    static success(user) {
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
                            <div className="attribute-content">{user.createdUserId}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Updated At</div>
                            <div className="attribute-content">{user.updatedAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Updated User ID</div>
                            <div className="attribute-content">{user.updatedUserId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
