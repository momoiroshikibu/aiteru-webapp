import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlacesWorker from './PlacesWorker.es';

export default class PlacesComponent extends WorkerComponent {

    constructor(props) {
        super(PlacesWorker);
    }

    renderSuccess(places) {
        const placeLinks = places.map((place) => {
            const placeId = place.id
            const href = `#/places/${placeId}`;
            return (
                <li key={placeId}>
                    <a href={href}>{place.name}</a>
                </li>
            );
        });
        return (
            <div>
                <h1>Places</h1>
                <ul>
                    {placeLinks}
                </ul>
            </div>
        )
    }

}
