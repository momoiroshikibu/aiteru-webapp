import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {List, ListItem} from 'material-ui/List';
import TransitionUtil from './utils/TransitionUtil.es';


export default class UsersComponent extends WorkerComponent {

    constructor(props) {
        super(UsersWorker);
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
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <List>
                    {userListItems}
                </List>
            </MuiThemeProvider>
        );
    }

}
