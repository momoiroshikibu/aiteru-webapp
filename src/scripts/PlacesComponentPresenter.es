import Presenter from './Presenter.es';
import PlaceRepository from './repositories/PlaceRepository.es';
import PlacesComponent from './PlacesComponent.jsx';

export default class PlacesComponentPresenter extends Presenter {

    constructor(params) {
        super(PlacesComponent);
        this.screenTitle = 'Places';
        this.params = params;
        this.places = [];
        this.on('update', this.fetch);
    }

    getPlaces() {
        return this.places;
    }

    updateParams(params) {
        this.params = params;
        this.emit('update');
    }

    async initialize() {
        this.fetch();
    }

    async fetch() {
        try {
            const places = await PlaceRepository.fetchPlaces(this.params);
            this.places = places;
            this.emitChange();
        } catch(e) {
            console.error(e);
        }
    }

}
