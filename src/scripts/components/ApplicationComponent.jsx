import React, {Component} from 'react';
import RoutingComponent from './RoutingComponent.jsx';
import AppBarComponent from './AppBarComponent.jsx';
import EventBus from '../utils/EventBus.es';
import Snackbar from 'material-ui/Snackbar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme.es';

export default class ApplicationComponent extends Component {

    constructor(props) {
        super();
        this.router = props.router;
        this.state = {message: null};
        this.initialize();
    }

    initialize() {
        EventBus.on('change:application:message', ::this.onChangeApplicationMessage);
    }

    onChangeApplicationMessage(message) {
        this.setState({message: message});
    }

    render() {
        const message = (this.state.message)
                      ? (<Snackbar
                              open={!!this.state.message}
                              message={this.state.message}
                              autoHideDuration={3000} />)
                      : false;
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <AppBarComponent />
                    <RoutingComponent router={this.router} />
                    {message}
                </div>
            </MuiThemeProvider>
        );
    }
}
