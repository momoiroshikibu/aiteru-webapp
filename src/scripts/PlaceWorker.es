import {EventEmitter} from 'events';
import Worker from './Worker.es';
import PlaceService from './PlaceService.es';

export default class PlaceWorker extends Worker {

    constructor(placeId) {
        super();
        this.placeId = placeId;
    }

    async work() {
        try {
            const place = await PlaceService(this.placeId);
            if (place){
                this.succeed(place);
            } else {
                this.fail('Place Not Found', this.placeId);
            }
        } catch(e) {
            this.fail(e);
        }
    }
}
