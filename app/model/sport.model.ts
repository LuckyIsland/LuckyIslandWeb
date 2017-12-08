import { League } from "./league.model";
import { Country } from "./country.model";

export class Sport {
    Id: number;
    Name: string;
    Countries: Country[] = [];
    IsOpen: boolean;
    EventCount : number;
}