import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  customerList: any [] = [
    {id:1,name:'Sachin',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:2,name:'Rahul',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:3,name:'Ankit',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:4,name:'Ram',mobile:'9999888877', email:'chetan@gmail.com'},
    {id:5,name:'shyam',mobile:'9999888877', email:'chetan@gmail.com'}
  ] ;

  openCustId: number= 0;


  openProduct(id: number) {
    this.openCustId = id;
    const model = document.getElementById("myModal");
    //api
    if(model != null) {
      model.style.display = 'block'
    }
  }

  closeModel() {
    const model = document.getElementById("myModal");
    if(model != null) {
      model.style.display = 'none'
    }
  }
}
