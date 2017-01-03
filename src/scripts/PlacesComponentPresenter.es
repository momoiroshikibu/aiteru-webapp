import Presenter from './Presenter.es';
import PlaceRepository from './repositories/PlaceRepository.es';
import PlacesComponent from './PlacesComponent.jsx';

export default class PlacesComponentPresenter extends Presenter {

    constructor(queryParams) {
        super(PlacesComponent);
        this.screenTitle = 'Places';
        this.queryParams = queryParams;
        this.places = [];
        this.on('update', this.fetch);
    }

    getPlaces() {
        return this.places;
    }

    updateParams({queryParams}) {
        this.queryParams = queryParams;
        this.emit('update');
    }

    async initialize() {
        this.fetch();
    }

    async fetch() {
        try {
            const places = await PlaceRepository.fetchPlaces(this.queryParams);
            this.places = places;
            this.emitChange();
        } catch(e) {
            console.error(e);
        }
    }

}
