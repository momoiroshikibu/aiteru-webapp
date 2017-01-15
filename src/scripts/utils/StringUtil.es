export default class StringUtil {

    static padZero(value, length) {
        function iterate(str, currentLength) {
            if (length === currentLength) {
                return str;
            }
            return iterate('0' + str, currentLength + 1);
        }
        return iterate(value, String(value).length);
    }

}
