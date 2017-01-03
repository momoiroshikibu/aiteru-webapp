import React from 'react';
import {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';

import TransitionUtil from '../utils/TransitionUtil.es';
import EventBus from '../utils/EventBus.es';

export default class AppBarComponent extends Component {

    constructor(props) {
        super(props);
        /* this.router = props.router;*/
        this.state = {
            openDrawer: false,
            title: null
        }
    }

    componentWillReceiveProps({title}) {
        this.setState({
            title: title
        });
    }

    componentWillMount() {
        EventBus.on('change:application:title', ::this.onChangeTitle);
    }

    onChangeTitle(title) {
        this.setState({
            title: title
        });
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
                <AppBar
                    title={this.state.title}
                    titleStyle={{
                        textAlign: 'center',
                        marginLeft: '-40px',
                        fontWeight: 'bold'
                    }}
                    iconElementLeft="navigation-menu"
                    iconElementLeft={<IconButton><MenuIcon onTouchTap={::this.openDrawer}/></IconButton>}
                />

                <Drawer open={this.state.openDrawer}
                        docked={false}
                        onRequestChange={::this.closeDrawer}>
                    <Subheader inset={true}>Places</Subheader>
                    <MenuItem primaryText="show places" onTouchTap={() => {::this.navigate('/places')}} />
                    <MenuItem primaryText="add new place" onTouchTap={() => {::this.navigate('/places/new')}} />
                    <Subheader inset={true}>Users</Subheader>
                    <MenuItem primaryText="show users" onTouchTap={() => {::this.navigate('/users')}} />
                    <MenuItem primaryText="add new user" onTouchTap={() => {::this.navigate('/users/new')}} />
                </Drawer>

            </div>
        )
    }
}
