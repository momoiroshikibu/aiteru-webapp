import React from 'react';
import {Component} from 'react';
import LoginRepository from './repositories/LoginRepository.es';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


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
            <form onSubmit={this.attempt}>
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <TextField
                            hintText="Login ID"
                            onChange={::this.onChangeLoginId}
                        />
                    </MuiThemeProvider>
                </div>

                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                            onChange={::this.onChangePassword}
                        />
                    </MuiThemeProvider>
                </div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <RaisedButton label="Login" primary={true} onClick={::this.attempt} />
                </MuiThemeProvider>
            </form>
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
        //        event.preventDefault();

        LoginRepository.login(this.state.loginId, this.state.password).then((accessToken) => {
            localStorage.setItem('authorization', accessToken); // TODO
            this.setState({
                message: 'Login Success'
            });
            window.location = '#/places'; // TODO
        }).catch((error) => {
            this.setState({
                message: 'Login Failure'
            });
        });
    }
}
