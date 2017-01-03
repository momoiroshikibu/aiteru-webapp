import pathToRegexp from 'path-to-regexp';
import QueryString from 'querystring';

import {EventEmitter} from 'events';

export default class Router extends EventEmitter {

    constructor(notFoundComponent) {
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

    resolve(rawPath) {
        const [path, query] = rawPath.split('?');
        const queryParams = QueryString.parse(query);
        const route = this.routes.find((route) => {
            return !!route.regexp.exec(path);
        });

        if (!route) {
            this.currentPath = null;
            this.currentComponent = null;
            this.currentPathParams = null;
            this.emit('notfound', path, queryParams);
            return;
        }

        this.currentPath = path;
        this.currentQueryParams = queryParams;
        const event = (this.currentComponent === route.component)? 'update' : 'change';
        console.log(event);

        this.currentComponent = route.component;
        const matches = route.regexp.exec(path);
        this.currentPathParams = route.regexp.keys.reduce((keyValues, key, i) => {
            keyValues[key.name] = matches[i + 1];
            return keyValues;
        }, {});
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

