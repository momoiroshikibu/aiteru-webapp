import pathToRegexp from 'path-to-regexp';
import QueryString from 'querystring';

import {EventEmitter} from 'events';

export default class Router extends EventEmitter {

    constructor(notFoundComponent) {
        super();
        this.routes = [];
        this.currentPath = null;
        this.currentComponent = null;
        this.currentArgs = null;
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
        const params = QueryString.parse(query);
        const route = this.routes.find((route) => {
            return !!route.regexp.exec(path);
        });

        if (!route) {
            this.currentPath = null;
            this.currentComponent = null;
            this.currentArgs = null;
            this.emit('notfound', path, params);
            return;
        }

        this.currentPath = path;
        this.currentParams = params;
        this.currentComponent = route.component;
        const matches = route.regexp.exec(path);
        this.currentArgs = route.regexp.keys.reduce((keyValues, key, i) => {
            keyValues[key.name] = matches[i + 1];
            return keyValues;
        }, {});
        this.emit('change', path, params);
    }


    getCurrentComponent() {
        return {
            component: this.currentComponent,
            params: this.currentParams,
            args: this.currentArgs
        }
    }
}

