import { BetTypeGroup } from "./bettypegroup.model";
import { Event } from "./event.model";

export class League {
    Id: number;
    Name: string;
    IsOpen: boolean;
    BetTypeGroups: BetTypeGroup[];
    Events: Event[];

    constructor(name : string) {
        this.Name = name;
    }
}