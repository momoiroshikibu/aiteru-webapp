import EventBus from '../utils/EventBus.es';
import QueryString from 'querystring';


const checkAuthOrThrow = (response) => {
    if (response.status === 401) {
        EventBus.emit('Fetcher:Authentication:Failed');
        throw Error('Fetcher:Authentication:Failed');
    }
};

export default class Fetcher {

    static async get(path, queryParams) {

        const requestPath = (queryParams)
              ? `${path}?${QueryString.stringify(queryParams)}`
              : path;
        const response = await fetch(requestPath, {
            headers: {
                'Authorization': localStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });

        checkAuthOrThrow(response);

        const json = await response.json();
        return json;
    }

    static async post(path, body) {
        const response = await fetch(path, {
            body: JSON.stringify(body),
            headers: {
                'Authorization': localStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        checkAuthOrThrow(response);

        const json = await response.json();
        return json;
    }

    static async put(path, body) {
        const response = await fetch(path, {
            body: JSON.stringify(body),
            headers: {
                'Authorization': localStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        });

        checkAuthOrThrow(response);

        const json = await response.json();
        return json;
    }

}
