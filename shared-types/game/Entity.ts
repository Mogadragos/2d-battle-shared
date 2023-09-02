import { AnimEnum } from "./Anim";

export enum EntityEnum {
    ONE_SHORT = 1,
    ONE_LONG,
    ONE_TANK,

    TWO_SHORT,
    TWO_LONG,
    TWO_TANK,

    THREE_SHORT,
    THREE_LONG,
    THREE_TANK,

    FOUR_SHORT,
    FOUR_LONG,
    FOUR_TANK,

    FIVE_SHORT,
    FIVE_LONG,
    FIVE_TANK,
    FIVE_SPECIAL,
}

export type EntityConstants = {
    name: string;

    cost: number;
    buildTime: number;
    gain: number;

    maxHp: number;
    width: number;
    range: number;
    attack: number;
    attackTime: number;
    speed: number;
};

export type Entity = {
    id: number;
    alive: boolean;

    playerA: boolean;
    x: number;
    speed: number;
    type: EntityEnum;
    anim: AnimEnum;
};
