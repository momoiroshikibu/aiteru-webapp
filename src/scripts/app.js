import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router.js';
import ApplicationComponent from './components/ApplicationComponent.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';

import LoginPresenter from './presenters/LoginPresenter.es';
import PlaceNewPresenter from './presenters/PlaceNewPresenter.es';
import PlacePresenter from './presenters/PlacePresenter.es';
import PlacesPresenter from './presenters/PlacesPresenter.es';

import UsersPresenter from './presenters/UsersPresenter.es';
import UserPresenter from './presenters/UserPresenter.es';
import UserNewPresenter from './presenters/UserNewPresenter.es';
import UserEditPresenter from './presenters/UserEditPresenter.es';

import EventBus from './utils/EventBus.es';
import NavigationUtil from './utils/NavigationUtil.es';

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
router.add('/users/:userId/edit', ({pathParams}) => { return new UserEditPresenter(pathParams.userId); });
router.setNotFoundComopnent(NotFoundComponent);


const resolveLocationHash = () => router.resolve(window.location.hash);
window.addEventListener('DOMContentLoaded', resolveLocationHash);
window.addEventListener('hashchange', resolveLocationHash);
EventBus.on('Fetcher:Authentication:Failed', () => {
    NavigationUtil.emit('/login');
    EventBus.emit('change:application:message', 'Access authentication expired. Please login again.');
});

ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
