import Presenter from './Presenter.es';
import PlaceRepository from './repositories/PlaceRepository.es';
import PlaceComponent from './PlaceComponent.jsx';

export default class PlacePresenter extends Presenter {

    constructor(placeId) {
        super(PlaceComponent);
        this.screenTitle = 'Places';
        this.placeId = placeId || 1;
        this.place = null;
    }

    getPlace() {
        return this.place;
    }

    async initialize() {
        this.fetch();
    }

    async fetch() {
        try {
            const place = await PlaceRepository.fetchPlace(this.placeId);
            this.place = place;
            this.emitChange();
        } catch(e) {
            console.error(e);
        }
    }

}
