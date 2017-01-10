import Fetcher from './Fetcher.es';
import 'babel-polyfill';

export default class UserRepository {

    static async addUser(userName) {
        try {
            const response = await Fetcher.post('/api/v1/users', {name: userName});
            return response.user;
        } catch (e) {
            return null;
        }
    }

    static async updateUser(userId, userName) {
        try {
            const response = await Fetcher.put(`/api/v1/users/${userId}`, {name: userName});
            return response.user;
        } catch (e) {
            return null;
        }
    }

    static async fetchUsers() {
        try {
            const response = await Fetcher.get('/api/v1/users');
            return response.users;
        } catch (e) {
            return null;
        }
    }

    static async fetchUser(userId) {
        try {
            const response = await Fetcher.get(`/api/v1/users/${userId}`);
            return response.user;
        } catch (e) {
            return null;
        }
    }

}

