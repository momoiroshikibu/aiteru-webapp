import React from 'react';
import {Component} from 'react';
import LoginService from './LoginService.es';

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


    attempt(event) {
        event.preventDefault();

        LoginService(this.state.loginId, this.state.password).then((accessToken) => {
            localStorage.setItem('authorization', accessToken); // TODO
            this.setState({
                message: 'Login Success'
            });
        }).catch((error) => {
            this.setState({
                message: 'Login Failure'
            });
        });
    }
}
