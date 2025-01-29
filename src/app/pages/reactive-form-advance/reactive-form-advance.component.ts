import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-advance',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './reactive-form-advance.component.html',
  styleUrl: './reactive-form-advance.component.css'
})
export class ReactiveFormAdvanceComponent {


  applicationForm: FormGroup = new FormGroup({
    fName: new FormControl("",[Validators.required]),
    mName: new FormControl(""),
    lName: new FormControl(""),
    fullName: new FormControl(""),
    isWorking: new FormControl("No"),
    jobType: new FormControl(""),
    isOwnBusiness: new FormControl(""),
    companyDetails : new FormGroup({
      companyName: new FormControl(""),
      postion: new FormControl(""),
      salary: new FormControl("")
    }),
    busineesDetails : new FormGroup({
      busineesType: new FormControl(""),
      busineesName: new FormControl(""),
      annualIncome: new FormControl(""),
      address: new FormControl("")
    }),
    personalEmail: new FormControl(""),
    businesEmail: new FormControl(""),
    contactList: new FormArray([]),
    loanList: new FormArray([])
  })

  constructor() {
    this.addNewContactForm();
    this.applicationForm.valueChanges.subscribe(()=>{
       const formValue = this.applicationForm.value;
       debugger;
       const {fName,mName,lName} = formValue;
       const fullName =  fName + " "+ mName + " "+ lName;

       //this.applicationForm.controls['fullName'].setValue(fullName);

       this.applicationForm.patchValue({fullName: fullName, personalEmail: 'sadasd'},{emitEvent: false});

      //  this.applicationForm.setValue({
      //   fName:
      //  })
    })
  }

  addNewContactForm() {
    const conatctForm =  new FormGroup({
      contactNo:  new FormControl("")
    });
    this.contacts.push(conatctForm);
  }

  addNewLoanForm() {
    const conatctForm =  new FormGroup({
      banName:  new FormControl(""),
      loanAmount:  new FormControl(""),
      emi:  new FormControl("")
    });
    this.contacts.push(conatctForm);
  }

  get contacts() : FormArray {
    return this.applicationForm.controls['contactList'] as FormArray;
  }

  removeContact(index: number) {
    this.contacts.removeAt(index)
  }


}
