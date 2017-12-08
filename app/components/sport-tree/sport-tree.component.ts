import { Component, OnInit } from '@angular/core';
import { Sport } from '../../model/sport.model';
import { Country } from '../../model/country.model';
import { SportService } from '../../service/sport.service';

@Component({
  selector: 'app-sport-tree',
  templateUrl: './sport-tree.component.html',
  styleUrls: ['./sport-tree.component.less']
})
export class SportTreeComponent implements OnInit {
    sports: Sport[];
    
    constructor(private sportService: SportService) {
        this.sports = [];
        sportService.getSportTree().subscribe(sports => {
            this.sports = sports;
        });
    }

    ngOnInit(): void {
    }

    getEventOdds(leagueId: number, betTypeGroupId :number) {
        this.sportService.setBetTypeGroupIds(betTypeGroupId.toString());
        this.sportService.setLeagueIds(leagueId.toString());
        this.sportService.setEventIds(null);
        this.sportService.getOddsByEvent(0, "tree").subscribe();
    }
}