import { Routes } from '@angular/router';

import { StartComponent } from 'Creation/components/start/start.component';
import { ChooseTeamComponent } from 'Creation/components/choose-team/choose-team.component';
import { GameLobbyComponent } from 'Creation/components/game-lobby/game-lobby.component';
import { TeamsComponent } from 'Creation/components/teams/teams.component';
import { RouteGuard } from 'Creation/guards/route.guard';

export const routes: Routes = [
  { path: '', component: StartComponent, canActivate: [RouteGuard] },
  { path: 'teams-selection', component: TeamsComponent, canActivate: [RouteGuard] },
  { path: 'choose-team', component: ChooseTeamComponent, canActivate: [RouteGuard] },
  { path: 'game-lobby', component: GameLobbyComponent, canActivate: [RouteGuard] },
];
