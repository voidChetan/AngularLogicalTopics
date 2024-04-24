import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab-selection',
  templateUrl: './dynamic-tab-selection.component.html',
  styleUrls: ['./dynamic-tab-selection.component.css']
})
export class DynamicTabSelectionComponent {

  tabsArray: any [] =[
    {tabName: 'Basic Details', isEnabled: true},
    {tabName: 'Project Details', isEnabled: false},
    {tabName: 'Family Details', isEnabled: true}
  ]

  activeTab: string = 'Basic';

  setSelectedTab(tab: any) {
    if(tab.isEnabled) {
      this.activeTab = tab.tabName;
    }
    
  }
  
}
