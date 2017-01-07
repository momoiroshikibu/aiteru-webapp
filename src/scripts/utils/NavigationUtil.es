export default class NagivationUtil {
    static emit(path) {
        window.location.hash = `#${path}`;
    }
}
