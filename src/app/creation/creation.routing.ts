import { Routes } from '@angular/router';

import { StartComponent } from 'Creation/components/start/start.component';
import { ChooseTeamComponent } from 'Creation/components/choose-team/choose-team.component';
import { GameLobbyComponent } from 'Creation/components/game-lobby/game-lobby.component';
import { TeamsComponent } from 'Creation/components/teams/teams.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'teams-selection', component: TeamsComponent },
  { path: 'choose-team', component: ChooseTeamComponent },
  { path: 'game-lobby', component: GameLobbyComponent },
];
