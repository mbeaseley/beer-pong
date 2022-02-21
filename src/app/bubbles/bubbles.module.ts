import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesComponent } from 'Bubbles/components/bubbles/bubbles.component';

@NgModule({
  imports: [CommonModule],
  exports: [BubblesComponent],
  declarations: [BubblesComponent],
  providers: [],
})
export class BubblesModule {}
