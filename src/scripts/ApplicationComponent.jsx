import React from 'react';
import RoutingComponent from './RoutingComponent.jsx';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function ApplicationComponent(props) {
    return (
        <div>
            <MuiThemeProvider>
                <AppBar
                    title="Aiteru?"
                    iconElementLeft={
                        <IconMenu
                         iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                            <MenuItem primaryText="places" onTouchTap={() => {
                                    window.location.hash ="#/places"
                                }}/>
                            <MenuItem primaryText="places/1" onTouchTap={() => {
                                    window.location.hash ="#/places/1"
                                }}/>

                        </IconMenu>
                                    }
                />
            </MuiThemeProvider>
            <RoutingComponent router={props.router}/>
        </div>
    );
}
