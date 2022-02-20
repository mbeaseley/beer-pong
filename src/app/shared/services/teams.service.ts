import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team, Teams } from 'Shared/classes/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private teams: BehaviorSubject<Teams> = new BehaviorSubject(new Teams());

  constructor() {}

  /**
   * Get teams
   * @returns Teams
   */
  public getTeams(): Teams {
    return this.teams.getValue();
  }

  /**
   * Set team
   * @param team
   */
  public setTeam(team: Team): Promise<void> {
    const p = Promise.resolve();

    return p.then(() => {
      const t = this.getTeams();

      if (!t.one) {
        t.one = team;
      } else if (!t.two) {
        t.two = team;
      }

      this.teams.next(t);
    });
  }
}
