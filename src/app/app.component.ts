import { Component, OnInit } from '@angular/core';
import { RouteService } from 'Shared/services/route.service';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'beer-pong';

  constructor(private routeService: RouteService) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.routeService.init();
  }
}
