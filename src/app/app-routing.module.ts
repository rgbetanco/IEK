import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { MemberComponent } from './member/member.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { FundingComponent } from './funding/funding.component';
import { EditFundingComponent } from './edit-funding/edit-funding.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'company/:id', component: CompanyComponent },
  { path: 'members', component: MemberComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'funding/:id', component: FundingComponent},
  { path: 'edit/funding/:id/type/:type', component: EditFundingComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }