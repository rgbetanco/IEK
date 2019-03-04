import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CompanyComponent } from './company/company.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      NavComponent,
      CompanyComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      JwtModule.forRoot({
         config : {
            tokenGetter: () => {
               return localStorage.getItem('token');
             },
            whitelistedDomains: ['localhost:5000', 'localhost:4200'],
            blacklistedRoutes: ['']
         }
      }),
      ModalModule.forRoot(),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }