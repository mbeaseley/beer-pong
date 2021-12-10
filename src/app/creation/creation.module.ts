import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'Shared/shared.module';
import { routes } from './creation.routing';
import { StartComponent } from 'Creation/components/start/start.component';

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class CreationModule {}
