import {EventEmitter} from 'events';

export default class Worker extends EventEmitter {

    constructor() {
        super();
        this.result = null;
        this.failure = null;
        this.status = 'notstarted';
    }

    start() {
        this.status = 'pending';
        this.emitChange();
        this.work();
    }

    succeed(result) {
        this.result = result;
        this.status = 'success';
        this.emitChange();
    }

    fail(failure) {
        console.error(failure);
        this.failure = failure;
        this.status = 'failure';
        this.emitChange();
    }

    rework() {
        this.work();
    }

    getResult() {
        return this.result;
    }

    getStatus() {
        return this.status;
    }

    getFailure() {
        return this.failure;
    }

    emitChange() {
        this.emit('change', this.status);
    }

    updateArgs(args) {
        // should be overrided
    }

    updateParams(params) {
        // should be overrided
    }

}
