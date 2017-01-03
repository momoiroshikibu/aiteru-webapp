import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import TabComponent from './TabComponent.jsx';
import TransitionUtil from '../utils/TransitionUtil.es';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButtonComponent from './FloatingActionButtonComponent.jsx';

export default class PlacesComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    render() {
        if (!this.state) {
            return false;
        }
        const placeLinks = this.state.presenter.getPlaces().map((place) => {
            const placeId = place.id;
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
                <TabComponent />
                <List>
                    {placeLinks}
                </List>
                <FloatingActionButtonComponent path='/places/new' />
            </div>
        );
    }

}
