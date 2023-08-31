import { AgeEnum } from "./AgeEnum";
import { AnimEnum } from "./AnimEnum";
import { TypeEnum } from "./TypeEnum";

export type EntityData = {
    id: number;
    alive: boolean;

    playerA: boolean;
    x: number;
    type: TypeEnum;
    anim: AnimEnum;
};

export const AGE_TYPE: Record<AgeEnum, TypeEnum[]> = {
    [AgeEnum.ONE]: [TypeEnum.ONE_SHORT, TypeEnum.ONE_LONG, TypeEnum.ONE_TANK],
    [AgeEnum.TWO]: [TypeEnum.TWO_SHORT, TypeEnum.TWO_LONG, TypeEnum.TWO_TANK],
    [AgeEnum.THREE]: [
        TypeEnum.THREE_SHORT,
        TypeEnum.THREE_LONG,
        TypeEnum.THREE_TANK,
    ],
    [AgeEnum.FOUR]: [
        TypeEnum.FOUR_SHORT,
        TypeEnum.FOUR_LONG,
        TypeEnum.FOUR_TANK,
    ],
    [AgeEnum.FIVE]: [
        TypeEnum.FIVE_SHORT,
        TypeEnum.FIVE_LONG,
        TypeEnum.FIVE_TANK,
        TypeEnum.FIVE_SPECIAL,
    ],
};
