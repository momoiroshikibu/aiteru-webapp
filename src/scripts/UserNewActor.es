import Actor from './Actor.es';
import UserRepository from './UserRepository.es';

export default class UserNewWorker extends Actor {

    constructor(props) {
        super();
    }

//     async work() {
//         this.succeed();
//     }

//     async validate(userName) {
//         if (!userName) {
//             this.status = 'validationFailure';
//         }
//     }

    async register(userName) {
        try {
            const user = await UserRepository.addUser(userName);
            this.emitEvent('register:success', user);
        } catch(e) {
            this.emitEvent('register:failure', e);
        }
    }

}
