import timeago from 'timeago.js';

export default class DateFormatter {
    static formatTimeAgo(date) {
        if (date == null) {
            return '';
        }
        return new timeago().format(new Date(date).getTime() + (9 * 60 * 60 * 1000));
    }
}
