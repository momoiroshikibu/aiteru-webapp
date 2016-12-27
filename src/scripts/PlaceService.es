export default async function PlaceService(placeId) {
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
        console.error(e);
    }
}
