import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { CompanyToSearch } from '../CompanyToSearch';
import { CompanyToList } from '../CompanyToList';
import { Paging } from '../Paging';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  modalRef: BsModalRef;

  compToSearch: CompanyToSearch = {
    PageNumber: 1,
    PageSize: 10,
    ToSearch: '',
    ArrangeFor: 'comp_id',
    Arrange: 'ASC'
  };

  compToList: CompanyToList[] = [];

  paging: Paging = {
    CurrentPage: 1,
    PageSize: 10,
    TotalCount: 10,
    TotalPages: 0,
  };

  constructor(private router: Router,
              private companyService: CompanyService,
              private modalService: BsModalService) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    this.getCompanies();

  }

  navigateToEdit(comp: CompanyToList) {
    this.router.navigate(['/company', JSON.stringify(comp)]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pageChanged(event: any): void {

    if (event <= this.paging.TotalCount) {

      this.paging.CurrentPage = event;
      this.getCompanies();

    }

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

      }

    );

  }

}
