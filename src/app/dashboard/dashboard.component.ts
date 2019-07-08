import { Component, OnInit, TemplateRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { CompanyToSearch } from '../CompanyToSearch';
import { CompanyToList } from '../CompanyToList';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Paging } from '../Paging';
import { MemberService } from '../member.service';
import { JwtHelperService } from '@auth0/angular-jwt';
declare let alertify: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  writePermission = 0;
  adminPermission = 0;
  decodedData = '';
  modalRef: BsModalRef;

  compToSearch: CompanyToSearch = {
    PageNumber: 1,
    PageSize: 10,
    ToSearch: '',
    ArrangeFor: 'id',
    Arrange: 'ASC'
  };

  compToList: CompanyToList[] = [];
  gotopage = 1;

  paging: Paging = {
    CurrentPage: 1,
    PageSize: 10,
    TotalCount: 240,
    TotalPages: 0,
  };

  confirmedClass = 'table-success';

  constructor(private router: Router,
              private companyService: CompanyService,
              private memberService: MemberService,
              public jwtHelper: JwtHelperService,
              private modalService: BsModalService) { }
  
  OnChanges(clearSearch: boolean) {

    this.compToSearch.ToSearch = '';
    this.compToSearch.PageNumber = 1;
    this.compToSearch.PageSize = 10;
    this.compToSearch.ToSearch = '';
    this.compToSearch.ArrangeFor = 'id';
    this.compToSearch.Arrange = 'ASC';
    
    this.getCompanies();
    
  }
  
  ngOnInit() {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if (this.decodedData['data']['permission'] > 807) {
      this.adminPermission = 1;
    }

    if (this.decodedData['data']['permission'] > 295) {
      this.writePermission = 1;
    }

    this.getCompanies();

  }

  deleteCompany(id) {

    this.modalRef.hide();
    this.companyService.deleteCompany(id).subscribe(
      response => {
        alertify.success('Recorded deleted');
        this.getCompanies();
      }, error => {
        alertify.error('Error deleting the company');
      }
    );
  }

  clearConfirmedCompany() {

    this.modalRef.hide();

    this.companyService.clearconfirmedCompany().subscribe (

      returned => {

        if ( returned['r'] === 0) {

          this.getCompanies();
          alertify.success('Company confirmed flag cleared');

        } else {

          alertify.error('Error confirming the company');

        }
      }, error => {

        alertify.error('Network error');

      }
    );
  }

  confirmCompany(id) {

    this.modalRef.hide();

    this.companyService.confirmCompany(id).subscribe(

      returned => {

        if ( returned['r'] === 0) {

          this.getCompanies();
          alertify.success('Company confirmed to be sent');

        } else {

          alertify.error('Error confirming the company');

        }

      }, error => {

        alertify.error('Network error');

      }
    );
  }

  navigateToEdit(comp: CompanyToList) {
    this.router.navigate(['/company', comp.id]);
  }

  navigateToAdd() {
    this.router.navigate(['/add-company']);
    this.getCompanies();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pageChanged(event: any): void {

    if (event.page <= this.paging.TotalCount) {

      this.paging.CurrentPage = event.page;
      this.getCompanies();

    }

  }

  goToPage(): void {

      this.paging.CurrentPage = this.gotopage;
      this.getCompanies();

  }

  changeArrange(field: string) {

    this.compToSearch.ArrangeFor = field;

    if (this.compToSearch.Arrange === 'ASC') {

      this.compToSearch.Arrange = 'DESC';

    } else {

      this.compToSearch.Arrange = 'ASC';

    }

    this.getCompanies();

  }

  doSearch() {

    this.paging = {
      CurrentPage: 1,
      PageSize: 10,
      TotalCount: 0,
      TotalPages: 0,
    };

    this.getCompanies();

  }

  getCompanies() {

    this.compToSearch.PageSize = this.paging.PageSize;
    this.compToSearch.PageNumber = this.paging.CurrentPage;

    this.companyService.listCompany(this.compToSearch).subscribe(

      companies => {

        this.compToList.splice(0, this.paging.PageSize);
        companies['companies'].forEach(company => this.compToList.push(<CompanyToList>company));

        this.paging.CurrentPage = companies['paging']['CurrentPage'];
        this.paging.TotalCount = companies['paging']['TotalCount'];
        this.paging.PageSize = companies['paging']['PageSize'];
        this.paging.TotalPages = companies['paging']['TotalPages'];

      },
      error => {
        alertify.error('Error: Network');
      }

    );

  }

}
