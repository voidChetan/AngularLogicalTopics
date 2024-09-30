import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTableComponent } from './reusable/my-table/my-table.component';
import { CustomInterceptor } from './core/interceptor/custom.interceptor';
import { ServerSideFilterComponent } from './pages/server-side-filter/server-side-filter.component';
import { InlineEditingReactiveFormComponent } from './pages/inline-editing-reactive-form/inline-editing-reactive-form.component';
import { TemplateFormCrudComponent } from './pages/crudSamples/template-form-crud/template-form-crud.component';
import { ReactiveFormCrudComponent } from './pages/crudSamples/reactive-form-crud/reactive-form-crud.component';
import { NgContentContainerOutletComponent } from './pages/ng-content-container-outlet/ng-content-container-outlet.component';
import { MyCardComponent } from './reusable/my-card/my-card.component'; 
import { HighLightDirective } from './shared/directives/high-light.directive'; 
import { AlertBoxComponent } from './reusable/alert-box/alert-box.component';
import { ListCardComponent } from './reusable/list-card/list-card.component';
import { JumbotronComponent } from './reusable/jumbotron/jumbotron.component';
import { MyButtonComponent } from './reusable/my-button/my-button.component';
import { MyTootipDirective } from './shared/directives/my-tootip.directive';
import { TolltipTemplateDirective } from './shared/directives/tolltip-template.directive';
import { JsonUserComponent } from './pages/json-user/json-user.component';
import { VoidTableComponent } from './reusable/void-table/void-table.component';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridUseComponent } from './pages/ag-grid-use/ag-grid-use.component';
import { ContentProjectionComponent } from './pages/content-projection/content-projection.component';
import { FormElementWrapperComponent } from './reusable/form-element-wrapper/form-element-wrapper.component';
import { CustomerListComponent } from './pages/crud_strategies/customer/customer-list/customer-list.component';
import { AddUpdateCustomerComponent } from './pages/crud_strategies/customer/add-update-customer/add-update-customer.component';
import { ViewCustomerComponent } from './pages/crud_strategies/customer/view-customer/view-customer.component';
import { ProductsComponent } from './pages/crud_strategies/product/products/products.component';
import { Employee2Component } from './pages/crud_strategies/employee/employee/employee.component';
import { ResizeDirective } from './shared/directives/resize.directive';
import { DynamicTabSelectionComponent } from './pages/logicBuilding/dynamic-tab-selection/dynamic-tab-selection.component';
import { MultpleSelectionComponent } from './pages/logicBuilding/multple-selection/multple-selection.component';
import { JiraBoardComponent } from './pages/jira-board/jira-board.component';
import { TreeComponent } from './pages/tree/tree.component';
import { OrganizationTreeComponent } from './reusable/organization-tree/organization-tree.component';
import { SubordinatesComponent } from './reusable/subordinates/subordinates.component';
import { InlineWithAPIComponent } from './pages/inlineEditing/inline-with-api/inline-with-api.component';
import { InlineBulkUpdateComponent } from './pages/inlineEditing/inline-bulk-update/inline-bulk-update.component';
import { ServerSidePaginationComponent } from './pages/server-side-pagination/server-side-pagination.component';
import { PlanSelectionComponent } from './pages/Logic-Development/plan-selection/plan-selection.component';
import { TrainBookingComponent } from './pages/Logic-Development/train-booking/train-booking.component';
import { MovieBookingComponent } from './pages/Logic-Development/movie-booking/movie-booking.component';
import { GrossaryCartComponent } from './pages/Logic-Development/grossary-cart/grossary-cart.component';
import { RegisterStudentComponent } from './pages/Logic-Development/register-student/register-student.component';
import { EncriptDecriptComponent } from './pages/Logic-Development/encript-decript/encript-decript.component';
 @NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EmployeeComponent,
    MyTableComponent,
    ServerSideFilterComponent,
    InlineEditingReactiveFormComponent,
    TemplateFormCrudComponent,
    ReactiveFormCrudComponent,
    NgContentContainerOutletComponent,
    MyCardComponent,
    HighLightDirective, 
    AlertBoxComponent,
    ListCardComponent,
    JumbotronComponent,
    MyButtonComponent,
    MyTootipDirective,
    TolltipTemplateDirective,
    JsonUserComponent,
    VoidTableComponent,
    AgGridUseComponent,
    ContentProjectionComponent,
    FormElementWrapperComponent,
    CustomerListComponent,
    AddUpdateCustomerComponent,
    ViewCustomerComponent,
    ProductsComponent,
    Employee2Component,
    ResizeDirective,
    DynamicTabSelectionComponent,
    MultpleSelectionComponent,
    JiraBoardComponent,
    TreeComponent,
    OrganizationTreeComponent,
    SubordinatesComponent,
    InlineWithAPIComponent,
    InlineBulkUpdateComponent,
    ServerSidePaginationComponent,
    PlanSelectionComponent,
    TrainBookingComponent,
    MovieBookingComponent,
    GrossaryCartComponent,
    RegisterStudentComponent,
    EncriptDecriptComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridAngular
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomInterceptor,
      multi:true
    }
  ],
  entryComponents:[
    UsersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
