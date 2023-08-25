export type Callback = { (data: any): void; once?: boolean };

export class Event {
    name: string;
    callbacks: Array<Callback>;

    constructor(name: string) {
        this.name = name;
        this.callbacks = [];
    }

    registerCallback(callback: Callback, once?: boolean) {
        if (once) callback.once = true;
        this.callbacks.push(callback);
    }

    cleanOnce() {
        this.callbacks = this.callbacks.filter((callback) => !callback.once);
    }

    flushCallbacks() {
        this.callbacks = [];
    }
}
