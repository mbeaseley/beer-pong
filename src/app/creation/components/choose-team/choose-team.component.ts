import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Team, TeamKey, Teams } from 'Shared/classes/team';

// 0 , 1
type CoinFlip = 'heads' | 'tails';

@Component({
  selector: 'cc-choose-team',
  templateUrl: './choose-team.component.html',
  styleUrls: ['./choose-team.component.scss'],
})
export class ChooseTeamComponent implements OnInit {
  @Input() teams!: Teams;

  teamSelected:
    | {
        objectName: TeamKey;
        team: Team;
      }
    | undefined;
  hideSelectionButton: boolean = false;
  coinFlipMessage: string | undefined;
  isReady: boolean | undefined;

  @Output() readyAction: EventEmitter<Teams> = new EventEmitter();

  @ViewChild('coinFlip') element!: ElementRef;

  constructor() {}

  /**
   * Flip coin to find out who is first
   * @param coin
   */
  onSelection(coin: CoinFlip): void {
    const el = this.element.nativeElement as HTMLElement;

    if (el) {
      el.classList.add('coin__rotate');
    }

    this.hideSelectionButton = true;
    setTimeout(() => {
      let teamKey: keyof Teams;
      const flip: CoinFlip = Math.round(Math.random()) ? 'tails' : 'heads';

      if (coin === flip && this.teamSelected?.objectName) {
        teamKey = this.teamSelected.objectName;
        this.coinFlipMessage = `Well Done! Team ${this.teamSelected.team.name} you are up first! Click button when ready!`;
      } else {
        teamKey = this.teamSelected?.objectName === 'one' ? 'two' : 'one';
        this.coinFlipMessage = `You lose! Team ${this.teams[teamKey].name} you are up first! Click button when ready!`;
      }

      this.teams[teamKey].first = true;
      this.isReady = false;
    }, 3000);
  }

  /**
   * On ready event
   */
  onReady(): void {
    this.readyAction.emit(this.teams);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    const selectedT = Math.round(Math.random()) + 1;

    this.teamSelected = {
      objectName: selectedT === 1 ? 'one' : 'two',
      team: selectedT === 1 ? this.teams.one : this.teams.two,
    };
  }
}
