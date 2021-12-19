import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'cc-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @Output() submitAction: EventEmitter<void> = new EventEmitter();

  maxBubbleSize = 100;
  maxBlur = 10;
  maxAnimationDuration = 8000;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  /**
   * On start
   */
  onStart(): void {
    this.submitAction.emit();
  }

  /**
   * Create random bubbles
   */
  createBubbles(number: number): void {
    let i = 0;
    do {
      console.log(i);
      const xPos = Math.floor(Math.random() * 100 + 1);
      const yPos = Math.floor(Math.random() * 25 + 1);
      const size = Math.floor(Math.random() * this.maxBubbleSize + 1);
      const delay = Math.floor(Math.random() * 100 * number + 1);
      const scale = size / this.maxBubbleSize;
      const blur = scale * this.maxBlur;
      const speed = (1 - scale * scale) * this.maxAnimationDuration;
      const opacity = 0.25 * (1 - scale);

      const el = (this.element.nativeElement as HTMLElement).querySelector('.cc-start__background');
      const div = this.renderer.createElement('div') as HTMLElement;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.left = `${xPos}%`;
      div.style.top = `${yPos}%`;
      div.style.animationDelay = `${delay}ms`;
      div.style.animationDuration = `${speed}ms`;
      div.style.filter = `blur(${blur}px)`;
      div.style.opacity = `${opacity}`;
      console.log(el);
      this.renderer.appendChild(el, div);
      i += 1;
    } while (i < number);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.createBubbles(200);
    }, 1000);
  }
}
