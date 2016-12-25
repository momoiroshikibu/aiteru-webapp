import pathToRegexp from 'path-to-regexp';

import {EventEmitter} from 'events';

class Router extends EventEmitter {

    constructor() {
        super();
//         this.routes = [];
    }

//     add(pattern, fn) {
//         this.routes.push({
//             regexp: pathToRegexp(`#${pattern}`),
//             fn: fn
//         });
//         return this;
//     }

}

export default new Router();
