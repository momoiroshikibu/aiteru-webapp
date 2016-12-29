import Fetcher from './Fetcher.es';

export default class UserRepository {

    static async addUser(userName) {
        try {
            return await Fetcher.post('/api/v1/users', {
                name: userName
            });
        } catch (e) {
            return undefined;
        }
    }

    static async fetchUsers() {
        try {
            return await Fetcher.get('/api/v1/users');
        } catch (e) {
            return undefined;
        }
    }

    static async fetchUser(userId) {
        try {
            return await Fetcher.get(`/api/v1/users/${userId}`);
        } catch (e) {
            return undefined;
        }
    }

}

