import React from 'react';
import {Component} from 'react';
import EventBus from './utils/EventBus.es';

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
        const isInitialized = !!this.state;
        if (!isInitialized) {
            const actor = new this.actorClass(args);
            actor.on('event', ::this.onActorEvent);
            this.state = {
                actor: actor,
                event: undefined,
                result: undefined
            };
        }
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

    getTitle() {
        // shoud be overrided
        return null;
    }

    emitTitleChange(title) {
        setTimeout(() => {
            EventBus.emit('change:application:title', title);
        }, 0);
    }

    render() {
        const {actor, event, result} = this.state;

        if (event === undefined) {
            return false;
        }

        const renderer = this.renderers[event] || // Stateless Function
              (() => { // Stateful Component
                  const renderer = this['@' + event];
                  if (!renderer) {
                      return undefined;
                  }
                  return renderer.bind(this);
              })();

        this.emitTitleChange(this.getTitle());

        return (renderer)
            ? renderer(actor, event, result)
            : (<h1>Unknown Event: {event}</h1>);
    }

    getActor() {
        return this.state.actor;
    }

}
