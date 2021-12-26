import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Team, Teams } from 'Shared/classes/team';

@Component({
  selector: 'cc-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  teams: Teams = new Teams();

  @ViewChild('background') element!: ElementRef;

  constructor() {}

  /**
   * Update background of component
   * @param color
   */
  updateBackgroundColor(color: string): void {
    (this.element.nativeElement as HTMLElement).style.background = color;
  }

  /**
   * Update teams
   * @param team
   */
  updateTeam(team: Team): void {
    this.teams.one.name ? (this.teams.one = team) : (this.teams.two = team);
  }
}
