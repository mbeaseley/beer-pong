import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cc-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  @Output() submitAction: EventEmitter<void> = new EventEmitter();

  /**
   * On start
   */
  onStart(): void {
    this.submitAction.emit();
  }
}
