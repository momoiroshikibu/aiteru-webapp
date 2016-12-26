import React from 'react';
import RoutingComponent from './RoutingComponent.jsx';

export default function ApplicationComponent(props) {
    return (
        <div>
          <h1>ApplicationComponent</h1>
          <RoutingComponent router={props.router}/>
        </div>
    );
}
