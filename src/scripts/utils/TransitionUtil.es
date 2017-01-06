export default class TransitionUtil {
    static emit(path) {
        window.location.hash = `#${path}`;
    }
}
