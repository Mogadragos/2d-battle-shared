import { Worker } from "worker_threads";
import { GameData } from "./game/GameData";

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;

    // Technical
    ready: (playerA: boolean) => void;
    close: () => void;

    // Game
    update: (data: GameData) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
    spawn: () => void;
}

export interface InterServerEvents {}

export interface SocketData {
    worker?: Worker;
}
