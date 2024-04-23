import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {

  viewCustomerId: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((res:any)=>{
      debugger;
      this.viewCustomerId =  res.id;
    })
  }
}
