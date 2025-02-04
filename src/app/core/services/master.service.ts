import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, retry, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { myConstant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiEndPoint: string = '';

  userList$: Observable<any>;
  ondataChnag2: BehaviorSubject<any>  = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
   }

  getAllRequest() : Observable<any[]> {
    return this.http.get<any[]>(this.apiEndPoint + myConstant.apiMethodName.allRequest);
  }

  createFullname(fname:string,mname:string,lname:string){
    return fname+ " "+ mname + " "+ lname;
  }

  getAllJsonUsers() {
    if(!this.userList$){
      this.userList$ =  this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
        shareReplay(1)
       );
    }
    
     return this.userList$;
  }
  getJsonUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getJsonUserById(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }

  getUsers() {
    return this.http.get("https://projectapi.gerasim.in/api/SoilTest/GetAllUsers").pipe(
      map((result:any)=> result.data)
    );
  }

  getUsersDatForDropdown() {
    return this.http.get("https://projectapi.gerasim.in/api/SoilTest/GetAllUsers").pipe(
      tap((res:any)=>{
        
        this.ondataChnag2.next(res);
      }),
      retry(3),
      map((result:any)=> result.data),
      map((res:any) => {
        
       return res.map((user:any)=> {
          
          return {userId: user.userId,fullName:user.fullName} 
        }) 
      }),
     
    );
  }
}
