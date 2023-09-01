import { AgeEnum, EntityEnum } from "../shared-types/game-types";

export const AGE_TYPE: Record<AgeEnum, EntityEnum[]> = {
    [AgeEnum.ONE]: [
        EntityEnum.ONE_SHORT,
        EntityEnum.ONE_LONG,
        EntityEnum.ONE_TANK,
    ],
    [AgeEnum.TWO]: [
        EntityEnum.TWO_SHORT,
        EntityEnum.TWO_LONG,
        EntityEnum.TWO_TANK,
    ],
    [AgeEnum.THREE]: [
        EntityEnum.THREE_SHORT,
        EntityEnum.THREE_LONG,
        EntityEnum.THREE_TANK,
    ],
    [AgeEnum.FOUR]: [
        EntityEnum.FOUR_SHORT,
        EntityEnum.FOUR_LONG,
        EntityEnum.FOUR_TANK,
    ],
    [AgeEnum.FIVE]: [
        EntityEnum.FIVE_SHORT,
        EntityEnum.FIVE_LONG,
        EntityEnum.FIVE_TANK,
        EntityEnum.FIVE_SPECIAL,
    ],
};
