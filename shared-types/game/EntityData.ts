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
