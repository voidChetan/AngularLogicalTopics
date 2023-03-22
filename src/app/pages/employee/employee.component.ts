import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyTableComponent } from 'src/app/reusable/my-table/my-table.component';
import { MasterService } from 'src/app/core/services/master.service';

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
  requests: any[]= [];
  constructor(private master: MasterService) {}
  ngOnInit() {
    this.loadUser();
    this.loadAdminData();
  }
  loadAdminData() {
      
    this.master.getAllRequest().subscribe((res: any)=>{
      this.requests = res;
    })
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

  }
  EditUser(record: any) {
    
  }
  deleteUser(record: any) {
    
  }
}
