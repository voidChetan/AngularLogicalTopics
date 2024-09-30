import { Component } from '@angular/core';

@Component({
  selector: 'app-grossary-cart',
  templateUrl: './grossary-cart.component.html',
  styleUrls: ['./grossary-cart.component.css']
})
export class GrossaryCartComponent {

  foodItemList = [
    { itemId: 21, itemName: 'Cooking Oil', cost: 120 },
    { itemId: 22, itemName: 'Rice', cost: 60 },
    { itemId: 14, itemName: 'Dal', cost: 100 },
    { itemId: 51, itemName: 'Sugar', cost: 45 },
    { itemId: 61, itemName: 'Aata', cost: 40 },
    { itemId: 14, itemName: 'Turmeric', cost: 200 },
    { itemId: 23, itemName: 'Coffee', cost: 2500 },
    { itemId: 145, itemName: 'Dry Fruits Mix', cost: 850 }
  ];
  selectedFoodItemList: any[] = [];

  cartObj: any = {
    itemId: '',
    quantity: '',
    itemName: '',
    cost: ''
  }
  totalCost: number = 0;

  onAddItem() {
    debugger;
    const itemRecord =  this.foodItemList.find(m=>m.itemId == this.cartObj.itemId);
    if(itemRecord !== undefined) {
      const isItemAlredySelected =  this.selectedFoodItemList.find(m=>m.itemId == this.cartObj.itemId);
      if(isItemAlredySelected != undefined) {
        isItemAlredySelected.quantity =  Number(this.cartObj.quantity) +  Number(isItemAlredySelected.quantity);  
      } else {
        this.cartObj.itemName = itemRecord.itemName;
        this.cartObj.cost = itemRecord.cost;
        this.selectedFoodItemList.unshift(this.cartObj); 
      }
      this.cartObj = {
        itemId: '',
        quantity: '',
        itemName: '',
        cost: ''
      }
    }
    this.totalCost = 0;
    this.selectedFoodItemList.forEach(element => {
      const total = element.quantity * element.cost;
      this.totalCost =  this.totalCost + total
    });
    
  }

}
