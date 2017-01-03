import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import FloatingActionButtonComponent from './FloatingActionButtonComponent.jsx';
import {List, ListItem} from 'material-ui/List';

export default class UsersComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    render() {

        if (!this.state) {
            return false;
        }

        const presenter = super.getPresenter();
        const users = presenter.getUsers();


        const userListItems = users.map((user) => {
            const userId = user.id;
            return (
                <ListItem key={userId}
                          primaryText={user.name}
                          secondaryText={userId}
                          onClick={() => {presenter.navigate(userId)}}
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
