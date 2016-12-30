import React from 'react';
import AppBar from 'material-ui/AppBar';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TransitionUtil from './utils/TransitionUtil.es';

export default function AppBarComponent(props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppBar
                title="Aiteru?"
                iconElementLeft={
                    <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                        <MenuItem primaryText="places" onTouchTap={() => {TransitionUtil.emit('/places');}}/>
                        <MenuItem primaryText="users" onTouchTap={() => {TransitionUtil.emit('/users');}}/>
                    </IconMenu>
                                }
            />
        </MuiThemeProvider>
    )
}
