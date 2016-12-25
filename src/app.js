import hello from './hello';
import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';

hello();


const router = new Router();
router.add('/places/:id', function(placeId) {
    console.log('places', placeId);
});

window.addEventListener('DOMContentLoaded', function() {
    router.resolve(window.location.hash);
});

ReactDOM.render(<ApplicationComponent />, document.getElementById('container'));
