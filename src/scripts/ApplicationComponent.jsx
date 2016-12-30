import React from 'react';
import RoutingComponent from './RoutingComponent.jsx';

import AppBarComponent from './AppBarComponent.jsx';

export default function ApplicationComponent(props) {
    return (
        <div>
            <AppBarComponent />
            <RoutingComponent router={props.router}/>
        </div>
    );
}
