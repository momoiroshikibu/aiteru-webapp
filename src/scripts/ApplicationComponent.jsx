import React from 'react';
import {Component} from 'react';
import RoutingComponent from './RoutingComponent.jsx';
import AppBarComponent from './AppBarComponent.jsx';
import EventBus from './utils/EventBus.es';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';

export default class ApplicationComponent extends Component {

    constructor(props) {
        super();
        this.router = props.router;
        this.state = {
            message: null
        };
        this.initialize();
    }

    initialize() {
        EventBus.on('change:application:message', ::this.onChangeApplicationMessage);
    }

    onChangeApplicationMessage(message) {
        this.setState({
            message: message
        });
    }

    render() {
        return (
            <div>
                <AppBarComponent />
                <RoutingComponent router={this.router}/>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Snackbar
                        open={!!this.state.message}
                        message={this.state.message}
                        autoHideDuration={3000}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}
