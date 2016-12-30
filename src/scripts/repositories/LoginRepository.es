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

            return responseBody.AccessToken;

        } catch (e) {
            throw e;
        }
    }
}
