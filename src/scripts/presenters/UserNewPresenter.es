import Presenter from './Presenter.es';
import UserRepository from '../repositories/UserRepository.es';
import UserNewComponent from '../components/UserNewComponent.jsx';
import TransitionUtil from '../utils/TransitionUtil.es';

export default class UserNewPresenter extends Presenter {

    constructor() {
        super(UserNewComponent);
        this.screenTitle = () => { return 'New User'; };
        this.name = '';
        this.message = null;
    }

    getName() {
        return this.name;
    }

    getMessage() {
        return this.message;
    }

    setName(name) {
        this.name = name;
        this.emitChange();
    }

    setMessage(message) {
        this.message = message;
        this.emitChange();
    }

    async register() {
        if (!this.name) {
            this.setMessage('User Name cannot be empty.');
            return;
        }

        const user = await UserRepository.addUser(this.name);
        TransitionUtil.emit(`/users/${user.id}`);
    }

}
