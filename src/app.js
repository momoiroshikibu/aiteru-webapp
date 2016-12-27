import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import RoutingComponent from './scripts/RoutingComponent.jsx';
import LoginComponent from './scripts/LoginComponent.jsx';
import PlaceComponent from './scripts/PlaceComponent.jsx';
import UserComponent from './scripts/UserComponent.jsx';
import PlaceWorker from './scripts/PlaceWorker.es';

const router = new Router();

router.add('/places/:placeId', PlaceComponent, PlaceWorker);
router.add('/users/:userId', UserComponent);
router.add('/login', LoginComponent);

window.addEventListener('DOMContentLoaded', () => {
    router.resolve(window.location.hash);
});

window.addEventListener('hashchange', () => {
    router.resolve(window.location.hash);
});


ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
