import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { ActiveRoutes } from 'Shared/classes/routes';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private routes: BehaviorSubject<ActiveRoutes> = new BehaviorSubject(new ActiveRoutes());

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  /**
   * get current and previous routes
   * @returns Routes
   */
  public getRoutes(): ActiveRoutes {
    return this.routes.getValue();
  }

  /**
   * Navigate to route
   * @param route
   * @param relativeTo
   */
  public navigate(route: string, relativeTo = false): Promise<boolean> {
    const options = relativeTo ? { relativeTo: this.activatedRoute } : {};
    return this.router.navigate([route], options);
  }

  /**
   * Init
   */
  public init(): void {
    // Route events
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise(),
      )
      .subscribe((events: RoutesRecognized[]) => {
        this.routes.next(
          new ActiveRoutes(events[0].urlAfterRedirects, events[1].urlAfterRedirects),
        );
      });
  }
}
