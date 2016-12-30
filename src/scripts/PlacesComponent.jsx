import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlacesWorker from './PlacesWorker.es';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {List, ListItem} from 'material-ui/List';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TabComponent from './TabComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';


export default class PlacesComponent extends WorkerComponent {

    constructor(props) {
        super(PlacesWorker);
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
                <TabComponent />
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <List>
                        {placeLinks}
                    </List>
                </MuiThemeProvider>
            </div>
        );
    }

}
