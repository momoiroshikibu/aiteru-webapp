import Worker from './Worker.es';
import UserRepository from './UserRepository.es';

export default class UsersWorker extends Worker {

    constructor() {
        super();
    }

    async work() {
        try {
            const users = await UserRepository.fetchUsers();
            this.succeed(users);
        } catch(e) {
            this.fail(e);
        }
    }

}
