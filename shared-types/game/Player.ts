import { AgeEnum } from "./Age";

export enum PlayerEnum {
    PLAYER_A,
    PLAYER_B,
}

export type PlayerConstants = {
    playerA: boolean;
    spawnX: number;
};

export type Player = {
    playerA: PlayerEnum;
    ready: boolean;

    age: AgeEnum;
    xp: number;
    gold: number;
};
