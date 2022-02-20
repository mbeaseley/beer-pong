import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouteService } from 'Shared/services/route.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private routeService: RouteService) {}

  /**
   * Can activate
   */
  canActivate(): Promise<boolean> | boolean {
    const activeRoutes = this.routeService.getRoutes();

    if (!activeRoutes.previous) {
      return this.routeService.navigate('');
    }

    return true;
  }
}
