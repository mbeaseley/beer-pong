import { EventEmitter } from '@angular/core';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';
export type ButtonStyle = 'primary' | 'secondary';
export type ButtonBoolean = true | 'true' | false | 'false';
export type ButtonState = 'default' | 'disabled' | 'loading';

export class CCButton {
  type: ButtonType;
  href?: string;
  size: ButtonSize;
  fullWidth: ButtonBoolean;
  state: ButtonState;
  style: ButtonStyle;
  displayClasses: string;
  description: string;
  target: string;
  clicked: EventEmitter<any> | undefined;

  constructor(
    href?: string,
    type?: ButtonType,
    size?: ButtonSize,
    fullWidth?: ButtonBoolean,
    state?: ButtonState,
    style?: ButtonStyle,
    displayClasses?: string,
    description?: string,
    target?: string,
    clicked?: EventEmitter<any>,
  ) {
    this.href = href ?? '';
    this.type = type ?? 'button';
    this.size = size ?? 'medium';
    this.fullWidth = !!fullWidth;
    this.state = state ?? 'default';
    this.style = style ?? 'primary';
    this.displayClasses = displayClasses ?? 'button';
    this.description = description ?? '';
    this.target = target ?? '';
    this.clicked = clicked;
  }
}
