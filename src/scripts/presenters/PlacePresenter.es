import Presenter from './Presenter.es';
import PlaceRepository from '../repositories/PlaceRepository.es';
import UserRepository from '../repositories/UserRepository.es';
import PlaceComponent from '../components/PlaceComponent.jsx';

export default class PlacePresenter extends Presenter {

    constructor(placeId) {
        super(PlaceComponent);
        this.screenTitle = 'Place';
        this.placeId = placeId;
        this.place = null;
        this.statusUpdatedUser = null;
    }

    getPlace() {
        return this.place;
    }

    getStatusUpdatedUser() {
        return this.statusUpdatedUser || {};
    }

    updateParams({pathParams}) {
        this.placeId = pathParams.placeId;
        this.fetch();
    }

    async initialize() {
        await this.fetch();
    }

    async fetch() {
        const place = await PlaceRepository.fetchPlace(this.placeId);
        this.place = place;

        const statusUpdatedUser = await UserRepository.fetchUser(this.place.status.updatedUserId);
        this.statusUpdatedUser = statusUpdatedUser;

        this.emitChange();
    }

    async updateStatus(newStatus) {
        await PlaceRepository.updatePlaceStatus(this.placeId, newStatus);
        await this.fetch();
    }

}
