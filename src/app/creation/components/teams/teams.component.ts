import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Team, Teams } from 'Shared/classes/team';
import { RouteService } from 'Shared/services/route.service';
import { TeamsService } from 'Shared/services/teams.service';

@Component({
  selector: 'cc-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  teams: Teams = this.teamsService.getTeams();

  @ViewChild('background') element!: ElementRef;

  constructor(private teamsService: TeamsService, private routeService: RouteService) {}

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
  async updateTeam(team: Team): Promise<boolean | void> {
    await this.teamsService.setTeam(team);
    this.teams = this.teamsService.getTeams();

    this.updateBackgroundColor();

    if (this.teams.isReady()) {
      return this.routeService.navigate('choose-team', true);
    }
  }
}
