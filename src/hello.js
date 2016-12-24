module.exports = function hello() {
    console.log('hello');
    fetch('/api/v1/places/').then(function(response) {
        console.log(response.text());
    })
}
