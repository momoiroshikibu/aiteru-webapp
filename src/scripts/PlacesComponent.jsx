import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import TabComponent from './TabComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';
import PlacesWorker from './PlacesWorker.es';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {List, ListItem} from 'material-ui/List';


export default class PlacesComponent extends WorkerComponent {

    constructor(props) {
        super(PlacesWorker, props);
    }

    getTitle() {
        return 'Places';
    }

    renderSuccess(places) {
        const placeLinks = places.map((place) => {
            const placeId = place.id;
            const href = `#/places/${placeId}`;
            return (
                <ListItem key={placeId}
                          rightIcon={<ActionInfo />}
                          primaryText={place.name}
                          secondaryText={place.id}
                          onClick={() => {TransitionUtil.emit(`/places/${placeId}`)}}
                />
            );
        });
        return (
            <div>
                <TabComponent placesWorker={this.state.worker} />
                <List>
                    {placeLinks}
                </List>
            </div>
        );
    }

}
