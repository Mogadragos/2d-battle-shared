import { Worker } from "worker_threads";
import { GameData } from "./game/GameData";
import { TypeEnum } from "./game/TypeEnum";

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;

    // Technical
    ready: (playerA: boolean) => void;
    launch: () => void;

    // Game
    update: (data: GameData) => void;
}

export interface ClientToServerEvents {
    hello: () => void;

    // Technical
    ready: () => void;

    // Game
    spawn: (type: TypeEnum) => void;
}

export interface InterServerEvents {}

export interface SocketData {
    worker?: Worker;
}
