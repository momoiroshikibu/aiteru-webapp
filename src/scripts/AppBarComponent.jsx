import React from 'react';
import {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import TransitionUtil from './utils/TransitionUtil.es';
import EventBus from './utils/EventBus.es';

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
                    iconElementLeft="navigation-menu"
                    iconElementLeft={<IconButton><MenuIcon onTouchTap={::this.openDrawer}/></IconButton>}
                />

                <Drawer open={this.state.openDrawer}
                        docked={false}
                        onRequestChange={::this.closeDrawer}>
                    <Subheader inset={true}>Menus</Subheader>
                    <MenuItem primaryText="places" onTouchTap={() => {::this.navigate('/places')}} />
                    <MenuItem primaryText="users" onTouchTap={() => {::this.navigate('/users')}} />
                    <MenuItem primaryText="add user" onTouchTap={() => {::this.navigate('/users/new')}} />
                </Drawer>

            </div>
        )
    }
}
