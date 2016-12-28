import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlaceService from './PlaceService.es';
import PlaceWorker from './PlaceWorker.es';

export default class PlaceComponent extends Component {

    constructor(props) {
        super();
        const worker = new PlaceWorker(props.args[0]);
        this.state = {
            worker: worker,
            status: worker.getStatus()
        };
//        this.listenWorkerStatus();
        worker.on('change', ::this.onChangeWorkerStatus);
        worker.start();
    }

    onChangeWorkerStatus() {
        this.setState({
            status: this.state.worker.getStatus()
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('wilReceiveProps', nextProps);
        const newWorker = new PlaceWorker(nextProps.args[0]);
        this.setState({
            worker: newWorker,
            status: newWorker.getStatus()
        });
        newWorker.on('change', ::this.onChangeWorkerStatus);
        newWorker.start();
    }

    render() {

        const worker = this.state.worker;
        if (['notstarted', 'pending'].indexOf(this.state.worker.getStatus()) > -1) {
            return (
                <h1>fetching...</h1>
            )
        };

        const place = worker.getResult();
        if (!place) {
            return (<h1>Not Found</h1>);
        }

        const ownerElements = (place.ownerIds || []).map((id) => <UserLinkComponent userId={id} />);
        const collaboratorElements = (place.collaboratorIds || []).map((id) => <UserLinkComponent userId={id} />);

        return (
            <div className="place">
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
