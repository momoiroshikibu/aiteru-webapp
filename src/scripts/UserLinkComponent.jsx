import React from 'react';

export default function UserLinkComponent(props) {
    const href = `#/users/${props.userId}`;
    return (
        <a href={href}>{props.userId}</a>
    );
}
