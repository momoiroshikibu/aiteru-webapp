import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import LoginPresenter from './scripts/LoginPresenter.es';
import PlaceNewPresenter from './scripts/PlaceNewPresenter.es';
import PlacePresenter from './scripts/PlacePresenter.es';
import PlacesPresenter from './scripts/PlacesPresenter.es';

import UsersPresenter from './scripts/UsersPresenter.es';
import UserPresenter from './scripts/UserPresenter.es';
import UserNewPresenter from './scripts/UserNewPresenter.es';

import EventBus from './scripts/utils/EventBus.es';
import TransitionUtil from './scripts/utils/TransitionUtil.es';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



const router = new Router();

router.add('/login', () => { return new LoginPresenter(); });

router.add('/places', ({queryParams}) => { return new PlacesPresenter(queryParams); });
router.add('/places/new', () => { return new PlaceNewPresenter(); });
router.add('/places/:placeId', ({pathParams}) => { return new PlacePresenter(pathParams.placeId); });

router.add('/users', () => { return new UsersPresenter(); });
router.add('/users/new', () => { return new UserNewPresenter(); });
router.add('/users/:userId', ({pathParams}) => { return new UserPresenter(pathParams.userId); });

const resolveLocationHash = () => router.resolve(window.location.hash);
window.addEventListener('DOMContentLoaded', resolveLocationHash);
window.addEventListener('hashchange', resolveLocationHash);
EventBus.on('Fetcher:Authentication:Failed', () => {
    TransitionUtil.emit('/login');
    EventBus.emit('change:application:message', 'Access authentication expired. Please login again.');
});

ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
