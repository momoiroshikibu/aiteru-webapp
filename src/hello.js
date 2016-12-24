module.exports = function hello() {
    console.log('hello');
    fetch('/api/v1/places/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'b095a504-1dba-45c4-844b-9955c3435265'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(places) {
        console.log(places);
    });
}
