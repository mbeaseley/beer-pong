import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TeamKey, Teams } from 'Shared/classes/team';

@Component({
  selector: 'cc-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss'],
})
export class GameLobbyComponent implements OnInit {
  @Input() teams!: Teams;

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

  constructor() {}

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

    this.updateBackgroundColor(this.teams[this.activeTeamKey].color as string);

    const index = this.teams[this.previousTeamKey as TeamKey].members.findIndex(
      (m) => m === (this.activeMember[this.previousTeamKey as TeamKey] as string),
    );

    if (index === this.teams[this.previousTeamKey as TeamKey].members.length - 1) {
      this.activeMember[this.previousTeamKey as TeamKey] =
        this.teams[this.previousTeamKey as TeamKey].members[0];
    } else {
      this.activeMember[this.previousTeamKey as TeamKey] =
        this.teams[this.previousTeamKey as TeamKey].members[index + 1];
    }
  }

  /**
   * On end game
   */
  onEndGame(): void {
    this.endGame.emit();
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.activeMember = {
      one: this.teams.one.members[0],
      two: this.teams.two.members[0],
    };
    this.activeTeamKey = this.teams.one.first ? 'one' : 'two';
  }
}
