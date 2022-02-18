import * as adventurer from '@dicebear/adventurer';
import * as peeps from '@dicebear/open-peeps';
import * as miniavs from '@dicebear/miniavs';
import * as smile from '@dicebear/big-smile';
import * as ears from '@dicebear/big-ears';
import * as pixel from '@dicebear/pixel-art';
import * as micah from '@dicebear/micah';
import * as bots from '@dicebear/avatars-bottts-sprites';

export const AVATAR_STYLES = [
  'adventurer',
  'peeps',
  'miniavs',
  'smile',
  'ears',
  'pixel',
  'micah',
  'bots',
] as const;

export type AvatarStyle = typeof AVATAR_STYLES[number];

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
    switch (this.name) {
      case 'adventurer':
        return adventurer;
      case 'peeps':
        return peeps;
      case 'miniavs':
        return miniavs;
      case 'smile':
        return smile;
      case 'ears':
        return ears;
      case 'pixel':
        return pixel;
      case 'micah':
        return micah;
      case 'bots':
        return bots;
      default:
        return undefined;
    }
  }
}
