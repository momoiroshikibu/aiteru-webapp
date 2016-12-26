export default function hello() {
    console.log('hello');
    fetch('/api/v1/places', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '08ad9d34-fc4f-43eb-8756-afa519c13949'
        }
    }).then((response) => {
        return response.json();
    }).then((places) => {
        console.log(places);
    });
}
