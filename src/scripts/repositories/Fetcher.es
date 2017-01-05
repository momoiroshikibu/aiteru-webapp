import EventBus from '../utils/EventBus.es';
import QueryString from 'querystring';

export default class Fetcher {

    static async get(path, queryParams) {

        const requestPath = (queryParams)
              ? path + '?' + QueryString.stringify(queryParams)
              : path;
        const response = await fetch(requestPath, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization') // TODO
            },
            method: 'GET'
        });

        checkAuthOrThrow(response);

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

        checkAuthOrThrow(response);

        return await response.json();
    }

    static async put(path, body) {
        const response = await fetch(path, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization') // TODO
            },
            method: 'PUT',
            body: JSON.stringify(body)
        });

        checkAuthOrThrow(response);

        return await response.json();
    }

}


function checkAuthOrThrow(response) {
    if (response.status === 401) {
        EventBus.emit('Fetcher:Authentication:Failed');
        throw 'Fetcher:Authentication:Failed';
    }
}
