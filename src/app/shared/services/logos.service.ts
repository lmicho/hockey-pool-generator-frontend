import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogosService {

  constructor() { }

  /**
   * Return the path to the logo svg of the team
   *
   * @param team team abbreviation 
   */
  public getLogoPath(team: string): String {
    return "assets/images/logos/" + team.toLowerCase() + ".svg"
  }
}

