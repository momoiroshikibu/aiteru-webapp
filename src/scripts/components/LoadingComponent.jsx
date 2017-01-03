import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default function LoadingComponent() {
    return (
        <div className="loading">
            <CircularProgress size={80} thickness={5} />
        </div>
    );
}
