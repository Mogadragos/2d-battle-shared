import { PlayerEnum, PlayerConstants } from "../shared-types/game-types";

export const PLAYER_DATA: Record<PlayerEnum, PlayerConstants> = {
    [PlayerEnum.PLAYER_A]: {
        playerA: true,
        spawnX: 48,
    },
    [PlayerEnum.PLAYER_B]: {
        playerA: false,
        spawnX: 2000,
    },
};
