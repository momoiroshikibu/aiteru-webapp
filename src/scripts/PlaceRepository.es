export default class PlaceRepository {

    static async fetchPlaces() {
        try {
            const response = await fetch(`/api/v1/places`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authorization') // TODO
                },
                method: 'GET'
            });
            return await response.json() || [];
        } catch (e) {
            return undefined;
        }
    }

    static async fetchPlace(placeId) {
        try {
            const response = await fetch(`/api/v1/places/${placeId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authorization') // TODO
                },
                method: 'GET'
            });
            return await response.json();
        } catch (e) {
            return undefined;
        }
    }

}

