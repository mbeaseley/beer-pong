import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ColorCircleModule } from 'ngx-color/circle'; // <color-circle></color-circle>

import { SharedModule } from 'Shared/shared.module';
import { routes } from './creation.routing';
import { StartComponent } from 'Creation/components/start/start.component';
import { TeamsComponent } from 'Creation/components/teams/teams.component';
import { TeamFormComponent } from 'Creation/components/team-form/team-form.component';
import { ChooseTeamComponent } from './components/choose-team/choose-team.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';

@NgModule({
  declarations: [
    StartComponent,
    TeamsComponent,
    TeamFormComponent,
    ChooseTeamComponent,
    GameLobbyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ColorCircleModule,
  ],
})
export class CreationModule {}
