import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  clientId: string = '';
  siteId: string = '';
  buildingId: string = '';
  floorId: string = '';
  clients: any []= [];
  sites: any []= [];
  buildings: any []= [];
  floors: any []= [];
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((result: any)=> {
      this.clients = result.data;
    })
  }
  getSitesByClinetId() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllSites?clientid='+this.clientId).subscribe((result: any)=> {
      this.sites = result.data;
    })
  }
  getBuildingBySiteId() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetBuildingBySiteId?id='+this.siteId).subscribe((result: any)=> {
      this.buildings = result.data;
    })
  }
  getFloorByBuilidngId() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetFloorsByBuildingId?id='+this.buildingId).subscribe((result: any)=> {
      this.floors = result.data;
    })
  }



}
