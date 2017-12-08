import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Subject } from "rxjs/Subject";

import { Sport } from "../model/sport.model";

@Injectable()
export class SportService {
    private stringUrl: string = 'http://qworrellapi-001-site1.htempurl.com/BettingHandler.ashx';
    // private stringUrl: string = 'http://localhost:24970/BettingHandler.ashx';
    private languageCode: string;
    private duration: number;
    private day: Date;
    private bias: number;
    private betTypeGroupTemplateId: number;
    private eventIds: string;
    private leagueIds: string;
    private betTypeGroupIds: string;
    private type: number;

    private events = new Subject<{Message: string, Data: Sport}>();
    public events$ = this.events.asObservable();

    setLanguageCode(lcode: string) {
        this.languageCode = lcode;
    }

    setBetTypeGroupIds(betTypeGroupIds: string) {
        this.betTypeGroupIds = betTypeGroupIds;
    }

    setLeagueIds(leagueIds: string) {
        this.leagueIds = leagueIds;
    }

    setEventIds(eventIds: string) {
        this.eventIds = eventIds;
    }

    constructor(private http: Http) {}

    getSportTree(): any {
        let body = JSON.stringify({GetSportsTreeBySport: {
            LanguageCode: this.languageCode,
            Duration: this.duration,
            Day: this.day,
            Bias: this.bias,
            BetTypeGroupTemplateId: this.betTypeGroupTemplateId
        }});

        return this.http.post(this.stringUrl, body)
                        .map(resp => {
                            console.log(resp.json().SportsTree.Sports);
                            return resp.json().SportsTree.Sports;
                        })
                        .catch((error) => Observable.throw(error))
    }

    getOddsByEvent(type: number, origin: string): any {
        let body = JSON.stringify({GetEventOdds: {
            LanguageCode: this.languageCode,
            Duration: this.duration,
            Day: this.day,
            Bias: this.bias,
            EventIds: this.eventIds,
            LeagueIds: this.leagueIds,
            BetTypeGroupIds: this.betTypeGroupIds,
            Type: type
        }});

        return this.http.post(this.stringUrl, body)
                        .map(resp => {
                            console.log(resp.json().EventOdds);
                            return this.events.next({Message: origin, Data: resp.json().EventOdds});
                        })
                        .catch((error) => Observable.throw(error))
    }
}