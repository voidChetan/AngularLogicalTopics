import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyTooltip]'
})
export class MyTooltipDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2, 
    private viewContainerRef: ViewContainerRef) { }
  @Input() termplate!: ElementRef | undefined;
  @Input('appTooltip') tooltipContent: string = '';
  @Input('appTooltipTemplate') tooltipTemplate: TemplateRef<any>;
  @Input() isTemplate: boolean = false;

  private createTemplateTooltip(): void {
    debugger;
    const tooltip = this.renderer.createElement('div');
    this.renderer.addClass(tooltip, 'tooltipMy');
    this.renderer.setStyle(tooltip, 'position', 'absolute');

    const viewRef = this.viewContainerRef.createEmbeddedView(this.tooltipTemplate);
    viewRef.detectChanges();
    const tooltipContent = viewRef.rootNodes[0];
    this.renderer.appendChild(tooltip, tooltipContent);

    this.renderer.appendChild(this.elRef.nativeElement, tooltip);
  }


  private createTooltip(): HTMLElement {
    const tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipContent);
    this.renderer.appendChild(tooltip, text);
    this.renderer.addClass(tooltip, 'tooltipMy');
    this.renderer.setStyle(tooltip, 'position', 'absolute');
    return tooltip;
  }
  @HostListener('mouseover')
  onMouseOver() {
    debugger;
    if (this.isTemplate) {
      this.createTemplateTooltip();
    } else {
      const tooltip = this.createTooltip();
      this.renderer.appendChild(this.elRef.nativeElement, tooltip);
    }
  }

  @HostListener('mouseout')
  onMouseOut() {
    setTimeout(() => {
      const tooltip = this.elRef.nativeElement.querySelector('.tooltipMy');
      this.renderer.removeChild(this.elRef.nativeElement, tooltip);
    }, 200);

  }



}
