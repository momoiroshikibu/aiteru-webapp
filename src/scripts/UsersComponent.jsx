import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';

export default class UsersComponent extends WorkerComponent {

    constructor(props) {
        super(UsersWorker);
    }

    renderSuccess(users) {

        const userLinks = users.map((user) => {
            return (<li><UserLinkComponent key={user.id} userId={user.id} userName={user.name} /></li>);
        });

        return (<ul>{userLinks}</ul>);
    }

}
