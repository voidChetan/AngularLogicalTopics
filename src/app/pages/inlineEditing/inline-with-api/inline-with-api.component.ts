import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-with-api',
  templateUrl: './inline-with-api.component.html',
  styleUrls: ['./inline-with-api.component.css']
})
export class InlineWithAPIComponent implements OnInit {

  departmentList: Department [] = [];
  oldObj: Department;


  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.departmentList =  res.data;
    })
  }
  onEdit(item: Department) {
    debugger;
    item.isEdit = true;
    const strObj =  JSON.stringify(item);
    const newObj =  JSON.parse(strObj);
    this.oldObj = newObj;
  }
  onCancel(item: Department) {
    item.isEdit = false;
    item.departmentName = this.oldObj.departmentName;
    item.departmentLogo = this.oldObj.departmentLogo;
    item.departmentId =  this.oldObj.departmentId
  }

  addNew() {
    this.departmentList.unshift({departmentId:0,departmentLogo:'',departmentName:'',isEdit : true})
  }
  onNewCreate(item:Department) { 
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",item).subscribe((res:any)=>{
      if(res.result) {
        alert("Department Created");
        this.getAllDepartments();
      } else {
        alert(res.message)
      }
    })
  }
  onUpdate(item:Department) {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",item).subscribe((res:any)=>{
      if(res.result) {
        alert("Department Updated");
        this.getAllDepartments();
      } else {
        alert(res.message)
      }
    })
  }
}

export interface Department { 
    departmentId: number,
    departmentName: string,
    departmentLogo: string,
    isEdit: boolean
}
