import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouteService } from 'Shared/services/route.service';

@Component({
  selector: 'cc-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  @ViewChild('container') element!: ElementRef;

  constructor(private routeService: RouteService) {}

  /**
   * On start
   */
  onStart(): Promise<any> {
    (this.element.nativeElement as HTMLElement).classList.add('cc-start--bye');

    return Promise.resolve().then(() => {
      setTimeout(() => {
        return this.routeService.navigate('teams-selection', true);
      }, 2000);
    });
  }
}
