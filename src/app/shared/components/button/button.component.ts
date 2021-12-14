import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  SimpleChanges,
} from '@angular/core';
import {
  ButtonSize,
  ButtonStyle,
  ButtonBoolean,
  ButtonType,
  ButtonState,
  CCButton,
} from 'Shared/classes/button';

@Component({
  selector: 'cc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() href: string | undefined;
  @Input() size: ButtonSize = 'medium';
  @Input() buttonStyle: ButtonStyle = 'primary';
  @Input() fullWidth: ButtonBoolean = false;
  @Input() buttonType: ButtonType = 'button';
  @Input() state: ButtonState = 'default';
  @Input() description: string | undefined;
  @Input() target: string | undefined;

  ccButton: CCButton = new CCButton();

  @Output() clicked = new EventEmitter<boolean>();

  constructor(private changes: ChangeDetectorRef) {}

  /**
   * Emit button is successful clicked
   */
  onClick(): void {
    this.clicked.emit(true);
  }

  /**
   * Create button
   * @returns Button
   */
  private createButton(): CCButton {
    const classes = [
      `button--size-${this.size}`,
      `button--${this.fullWidth === true || this.fullWidth === 'true' ? 'full-width' : 'auto'}`,
      `bw-button--style-${this.buttonStyle}`,
      `bw-button--${this.state}`,
    ]
      .filter((d) => !!d)
      .join(' ');
    return new CCButton(
      this.href,
      this.buttonType,
      this.size,
      this.fullWidth,
      this.state,
      this.buttonStyle,
      classes,
      this.description,
      this.target,
      this.clicked,
    );
  }

  /**
   * On changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (changes.state || changes.buttonStyle) {
        this.ccButton = this.createButton();
        this.changes.markForCheck();
      }
    }, 0);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.ccButton = this.createButton();
      console.log(this.ccButton);
    }, 0);
  }
}
