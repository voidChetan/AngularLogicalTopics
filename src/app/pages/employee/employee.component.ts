import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyTableComponent } from 'src/app/reusable/my-table/my-table.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  @ViewChild (MyTableComponent) myTable: MyTableComponent =
  new MyTableComponent();
  users:any [] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.loadUser();
    setTimeout(() => {
      debugger;
      const data = this.myTable.columnArray;
    }, 2000);
  }

  loadUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any)=> {
      this.users = result;
      debugger;
    })
  }
  EditUser(record: any) {
    debugger;
  }
  deleteUser(record: any) {
    debugger;
  }
}
