export class Teams {
  one: Team;
  two: Team;

  constructor() {
    this.one = new Team();
    this.two = new Team();
  }
}

export class Team {
  name: string;
  color: string;
  members: string[];

  constructor(name?: string, color?: string, members?: string[]) {
    this.name = name ?? '';
    this.color = color ?? '';
    this.members = members ?? [];
  }
}
