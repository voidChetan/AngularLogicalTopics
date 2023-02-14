import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { InlineEditingReactiveFormComponent } from './pages/inline-editing-reactive-form/inline-editing-reactive-form.component';
import { ServerSideFilterComponent } from './pages/server-side-filter/server-side-filter.component';
import { UsersComponent } from './pages/users/users.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
