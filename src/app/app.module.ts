import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CompanyComponent } from './company/company.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule, BsDatepickerModule } from 'ngx-bootstrap';
import { MemberComponent } from './member/member.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { FundingComponent } from './funding/funding.component';
import { EditFundingComponent } from './edit-funding/edit-funding.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterFundingComponent } from './filter-funding/filter-funding.component';
import { ListFundingComponent } from './list-funding/list-funding.component';
import { EntryScreenComponent } from './entry-screen/entry-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      NavComponent,
      CompanyComponent,
      MemberComponent,
      AddCompanyComponent,
      FundingComponent,
      EditFundingComponent,
      SidebarComponent,
      FilterFundingComponent,
      ListFundingComponent,
      EntryScreenComponent,
      PageNotFoundComponent
   ],
   imports: [
      NgMultiSelectDropDownModule.forRoot(),
      AlertModule.forRoot(),
      FontAwesomeModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      TooltipModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['34.192.48.45:5000', '34.192.48.45:80'],
            blacklistedRoutes: ['']
         }
      }),
      ModalModule.forRoot(),
      CollapseModule.forRoot(),
      AccordionModule.forRoot(),
      BsDatepickerModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
