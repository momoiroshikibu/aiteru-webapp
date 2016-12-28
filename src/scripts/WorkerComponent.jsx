import React from 'react';
import {Component} from 'react';
import UserLinkComponent from './UserLinkComponent.jsx';
import UsersWorker from './UsersWorker.es';

export default class WorkerComponent extends Component {

    constructor(workerClass, ...args) {
        super();
        this.workerClass = workerClass;
        this.initialize(args);
    }

    componentWillReceiveProps({args}) {
        this.initialize(args);
    }

    initialize(args) {
        const worker = new this.workerClass(...args);
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

    renderNotStarted() {
        return (<h1>Not Started</h1>);
    }

    renderPending() {
        return (<h1>Pending</h1>);
    }

    renderSuccess(result) {
        return (<h1>Success</h1>);
    }

    renderFailure() {
        return (<h1>Failure</h1>);
    }

    render() {
        const worker = this.state.worker;
        const status = worker.getStatus();
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
