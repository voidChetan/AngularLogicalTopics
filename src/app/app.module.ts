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
import { MyTooltipDirective } from './shared/directives/my-tooltip.directive';
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
    MyTooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
