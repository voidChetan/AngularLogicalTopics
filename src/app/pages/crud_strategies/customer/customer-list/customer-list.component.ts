import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customerList: any [] = [
    {id:1,name:'Sachin',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:2,name:'Rahul',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:3,name:'Ankit',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:4,name:'Ram',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:5,name:'shyam',mobile:'9999888877', email:'chetan@gmail.com'}
  ] 
  

  stateName$: Observable<string>;
  
  constructor(private router:Router){}

  navigateToEdit(id: number) {
    debugger;
    this.router.navigateByUrl('/addUpdateCustomer/'+id)
  }
}
