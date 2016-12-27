import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import PlaceService from './PlaceService.es';

export default class PlaceComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            placeId: props.args[0],
            place: null
        };
    }


    componentWillMount() {
        PlaceService(this.state.placeId).then((place) => {
            this.setState({place});
        }).catch((error) => {
            this.setState({
                message: 'error!'
            });
        });
    }

    render() {

        if (!this.state.place) {
            return (
                <marqee>
                    fetching
                </marqee>
            );
        }

        const place = this.state.place;

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
