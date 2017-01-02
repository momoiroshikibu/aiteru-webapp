import Presenter from './Presenter.es';
import UserRepository from './repositories/UserRepository.es';
import UserComponent from './UserComponent.jsx';

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

    async initialize() {
        this.fetch();
    }

    async fetch() {
        try {
            const user = await UserRepository.fetchUser(this.userId);
            this.user = user;
            this.emitChange();
        } catch(e) {
            console.error(e);
        }
    }

    navigate() {
        TransitionUtil.emit(`/users/${user.id}`)
    }

}
