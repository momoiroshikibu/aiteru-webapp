export default class UserRepository {

    static async addUser(userName) {
        return Promise.resolve({name: 'yeah!!!!'});
//         try {
//             const response = await fetch(`/api/v1/users`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': localStorage.getItem('authorization') // TODO
//                 },
//                 method: 'POST',
//                 body: JSON.stringify({
//                     name: userName
//                 })
//             });
//             return await response.json();
//         } catch (e) {
//             return undefined;
//         }
    }

    static async fetchUsers() {
        try {
            const response = await fetch(`/api/v1/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authorization') // TODO
                },
                method: 'GET'
            });
            return await response.json() || [];
        } catch (e) {
            return undefined;
        }
    }

    static async fetchUser(userId) {
        try {
            const response = await fetch(`/api/v1/users/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authorization') // TODO
                },
                method: 'GET'
            });
            return await response.json();
        } catch (e) {
            return undefined;
        }
    }

}

