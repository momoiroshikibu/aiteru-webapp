import Presenter from './Presenter.es';
import PlaceRepository from './repositories/PlaceRepository.es';
import PlaceNewComponent from './PlaceNewComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';

export default class PlaceNewPresenter extends Presenter {

    constructor(params) {
        super(PlaceNewComponent);
        this.screenTitle = () => {return 'New Place';};
        this.name = '';
        this.owners = [];
        this.collaborators = [];
        this.message = null;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
        this.emitChange();
    }

    getOwners() {
        return this.owners;
    }

    getCollaborators() {
        return this.collaborators;
    }

    // parent
    async register() {
        try {
            const place = await PlaceRepository.addPlace({
                name: this.name,
                owners: this.owners,
                collaborators: this.collaborators
            });
            TransitionUtil.emit(`/places/${place.id}`);
        } catch(e) {
            console.error(e);
        }
    }

}
