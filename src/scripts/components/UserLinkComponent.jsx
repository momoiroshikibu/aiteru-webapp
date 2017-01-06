import React from 'react';

/**
 * UserLinkComponent
 * @param {object} props -
 * @param {string} props.userId - User ID
 * @param {string} props.userName - User Name
 * @returns {ReactComponent} ReactComponent
 */
export default function UserLinkComponent(props) {
    const href = `#/users/${props.userId}`;
    return (
        <a href={href}>{props.userName || props.userId}</a>
    );
}

UserLinkComponent.propTypes = {
    userId: React.PropTypes.string,
    userName: React.PropTypes.string
};
