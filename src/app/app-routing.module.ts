import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormCrudComponent } from './pages/crudSamples/reactive-form-crud/reactive-form-crud.component';
import { TemplateFormCrudComponent } from './pages/crudSamples/template-form-crud/template-form-crud.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { InlineEditingReactiveFormComponent } from './pages/inline-editing-reactive-form/inline-editing-reactive-form.component';
import { NgContentContainerOutletComponent } from './pages/ng-content-container-outlet/ng-content-container-outlet.component';
import { ServerSideFilterComponent } from './pages/server-side-filter/server-side-filter.component';
import { UsersComponent } from './pages/users/users.component';
import { JsonUserComponent } from './pages/json-user/json-user.component';
import { AgGridUseComponent } from './pages/ag-grid-use/ag-grid-use.component';
import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { CustomerListComponent } from './pages/crud_strategies/customer/customer-list/customer-list.component';
import { AddUpdateCustomerComponent } from './pages/crud_strategies/customer/add-update-customer/add-update-customer.component';
import { ViewCustomerComponent } from './pages/crud_strategies/customer/view-customer/view-customer.component';
import { ProductsComponent } from './pages/crud_strategies/product/products/products.component';
import { Employee2Component } from './pages/crud_strategies/employee/employee/employee.component';
import { DynamicTabSelectionComponent } from './pages/logicBuilding/dynamic-tab-selection/dynamic-tab-selection.component';
import { MultpleSelectionComponent } from './pages/logicBuilding/multple-selection/multple-selection.component';
import { JiraBoardComponent } from './pages/jira-board/jira-board.component';

const routes: Routes = [
  {
    path:'user',
    component: UsersComponent
  },
  {
    path:'employee',
    component: EmployeeComponent
  },
  {
    path:'serverSideFilter',
    component: ServerSideFilterComponent
  },
  {
    path:'inlineReactive',
    component: InlineEditingReactiveFormComponent
  },
  {
    path:'template-form',
    component: TemplateFormCrudComponent
  },
  {
    path:'reactive-form',
    component: ReactiveFormCrudComponent
  },
  {
    path:'ng-content-container-outlet',
    component: NgContentContainerOutletComponent
  },
  {
    path:'json-user',
    component: JsonUserComponent
  },
  {
    path:'ag-grid',
    component: AgGridUseComponent
  },
  {
    path:'content-projection',
    component: ContentProjectionComponent
  },

  {
    path:'customerList',
    component: CustomerListComponent
  },
  {
    path:'addUpdateCustomer/:id',
    component: AddUpdateCustomerComponent
  } ,
  {
    path:'viewCustomer/:id',
    component: ViewCustomerComponent
  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'employee2',
    component: Employee2Component
  },
  {
    path:'dynamic-tab',
    component: DynamicTabSelectionComponent
  },
  {
    path:'multple-selection',
    component: MultpleSelectionComponent
  },
  {
    path:'jira-board',
    component: JiraBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
