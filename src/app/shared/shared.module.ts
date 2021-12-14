import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class SharedModule {}
