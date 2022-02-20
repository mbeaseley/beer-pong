import { Component } from '@angular/core';
import { RouteService } from 'Shared/services/route.service';

@Component({
  selector: 'cc-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor(private routeService: RouteService) {}

  /**
   * On start
   */
  onStart(): Promise<boolean> {
    return this.routeService.navigate('teams-selection', true);
  }
}
