import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-user',
  templateUrl: './json-user.component.html',
  styleUrls: ['./json-user.component.css']
})
export class JsonUserComponent implements OnInit {

  usersArray: any[]=[];

  columnArray: any[] = [
    { header: 'Name', fieldName: 'name', dataType: 'string' },
    { header: 'User Name', fieldName: 'username', dataType: 'string'},
    { header: 'Email', fieldName: 'email', dataType: 'string' },
    { header: 'Phone No', fieldName: 'phone', dataType: 'string' },
    { header: 'Website', fieldName: 'website', dataType: 'string' },
    { header: 'Date', fieldName: 'currentDate', dataType: 'date' }
  ] 
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.usersArray = res;
      this.usersArray.forEach(element => {
        element.currentDate = new Date();
        element.address = element.address.street + ' ' + element.address.suite;
      });
    })
  }
  editUser(data: any) {
    debugger;
  }
  deleteUser(data: any) {
    debugger;
  }
}
