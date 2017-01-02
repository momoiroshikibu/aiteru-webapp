import {EventEmitter} from 'events';
import PlaceRepository from './repositories/PlaceRepository.es';
import PlacesComponent from './PlacesComponent.jsx';
export default class PlacesComponentPresenter extends EventEmitter {

    constructor(
//        args, 
        params) {
        super();
//        this.args = args;
        this.params = params;
        this.places = [];
        this.componentClass = PlacesComponent;

        this.version = 1;

        this.on('update', this.run);
    }

    getPlaces() {
        return this.places;
    }

    getComponentClass() {
        return this.componentClass;
    }

    getVersion() {
        return this.version;
    }

    hasUpdates(version) {
        return (this.version > version);
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

    emitChange() {
        this.version++;
        this.emit('change', this);
    }
}
