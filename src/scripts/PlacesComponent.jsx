import React from 'react';
//import WorkerComponent from './WorkerComponent.jsx';
import {Component} from 'react';
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

export default class PlacesComponent extends Component {

    constructor({presenter}) {
        super();
        this.initialize(presenter);
    }

    /* componentWillMount() {
     *     console.log('compoentWillMount');
     *     this.state.presenter.run();
     * }*/

    // Since presenter instances are reused. This event won't work.
    /* componentWillReceiveProps({presenter}) {
     *     if (!presenter) {
     *         presenter = presenter.presenter;
     *     }
     *     this.initialize(presenter);
     * }
     */

    initialize(presenter) {
        presenter.run();
        presenter.on('change', ::this.onChangePresenter);
        this.state = {
            presenter: presenter,
            version: presenter.getVersion()
        }
    }

    onChangePresenter(presenter) {
        if (!presenter.hasUpdates(this.state.version)) {
            return;
        }
        this.setState({
            presenter: presenter,
            version: presenter.getVersion()
        });
    }

    render() {
        if (!this.state) {
            return false;
        }
        const placeLinks = this.state.presenter.getPlaces().map((place) => {
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
                <TabComponent />
                <List>
                    {placeLinks}
                </List>
            </div>
        );
    }

}
