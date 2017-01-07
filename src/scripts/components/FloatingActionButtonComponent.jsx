import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import NavigationUtil from '../utils/NavigationUtil.es';

const style = {
    bottom: '20px',
    marginRight: 20,
    position: 'fixed',
    right: 0
};

/**
 * FloatingActionButtonComponent
 * @returns {ReactComponent} ReactComponent
 */
export default function FloatingActionButtonComponent({path}) {
    return (
        <FloatingActionButton
            style={style}
        onTouchTap={() => { NavigationUtil.emit(path); }}>
            <ContentAdd />
        </FloatingActionButton>
    );
}

FloatingActionButtonComponent.propTypes = {path: React.PropTypes.string};
