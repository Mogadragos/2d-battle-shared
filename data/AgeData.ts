import { AgeConstants, AgeEnum, EntityEnum } from "../shared-types/game-types";

export const AGE_DATA: Record<AgeEnum, AgeConstants> = {
    [AgeEnum.ONE]: {
        entities: [
            EntityEnum.ONE_SHORT,
            EntityEnum.ONE_LONG,
            EntityEnum.ONE_TANK,
        ],
    },
    [AgeEnum.TWO]: {
        entities: [
            EntityEnum.TWO_SHORT,
            EntityEnum.TWO_LONG,
            EntityEnum.TWO_TANK,
        ],
    },
    [AgeEnum.THREE]: {
        entities: [
            EntityEnum.THREE_SHORT,
            EntityEnum.THREE_LONG,
            EntityEnum.THREE_TANK,
        ],
    },
    [AgeEnum.FOUR]: {
        entities: [
            EntityEnum.FOUR_SHORT,
            EntityEnum.FOUR_LONG,
            EntityEnum.FOUR_TANK,
        ],
    },
    [AgeEnum.FIVE]: {
        entities: [
            EntityEnum.FIVE_SHORT,
            EntityEnum.FIVE_LONG,
            EntityEnum.FIVE_TANK,
            EntityEnum.FIVE_SPECIAL,
        ],
    },
};
