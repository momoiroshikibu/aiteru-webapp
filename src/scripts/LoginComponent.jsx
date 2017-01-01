import React from 'react';
import {Component} from 'react';
import LoginRepository from './repositories/LoginRepository.es';
import TransitionUtil from './utils/TransitionUtil.es';
import EventBus from './utils/EventBus.es';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            loginId: '',
            password: '',
            message: ''
        };
    }

    render() {
        return (
            <div className="login-component">
                <h1>Login</h1>
                <p className="message">
                    {this.state.message}
                </p>
                <form onSubmit={this.attempt}>
                    <div>
                        <TextField
                            hintText="Login ID"
                            floatingLabelText="Login ID"
                            onChange={::this.onChangeLoginId}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                            onChange={::this.onChangePassword}
                        />
                    </div>
                    <RaisedButton className="login-button"
                                  label="Login"
                                  primary={true}
                                  onClick={::this.attempt} />
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
        LoginRepository.login(this.state.loginId, this.state.password).then((accessToken) => {
            
            TransitionUtil.emit('/places');
            EventBus.emit('change:application:message', 'Login Success');
        }).catch((error) => {
            this.setState({
                message: 'Login Failed.'
            });
        });
    }
}
