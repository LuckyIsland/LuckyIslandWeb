import { Odd } from "./odd.model";

export class BetType {
    Id: number;
    Column: number;
    Name: string;
    Ordering: number;
    IsMain: boolean;
    Odds: Odd[];
}