import Worker from './Worker.es';
import UserRepository from './UserRepository.es';

export default class UserNewWorker extends Worker {

    constructor(props) {
        super();
    }

    async work() {
        this.succeed();
    }

    async validate(userName) {
        if (!userName) {
            this.status = 'validationFailure';
        }
    }

    async register(userName) {
        try {
            UserRepository.addUser(userName).then((user) => {
                this.setState({
                    message: userName
                });
            });
            const user = await UserRepository.fetchUser(this.userId);
            this.succeed(user);
        } catch(e) {
            this.fail(e);
        }
    }

}
