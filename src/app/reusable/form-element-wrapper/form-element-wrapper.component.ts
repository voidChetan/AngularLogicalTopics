import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-element-wrapper',
  templateUrl: './form-element-wrapper.component.html',
  styleUrls: ['./form-element-wrapper.component.css']
})
export class FormElementWrapperComponent {
   @Input() label: string;
   @Input() tooltip: string;
   @Input() validation:any;

   getValidationMessage() {
    const objKeys =  Object.keys(this.validation);
    debugger;
    if(objKeys.length !== 0) {
      if(objKeys[0] == "required") {
        return "This Is Required Field"
      } else if (objKeys[0] == "minlength") {
        const msg =  "Min Charactors Required is " + this.validation[objKeys[0]].requiredLength;
        return msg;
      } else if (objKeys[0] == "pattern") {
        return this.validation[objKeys[0]];
      } 
    } else {
      return '';
    }
   }
}
