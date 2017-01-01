import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';

import {List, ListItem} from 'material-ui/List';
import TransitionUtil from './utils/TransitionUtil.es';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

        const style = {
            marginRight: 20,
            position: 'fixed',
            bottom: '20px',
            right: 0
        };

        return (
            <div>

                <List>
                    {userListItems}
                </List>


                <FloatingActionButton style={style} onTouchTap={() => {TransitionUtil.emit('/users/new')}}>
                    <ContentAdd />
                </FloatingActionButton>

            </div>
        );
    }

}
