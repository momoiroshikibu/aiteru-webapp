import Presenter from './Presenter.es';
import LoginRepository from '../repositories/LoginRepository.es';
import LoginComponent from '../components/LoginComponent.jsx';
import NagivationUtil from '../utils/TransitionUtil.es';
import EventBus from '../utils/EventBus.es';

export default class LoginPresenter extends Presenter {

    constructor() {
        super(LoginComponent);
        this.screenTitle = () => { return 'Login'; };
        this.loginId = '';
        this.password = '';
        this.message = '';
    }

    getLoginId() {
        return this.name;
    }

    setLoginId(loginId) {
        this.loginId = loginId;
        this.emitChange();
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
        this.emitChange();
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
        this.emitChange();
    }

    async login() {
        if (!this.loginId) {
            this.setMessage('Login ID cannot be empty.');
            return;
        }

        if (!this.password) {
            this.setMessage('Password cannot be empty.');
            return;
        }

        try {
            await LoginRepository.login(this.loginId, this.password);
            NagivationUtil.emit('/places');
            EventBus.emit('change:application:message', 'Login Success');
        } catch (e) {
            this.setMessage('Login Failed');
        }
    }

}
