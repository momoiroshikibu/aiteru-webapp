import Presenter from './Presenter.es';
import PlaceRepository from '../repositories/PlaceRepository.es';
import PlacesComponent from '../components/PlacesComponent.jsx';

export default class PlacesPresenter extends Presenter {

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
        await this.fetch();
    }

    async fetch() {
        const places = await PlaceRepository.fetchPlaces(this.queryParams);
        this.places = places;
        this.emitChange();
    }

}
