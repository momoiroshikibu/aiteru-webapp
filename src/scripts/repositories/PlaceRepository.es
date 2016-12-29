import Fetcher from './Fetcher.es';

export default class PlaceRepository {

    static async fetchPlaces() {
        try {
            return await Fetcher.get('/api/v1/places');
        } catch (e) {
            return undefined;
        }
    }

    static async fetchPlace(placeId) {
        try {
            return await Fetcher.get(`/api/v1/places/${placeId}`);
        } catch (e) {
            return undefined;
        }
    }

    static async fetchPlaceStatus(placeId) {
        try {
            return await Fetcher.get(`/api/v1/places/${placeId}/status`);
        } catch (e) {
            return undefined;
        }
    }

    static async fetchPlaceWithStatus(placeId) {
        try {
            const [place, status] = await Promise.all([
                PlaceRepository.fetchPlace(placeId),
                PlaceRepository.fetchPlaceStatus(placeId)
            ]);
            place.isOpen = status.isOpen;
            place.statusUpdatedUserId = status.updatedUserId;
            place.statusUpdatedAt = status.updatedAt;
            return place;
        } catch (e) {
            return undefined;
        }
    }

    static async updatePlaceStatus(placeId, status) {
        try {
            return await Fetcher.post(`/api/v1/places/${placeId}/status`, {
                isOpen: status
            });
        } catch (e) {
            return undefined;
        }
    }

}

