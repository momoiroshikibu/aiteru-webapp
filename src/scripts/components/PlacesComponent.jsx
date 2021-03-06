import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import TabComponent from './TabComponent.jsx';
import NavigationUtil from '../utils/NavigationUtil.es';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButtonComponent from './FloatingActionButtonComponent.jsx';
import DateFormatter from '../utils/DateFormatter.es';

const styles = {
    statusIcon: {
        height: '20px',
        lineHeight: '14px',
        marginTop: '14px',
        minHeight: '20px',
        width: '20px'
    },
    ago: {
        color: '#bbb',
        fontSize: '12pt',
        marginTop: '16px',
        textAlign: 'right',
        width: '200px'
    },
    listItem: (isOpen) => {
        return {
            fontSize: '20pt',
            color: (isOpen)? '#888' : '#ccc'
        }
    }
};

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
            const rightIcon = (<div style={styles.ago}>{DateFormatter.formatTimeAgo(place.status.updatedAt)}</div>);

            const isOpen = place.status.isOpen;
            const statusIcon = (isOpen)
                             ? (<div style={styles.statusIcon} className="status open"></div>)
                             : (<div style={styles.statusIcon} className="status closed"></div>);
            return (
                <ListItem key={placeId}
                          className="place"
                          leftIcon={statusIcon}
                          rightIcon={rightIcon}
                          innerDivStyle={styles.listItem(isOpen)}
                          primaryText={place.name}
                          onClick={() => { NavigationUtil.emit(`/places/${placeId}`); }}
                />
            );
        });
        return (
            <div className="places-component">
                <TabComponent />
                <List>
                    {placeLinks}
                </List>
                <FloatingActionButtonComponent path="/places/new" />
            </div>
        );
    }

}
