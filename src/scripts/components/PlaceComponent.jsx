import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import LoadingComponent from './LoadingComponent.jsx';
import Toggle from 'material-ui/Toggle';
import DateFormatter from '../utils/DateFormatter.es';

const styles = {
    ago: {
        fontSize: '24pt',
        marginTop: '20px'
    },
    updatedAt: {
        fontSize: '16pt',
        marginTop: '48px'
    },
    updatedBy: {
        fontSize: '16pt'
    },
    toggle: {
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
        },
        label: {
            fontSize: '14pt'
        },
        control: {
            width: 'auto'
        }
    }
};

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
                <h2 className={`status ${openStatus}`}>{openStatus}</h2>

                <div style={styles.ago}>
                    {DateFormatter.formatTimeAgo(place.status.updatedAt)}
                </div>

                <div style={styles.updatedAt}>
                    {place.status.updatedAt}
                </div>

                <div style={styles.updatedBy}>
                    {presenter.getStatusUpdatedUser().name}
                </div>
                <div style={styles.toggle.wrapper}>
                    <div style={styles.toggle.label}>
                        switch status to {openStatus.toLowerCase()}
                    </div>
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
                    style={styles.toggle.control}
                    onToggle={toggleStatus}/>
        );
    }

}
