export class ActiveRoutes {
  current: string | undefined;
  previous: string | undefined;

  constructor(current?: string, previous?: string) {
    this.current = current;
    this.previous = previous;
  }
}
