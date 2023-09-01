import { Entity } from "./Entity";
import { Player, PlayerEnum } from "./Player";

export type Game = {
    entities: Entity[];
    players: {
        [PlayerEnum.PLAYER_A]: Player;
        [PlayerEnum.PLAYER_B]: Player;
    };
};
