import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef,GridApi,GridReadyEvent } from 'ag-grid-community';
@Component({
  selector: 'app-ag-grid-use',
  templateUrl: './ag-grid-use.component.html',
  styleUrls: ['./ag-grid-use.component.css']
})
export class AgGridUseComponent implements OnInit {

  private gridApi!: GridApi<any>;

  userList: any []=[];

  public rowSelection: 'single' | 'multiple' = 'multiple';
  colDefs: ColDef[] = [
    { field: "id", headerName:'User Id',headerCheckboxSelection: true, checkboxSelection: true,
      cellRenderer:(item:any)=>{
        return "EMP-"+ item.value
      }
    },
    { field: "name", headerName: 'Name',filter:'agTextColumnFilter' },
    { field: "username", headerName:'User Name' },
    { field: "email" ,headerName:'E-mail', editable: true},
   
  ];

  defaultColDef = {
    flex:1,
    minWdith:100
  }

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getUser();
  }
  onGridReady(event: GridReadyEvent<any>) {
    this.gridApi = event.api;
  }

  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }

  getUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList =  res;
    })
  }
}
