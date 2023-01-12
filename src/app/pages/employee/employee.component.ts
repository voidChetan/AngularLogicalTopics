import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyTableComponent } from 'src/app/reusable/my-table/my-table.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  activeTab: string = 'Basic';
  currentSelectedRowId: number = 0;
  users: any[] = [];
  steps: any = [
    {
      step: 'Basic',
      isComplete: true,
      isActive: false
    },
    {
      step: 'Contact',
      isComplete: true,
      isActive: false
    },
    {
      step: 'Family',
      isComplete: false,
      isActive: true
    },
  ];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadUser();
  }
  setStep(step: any) {
    this.activeTab = step.step;
  }
  changeTab(taName: string) {
    this.activeTab = taName;
  }
  onSelect(id: number) {
    this.currentSelectedRowId = id;
  }

  loadUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.users = result;
        debugger;
      });
  }
  EditUser(record: any) {
    debugger;
  }
  deleteUser(record: any) {
    debugger;
  }
}
