export default class Fetcher {

    static async get(path) {
        const response = await fetch(path, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization') // TODO
            },
            method: 'GET'
        });
        return await response.json();
    }

    static async post(path, body) {
        const response = await fetch(path, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization') // TODO
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        return await response.json();
    }
}
