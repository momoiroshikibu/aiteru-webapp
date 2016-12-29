import {EventEmitter} from 'events';

export default class Actor extends EventEmitter {

    constructor() {
        super();
    }

    emitEvent(event, result) {
        this.emit('event', event, result);
    }
}
