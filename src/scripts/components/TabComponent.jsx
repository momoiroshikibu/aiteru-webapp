import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleInterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';
import NavigationUtil from '../utils/NavigationUtil.es';

/**
 * TabComponent
 * @returns {ReactComponent} ReactComponent
 */
export default function TabComponent() {
    return (
        <Tabs>
            <Tab icon={<ToggleStar />} onClick={() => { NavigationUtil.emit('/places?filter=favorites'); }} />
            <Tab icon={<ToggleCheckBox />} onClick={() => { NavigationUtil.emit('/places?isOpen=true'); }} />
            <Tab icon={<ToggleInterminateCheckBox />} onClick={() => { NavigationUtil.emit('/places?isOpen=false'); }} />
        </Tabs>
    );
}
