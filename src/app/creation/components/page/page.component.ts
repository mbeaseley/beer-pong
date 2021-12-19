import { Component, OnInit } from '@angular/core';

class Team {
  name: string | undefined;
  color: string | undefined;
  members: string[];

  constructor(name?: string, color?: string, members?: string[]) {
    this.name = name;
    this.color = color ?? 'red';
    this.members = members ?? [];
  }
}

interface Teams {
  1: Team;
  2: Team;
}

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
