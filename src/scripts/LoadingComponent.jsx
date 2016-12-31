import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

export default function LoadingComponent() {
    return (
        <div className="loading">
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <CircularProgress size={80} thickness={5} />
            </MuiThemeProvider>
        </div>
    );
}
