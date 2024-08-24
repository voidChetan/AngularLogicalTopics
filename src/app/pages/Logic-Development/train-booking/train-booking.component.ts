import { Component } from '@angular/core';

@Component({
  selector: 'app-train-booking',
  templateUrl: './train-booking.component.html',
  styleUrls: ['./train-booking.component.css']
})
export class TrainBookingComponent {
  cityList: string[]= ["Pune","Nagpur",'Mumbai'];

  fromStation: string = '';
  toStation: string = '';
  dateOfTravel: string ='';

  journeyDetails: any = {
    fromStation: '',
    toStation: '',
    dateOfTravel: ''
  }

  isFormValid: boolean = false;


  onReset() {
    this.dateOfTravel = '';
    this.fromStation = '';
    this.toStation = '';
    this.isFormValid = false;
    this.journeyDetails = {
      fromStation: '',
      toStation: '',
      dateOfTravel: ''
    }
  }

  onSearch() {
    // if(this.fromStation == '' || this.toStation =='' || this.dateOfTravel == ''){
    //   alert("Please Selectr Journey Details")
    //   this.isFormValid = false;
    // } else {
    //   if(this.fromStation == this.toStation) {
    //     alert("From N To Station can't be Same")
    //   } else {
    //     this.isFormValid = true;
    //   }
      
    // }
    if(this.journeyDetails.fromStation =='' || this.journeyDetails.toStation == '' || this.journeyDetails.dateOfTravel == '') {
        alert("Please Selectr Journey Details")
       this.isFormValid = false;
    } else {
      if(this.journeyDetails.fromStation == this.journeyDetails.toStation) {
        alert("From N To Station can't be Same")
      } else {
        this.isFormValid = true;
      }
    }
  }
}
