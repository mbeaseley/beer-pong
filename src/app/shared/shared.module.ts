import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from 'Shared/components/button/button.component';
import { BubblesComponent } from 'Shared/components/bubbles/bubbles.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, BubblesComponent],
  declarations: [ButtonComponent, BubblesComponent],
  providers: [],
})
export class SharedModule {}
