import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import TabComponent from './TabComponent.jsx';
import TransitionUtil from '../utils/TransitionUtil.es';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButtonComponent from './FloatingActionButtonComponent.jsx';
import DateFormatter from '../utils/DateFormatter.es';

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
            const statusIconStyle = {
                height: '20px',
                width: '20px',
                marginTop: '14px',
                minHeight: '20px',
                lineHeight: '14px'
            };

            const rightIconStyle = {
                width: '200px',
                marginTop: '16px',
                color: '#bbb',
                textAlign: 'right',
                fontSize: '12pt'
            };

            const ago = DateFormatter.formatTimeAgo(place.status.updatedAt);
            const rightIcon = (<div style={rightIconStyle}>{ago}</div>);

            const statusIcon = (place.status.isOpen)
                             ? (<div style={statusIconStyle} className="open"></div>)
                             : (<div style={statusIconStyle} className="closed"></div>);
            return (
                <ListItem key={placeId}
                          className="place"
                          leftIcon={statusIcon}
                          rightIcon={rightIcon}
                          innerDivStyle={{fontSize: '20pt'}}
                          primaryText={place.name}
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
