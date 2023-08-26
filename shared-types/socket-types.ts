import { Worker } from "worker_threads";

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;

    // Technical
    close: () => void;

    // Game
}

export interface ClientToServerEvents {
    hello: () => void;
}

export interface InterServerEvents {}

export interface SocketData {
    worker?: Worker;
}
