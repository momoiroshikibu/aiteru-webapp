import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

/**
 * LoadingComponent
 * @returns {ReactComponent} ReactComponent
 */
export default function LoadingComponent() {
    return (
        <div className="loading">
            <CircularProgress size={80} thickness={5} />
        </div>
    );
}
