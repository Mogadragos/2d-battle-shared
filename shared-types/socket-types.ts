import { Worker } from "worker_threads";
import { EntityEnum, Game } from "./game-types";

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;

    // Technical
    ready: (playerA: boolean) => void;
    launch: () => void;

    // Game
    update: (data: Game) => void;
}

export interface ClientToServerEvents {
    hello: () => void;

    // Technical
    ready: () => void;

    // Game
    spawn: (type: EntityEnum) => void;
}

export interface InterServerEvents {}

export interface SocketData {
    worker?: Worker;
}
