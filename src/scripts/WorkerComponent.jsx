import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';

export default class WorkerComponent extends Component {

    constructor(workerClass, args, options = {}) {
        super();
        this.workerClass = workerClass;
        this.renderers = options.renderers || {};
        this.initialize(args);
    }

    componentWillReceiveProps({args}) {
        this.initialize(args);
    }

    initialize(args) {
        const worker = new this.workerClass(args);
        this.state = {
            worker: worker,
            status: worker.getStatus()
        };

        worker.on('change', ::this.onChangeWorkerStatus);
        setTimeout(() => {
            worker.start();
        }, 0);
    }

    onChangeWorkerStatus() {
        this.setState({
            status: this.state.worker.getStatus()
        });
    }

    render() {
        const worker = this.state.worker;
        const status = worker.getStatus();
        const renderer = this.renderers[status];
        if (renderer) {
            return renderer(worker.getResult());
        }

        return (<h1>Unknown Status: {status}</h1>);
    }

}
