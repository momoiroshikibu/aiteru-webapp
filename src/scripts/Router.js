import pathToRegexp from 'path-to-regexp';

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

    resolve(path) {
        const route = this.routes.find((route) => {
            return !!route.regexp.exec(path);
        });

        if (!route) {
            this.currentPath = null;
            this.currentComponent = null;
            this.currentArgs = null;
            this.emit('notfound', path);
            return;
        }

        this.currentPath = path;
        this.currentComponent = route.component;
        const matches = route.regexp.exec(path);
        this.currentArgs = matches.slice(1);
        this.emit('change', path);
    }

    getCurrentComponent() {
        return {
            component: this.currentComponent,
            args: this.currentArgs
        }
    }
}

