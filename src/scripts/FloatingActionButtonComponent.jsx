import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TransitionUtil from './utils/TransitionUtil.es';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: '20px',
    right: 0
};

export default function FloatingActionButtonComponent({path}) {
    return (
        <FloatingActionButton
            style={style}
            onTouchTap={() => {TransitionUtil.emit(path)}}>
            <ContentAdd />
        </FloatingActionButton>
    )
}
