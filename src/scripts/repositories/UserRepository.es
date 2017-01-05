import Fetcher from './Fetcher.es';

export default class UserRepository {

    static async addUser(userName) {
        try {
            const response = await Fetcher.post('/api/v1/users', {
                name: userName
            });
            return response.user;
        } catch (e) {
            return undefined;
        }
    }

    static async updateUser(userId, userName) {
        try {
            const response = await Fetcher.put(`/api/v1/users/${userId}`, {
                name: userName
            });
            return response.user;
        } catch (e) {
            return undefined;
        }
    }

    static async fetchUsers() {
        try {
            const response = await Fetcher.get('/api/v1/users');
            return response.users;
        } catch (e) {
            return undefined;
        }
    }

    static async fetchUser(userId) {
        try {
            const response = await Fetcher.get(`/api/v1/users/${userId}`);
            return response.user;
        } catch (e) {
            return undefined;
        }
    }

}

