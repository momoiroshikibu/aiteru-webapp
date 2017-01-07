import pathToRegexp from 'path-to-regexp';
import QueryString from 'querystring';

import {EventEmitter} from 'events';

export default class Router extends EventEmitter {

    constructor() {
        super();
        this.routes = [];
        this.currentPath = null;
        this.currentComponent = null;
        this.currentPathParams = null;
        this.currentQueryParams = null;
    }

    add(pattern, component) {
        this.routes.push({
            regexp: pathToRegexp(`#${pattern}`),
            component: component
        });
        return this;
    }

    setNotFoundComopnent(component) {
        this.notFoundComponent = null;
    }

    getNotFoundComponent() {
        return this.notFoundComponent;
    }

    resolve(rawPath) {
        const [path, query] = rawPath.split('?');
        const queryParams = QueryString.parse(query);
        const route = this.routes.find((route) => {
            return !!route.regexp.exec(path);
        });


        this.currentPath = path;
        this.currentQueryParams = queryParams;

        if (!route) {
            this.currentComponent = this.notFoundComponnet;
            this.emit('notfound');
            return;
        }

        const event = (this.currentComponent === route.component)? 'update' : 'change';
        this.currentComponent = route.component;
        this.currentPathParams = ((route) => {
            const matches = route.regexp.exec(path);
            return route.regexp.keys.reduce((keyValues, key, i) => {
                keyValues[key.name] = matches[i + 1];
                return keyValues;
            }, {});
        })(route);
        this.emit(event);
    }


    getCurrentPath() {
        return this.currentPath;
    }

    getCurrentComponent() {
        return this.currentComponent;
    }

    getCurrentPathParams() {
        return this.currentPathParams;
    }

    getCurrentQueryParams() {
        return this.currentQueryParams;
    }
}

