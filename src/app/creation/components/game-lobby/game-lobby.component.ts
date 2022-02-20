import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Team, TeamKey, Teams } from 'Shared/classes/team';
import { RouteService } from 'Shared/services/route.service';
import { TeamsService } from 'Shared/services/teams.service';

@Component({
  selector: 'cc-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss'],
})
export class GameLobbyComponent implements OnInit {
  teams: Teams = this.teamsService.getTeams();

  activeMember: {
    one: string | undefined;
    two: string | undefined;
  } = {
    one: undefined,
    two: undefined,
  };
  activeTeamKey: TeamKey | undefined;
  previousTeamKey: TeamKey | undefined;

  @Output() endGame: EventEmitter<void> = new EventEmitter();

  @ViewChild('background') element!: ElementRef;

  constructor(private teamsService: TeamsService, private routeService: RouteService) {}

  get activeTeam(): Team {
    return this.teams?.[this.activeTeamKey ?? 'one'] as Team;
  }

  /**
   * Update background color based on team
   * @param color
   */
  updateBackgroundColor(color: string): void {
    const el = this.element.nativeElement as HTMLElement;

    if (el) {
      el.setAttribute('style', `background-color: ${color}`);
    }
  }

  /**
   * Select next active member
   */
  nextActiveMember(): void {
    this.previousTeamKey = this.activeTeamKey as TeamKey;
    this.activeTeamKey = this.previousTeamKey === 'one' ? 'two' : 'one';

    const aTeam = this.teams.getTeam(this.activeTeamKey);
    const pTeam = this.teams.getTeam(this.previousTeamKey);

    this.updateBackgroundColor(aTeam.color as string);

    const index = pTeam.members.findIndex(
      (m) => m === (this.activeMember[this.previousTeamKey as TeamKey] as string),
    );

    if (index === pTeam.members.length - 1) {
      this.activeMember[this.previousTeamKey as TeamKey] = pTeam.members[0];
    } else {
      this.activeMember[this.previousTeamKey as TeamKey] = pTeam.members[index + 1];
    }
  }

  /**
   * On end game
   */
  onEndGame(): Promise<boolean> {
    return this.routeService.navigate('');
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.activeMember = {
      one: this.teams.getTeam('one').members[0],
      two: this.teams.getTeam('two').members[0],
    };
    this.activeTeamKey = this.teams.getFirstTeamKey();
  }
}
