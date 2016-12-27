import pathToRegexp from 'path-to-regexp';

import {EventEmitter} from 'events';

export default class Router extends EventEmitter {

    constructor(notFoundComponent) {
        super();
        this.routes = [];
        this.currentPath = null;
        this.currentComponent = null;
        this.currentWorker = null;
        this.currentArgs = null;
    }

    add(pattern, component, worker) {
        this.routes.push({
            regexp: pathToRegexp(`#${pattern}`),
            component: component,
            worker: worker
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
            this.currentWorker = null;
            this.currentArgs = null;
            this.emit('notfound', path);
            return;
        }

        this.currentPath = path;
        this.currentComponent = route.component;
        this.currentWorker = route.worker;
        const matches = route.regexp.exec(path);
        this.currentArgs = matches.slice(1);
        this.emit('change', path);
    }

    getCurrentComponent() {
        return {
            component: this.currentComponent,
            worker: this.currentWorker,
            args: this.currentArgs
        }
    }
}

