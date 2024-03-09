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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
