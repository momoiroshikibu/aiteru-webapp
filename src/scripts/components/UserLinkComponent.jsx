import React from 'react';

/**
 * UserLinkComponent
 * @returns {ReactComponent} ReactComponent
 */
export default function UserLinkComponent(props) {
    const href = `#/users/${props.userId}`;
    return (
        <a href={href}>{props.userName || props.userId}</a>
    );
}
