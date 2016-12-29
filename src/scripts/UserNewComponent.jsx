import React from 'react';
import WorkerComponent from './WorkerComponent.jsx';
import UserRepository from './UserRepository.es';
import UserNewWorker from './UserNewWorker.es';

export default class UserNewComponent extends WorkerComponent {

    constructor(props) {
        super(UserNewWorker, props.args, {
            renderers: {
                success: Renderer.success
            }
        });
    }

    renderPending() {
        return (
            <div>
                <div>{this.state.message}</div>
                <form onSubmit={::this.register}>
                    <label>User Name</label>
                    <input type="text" name="userName"/>
                    <button>Register</button>
                </form>
            </div>
        )
    }

    register(e) {
        e.preventDefault();
        this.state.worker.register()
    }


}

class Renderer {
    static success() {
        return (<h1>YEAH!!!</h1>)
    }
}

