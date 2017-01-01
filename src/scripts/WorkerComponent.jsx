import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';
import EventBus from './utils/EventBus.es';

export default class WorkerComponent extends Component {

    constructor(workerClass, args, options = {}) {
        super();
        this.workerClass = workerClass;
        this.renderers = options.renderers || {};
        this.initialize(args);
    }

    componentWillReceiveProps(args) {
        this.initialize(args);
    }

    initialize(args) {
        if (!this.state) {
            const worker = new this.workerClass(args);
            this.state = {
                worker: worker,
                status: worker.getStatus()
            };
            worker.on('change', ::this.onChangeWorkerStatus);
            setTimeout(() => {
                this.state.worker.start();
            }, 0);
        } else {
            // reuse
            this.state.worker.updateArgs(args.args);
            this.state.worker.updateParams(args.params);
            setTimeout(() => {
                this.state.worker.work();
            }, 0);
        }
    }

    onChangeWorkerStatus() {
        this.setState({
            status: this.state.worker.getStatus()
        });
    }

    getTitle() {
        // should be overrided
        return null;
    }

    emitTitleChange(title) {
        setTimeout(() => {
            EventBus.emit('change:application:title', title);
        }, 0);
    }


    [`renderNotStarted`]() {return false;}
    [`renderPending`]() {return false;}
    [`renderSuccess`]() {return false;}
    [`renderFailure`]() {return false;}

    render() {
        const worker = this.state.worker;
        const status = worker.getStatus();

        const renderer = this.renderers[status];
        if (renderer) {
            return renderer(worker.getResult());
        }

        // change title
        this.emitTitleChange(this.getTitle());

        // compatible
        switch(status) {
        case 'notstarted':
            return this.renderNotStarted();
        case 'pending':
            return this.renderPending();
        case 'success':
            return this.renderSuccess(worker.getResult());
        case 'failure':
            return this.renderFailure(worker.getFailure());
        default:
            return (<h1>Unknown Status: {status}</h1>);
        }
    }

}
