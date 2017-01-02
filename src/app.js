import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import LoginComponent from './scripts/LoginComponent.jsx';
import PlaceComponent from './scripts/PlaceComponent.jsx';
import PlaceNewPresenter from './scripts/PlaceNewPresenter.es';
import PlacePresenter from './scripts/PlacePresenter.es';
import PlacesComponent from './scripts/PlacesComponent.jsx';
import UserComponent from './scripts/UserComponent.jsx';
import UsersComponent from './scripts/UsersComponent.jsx';
import UserNewComponent from './scripts/UserNewComponent.jsx';
import UserPresenter from './scripts/UserPresenter.es';

import EventBus from './scripts/utils/EventBus.es';
import TransitionUtil from './scripts/utils/TransitionUtil.es';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import PlacesComponentPresenter from './scripts/PlacesComponentPresenter.es';

const router = new Router();

router.add('/login', LoginComponent);

router.add('/places', ({queryParams}) => {
    return new PlacesComponentPresenter(queryParams);
});
router.add('/places/new', () => {
    return new PlaceNewPresenter();
});

router.add('/places/:placeId', ({pathParams}) => {
    return new PlacePresenter(pathParams.placeId);
});

router.add('/users', UsersComponent);
router.add('/users/new', UserNewComponent);
router.add('/users/:userId', ({pathParams}) => {
    return new UserPresenter(pathParams.userId);
});


const resolveLocationHash = () => router.resolve(window.location.hash);
window.addEventListener('DOMContentLoaded', resolveLocationHash);
window.addEventListener('hashchange', resolveLocationHash);
EventBus.on('Fetcher:Authentication:Failed', () => {
    TransitionUtil.emit('/login');
    EventBus.emit('change:application:message', 'Access authentication expired. Please login again.');
});

ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
