import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.css']
})
export class PlanSelectionComponent {

  planArray: any [] = [
    { planName: 'Mobile', planDescription:'Free SIM, calls, and SMS with invaluable digital experiences.2000/month'},
    { planName: 'JioFiber', planDescription:' Connected living experiences with superfast home internet.1500/month'},
    { planName: 'Business', planDescription:'Enterprise-grade digital services to meet all your business needs.4000/month'},
    { planName: 'School', planDescription:'School Leval Plan. 2300 /month'}
  ]

  currentPlan: any = {
    planName: '',
    planDescription: '' 
  };

  currentPackage: string = '';
  currentSelectePackeg: string = '';
  currentSelectedPlan: string = "";
  isContinue: boolean = false;
  
  onContine() {
    this.isContinue = true;
    this.currentSelectePackeg = this.currentPackage;
  }

  setCurrentPlan (planData) {
    this.currentPlan = planData;
  }

  setSelectedPlan (planName) {
    this.currentSelectedPlan = planName;
  }


  // onMobileSelect() {
  //   this.currentSelectedPlan = "Mobile"
  // }

  // onFiberSelect() {
  //   this.currentSelectedPlan = "Fiber"
  // }
  // onBusinessSelect() {
  //   this.currentSelectedPlan = "Business"
  // }


}
