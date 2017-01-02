import Fetcher from './Fetcher.es';

export default class PlaceRepository {

    static async fetchPlaces(queryParams) {
        try {
            const response = await Fetcher.get('/api/v1/places', queryParams);
            return response.places;
        } catch (e) {
            return undefined;
        }
    }

    static async fetchPlace(placeId) {
        try {
            const response = await Fetcher.get(`/api/v1/places/${placeId}`);
            return response.place;
        } catch (e) {
            return undefined;
        }
    }

    static async addPlace({name, owners, collaborators}) {
        try {
            return await Fetcher.post(`/api/v1/places`, {
                name: name,
                owners: owners || [],
                collaborators: collaborators || []
            });
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

