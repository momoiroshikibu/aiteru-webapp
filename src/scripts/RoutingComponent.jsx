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
        this.router.on('change',   ::this.onChangeRoute);
        this.router.on('notfound', ::this.onNotFound);
    }

    onChangeRoute(path) {
        this.setState(this.router.getCurrentComponent());
    }

    onNotFound(path) {
        this.setState({
            component: NotFoundComponent,
            args: path
        });
    }

    render() {
        const component = this.state.component;
        if (!component) {
            return false;
        }

        const element = (component.prototype.render)
                      ? React.createElement(component, {
                          args: this.state.args,
                          params: this.state.params
                      })
                      : component(this.state.args);
        return (
            <div>
                {element}
            </div>
        );
    }
}
