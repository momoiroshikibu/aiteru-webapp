import Worker from './Worker.es';
import UserRepository from './UserRepository.es';

export default class UserWorker extends Worker {

    constructor(userId) {
        super();
        this.userId = userId;;
    }

    async work() {
        try {
            const user = await UserRepository.fetchUser(this.userId);
            this.succeed(user);
        } catch(e) {
            this.fail(e);
        }
    }

}
