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

    gotoPlacePage() {
        console.log('gotoPlacePage');
        TransitionUtil.emit('/places/1');
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
                          onClick={this.gotoPlacePage}
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
