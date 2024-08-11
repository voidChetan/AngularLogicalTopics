import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent {
  @Input() employee: any;
  @Input() employeeList: any[];

  getSubordinates(): any[] {
    return this.employeeList.filter(emp => emp.lead === this.employee.empId);
  }
  isLast() {
    const last = this.employeeList.filter(m=>m. lead == this.employee.lead);
    if(last.length != 0) {
      const isLast = last[last.length-1].empId == this.employee.empId;
      return isLast;
    } else {
      return true;
    }
   
  }
}
