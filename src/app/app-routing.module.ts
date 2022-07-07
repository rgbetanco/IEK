import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { MemberComponent } from './member/member.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { FundingComponent } from './funding/funding.component';
import { EditFundingComponent } from './edit-funding/edit-funding.component';
import { FilterFundingComponent } from './filter-funding/filter-funding.component';
import { ListFundingComponent } from './list-funding/list-funding.component';
import { EntryScreenComponent } from './entry-screen/entry-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'company/:id', component: CompanyComponent },
  { path: 'members', component: MemberComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'funding/:id', component: FundingComponent},
  { path: 'edit/funding/:id/type/:type', component: EditFundingComponent },
  { path: 'filter/funding', component: FilterFundingComponent },
  { path: 'list/funding', component: ListFundingComponent },
  { path: 'entry/screen', component: EntryScreenComponent },
  { path: 'page/not/found', component: PageNotFoundComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }