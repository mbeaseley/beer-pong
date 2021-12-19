import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cc-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @Output() submitAction: EventEmitter<void> = new EventEmitter();

  constructor() {}

  /**
   * On start
   */
  onStart(): void {
    this.submitAction.emit();
  }

  ngOnInit(): void {}
}
