import React from 'react';
import {Component} from 'react';

export default class UserComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            userId: props.args[0],
            user: null
        };
    }


    componentWillMount() {
        const self = this;
        fetch(`/api/v1/users/${this.state.userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization') // TODO
            },
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((user) => {
            self.setState({
                user: user
            });
        }).catch((error) => {
            self.setState({
                message: 'error!'
            });
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
                        <th>ownerIds</th>
                        <td>{user.ownerIds}</td>
                    </tr>
                    <tr>
                        <th>collaboratorIds</th>
                        <td>{user.collaboratorIds}</td>
                    </tr>
                    <tr>
                        <th>createdAt</th>
                        <td>{user.createdAt}</td>
                    </tr>
                    <tr>
                        <th>createdUserId</th>
                        <td>{user.createdUserId}</td>
                    </tr>
                    <tr>
                        <th>updatedAt</th>
                        <td>{user.updatedAt}</td>
                    </tr>
                    <tr>
                        <th>updatedUserId</th>
                        <td>{user.updatedUserId}</td>
                    </tr>
                </table>
            </div>
        );
    }

}
