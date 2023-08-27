import { SoldierType } from "./SoldierType";

export type SoldierData = {
    id: string;
    x: number;
    type: SoldierType;
    playerA: boolean;
};

export type GameData = {
    soldiers: SoldierData[];
};
