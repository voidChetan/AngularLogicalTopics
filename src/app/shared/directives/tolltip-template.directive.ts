import { Directive, ElementRef, HostListener, Renderer2, Input,TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTolltipTemplate]'
})
export class TolltipTemplateDirective {

  @Input('myTemplate') myTemplate: TemplateRef<any>;

  constructor(private elRef: ElementRef, private renderer: Renderer2, 
    private viewRefContainer: ViewContainerRef) { }

  createToolTip() {
    const tooltip = this.renderer.createElement('div');
    this.renderer.addClass(tooltip,'toolTipMy');
    this.renderer.setStyle(tooltip,'postion','absolute');
    const viewRef =  this.viewRefContainer.createEmbeddedView(this.myTemplate);
    viewRef.detectChanges();
    const tooltipContent = viewRef.rootNodes[0];
    this.renderer.appendChild(tooltip,tooltipContent);
    this.renderer.appendChild(this.elRef.nativeElement,tooltip);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.createToolTip();
  } 
  @HostListener('mouseout')
  onMouseOut() {
    setTimeout(() => {
      const tooltip =  this.elRef.nativeElement.querySelector('.toolTipMy');
      this.renderer.removeChild(this.elRef.nativeElement, tooltip);
    }, 300); 
  }
}
