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

    static async fetchPlaceWithStatus(placeId) {
        try {
            const willGetPlace = Promise.all([
                fetch(`/api/v1/places/${placeId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('authorization') // TODO
                    },
                    method: 'GET'
                }),
                fetch(`/api/v1/places/${placeId}/status`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('authorization') // TODO
                    },
                    method: 'GET'
                })]
            );
            const responses = await willGetPlace;
            const place  = await responses[0].json();
            const status = await responses[1].json();
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
            const response = fetch(`/api/v1/places/${placeId}/status`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authorization') // TODO
                },
                method: 'POST',
                body: JSON.stringify({
                    isOpen: status
                })
            });
            const json = response.json();
            return json.isOpen;
        } catch(e) {
            return undefined;
        }
    }

}

