import { Component, OnInit } from '@angular/core';
import { SportService } from '../../service/sport.service';
import { Event } from '../../model/event.model';
import { BetTypeGroup } from '../../model/bettypegroup.model';
import { BetType } from '../../model/bettype.model';
import { Odd } from '../../model/odd.model';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.less']
})

export class EventComponent implements OnInit {
	sportName: string;
	countryName: string;
	events: Event[];
	betTypeGroups: BetTypeGroup [];
	///delete
	betTypeGroup: BetTypeGroup;
	eventId: number;


	constructor(private sportService: SportService) {
		/// Delete
		sportService.setBetTypeGroupIds("116");
		sportService.setLeagueIds("33593");
		sportService.getOddsByEvent(0, "tree").subscribe();
		///

		sportService.events$.subscribe(data => {
			if (data.Message === "tree") {


				this.sportName = data.Data.Name;
				data.Data.Countries.forEach(c => {
					this.countryName = c.Name;
					c.Leagues.forEach(l => {
						this.events = l.Events;
						this.events.forEach(ev => {
							ev.BetTypes.forEach(bt => {
								bt.Odds = bt.Odds.slice(0, 3);
							});
						});
					});
				});
			}
			if (data.Message === "additionalOdds") {
				data.Data.Countries.forEach(c => {
					c.Leagues.forEach(l => {
						//this.betTypeGroups = l.BetTypeGroups
						l.Events.forEach(ev => {

							let event = this.events.find(e => e.Id === this.eventId);
							event.BetTypeGroups = ev.BetTypeGroups;
							event.BetTypeGroups.forEach(btg =>{
								btg.BetTypes.forEach(bt => {
									for(let i = 0; i < bt.Odds.length; i++){
										bt.Odds[i].Column = i % 3;
									}
								})
							})
							
						})
					})
				})
			}
		});

	}

	ngOnInit(): void {
	}

	getAdditionalOdds(event: Event) {
		event.IsShowAdditionalOdds = !event.IsShowAdditionalOdds;
		if (event.IsShowAdditionalOdds && !event.BetTypeGroups) {
			this.eventId = event.Id;
			this.sportService.setBetTypeGroupIds(null);
			this.sportService.setLeagueIds(null);
			this.sportService.setEventIds(event.Id.toString());
			this.sportService.getOddsByEvent(0, "additionalOdds").subscribe();
		}
	}

}