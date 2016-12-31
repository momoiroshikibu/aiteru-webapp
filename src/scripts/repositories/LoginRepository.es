import Fetcher from './Fetcher.es';

export default class LoginRepository {

    static async login(loginId, password) {
        try {
            const responseBody = await Fetcher.post('/api/auth', {
                name: loginId,
                address: password
            });

            if (responseBody == null) {
                throw 'authentiacation failed';
            }

            const accessToken = responseBody.AccessToken;
            localStorage.setItem('authorization', accessToken);
            return accessToken;
        } catch (e) {
            throw e;
        }
    }
}
