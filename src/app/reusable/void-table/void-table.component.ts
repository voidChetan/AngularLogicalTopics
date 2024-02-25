import { Component , Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-void-table',
  templateUrl: './void-table.component.html',
  styleUrls: ['./void-table.component.css']
})
export class VoidTableComponent implements OnChanges {

  @Input() tableData: any[]=[]; 
  @Input() columnArray: any [] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  @Input() showActionButton: boolean = false;

  filteredData: any [] = [];
  searchBox: string = '';

  constructor() { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredData = this.tableData;
  }
  onSearchChange(searchVal: string) {
    this.filteredData = this.tableData.filter((searchData: any) => {
      const values = Object.values(searchData);
      let flag = false;
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(searchVal) > -1) {
          flag = true;
          return;
        }
      });
      if (flag) {
        return searchData;
      }
    });
  }

  editRecord(item: any) {
    debugger
    this.onEdit.emit(item);
  }
  deleteRecord(item: any) {
    debugger
    this.onDelete.emit(item);
  }

}
