import { BetType } from "./bettype.model";

export class BetTypeGroup {
    Id: number;
    Name: string;
    Ordering: number;
    IsOpen: boolean;
    BetTypes: BetType [];

    constructor(name : string) {
        this.Name = name;
    }
}