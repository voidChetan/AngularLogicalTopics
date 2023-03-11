import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-container-outlet',
  templateUrl: './ng-content-container-outlet.component.html',
  styleUrls: ['./ng-content-container-outlet.component.css']
})
export class NgContentContainerOutletComponent {

  studentList: any[] = [
    {
      id: 1,
      name:'Rahul',
      city: 'Pune',
      state: 'MH'
    },
    {
      id: 2,
      name:'Ankit',
      city: 'Panji',
      state: 'Goa'
    },
    {
      id: 3,
      name:'Sagar',
      city: 'Bhopal',
      state: 'MP'
    },
    {
      id: 4,
      name:'Poonam',
      city: 'Indore',
      state: 'MP'
    }
  ];
  isLoader: boolean = true;
  constructor() {
    setTimeout(() => {
      this.isLoader= false;
    }, 5000);
  }
}
