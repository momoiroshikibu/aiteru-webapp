import {Component} from 'react';

export default class PresenterComponent extends Component {

    constructor(presenter) {
        super();
        this.initialize(presenter);
    }

    initialize(presenter) {
        presenter.ready();
        presenter.on('change', ::this.onChangePresenter);
        this.state = {
            presenter: presenter,
            version: presenter.getVersion()
        };
    }

    onChangePresenter(presenter) {
        if (!presenter.hasUpdates(this.state.version)) {
            return;
        }
        this.setState({
            presenter: presenter,
            version: presenter.getVersion()
        });
    }

    getPresenter() {
        return this.state.presenter;
    }

}
