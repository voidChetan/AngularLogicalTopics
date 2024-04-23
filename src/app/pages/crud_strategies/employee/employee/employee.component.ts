import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class Employee2Component {
  customerList: any [] = [
    {id:1,name:'Sachin',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:2,name:'Rahul',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:3,name:'Ankit',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:4,name:'Ram',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:5,name:'shyam',mobile:'9999888877', email:'chetan@gmail.com'}
  ];
  isSidePanelOpen: boolean = false;
}
