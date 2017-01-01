import React from 'react';
import ActorComponent from './ActorComponent.jsx';
import UserNewActor from './UserNewActor.es';
import UserLinkComponent from './UserLinkComponent.jsx';
import TransitionUtil from './utils/TransitionUtil.es';
import EventBus from './utils/EventBus.es';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserNewComponent extends ActorComponent {

    constructor(props) {
        super(UserNewActor, props.args, {
            renderers: {
                success: Renderer.success
            }
        });
        setTimeout(() => {
            this.setState({
                userName: ''
            });
        }, 0);
        super.emitEvent('initialized');
    }

    [`@initialized`] (actor, event, result) {
        return (
            <div className="user-new-component">
                <h1>New User</h1>
                <p className="message">
                    {this.state.message}
                </p>
                <form onSubmit={this.attempt}>
                    <div>
                        <TextField
                            hintText="User Name"
                            floatingLabelText="User Name"
                            value={this.state.userName}
                            onChange={::this.updateUserName}
                        />
                    </div>
                    <div>
                        <RaisedButton className="user-create-button"
                                      label="Create"
                                      primary={true}
                                      onClick={::this.register}
                        />
                    </div>
                </form>
            </div>
        );
    }

    [`@register:validationError`] (actor, event, result) {
        return (
            <div>
                <p>{JSON.stringify(result)}</p>
                {::this[`@initialized`](actor, event, result)}
            </div>
        );
    }

    [`@register:success`] (actor, event, user) {
        return (
            <div>
                <p>User Created</p>
                <UserLinkComponent userId={user.id} userName={user.name} />
            </div>
        );
    }

    updateUserName(event, newValue) {
        this.setState({
            userName: newValue
        });
    }

    register(e) {
        e.preventDefault();
        this.getActor().register(this.state.userName).then((user) => {
            TransitionUtil.emit(`/users/${user.id}`);
            EventBus.emit('change:application:message', 'Uesr Created');
        });
    }

}

class Renderer {

    static success() {
        return (<h1>SUCCESS!!!</h1>);
    }

}

