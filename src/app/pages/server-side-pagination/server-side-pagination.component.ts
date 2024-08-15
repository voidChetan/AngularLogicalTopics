import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-side-pagination',
  templateUrl: './server-side-pagination.component.html',
  styleUrls: ['./server-side-pagination.component.css']
})
export class ServerSidePaginationComponent implements OnInit{


  productId: number;
  categoryName: string = '';
  productName: string = '';
  pageNumber: number =1;
  pageSize: number = 5;
  sortBy: string = "productName";
  sortOrder: string = "asc";

  productList: any []= [];

  totalRecords: number= 0;

  constructor(private http: HttpClient){}


  ngOnInit(): void {
    this.onSearch();
    this.getTotal();
  }
  getTotal() {
    this.http.get("https://projectapi.gerasim.in/api/Products/getTotalProduct").subscribe((Res:any)=>{
      this.totalRecords = Res;
    })
  }
  getValue () {
    return Math.ceil(this.totalRecords/this.pageSize)
  }

  onPageChnage(pageNo) {
    this.pageNumber = pageNo;
    this.onSearch();
  }

  getPageNumbers() {
    const totalPages = Math.ceil(this.totalRecords/this.pageSize);
    return Array(totalPages).fill(0).map((x,i)=> i+1)
  }

  onSort(fieldName) {
    this.sortBy = fieldName;
    this.sortOrder =  this.sortOrder === 'asc'? 'desc': 'asc';
    this.onSearch()
  }
  onSearch() {
    debugger;
    let params =  new HttpParams()
    .set('pageNumber', this.pageNumber.toString())
    .set('pageSize', this.pageSize.toString())
    .set('sortBy', this.sortBy)
    .set('sortOrder', this.sortOrder)
    if(this.categoryName !== '') {
      params =  params.set('category',this.categoryName)
    }
    if(this.productId) {
      params =  params.set('productId',this.productId)
    }
    if(this.productName !== '') {
      params =  params.set('shortName',this.productName)
    }
    this.http.get("https://projectapi.gerasim.in/api/Products", {params}).subscribe((res:any)=>{
      debugger;
      this.productList =  res;
    })
  }
  

}
