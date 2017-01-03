import Presenter from './Presenter.es';
import UserRepository from '../repositories/UserRepository.es';
import UsersComponent from '../components/UsersComponent.jsx';
import TransitionUtil from '../utils/TransitionUtil.es';

export default class UsersComponentPresenter extends Presenter {

    constructor() {
        super(UsersComponent);
        this.screenTitle = 'Users';
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    async initialize() {
        this.fetch();
    }

    async fetch() {
        try {
            const users = await UserRepository.fetchUsers();
            this.users = users;
            this.emitChange();
        } catch(e) {
            console.error(e);
        }
    }

    navigate(userId) {
        TransitionUtil.emit(`/users/${userId}`);
    }

}
