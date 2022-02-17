import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from 'Shared/components/button/button.component';
import { BubblesComponent } from 'Shared/components/bubbles/bubbles.component';
import { AvatarComponent } from 'Shared/components/avatar/avatar.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, BubblesComponent, AvatarComponent],
  declarations: [ButtonComponent, BubblesComponent, AvatarComponent],
  providers: [],
})
export class SharedModule {}
