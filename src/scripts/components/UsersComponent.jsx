import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import FloatingActionButtonComponent from './FloatingActionButtonComponent.jsx';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ChanrioImage from './ChanrioImage.es';


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
                          innerDivStyle={{
                              fontSize: '20pt',
                              minHeight: '20px'
                          }}
                          leftAvatar={<Avatar size={30}
                                    style={{marginTop: '6px'}}
                                    src={`data:image/png;base64,${ChanrioImage}`} />}
                          rightIcon={(<div style={{
                              fontSize: '13px',
                              paddingTop: '6px',
                              textAlign: 'center'
                          }}>{user.id}</div>)}
                          onClick={() => { presenter.navigate(userId); }}
                />
            );
        });

        return (
            <div>
                <List>
                    {userListItems}
                </List>
                <FloatingActionButtonComponent path="/users/new" />
            </div>
        );
    }

}
