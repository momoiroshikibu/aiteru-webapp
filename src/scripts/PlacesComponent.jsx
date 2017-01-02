import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import TabComponent from './TabComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';
import PlacesWorker from './PlacesWorker.es';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import {List, ListItem} from 'material-ui/List';


import {
    red200,
    lightGreen200
} from 'material-ui/styles/colors'

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
            const statusIcon = (place.status.isOpen)
                             ? (<div className="open"></div>)
                             : (<div className="closed"></div>);
            return (
                <ListItem key={placeId}
                          className="place"
                          leftIcon={statusIcon}
                          primaryText={place.name}
                          secondaryText={place.status.updatedAt}
                          onClick={() => {TransitionUtil.emit(`/places/${placeId}`)}}
                />
            );
        });
        return (
            <div className="places-component">
                <TabComponent placesWorker={this.state.worker} />
                <List>
                    {placeLinks}
                </List>
            </div>
        );
    }

}
