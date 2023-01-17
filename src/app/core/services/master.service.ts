import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { myConstant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiEndPoint: string = '';
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
   }

  getAllRequest() : Observable<any[]> {
    return this.http.get<any[]>(this.apiEndPoint +
       myConstant.apiMethodName.allRequest);
  }

  createFullname(fname:string,mname:string,lname:string){
    return fname+ " "+ mname + " "+ lname;
  }
}
