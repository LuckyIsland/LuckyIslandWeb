import { BetType } from "./bettype.model";
import { BetTypeGroup } from "./bettypegroup.model";

export class Event {
    Id: number;
    Code: number;
    Type: number;
    Name: string;
    Date: Date;
    Interval: number;
    HomeId: number;
    GuestId: number;
    HomeName: string;
    GuestName: string;
    IsOpen: boolean;
    BetTypes: BetType[];
    BetTypeGroups: BetTypeGroup [];
    IsShowAdditionalOdds: boolean;
}