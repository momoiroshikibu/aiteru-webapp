import Fetcher from './Fetcher.es';
import 'babel-polyfill';

export default class LoginRepository {

    static async login(loginId, password) {
        try {
            const responseBody = await Fetcher.post('/api/auth', {
                address: password,
                name: loginId
            });

            if (responseBody === null) {
                throw new Error({error: 'authentiacation failed'});
            }

            const accessToken = responseBody.session.AccessToken;
            localStorage.setItem('authorization', accessToken);
            return accessToken;
        } catch (e) {
            throw e;
        }
    }
}
