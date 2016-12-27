export default async function UserService(userId) {
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
        console.error(e);
    }
}
