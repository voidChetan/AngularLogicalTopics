import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-crud',
  templateUrl: './reactive-form-crud.component.html',
  styleUrls: ['./reactive-form-crud.component.css']
})
export class ReactiveFormCrudComponent implements OnInit {

  dealersArray: any[]= [];
  dealerForm: FormGroup;
  constructor(private http: HttpClient) {
    this.dealerForm = new FormGroup({
      dealerId: new FormControl(0),
      dealerName : new FormControl(''),
      city: new FormControl(''),
      contactNo: new FormControl(''),
      altContactNo: new FormControl(''),
      address: new FormControl(''),
      gstNo: new FormControl(''),
      bankAccNo: new FormControl(''),
      ifsc: new FormControl(''),
      branch: new FormControl(''),
      bankName: new FormControl('')
    })
  }
  
  ngOnInit(): void {
    this.loadDealers();
  } 
  initializeForm() {
    this.dealerForm.reset();
  }
  onEdit(item: any) {
    this.dealerForm = new FormGroup({
      dealerId: new FormControl(item.dealerId),
      dealerName : new FormControl(item.dealerName),
      city: new FormControl(item.city),
      contactNo: new FormControl(item.contactNo),
      altContactNo: new FormControl(item.altContactNo),
      address: new FormControl(item.address),
      gstNo: new FormControl(item.gstNo),
      bankAccNo: new FormControl(item.bankAccNo),
      ifsc: new FormControl(item.ifsc),
      branch: new FormControl(item.branch),
      bankName: new FormControl(item.bankName)
    })
  } 

  loadDealers() {
    this.http.get('http://onlinetestapi.gerasim.in/api/StockApp/GetAllDealerMasters').subscribe((res:any)=> {
      this.dealersArray = res.data;
    })
  }

  saveDealer() {
    
    this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddDealerMasters", this.dealerForm.value).subscribe((result: any) => {
      
      this.initializeForm();
      this.loadDealers();
    },
    error => {

    })
  }
  updateDealer() {
    this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/UpdateDealerMasters", this.dealerForm.value).subscribe((result: any) => {
      
      this.initializeForm();
      this.loadDealers();
    },
    error => {

    })
  }

}
