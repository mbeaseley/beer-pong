import * as adventurer from '@dicebear/adventurer';
import * as peeps from '@dicebear/open-peeps';

export type AvatarStyle = 'adventurer' | 'peeps';

export class Avatar {
  name: AvatarStyle | undefined;
  style: any;

  constructor(name: AvatarStyle) {
    this.name = name;
    this.style = this.getStyle();
  }

  /**
   * Get style based from avatar style name
   * @returns style
   */
  private getStyle(): any | undefined {
    if (this.name === 'adventurer') {
      return adventurer;
    }

    if (this.name === 'peeps') {
      return peeps;
    }

    return undefined;
  }
}
