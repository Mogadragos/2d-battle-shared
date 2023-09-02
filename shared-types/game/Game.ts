import { Player, PlayerEnum } from "./Player";

export type Game = {
    [PlayerEnum.PLAYER_A]: Player;
    [PlayerEnum.PLAYER_B]: Player;
};
