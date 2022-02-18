import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { createAvatar } from '@dicebear/avatars';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Avatar, AvatarStyle } from 'Shared/classes/avatar';

@Component({
  selector: 'cc-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvatarComponent implements OnInit, OnChanges {
  @Input() name: string | undefined;
  @Input() style: AvatarStyle = 'adventurer';

  svg: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Create avatar
   * @param seed
   * @returns string
   */
  private createAvatar(seed: string): string {
    const avatar = new Avatar(this.style);

    return createAvatar(avatar.style, {
      seed,
    });
  }

  /**
   * On changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (changes.name || changes.style) {
        const avatar = this.createAvatar(this.name ?? '');
        this.svg = this.sanitizer.bypassSecurityTrustHtml(avatar);
      }
    }, 0);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    const avatar = this.createAvatar(this.name ?? '');
    this.svg = this.sanitizer.bypassSecurityTrustHtml(avatar);
  }
}
