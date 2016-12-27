import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlaceService from './PlaceService.es';

export default class PlaceComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            worker: props.worker,
            status: props.worker.getStatus()
        };
    }


    componentWillMount() {
        this.state.worker.on('change', () => {
            this.setState({
                status: this.state.worker.getStatus()
            });
        });
        this.state.worker.start();
    }

    render() {

        const statusElement = (
            <div>
                {this.state.status}
            </div>
        );

        const place = this.state.worker.getResult() || {};
        const ownerElements = (place.ownerIds || []).map((id) => <UserLinkComponent userId={id} />);
        const collaboratorElements = (place.collaboratorIds || []).map((id) => <UserLinkComponent userId={id} />);

        return (
            <div className="place">
                <div>{statusElement}</div>
                <h1 className="place-name">{place.name}</h1>
                <p className="message">
                    {this.state.message}
                </p>
                <table className="place-attributes">
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
                </table>
            </div>
        );
    }

}
