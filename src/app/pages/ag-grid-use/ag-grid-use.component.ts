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
    {
      headerName: 'Actions',
      cellRenderer: this.actionCellRenderer
    }
   
  ];
 
  defaultColDef = {
    flex:1,
    minWdith:100
  }

  isEdit: boolean = false;
  constructor(private http: HttpClient){

  }
  actionCellRenderer(params: any) {
    return `
      <button class="btn-edit" data-action="edit" data-id="${params.data.id}">Edit</button>
    `;
  }
  onCellClicked(event: any) {
    if (event.colDef.headerName === 'Actions' && event.event.target.dataset.action === 'edit') {
      this.handleEditClick(event.data);
    }
  }
  handleEditClick(rowData: any) {
    console.log('Edit button clicked for:', rowData);
    this.isEdit = true;
    // Add your logic here to handle the edit action, like opening a form or a modal
  }


  ngOnInit(): void {
    this.getUser();
  }
  onGridReady(event: GridReadyEvent<any>) {
    debugger;
    this.gridApi = event.api;
  }

  onBtExport() {
    this.exportGrid();
  }

  exportGrid() {
    this.expertAsCSV()
  }
  expertAsCSV() {
    this.gridApi.exportDataAsCsv();
  }

  getUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList =  res;
    })
  }
}
