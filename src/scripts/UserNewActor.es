import Actor from './Actor.es';
import UserRepository from './UserRepository.es';

export default class UserNewWorker extends Actor {

    constructor(props) {
        super();
    }


    async validate(userName) {
        const violations = [];
        if (userName === '') {
            violations.push({
                field: 'userName',
                reason: 'required'
            });
        }
        return await violations;
    }

    async register(userName) {

        const violations = await this.validate(userName);
        if (violations.length > 0) {
            return this.emitEvent('register:validationError', violations);
        }

        try {
            const user = await UserRepository.addUser(userName);
            return this.emitEvent('register:success', user);
        } catch(e) {
            return this.emitEvent('register:failure', e);
        }
    }

}
