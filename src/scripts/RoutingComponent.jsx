import React from 'react';
import {Component} from 'react';
import Router from './Router.js';

export default class RoutingComponent extends Component {

    constructor() {
        super();
        this.state = {
            component: null,
            args: null
        };
    }

    componentWillMount() {
        Router.on('change', this.onChangeRoute.bind(this));
    }

    onChangeRoute(path) {
        console.log('onChangeRoute', path);
        this.setState(Router.getCurrentComponent());
    }

    render() {
        if (!this.state.component) {
            return (<p>Routing: Nothing to show.</p>)
        }

        return (
            <p>
                {this.state.component}
                {this.state.args}
            </p>
        );
    }
}
