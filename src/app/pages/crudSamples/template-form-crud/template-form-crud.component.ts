import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-crud',
  templateUrl: './template-form-crud.component.html',
  styleUrls: ['./template-form-crud.component.css']
})
export class TemplateFormCrudComponent  implements OnInit{

  dealersArray: any[]= [];
  dealerObj : any = {
    "dealerId": 0,
    "dealerName": "",
    "city": "",
    "contactNo": "",
    "altContactNo": "",
    "address": "",
    "gstNo": "",
    "bankAccNo": "",
    "ifsc": "",
    "branch": "",
    "bankName": ""
  }
  constructor(private http: HttpClient) {

  }

  initializeForm() {
      this.dealerObj = {
        "dealerId": 0,
        "dealerName": "",
        "city": "",
        "contactNo": "",
        "altContactNo": "",
        "address": "",
        "gstNo": "",
        "bankAccNo": "",
        "ifsc": "",
        "branch": "",
        "bankName": ""
      }
  }
  ngOnInit(): void {
    this.loadDealers();
  }
  

  loadDealers() {
    this.http.get('http://onlinetestapi.gerasim.in/api/StockApp/GetAllDealerMasters').subscribe((res:any)=> {
      this.dealersArray = res.data;
    })
  }
  onEdit(obj: any) {
    this.dealerObj = obj;
  }

  saveDealer() {
    this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddDealerMasters", this.dealerObj).subscribe((result: any) => {
      
      this.initializeForm();
      this.loadDealers();
    },
    error => {

    })
  }
  updateDealer() {
    this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/UpdateDealerMasters", this.dealerObj).subscribe((result: any) => {
      
      this.initializeForm();
      this.loadDealers();
    },
    error => {

    })
  }
  deleteDealer(id: number) {
    const isConfirm = confirm("Are ypu sure want to delete record");

    if(isConfirm) {
      this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/DeleteDealerById?id="+ id, {}).subscribe((result: any) => {
        
        this.initializeForm();
        this.loadDealers();
      },
      error => {
  
      })
    }

   
  }
}
