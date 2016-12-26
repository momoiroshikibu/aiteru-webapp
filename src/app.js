import hello from './hello';
import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import RoutingComponent from './scripts/RoutingComponent.jsx';

hello();


// const router = new Router();
Router.add('/places/:id', function(placeId) {
    console.log('places', placeId);
});


window.addEventListener('DOMContentLoaded', function() {
    Router.resolve(window.location.hash);
//     Router.emit('change', window.location.hash);
});

window.addEventListener('hashchange', function() {
    Router.resolve(window.location.hash);
//    Router.emit('change', window.location.hash);
});


ReactDOM.render(<ApplicationComponent />, document.getElementById('application-container'));

ReactDOM.render(<RoutingComponent />, document.getElementById('routing-container'));
