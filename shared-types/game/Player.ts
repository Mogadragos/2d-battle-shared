import { AgeEnum } from "./Age";
import { BuildEnum } from "./Build";

export enum PlayerEnum {
    PLAYER_A = 1,
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

    buildPercent: number;
    buildStatus: BuildEnum;
};
