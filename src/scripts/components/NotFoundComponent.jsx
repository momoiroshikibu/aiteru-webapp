import React from 'react';

/**
 * NotFoundComponent
 * @param {String} path - path
 * @returns {ReactComponent} ReactComponent
 */
export default function NotFoundComponent() {
    return (
        <div style={{
            marginTop: '20px',
            textAlign: 'center'
        }}>
            <h1>Not Found</h1>
            <p>
                The page you requested was not found.
            </p>
            <p>
                You can find places <a href="#/places">here</a>.
            </p>
        </div>
    );
}
