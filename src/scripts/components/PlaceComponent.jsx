import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import LoadingComponent from './LoadingComponent.jsx';
import Toggle from 'material-ui/Toggle';
import DateFormatter from '../utils/DateFormatter.es';

export default class PlaceComponent extends PresenterComponent {

    constructor({presenter}) {
        super(presenter);
    }

    render() {

        const presenter = super.getPresenter();
        const place = presenter.getPlace();
        if (!place) {
            return (<LoadingComponent />);
        }

        const openStatus = (place.status.isOpen)
              ? 'OPEN'
              : 'CLOSED';

        return (
            <div className="place-component">
                <h1 className="place-name">{place.name}</h1>
                <h2 className={`place-is-open ${openStatus}`}>{openStatus}</h2>

                <div style={{
                    fontSize: '24pt',
                    marginTop: '20px'
                }}>
                    {DateFormatter.formatTimeAgo(place.status.updatedAt)}
                </div>

                <div style={{
                    fontSize: '16pt',
                    marginTop: '48px'
                }}>
                    {place.status.updatedAt}
                </div>

                <div style={{fontSize: '16pt'}}>
                    {presenter.getStatusUpdatedUser().name}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px'
                }}>
                    <div style={{fontSize: '14pt'}}>switch status to {(place.status.isOpen)
                                                                    ? 'close'
                                                                    : 'open'}</div>
                    <div>
                        {this.renderToggleButton(place.id, place.status.isOpen)}
                    </div>
                </div>

            </div>
        );
    }

    renderToggleButton(placeId, isOpen) {
        const toggleStatus = (event, newStatus) => {
            this.getPresenter().updateStatus(newStatus);
        };
        return (
            <Toggle toggled={isOpen}
                    style={{width: 'auto'}}
                    onToggle={toggleStatus}/>
        );
    }

}
