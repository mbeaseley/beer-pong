export class Teams {
  one: Team;
  two: Team;

  constructor() {
    this.one = new Team();
    this.two = new Team();
  }
}

export class Team {
  name: string | undefined;
  color: string | undefined;
  members: string[];
  first?: boolean;

  constructor(name?: string, color?: string, members?: string[]) {
    this.name = name;
    this.color = color;
    this.members = members ?? [];
    this.first = false;
  }
}

export type TeamKey = 'one' | 'two';
