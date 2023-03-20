import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective { 

  constructor(private elementRef:ElementRef) {  }
  
  @HostListener('mouseover')
  onMouseOver() { 
    this.elementRef.nativeElement.classList.add('bg-danger')
  }

  @HostListener('mouseout')
  onMouseOut() { 
    this.elementRef.nativeElement.classList.remove('bg-danger')
  }
}
