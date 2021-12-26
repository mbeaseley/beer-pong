import { Component, OnInit } from '@angular/core';
import { Teams } from 'Shared/classes/team';

@Component({
  selector: 'cc-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  started: boolean = false;
  teams: Teams | undefined;

  constructor() {}

  /**
   * Start game
   */
  onStartingGame(): void {
    this.started = true;
  }

  ngOnInit(): void {}
}
