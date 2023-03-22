import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {

  @Input() btnClass: string = '';
  @Input() text: string ='';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    
    this.onBtnClick.emit('Hii');
  }
}
