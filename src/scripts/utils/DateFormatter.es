import Timeago from 'timeago.js';
import StringUtil from './StringUtil.es';

const YYYY_MM_DD_HH_MM_SS = 'YYYY_MM_DD_HH_MM_SS';

export default class DateFormatter {

    static formatTimeAgo(date) {
        if (date === null || typeof date === 'undefined') {
            return '';
        }
        return new Timeago().format(new Date(date).getTime());
    }

    static format(pattern, value) {
        switch(pattern) {
        case YYYY_MM_DD_HH_MM_SS:
            return format_YYYY_MM_DD_HH_MM_SS(value);
        default:
            return '';
        }
    }

    static get YYYY_MM_DD_HH_MM_SS() {
        return YYYY_MM_DD_HH_MM_SS;
    }
}

function format_YYYY_MM_DD_HH_MM_SS(isoDateString) {
    const datetime = new Date(isoDateString);
    const year = datetime.getFullYear();
    const month = StringUtil.padZero((datetime.getMonth() + 1), 2);
    const day = StringUtil.padZero(datetime.getDate(), 2);
    const hour = StringUtil.padZero(datetime.getHours(), 2);
    const minute = StringUtil.padZero(datetime.getMinutes(), 2);
    return `${year}/${month}/${day} ${hour}:${minute}`;
}

