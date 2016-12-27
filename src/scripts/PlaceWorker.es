import {EventEmitter} from 'events';
import PlaceService from './PlaceService.es';

export default class PlaceWorker extends EventEmitter {

    constructor(placeId) {
        super();
        this.placeId = placeId;
        this.place = null;
        this.result = null;
        this.status = 'notstarted';
    }

    start() {
        this.status = 'pending';
        this.emitChange();
        PlaceService(this.placeId).then((place) => {
            this.result = place;
            this.succeed();
        }).catch(() => {
            this.fail();
        });
    }

    getResult() {
        return this.result;
    }

    succeed() {
        this.status = 'success';
        this.emitChange();
    }

    fail() {
        this.status = 'failure';
        this.emitChange();
    }

    getStatus() {
        return this.status;
    }

    emitChange() {
        this.emit('change', this.status);
    }

}
