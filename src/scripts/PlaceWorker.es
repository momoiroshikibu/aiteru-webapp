import {EventEmitter} from 'events';
import Worker from './Worker.es';
import PlaceRepository from './repositories/PlaceRepository.es';

export default class PlaceWorker extends Worker {

    constructor(props) {
        super();
        this.placeId = props.placeId;
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
