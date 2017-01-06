import Presenter from './Presenter.es';
import PlaceRepository from '../repositories/PlaceRepository.es';
import PlaceNewComponent from '../components/PlaceNewComponent.jsx';
import TransitionUtil from '../utils/TransitionUtil.es';

export default class PlaceNewPresenter extends Presenter {

    constructor() {
        super(PlaceNewComponent);
        this.screenTitle = () => { return 'New Place'; };
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

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
        this.emitChange();
    }

    async register() {
        if (!this.name) {
            this.setMessage('Place Name cannot be empty.');
            return;
        }
        const place = await PlaceRepository.addPlace({
            collaborators: this.collaborators,
            name: this.name,
            owners: this.owners
        });
        TransitionUtil.emit(`/places/${place.id}`);
    }

}
