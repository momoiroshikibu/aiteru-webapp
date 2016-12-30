import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import LoginComponent from './scripts/LoginComponent.jsx';
import PlaceComponent from './scripts/PlaceComponent.jsx';
import PlacesComponent from './scripts/PlacesComponent.jsx';
import UserComponent from './scripts/UserComponent.jsx';
import UsersComponent from './scripts/UsersComponent.jsx';
import UserNewComponent from './scripts/UserNewComponent.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router = new Router();

router.add('/login', LoginComponent);

router.add('/places', PlacesComponent);
router.add('/places/:placeId', PlaceComponent);

router.add('/users', UsersComponent);
router.add('/users/new', UserNewComponent);
router.add('/users/:userId', UserComponent);


const resolveLocationHash = () => router.resolve(window.location.hash);
window.addEventListener('DOMContentLoaded', resolveLocationHash);
window.addEventListener('hashchange', resolveLocationHash);

ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
