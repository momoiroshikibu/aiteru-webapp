import pathToRegexp from 'path-to-regexp';

export default class Router {

    constructor() {
        this.routes = [];
    }

    add(pattern, fn) {
        this.routes.push({
            regexp: pathToRegexp(`#${pattern}`),
            fn: fn
        });
        return this;
    }

    resolve(path) {
        const route = this.routes.find(function(route) {
            return !!route.regexp.exec(path);
        });

        if (!route) {
            return;
        }

        var matches = route.regexp.exec(path);
        const args = matches.slice(1);
        route.fn(...args);
    }
}
