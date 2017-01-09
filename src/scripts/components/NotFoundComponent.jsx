import React from 'react';

const styles = {
    wrapper: {
        marginTop: '20px',
        textAlign: 'center'
    }
};

/**
 * NotFoundComponent
 * @param {String} path - path
 * @returns {ReactComponent} ReactComponent
 */
export default function NotFoundComponent() {
    return (
        <div style={styles.wrapper}>
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
