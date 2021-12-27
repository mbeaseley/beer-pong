import { Component } from '@angular/core';
import { Teams } from 'Shared/classes/team';

@Component({
  selector: 'cc-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  started: boolean = false;
  teams: Teams | undefined;
  isReady: boolean = false;

  constructor() {}

  /**
   * Start game
   */
  onStartingGame(): void {
    this.started = true;
  }

  /**
   * Teams created
   */
  onTeamsComplete(teams: Teams): void {
    this.teams = teams;
  }

  /**
   * When game is ready to start
   * @param teams
   */
  onReadyGame(teams: Teams): void {
    this.teams = teams;
    this.isReady = true;
  }

  /**
   * On end game and reset
   */
  onEndGameAndReset(): void {
    this.isReady = false;
    this.teams = undefined;
    this.started = false;
  }
}
