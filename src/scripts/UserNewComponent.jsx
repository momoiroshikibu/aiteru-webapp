import React from 'react';
import ActorComponent from './ActorComponent.jsx';
import UserNewActor from './UserNewActor.es';
import UserLinkComponent from './UserLinkComponent.jsx'

export default class UserNewComponent extends ActorComponent {

    constructor(props) {
        super(UserNewActor, props.args, {
            renderers: {
//                initialized: Renderer.initialized,
                success: Renderer.success
            }
        });
        super.emitEvent('initialized');
    }

    [`@initialized`] (actor, event, result) {
        return (
            <div>
                <div>{this.state.message}</div>
                <form onSubmit={::this.register}>
                    <label>User Name</label>
                    <input type="text" name="userName" />
                    <button>Register</button>
                </form>
            </div>
        )
    }

    [`@register:validationError`] (actor, event, result) {
        return (
            <div>
                <p>{JSON.stringify(result)}</p>
                <form onSubmit={::this.register}>
                    <label>User Name</label>
                    <input type="text" name="userName" />
                    <button>Register</button>
                </form>
            </div>
        )
    }

    [`@register:success`] (actor, event, user) {
        return (
            <div>
                <p>User Created</p>
                <UserLinkComponent userId={user.id} userName={user.name} />
            </div>
        )
    }

    register(e) {
        e.preventDefault();
        super.getActor().register(e.target.userName.value);
    }

}

class Renderer {

    static success() {
        return (<h1>SUCCESS!!!</h1>)
    }

}

