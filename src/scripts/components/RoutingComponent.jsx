import React, {Component} from 'react';

export default class RoutingComponent extends Component {

    constructor(props) {
        super();
        this.router = props.router;
        this.state = {
            component: null,
            pathParams: null,
            presenter: null,
            queryParams: null
        };
    }

    componentWillMount() {
        this.router.on('change', ::this.onChangeRoute);
        this.router.on('update', ::this.onUpdateCondition);
        this.router.on('notfound', ::this.onChangeRoute);
    }

    onChangeRoute() {
        const router = this.router;
        this.setState({
            component: router.getCurrentComponent(),
            pathParams: router.getCurrentPathParams(),
            queryParams: router.getCurrentQueryParams()
        });
    }

    onUpdateCondition() {
        const router = this.router;
        this.presenter.updateParams({
            pathParams: router.getCurrentPathParams(),
            queryParams: router.getCurrentQueryParams()
        });
    }

    onNotFound(path, queryParams) {
        const router = this.router;
        this.setState({
            component: router.getCurrentComponent(),
            pathParams: router.getCurrentPathParams(),
            queryParams: router.getCurrentQueryParams()
        });
    }

    render() {
        const component = this.state.component;
        if (!component) {
            return false;
        }

        if (typeof component === 'function' && component.name === '') {
            const presenter = component({
                pathParams: this.state.pathParams,
                queryParams: this.state.queryParams
            });
            this.presenter = presenter;
            return React.createElement(presenter.getComponentClass(), {presenter});
        }

        const element = (component.prototype.render)
                      ? React.createElement(component, {
                          pathParams: this.state.pathParams,
                          queryParams: this.state.queryParams
                      })
                      : component({
                          pathParams: this.state.pathParams,
                          queryParams: this.state.queryParams
                      });
        return (
            <div>
                {element}
            </div>
        );
    }
}

RoutingComponent.propTypes = {router: React.PropTypes.object};
