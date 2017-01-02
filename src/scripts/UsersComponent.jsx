import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';

import {List, ListItem} from 'material-ui/List';
import TransitionUtil from './utils/TransitionUtil.es';

import FloatingActionButtonComponent from './FloatingActionButtonComponent.jsx';

export default class UsersComponent extends WorkerComponent {

    constructor(props) {
        super(UsersWorker);
    }

    getTitle() {
        return 'Users';
    }

    renderSuccess(users) {

        const userListItems = users.map((user) => {
            return (
                <ListItem key={user.id}
                          primaryText={user.name}
                          secondaryText={user.id}
                          onClick={() => {TransitionUtil.emit(`/users/${user.id}`)}}
                />
            );
        });

        return (
            <div>
                <List>
                    {userListItems}
                </List>
                <FloatingActionButtonComponent path='/users/new' />
            </div>
        );
    }

}
