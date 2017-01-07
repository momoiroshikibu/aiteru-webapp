export default class NavigationUtil {
    static emit(path) {
        window.location.hash = `#${path}`;
    }
}
