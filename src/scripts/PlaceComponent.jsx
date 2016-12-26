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


    componentDidMount() {
        const self = this;
        console.log(this.state.placeId);
        fetch(`/api/v1/places/${this.state.placeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.accessToken // TODO
            },
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((place) => {
            console.log(place);
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

        return (
            <div>
                <p>{this.state.message}</p>
                <div>{JSON.stringify(this.state.place)}</div>
            </div>
        );
    }

}
