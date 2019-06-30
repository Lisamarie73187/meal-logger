import moment from 'moment';

export class FormatUtils {
    static localizeDateFormat(date: Date) {
        // todo fix this
        return date.toLocaleDateString();
    }

    static localizePrettyDateFormat(date: Date) {
        // todo fix this
        return moment(date).format('MMMM Do, YYYY');
    }
}
