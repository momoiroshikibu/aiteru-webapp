import {EventEmitter} from 'events';
import Worker from './Worker.es';
import PlaceRepository from './PlaceRepository.es';

export default class PlaceWorker extends Worker {

    constructor(placeId) {
        super();
        this.placeId = placeId;
    }

    async work() {
        try {
            const place = await PlaceRepository.fetchPlaceWithStatus(this.placeId);
            if (place) {
                this.succeed(place);
            } else {
                this.fail('Place Not Found', this.placeId);
            }
        } catch(e) {
            this.fail(e);
        }
    }
}
