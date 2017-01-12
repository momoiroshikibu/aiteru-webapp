import Presenter from './Presenter.es';
import UserRepository from '../repositories/UserRepository.es';
import UserEditComponent from '../components/UserEditComponent.jsx';
import NavigationUtil from '../utils/NavigationUtil.es';

export default class UserEditPresenter extends Presenter {

    constructor(userId) {
        super(UserEditComponent);
        this.screenTitle = () => { return 'Edit User'; };
        this.userId = userId;
        this.user = null;
        this.message = null;
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
        this.emitChange();
    }

    getName() {
        return this.user.name;
    }

    getMessage() {
        return this.message;
    }

    setName(name) {
        this.user.name = name;
        this.emitChange();
    }

    setMessage(message) {
        this.message = message;
        this.emitChange();
    }


    async initialize() {
        await this.fetch();
    }

    async fetch() {
        const user = await UserRepository.fetchUser(this.userId);
        this.setUser(user);
    }

    async update() {
        if (!this.user.name) {
            this.setMessage('User Name cannot be empty.');
            return;
        }

        this.setMessage('updating...');

        const user = await UserRepository.updateUser(this.user.id, this.user.name);
        this.setUser(user);
        this.setMessage('User info updated.');
        this.emitChange();
    }

    navigateToUser() {
        NavigationUtil.emit(`/users/${this.user.id}`);
    }
}
