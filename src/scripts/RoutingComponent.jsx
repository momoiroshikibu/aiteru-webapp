import React from 'react';
import {Component} from 'react';
import NotFoundComponent from './NotFoundComponent.jsx';

export default class RoutingComponent extends Component {

    constructor(props) {
        super();
        this.router = props.router;
        this.state = {
            component: null,
            args: null
        };
    }

    componentWillMount() {
        this.router.on('change', this.onChangeRoute.bind(this));
        this.router.on('notfound', this.onNotFound.bind(this));
    }

    onChangeRoute(path) {
        this.setState(this.router.getCurrentComponent());
    }

    onNotFound(path) {
        this.setState({
            component: NotFoundComponent,
            args: path
        })
    }

    render() {
        if (!this.state.component) {
            return (<p>Routing: Nothing to show.</p>)
        }

        return (
            <div>
                {this.state.component(this.state.args)}
            </div>
        );
    }
}
