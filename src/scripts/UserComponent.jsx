import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import UserService from './UserService.es';

export default class UserComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            userId: props.args[0],
            user: null
        };
    }

    componentWillMount() {
        UserService(this.state.userId).then((user) => {
            this.setState({user});
        }).catch((error) => {
            this.setState({message: 'error!'});
        });
    }

    render() {

        if (!this.state.user) {
            return (
                <marqee>
                    fetching
                </marqee>
            );
        }

        const user = this.state.user;

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
