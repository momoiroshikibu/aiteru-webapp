import React from 'react';
import PresenterComponent from './PresenterComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import LoadingComponent from './LoadingComponent.jsx';
import Toggle from 'material-ui/Toggle';

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

        const ownerElements = (place.ownerIds || []).map((id) => <UserLinkComponent key={id} userId={id} />);
        const collaboratorElements = (place.collaboratorIds || []).map((id) => <UserLinkComponent key={id} userId={id} />);

        const openStatus = (place.status.isOpen)? 'OPEN' : 'CLOSED';

        return (
            <div className="place-component">
                <h1 className="place-name">{place.name}</h1>
                <h2 className={"place-is-open " + openStatus}>{openStatus}</h2>
                <div className="place-info">
                    <div className="attribute-section">
                        <div className="attribute">
                            <div className="attribute-label">ID</div>
                            <div className="attribute-content">{place.id}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Owners</div>
                            <div className="attribute-content">{ownerElements}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Collaborators</div>
                            <div className="attribute-content">{collaboratorElements}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Created At</div>
                            <div className="attribute-content">{place.createdAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Created User ID</div>
                            <div className="attribute-content">{place.createdUserId}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Updated At</div>
                            <div className="attribute-content">{place.updatedAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Updated User ID</div>
                            <div className="attribute-content">{place.updatedUserId}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Status Updated User ID</div>
                            <div className="attribute-content">{place.status.updatedUserId}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Status Updated At</div>
                            <div className="attribute-content">{place.status.updatedAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Status</div>
                            <div className="attribute-content">{this.renderToggleButton(place.id, place.status.isOpen)}</div>
                        </div>
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
                    onToggle={toggleStatus}/>
        );
    }

}
