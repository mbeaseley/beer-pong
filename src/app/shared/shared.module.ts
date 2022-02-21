import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from 'Shared/components/button/button.component';
import { AvatarComponent } from 'Shared/components/avatar/avatar.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, AvatarComponent],
  declarations: [ButtonComponent, AvatarComponent],
  providers: [],
})
export class SharedModule {}
