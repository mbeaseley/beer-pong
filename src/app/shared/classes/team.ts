import { AvatarStyle } from './avatar';

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
  avatarStyle: AvatarStyle;
  color: string | undefined;
  members: string[];
  first?: boolean;

  constructor(name?: string, color?: string, members?: string[]) {
    this.name = name;
    this.avatarStyle = 'adventurer';
    this.color = color;
    this.members = members ?? [];
    this.first = false;
  }
}

export type TeamKey = 'one' | 'two';
