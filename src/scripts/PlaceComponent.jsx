import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlaceWorker from './PlaceWorker.es';

export default class PlaceComponent extends WorkerComponent {

    constructor(props) {
        super(PlaceWorker, props.args[0]);
    }

    renderSuccess(place) {
        const ownerElements = (place.ownerIds || []).map((id) => <UserLinkComponent key={id} userId={id} />);
        const collaboratorElements = (place.collaboratorIds || []).map((id) => <UserLinkComponent key={id} userId={id} />);

        return (
            <div className="place">
                <h1 className="place-name">{place.name}</h1>
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
                    </tbody>
                </table>
            </div>
        );
    }

    renderFailure(e) {
        return (<p>{e}</p>);
    }

}
