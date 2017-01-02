import Presenter from './Presenter.es';
import PlaceRepository from './repositories/PlaceRepository.es';
import PlacesComponent from './PlacesComponent.jsx';

export default class PlacesComponentPresenter extends Presenter {

    constructor(params) {
        super(PlacesComponent);
        this.params = params;
        this.places = [];
        this.on('update', this.run);
    }

    getPlaces() {
        return this.places;
    }

    updateParams(params) {
        this.params = params;
        this.emit('update');
    }

    async run() {
        try {
            const places = await PlaceRepository.fetchPlaces(this.params);
            this.places = places;
            this.emitChange();
        } catch(e) {
            console.error(e);
        }
    }

}
