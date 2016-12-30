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
                <p className="message">
                    {this.state.message}
                </p>
                <table className="place-attributes">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{place.id}</td>
                        </tr>
                        <tr>
                            <th>ownerIds</th>
                            <td>{ownerElements}</td>
                        </tr>
                        <tr>
                            <th>collaboratorIds</th>
                            <td>{collaboratorElements}</td>
                        </tr>
                        <tr>
                            <th>createdAt</th>
                            <td>{place.createdAt}</td>
                        </tr>
                        <tr>
                            <th>createdUserId</th>
                            <td><UserLinkComponent userId={place.createdUserId} /></td>
                        </tr>
                        <tr>
                            <th>updatedAt</th>
                            <td>{place.updatedAt}</td>
                        </tr>
                        <tr>
                            <th>updatedUserId</th>
                            <td>{place.updatedUserId}</td>
                        </tr>
                        <tr>
                            <th>statusUpdatedUserId</th>
                            <td><UserLinkComponent userId={place.statusUpdatedUserId} /></td>
                        </tr>
                        <tr>
                            <th>statusUpdatedAt</th>
                            <td>{place.statusUpdatedAt}</td>
                        </tr>
                    </tbody>
                </table>
                {this.renderToggleButton(place.id, place.isOpen)}
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
//        <button type="button" onClick={toggleStatus}>Toggle Status</button>
        /* <Toggle
         * label="Open"
         * />
         */
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Toggle label="Open"
                        toggled={isOpen}
                        onToggle={toggleStatus}/>

            </MuiThemeProvider>
        );
    }

    renderFailure(e) {
        return (<p>{e}</p>);
    }

}
