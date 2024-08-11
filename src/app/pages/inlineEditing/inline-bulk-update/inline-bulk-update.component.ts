import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-bulk-update',
  templateUrl: './inline-bulk-update.component.html',
  styleUrls: ['./inline-bulk-update.component.css']
})
export class InlineBulkUpdateComponent implements OnInit {

  departmentList: Department[]= [];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getDepartments();
  }


  getDepartments() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=> {
      this.departmentList = res.data;
    })
  }
  addNew() {
    this.departmentList.unshift({departmentId: 0,departmentLogo:'',departmentName:''})
  }
  bulkUpdate() { 
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddBulkDepartment", this.departmentList).subscribe((res:any)=> {
      if(res.result) {
        alert("Bulk Update Success");
        this.getDepartments();
      } else {
        alert(res.message)
      }
    })
  }
}

export interface Department { 
  departmentId: number,
  departmentName: string,
  departmentLogo: string
}

