import { AgeEnum } from "./Age";
import { BuildEnum } from "./Build";
import { Entity } from "./Entity";

export enum PlayerEnum {
    PLAYER_A = 1,
    PLAYER_B,
}

export type PlayerConstants = {
    playerA: boolean;
    spawnX: number;
};

export type Player = {
    player: PlayerEnum;

    age: AgeEnum;
    xp: number;
    gold: number;

    buildTime: number;
    buildStatus: BuildEnum;

    entities: Entity[];
};
