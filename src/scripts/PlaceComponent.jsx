import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlaceWorker from './PlaceWorker.es';
import PlaceRepository from './repositories/PlaceRepository.es';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';



export default class PlaceComponent extends WorkerComponent {

    constructor(props) {
        super(PlaceWorker, props.args);
    }

    renderSuccess(place) {
        const ownerElements = (place.ownerIds || []).map((id) => <UserLinkComponent key={id} userId={id} />);
        const collaboratorElements = (place.collaboratorIds || []).map((id) => <UserLinkComponent key={id} userId={id} />);

        const openStatus = (place.isOpen)? "OPEN" : "CLOSED";

        return (
            <div className="place">
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
                            <div className="attribute-content">{place.statusUpdatedUserId}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Status Updated At</div>
                            <div className="attribute-content">{place.statusUpdatedAt}</div>
                        </div>
                        <div className="attribute">
                            <div className="attribute-label">Status</div>
                            <div className="attribute-content">{this.renderToggleButton(place.id, place.isOpen)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderToggleButton(placeId, isOpen) {
        const self = this;
        const toggleStatus = (event, newStatus) => {
            PlaceRepository.updatePlaceStatus(placeId, newStatus).then(() => {
                self.state.worker.rework();
            });
        };
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Toggle toggled={isOpen}
                        onToggle={toggleStatus}/>
            </MuiThemeProvider>
        );
    }

    renderFailure(e) {
        return (<p>{e}</p>);
    }

}
