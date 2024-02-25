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
    AgGridUseComponent
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
