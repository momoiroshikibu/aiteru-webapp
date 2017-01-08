import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    render() {
        const presenter = super.getPresenter();
        return (
            <div className="login-component">
                <p className="message">
                    {presenter.getMessage()}
                </p>
                <form onSubmit={::this.login}>
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
                                  onClick={::this.login} />
                </form>
            </div>
        );
    }

    onChangeLoginId(e) {
        super.getPresenter().setLoginId(e.target.value);
    }

    onChangePassword(e) {
        super.getPresenter().setPassword(e.target.value);
    }

    login() {
        super.getPresenter().login();
    }
}
