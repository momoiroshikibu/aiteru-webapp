import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import RoutingComponent from './scripts/RoutingComponent.jsx';
import LoginComponent from './scripts/LoginComponent.jsx';
import PlaceComponent from './scripts/PlaceComponent.jsx';
import PlacesComponent from './scripts/PlacesComponent.jsx';
import UserComponent from './scripts/UserComponent.jsx';
import UsersComponent from './scripts/UsersComponent.jsx';

const router = new Router();

router.add('/places', PlacesComponent);
router.add('/places/:placeId', PlaceComponent);
router.add('/users', UsersComponent);
router.add('/users/:userId', UserComponent);
router.add('/login', LoginComponent);

window.addEventListener('DOMContentLoaded', () => {
    router.resolve(window.location.hash);
});

window.addEventListener('hashchange', () => {
    router.resolve(window.location.hash);
});


ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
