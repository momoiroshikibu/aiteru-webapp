import {EventEmitter} from 'events';

export default class Presenter extends EventEmitter {

    constructor(Component) {
        super();
        this.componentClass = Component;
        this.version = 1;
    }

    getComponentClass() {
        return this.componentClass;
    }

    getVersion() {
        return this.version;
    }

    hasUpdates(version) {
        return (this.version > version);
    }

    emitChange() {
        this.version++;
        this.emit('change', this);
    }

    async run() {
        // should be overrided
    }
}
