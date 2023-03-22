import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {

  @Input() title: string = '';
  @Input () content: string = '';
  @Input() alertType: string = '';
} 
