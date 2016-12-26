import React from 'react';
import RoutingComponent from './RoutingComponent.jsx';

export default function ApplicationComponent(props) {
    return (
        <div>
          <RoutingComponent router={props.router}/>
        </div>
    );
}
