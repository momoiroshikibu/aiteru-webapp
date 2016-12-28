import {EventEmitter} from 'events';
import Worker from './Worker.es';
import PlaceRepository from './PlaceRepository.es';

export default class PlacesWorker extends Worker {

    constructor(placeId) {
        super();
        this.placeId = placeId;
    }

    async work() {
        try {
            const places = await PlaceRepository.fetchPlaces();
            this.succeed(places);
        } catch(e) {
            this.fail(e);
        }
    }
}
