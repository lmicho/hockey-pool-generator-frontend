import { Component, OnInit, Input } from '@angular/core';
import { LogosService } from 'src/app/shared/services/logos.service';
import { GameItem } from 'src/app/shared/interfaces/game-item.interface'
@Component({
  selector: 'game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})

export class GameItemComponent implements OnInit {

  public game: GameItem
  @Input() data: Object

  constructor(private _logosService: LogosService) { }

  ngOnInit() {
    this.game = <GameItem>{
      homeTeam: this.data["homeTeam"]["Abbreviation"],
      awayTeam: this.data["awayTeam"]["Abbreviation"],
      homeTeamLogo: this._logosService.getLogoPath(this.data["homeTeam"]["Abbreviation"]),
      awayTeamLogo: this._logosService.getLogoPath(this.data["awayTeam"]["Abbreviation"]),
      time: this.data["time"],
      location: this.data["location"].substring(0, 10)
    }
  }

}


