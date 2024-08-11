import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  employeeList = [ 
    {empId: 1, name: 'Chetan', lead: 0},
    {empId: 2, name: 'Rahul', lead: 0},
    {empId: 3, name: 'Sachin', lead: 1},
    {empId: 4, name: 'Ramesh', lead: 1},
    {empId: 5, name: 'Akash', lead: 2},
    {empId: 6, name: 'Punesh', lead: 2},
    {empId: 7, name: 'Sahuil', lead: 3},
    {empId: 8, name: 'Rohit', lead: 3},
    {empId: 9, name: 'Lokesh', lead: 4},
    {empId: 10, name: 'Sahuil', lead: 4},
    {empId: 11, name: 'Rohit', lead: 5},
    {empId: 12, name: 'Lokesh', lead: 5}
  ];

  getTop() {
    return this.employeeList.filter(m=>m.lead ==0)
  }
  getChildren(empid: number) {
    return this.employeeList.filter(m=>m.lead ==empid)
  }
  getSome(employee:any) {
    const data = this.employeeList.some(e => e.lead === employee.empId)
    console.log(employee.empId +"-"+data)
   return  data;
  }
}
