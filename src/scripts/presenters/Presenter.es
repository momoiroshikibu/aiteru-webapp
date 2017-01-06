import {EventEmitter} from 'events';
import EventBus from '../utils/EventBus.es';

export default class Presenter extends EventEmitter {

    constructor(Component) {
        super();
        this.componentClass = Component;
        this.version = 1;
    }

    getScreenTitle() {
        const screenTitle = this.screenTitle;
        return (typeof screenTitle === 'function')
            ? screenTitle()
            : screenTitle;
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
        this.version = this.version + 1;
        this.emit('change', this);
    }

    updateParams() {
        // Do nothing
    }

    ready() {
        if (this.initialize) {
            this.initialize();
        }

        setTimeout(() => {
            EventBus.emit('change:application:title', this.getScreenTitle());
        }, 0);
    }
}
