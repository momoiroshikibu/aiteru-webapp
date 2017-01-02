import React from 'react';
import {Component} from 'react';
import NotFoundComponent from './NotFoundComponent.jsx';

export default class RoutingComponent extends Component {

    constructor(props) {
        super();
        this.router = props.router;
        this.state = {
            component: null,
            args: null,
            params: null,
            presenter: null
        };
    }

    componentWillMount() {
        this.router.on('change',   ::this.onChangeRoute);
        this.router.on('update', ::this.onUpdateCondition);
        this.router.on('notfound', ::this.onNotFound);
    }

    onChangeRoute(path, params) {
        this.setState(this.router.getCurrentComponent());
    }

    onUpdateCondition(path, params) {
        //        this.setState(this.router.getCurrentComponent());
        this.presenter.updateParams(params);
    }

    onNotFound(path, params) {
        this.setState({
            component: NotFoundComponent,
            args: path,
            params: params
        });
    }

    render() {
        var component = this.state.component;
        if (!component) {
            return false;
        }


        if (typeof component === 'function' && component.name === '') {
//             const presenter = component({
//                 args: this.state.args,
//                 params: this.state.params
//             });
            const presenter = component(this.state.params);
            this.presenter = presenter;
            return React.createElement(presenter.getComponentClass(), {
                presenter: presenter
            });
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
