import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'cc-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss'],
})
export class BubblesComponent implements OnInit {
  @Input() numberOfBubbles: number = 100;
  @Input() maxBubbleSize: number = 100;
  @Input() maxBlur: number = 10;
  @Input() maxAnimationDuration: number = 8000;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  /**
   * Create random bubbles
   */
  createBubbles(number: number): void {
    let i = 0;
    do {
      const xPos = Math.floor(Math.random() * 100 + 1);
      const yPos = Math.floor(Math.random() * 25 + 1);
      const size = Math.floor(Math.random() * this.maxBubbleSize + 1);
      const delay = Math.floor(Math.random() * 100 * number + 1);
      const scale = size / this.maxBubbleSize;
      const blur = scale * this.maxBlur;
      const speed = (1 - scale * scale) * this.maxAnimationDuration;
      const opacity = 0.25 * (1 - scale);

      const el = (this.element.nativeElement as HTMLElement).querySelector(
        '.cc-bubbles__background',
      );
      const div = this.renderer.createElement('div') as HTMLElement;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.left = `${xPos}%`;
      div.style.top = `${yPos}%`;
      div.style.animationDelay = `${delay}ms`;
      div.style.animationDuration = `${speed}ms`;
      div.style.filter = `blur(${blur}px)`;
      div.style.opacity = `${opacity}`;
      this.renderer.appendChild(el, div);
      i += 1;
    } while (i < number);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.createBubbles(this.numberOfBubbles);
    }, 1000);
  }
}
