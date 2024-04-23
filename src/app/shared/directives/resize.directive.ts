import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  private startX: number;
  private dragging = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.dragging = true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      const deltaX = event.clientX - this.startX;
      const newWidth = this.elementRef.nativeElement.offsetWidth + deltaX;
      
      if (newWidth > 50) { // Minimum width
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', newWidth + 'px');
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.dragging = false;
  }

}
