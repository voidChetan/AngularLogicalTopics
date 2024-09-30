import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent {

  studentForm: FormGroup = new FormGroup({
    fName: new FormControl(),
    mName: new FormControl(),
    lName: new FormControl(),
    fullName: new FormControl(),
    caste: new FormControl(),
    otherCaste: new FormControl(),
    tenth: new FormControl(),
    twelth: new FormControl(),
    graduation: new FormControl(),
    avarage: new FormControl(),
    mobile: new FormControl(),
    regNo: new FormControl()
  })

  constructor() {
    combineLatest([this.studentForm.controls['fName'].valueChanges,
    this.studentForm.controls['mName'].valueChanges,
    this.studentForm.controls['lName'].valueChanges]).subscribe(([fname, mname, lname]) => {
      this.generateFullName(fname, mname, lname);
    })
    combineLatest([this.studentForm.controls['tenth'].valueChanges,
    this.studentForm.controls['twelth'].valueChanges,
    this.studentForm.controls['graduation'].valueChanges]).subscribe(([fname, mname, lname]) => {
      this.calculateAvarage(fname, mname, lname);
    })

    combineLatest([this.studentForm.controls['fName'].valueChanges,
    this.studentForm.controls['mobile'].valueChanges]).subscribe(([fname, mobile]) => {
      this.generateUniqueNo(fname, mobile);
    })

  }
  generateUniqueNo(fName, mobile) {
    const fullName = fName + ' ' + mobile.substr(mobile.length - 4);
    this.studentForm.controls['regNo'].setValue(fullName)

  }

  generateFullName(fName, mname, lname) {
    const fullName = fName + ' ' + mname + ' ' + lname;
    this.studentForm.controls['fullName'].setValue(fullName)

  }
  calculateAvarage(tehnth, twelth, graduation) {
    const fullName = ((Number(tehnth) + Number(twelth) + Number(graduation)) / 3).toFixed(2);
    this.studentForm.controls['avarage'].setValue(fullName)

  }

}
