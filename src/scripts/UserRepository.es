export default class UserRepository {

    static async fetchUsers(userId) {
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
            console.error(e);
            return undefined;
        }
    }

}

