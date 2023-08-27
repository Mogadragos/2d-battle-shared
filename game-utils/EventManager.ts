import { Callback, Event } from "./Event";

export class EventManager {
    local_events: Record<string, Event>;
    events: Record<string, Event>;

    constructor() {
        this.local_events = {};

        this.events = new Proxy(this.local_events, {
            get(target, prop: string, receiver) {
                if (!target[prop]) {
                    console.error(`Event '${prop}' not registered`);
                    return;
                }
                return Reflect.get(target, prop, receiver);
            },
        });
    }

    registerEvent(eventName: string) {
        const event = new Event(eventName);
        this.events[eventName] = event;
    }

    dispatchEvent(eventName: string, eventArgs?: any) {
        console.log(`Event : ${eventName}`);
        this.events[eventName]?.callbacks.forEach((callback) => {
            callback(eventArgs);
        });

        this.events[eventName]?.cleanOnce();
    }

    addEventListener(eventName: string, callback: Callback, once?: boolean) {
        this.events[eventName]?.registerCallback(callback, once);
    }

    flushEventListener(eventName: string) {
        this.events[eventName]?.flushCallbacks();
    }
}
