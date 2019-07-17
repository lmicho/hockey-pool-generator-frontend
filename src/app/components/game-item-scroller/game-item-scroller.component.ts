import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-item-scroller',
  templateUrl: './game-item-scroller.component.html',
  styleUrls: ['./game-item-scroller.component.scss']
})
export class GameItemScrollerComponent implements OnInit {

  private games: Object[]

  constructor() { }

  ngOnInit() {

    //dummy data
    this.games = [
      {
        id: "46299",
        scheduleStatus: "Normal",
        originalDate: null,
        originalTime: null,
        delayedOrPostponedReason: null,
        date: "2018-10-03",
        time: "7:00PM",
        awayTeam: {
          ID: "14",
          City: "Montreal",
          Name: "Canadiens",
          Abbreviation: "MTL"
        },
        homeTeam: {
          ID: "12",
          City: "Toronto",
          Name: "Maple Leafs",
          Abbreviation: "TOR"
        },
        location: "Scotiabank Arena"
      },
      {
        id: "46300",
        scheduleStatus: "Normal",
        originalDate: null,
        originalTime: null,
        delayedOrPostponedReason: null,
        date: "2018-10-03",
        time: "7:30PM",
        awayTeam: {
          ID: "11",
          City: "Boston",
          Name: "Bruins",
          Abbreviation: "BOS"
        },
        homeTeam: {
          ID: "5",
          City: "Washington",
          Name: "Capitals",
          Abbreviation: "WSH"
        },
        location: "Capital One Arena"
      }
    ]
  }

}