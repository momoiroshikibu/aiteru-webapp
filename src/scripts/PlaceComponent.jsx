import React from 'react';
import {Component} from 'react';

export default class PlaceComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            placeId: props.args[0],
            place: null
        };
    }


    componentWillMount() {
        const self = this;
        fetch(`/api/v1/places/${this.state.placeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authorization') // TODO
            },
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((place) => {
            self.setState({
                place: place
            });
        }).catch((error) => {
            self.setState({
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
                        <td>{place.ownerIds}</td>
                    </tr>
                    <tr>
                        <th>collaboratorIds</th>
                        <td>{place.collaboratorIds}</td>
                    </tr>
                    <tr>
                        <th>createdAt</th>
                        <td>{place.createdAt}</td>
                    </tr>
                    <tr>
                        <th>createdUserId</th>
                        <td>{place.createdUserId}</td>
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
