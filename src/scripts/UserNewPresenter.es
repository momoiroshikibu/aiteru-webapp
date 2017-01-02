import Presenter from './Presenter.es';
import UserRepository from './repositories/UserRepository.es';
import UserNewComponent from './UserNewComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';

export default class UserNewPresenter extends Presenter {

    constructor(params) {
        super(UserNewComponent);
        this.screenTitle = () => {return 'New User';};
        this.name = '';
        this.message = null;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
        this.emitChange();
    }

    // parent
    async register() {
        try {
            const user = await UserRepository.addUser(this.name);
            TransitionUtil.emit(`/users/${user.id}`);
        } catch(e) {
            console.error(e);
        }
    }

}
