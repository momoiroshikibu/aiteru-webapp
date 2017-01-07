import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleInterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';
import NagivationUtil from '../utils/TransitionUtil.es';

/**
 * TabComponent
 * @returns {ReactComponent} ReactComponent
 */
export default function TabComponent() {
    return (
        <Tabs>
            <Tab icon={<ToggleStar />} onClick={() => { NagivationUtil.emit('/places?filter=favorites'); }} />
            <Tab icon={<ToggleCheckBox />} onClick={() => { NagivationUtil.emit('/places?filter=open'); }} />
            <Tab icon={<ToggleInterminateCheckBox />} onClick={() => { NagivationUtil.emit('/places?filter=closed'); }} />
        </Tabs>
    );
}
