import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {
  @Input() columnArray:string[]= [];
  @Input() gridArray:any[]= [];

  @Output () onEdit = new EventEmitter<any>();
  @Output () onDelete = new EventEmitter<any>();

  edit(item: any) {
    this.onEdit.emit(item);
  }
  deleteRecord(item: any) {
    this.onDelete.emit(item);
  }
}
