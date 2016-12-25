import hello from './hello';
import Router from './scripts/Router.js';

hello();


const router = new Router();
router.add('/places/:id', function(placeId) {
    console.log('places', placeId);
});

window.addEventListener('DOMContentLoaded', function() {
    router.resolve(window.location.hash);
});
