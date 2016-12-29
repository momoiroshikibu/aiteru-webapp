import Fetcher from './Fetcher.es';

export default class LoginRepository {

    static async login(loginId, password) {
        try {
            const responseBody = await Fetcher.post('/api/auth', {
                name: loginId,
                address: password
            });
            return responseBody.AccessToken;
        } catch (e) {
            return undefined;
        }
    }
}
