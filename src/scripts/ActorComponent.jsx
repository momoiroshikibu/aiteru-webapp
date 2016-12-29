import React from 'react';
import {Component} from 'react';

export default class ActorComponent extends Component {

    constructor(actorClass, args, options = {}) {
        super();
        this.actorClass = actorClass;
        this.renderers = options.renderers || {};
        this.initialize(args);
    }

    componentWillReceiveProps({args}) {
        this.initialize(args);
    }

    initialize(args) {
        const actor = new this.actorClass(args);
        actor.on('event', ::this.onActorEvent);
        this.state = {
            actor: actor,
            event: undefined,
            result: undefined
        };
    }

    onActorEvent(event, result) {
        this.setState({event, result});
    }

    // from child
    emitEvent(event, result) {
        // avoid setState error, run in next tick
        setTimeout(() => {
            this.state.actor.emitEvent(event);
        }, 0);
    }

    render() {
        const {actor, event, result} = this.state;

        if (event === undefined) {
            return false;
        }

        // Stateless Function
        let renderer = this.renderers[event];

        // Stateful Component
        if (!renderer) {
            // event 'notfound' => renderOnNotfound
            // ex) renderCapitalizedeventName
//            const rendererFunctionName = 'renderOn' + event.charAt(0).toUpperCase() + event.substring(1);
            const rendererFunctionName = '@' + event;
            renderer = this[rendererFunctionName];

            // bind context
            if (renderer) {
                renderer = renderer.bind(this);
            }
        }
        return (renderer)
            ? renderer(actor, event, result)
            : (<h1>Unknown Event: {event}</h1>);
    }

    getActor() {
        return this.state.actor;
    }

}
