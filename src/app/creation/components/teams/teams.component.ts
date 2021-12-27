import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Team, Teams } from 'Shared/classes/team';

@Component({
  selector: 'cc-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  teams: Teams = new Teams();

  @Output() didSubmit: EventEmitter<Teams> = new EventEmitter();

  @ViewChild('background') element!: ElementRef;

  constructor() {}

  /**
   * Update background of component
   * @param color
   */
  updateBackgroundColor(color?: string): void {
    const el = this.element.nativeElement as HTMLElement;

    if (el && color) {
      el.setAttribute('style', `background-color: ${color}`);
    } else if (el && !color) {
      el.removeAttribute('style');
    }
  }

  /**
   * Update teams
   * @param team
   */
  updateTeam(team: Team): void {
    !this.teams.one.name
      ? (this.teams.one = team)
      : !this.teams.two.name
      ? (this.teams.two = team)
      : undefined;

    this.updateBackgroundColor();

    if (this.teams.one.name && this.teams.two.name) {
      this.didSubmit.emit(this.teams);
    }
  }
}
