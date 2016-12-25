import React from 'react';
import {Component} from 'react';
import Router from './Router.js';

export default class RoutingComponent extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        Router.on('change', this.onChangeRoute.bind(this));
    }

    onChangeRoute(path) {
        console.log('onChangeRoute', path);
    }

    render() {
        return (<p>Routing Component</p>);
    }
}
