import React from 'react';
import {Component} from 'react';

export default class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            loginId: '',
            password: '',
            message: ''
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            <form onSubmit={this.attempt.bind(this)}>
                <div>
                    <input type="text" value={this.state.loginId} onChange={this.onChangeLoginId.bind(this)} />
                </div>
                <div>
                    <input type="password" value={this.state.password} onChange={this.onChangePassword.bind(this)} />
                </div>
                <button>Login</button>
            </form>
            </div>
        );
    }

    onChangeLoginId(e) {
        this.setState({
            loginId: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    attempt(e) {
        const self = this;
        e.preventDefault();
        fetch('/api/auth', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: this.state.loginId,
                address: this.state.password
            })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            window.accessToken = response.AccessToken; // TODO
            self.setState({
                message: 'Login Success'
            })
        }).catch((error) => {
            self.setState({
                message: 'Login Failure'
            });
        });
    }
}
