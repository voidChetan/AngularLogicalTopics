import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyTableComponent } from 'src/app/reusable/my-table/my-table.component';
import { MasterService } from 'src/app/core/services/master.service';
import { BehaviorSubject, concatMap, forkJoin, Observable, of, Subject } from 'rxjs';

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

  onDatChnage: Subject<boolean> = new Subject<boolean>();

  ondataChnag2: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);

  data : Observable<boolean> = new Observable<boolean>();

  CityList = of(["Pune","Nagpur"]);

  userList: any []= [];
  

  constructor(private master: MasterService) {

  }
  ngOnInit() {
    this.master.getAllJsonUsers().subscribe((res:any)=>{
      debugger;
    })
    setTimeout(() => {
      this.getUserList()
    }, 5000);
    
    setTimeout(() => {
      this.getUserList()
    }, 10000);
    // const userData = this.master.getUsers();
    // const userDropdownData = this.master.getUsersDatForDropdown();
    // const allRequest = this.master.getAllRequest();
    // debugger;
    // forkJoin([userData,userDropdownData]).subscribe((res: any)=>{
    //   debugger;
    // })
    // this.master.getJsonUser().pipe(
    //   concatMap((res:any) => this.master.getJsonUserById(res[0].id)))
    //   .subscribe((res:any)=>{
    //     debugger;
    //   }
    // )

    // this.loadUser();
    // this.loadAdminData();
    // this.getUserList();
    // this.getUserDropdwoList()
  }

  getUserList() {
    this.master.getAllJsonUsers().subscribe((res:any)=>{
      
      this.userList =  res;
    })
  }
  getUserDropdwoList() {
    this.master.getUsersDatForDropdown().subscribe((res:any)=>{
      debugger;;
      this.userList =  res;
    })
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
