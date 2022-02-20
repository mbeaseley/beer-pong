import { AvatarStyle } from './avatar';

export class Teams {
  one: Team | undefined;
  two: Team | undefined;

  /**
   * Check if teams sets
   * @returns boolean
   */
  public isReady(): boolean {
    return !!this.one && !!this.two;
  }

  /**
   * Get team
   * @param name
   * @returns Team
   */
  public getTeam(name: TeamKey): Team {
    return this[name] as Team;
  }

  /**
   * Get first team key
   * @returns TeamKey
   */
  public getFirstTeamKey(): TeamKey {
    return this.one?.first ? 'one' : 'two';
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
