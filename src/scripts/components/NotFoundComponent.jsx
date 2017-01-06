import React from 'react';

/**
 * NotFoundComponent
 * @param {String} path - path
 * @returns {ReactComponent} ReactComponent
 */
export default function NotFoundComponent(path) {
    return (
        <div>
            <h1>Not Found</h1>
            <p>
                The page you requested was not found: {path}.
            </p>
        </div>
    );
}
