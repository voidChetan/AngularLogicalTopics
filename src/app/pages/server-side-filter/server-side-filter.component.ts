import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-server-side-filter',
  templateUrl: './server-side-filter.component.html',
  styleUrls: ['./server-side-filter.component.css']
})
export class ServerSideFilterComponent implements OnInit {

  candidates: any []= [];
  filterObj = {
    "Name": "",
    "ContactNo": "",
    "Email": "",
    "PageNumber": 1,
    "PageSize": 10
  }
  pageTitle: string = 'Server Side Filter';
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.filetrCandidates('');
  }
 
  onPrevious() {
    this.filterObj.PageNumber --;
    this.filetrCandidates('');
  }
  onNext() {
    this.filterObj.PageNumber ++;
    this.filetrCandidates('');
  }

  filetrCandidates(param: string) {
    
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/GetCandidatesByFilter',this.filterObj).subscribe((res:any)=> {
      this.candidates = res.data;
    })
  }
}
