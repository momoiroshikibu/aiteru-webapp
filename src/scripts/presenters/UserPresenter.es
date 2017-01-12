import Presenter from './Presenter.es';
import UserRepository from '../repositories/UserRepository.es';
import UserComponent from '../components/UserComponent.jsx';
import NavigationUtil from '../utils/NavigationUtil.es';

export default class UserPresenter extends Presenter {

    constructor(userId) {
        super(UserComponent);
        this.screenTitle = 'User';
        this.userId = userId;
        this.user = null;
    }

    getUser() {
        return this.user;
    }

    updateParams({pathParams}) {
        this.userId = pathParams.userId;
        this.fetch();
    }


    async initialize() {
        await this.fetch();
    }

    async fetch() {
        const user = await UserRepository.fetchUser(this.userId);
        this.user = user;
        this.emitChange();
    }

    navigateToEdit() {
        NavigationUtil.emit(`/users/${this.userId}/edit`);
    }

}
