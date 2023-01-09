import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path:'user',
    component: UsersComponent
  },
  {
    path:'employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
