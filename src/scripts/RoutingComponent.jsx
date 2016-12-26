import React from 'react';
import {Component} from 'react';

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
    }

    onChangeRoute(path) {
        this.setState(this.router.getCurrentComponent());
    }

    render() {
        if (!this.state.component) {
            return (<p>Routing: Nothing to show.</p>)
        }

        return (
            <div>
                <h1>RoutingComponent</h1>
                <div>
                    <p>
                        component: {this.state.component.name}
                    </p>
                    <p>
                        args: {this.state.args}
                    </p>
                    <p>
                        {this.state.component.name}({this.state.args})
                    </p>
                    <p>
                        {this.state.component(...this.state.args)}
                    </p>
                </div>
            </div>
        );
    }
}
