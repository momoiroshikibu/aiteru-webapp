import Timeago from 'timeago.js';

export default class DateFormatter {

    static formatTimeAgo(date) {
        if (date === null || typeof date === 'undefined') {
            return '';
        }
        return new Timeago().format(new Date(date).getTime());
    }

}
