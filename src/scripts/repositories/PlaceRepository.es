import Fetcher from './Fetcher.es';
import 'babel-polyfill';

export default class PlaceRepository {

    static getCachedPlaces() {
        const places = JSON.parse(localStorage.getItem('places')) || [];
        return places;
    }

    static async fetchPlaces(queryParams) {
        try {
            const response = await Fetcher.get('/api/v1/places', queryParams);
            const places = response.places || [];
            localStorage.setItem('places', JSON.stringify(places));
            return places;
        } catch (e) {
            return null;
        }
    }

    static async fetchPlace(placeId) {
        try {
            const response = await Fetcher.get(`/api/v1/places/${placeId}`);
            return response.place;
        } catch (e) {
            return null;
        }
    }

    static async addPlace({name, owners, collaborators}) {
        try {
            const response = await Fetcher.post('/api/v1/places', {
                collaborators: collaborators || [],
                name: name,
                owners: owners || []
            });
            return response.place;
        } catch (e) {
            return null;
        }
    }


    static async updatePlaceStatus(placeId, status) {
        try {
            return await Fetcher.post(`/api/v1/places/${placeId}/status`, {isOpen: status});
        } catch (e) {
            return null;
        }
    }

}

