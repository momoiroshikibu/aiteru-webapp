import React from 'react';
import {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import TransitionUtil from './utils/TransitionUtil.es';

export default class AppBarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        }
    }

    openDrawer() {
        this.setState({
            openDrawer: true
        });
    }

    closeDrawer() {
        this.setState({
            openDrawer: false
        });
    }

    navigate(path) {
        TransitionUtil.emit(path);
        this.closeDrawer();
    }

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <AppBar
                        title="Aiteru?"
                        iconElementLeft="navigation-menu"
                        iconElementLeft={<IconButton><MenuIcon onTouchTap={::this.openDrawer}/></IconButton>}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Drawer open={this.state.openDrawer}
                            docked={false}
                            onRequestChange={::this.closeDrawer}>
                        <Subheader inset={true}>Menus</Subheader>
                        <MenuItem primaryText="places" onTouchTap={() => {::this.navigate('/places')}}/>
                        <MenuItem primaryText="users" onTouchTap={() => {::this.navigate('/users')}}/>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}
