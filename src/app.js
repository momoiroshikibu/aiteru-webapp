import hello from './hello';
import Router from './scripts/Router.js';

import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationComponent from './scripts/ApplicationComponent.jsx';
import RoutingComponent from './scripts/RoutingComponent.jsx';
import LoginComponent from './scripts/LoginComponent.jsx';

hello();


const router = new Router();

router.add('/places/:id', function placeIdComponent(placeId) {
    return (
        <span>
        placeId: {placeId}
        </span>
    );
});

router.add('/login', LoginComponent);

window.addEventListener('DOMContentLoaded', () => {
    router.resolve(window.location.hash);
});

window.addEventListener('hashchange', () => {
    router.resolve(window.location.hash);
});


ReactDOM.render(<ApplicationComponent router={router} />, document.getElementById('application-container'));
