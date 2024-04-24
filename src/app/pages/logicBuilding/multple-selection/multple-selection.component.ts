import { Component } from '@angular/core';

@Component({
  selector: 'app-multple-selection',
  templateUrl: './multple-selection.component.html',
  styleUrls: ['./multple-selection.component.css']
})
export class MultpleSelectionComponent {

  hobbieList: string []= ['Cricket','Online Games','Drawing','Singing'];

  hobbies: string [] = [];

  selectedHobbie: string = '';

  selectHobbie(hobbieName: string) {
    const elementIndex =  this.hobbies.findIndex(m=>m == hobbieName);
    if(elementIndex == -1) {
      this.hobbies.push(hobbieName)
    } else {
      this.hobbies.splice(elementIndex,1)
    }  
  }
  selectSingleHobbie(name: string) {
    this.selectedHobbie = name;
  }

  checkIfSelected(hobbieName: string) {
    return this.hobbies.findIndex(m=>m == hobbieName);
  }
}
