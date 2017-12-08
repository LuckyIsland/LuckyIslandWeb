import {League } from "./league.model";


export class Country {
    Code: string;
    Name: string;
    EventCount: number;
    Leagues: League[] = [];
    IsOpen: boolean;

    constructor(name : string) {
        this.Name = name;
    }
}
