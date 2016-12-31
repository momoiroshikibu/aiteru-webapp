import {EventEmitter} from 'events';
import Worker from './Worker.es';
import PlaceRepository from './repositories/PlaceRepository.es';

export default class PlacesWorker extends Worker {

    constructor({args, params}) {
        super();
        this.args = args;
        this.params = params;
    }

    async work() {
        try {
            const places = await PlaceRepository.fetchPlaces(this.params);
            this.succeed(places);
        } catch(e) {
            this.fail(e);
        }
    }
}
