import { Component, OnInit, TemplateRef } from '@angular/core';
import { FundingToList } from '../FundingToList';
import { CompanyToSearch } from '../CompanyToSearch';
import { Paging } from '../Paging';
import { FundingService } from '../funding.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare let alertify: any;

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {

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

  gotopage = 1;

  paging: Paging = {
    CurrentPage: 1,
    PageSize: 10,
    TotalCount: 240,
    TotalPages: 0,
  };

  fundingToList: FundingToList[] = [];

  constructor(private modalService: BsModalService, private route: ActivatedRoute, private router: Router, private fundingService: FundingService, public jwtHelper: JwtHelperService,) { }

  ngOnInit() {

    this.compToSearch.ToSearch = this.route.snapshot.paramMap.get('id')

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

    this.getFunding();

  }

  navigateToEditFunding(id) {

    this.router.navigate(['/edit/funding', id, 'type', 0]);

  }

  navigateToAddFunding(id) {

    this.router.navigate(['/edit/funding', id, 'type', 1]);

  }

  pageChanged(event: any): void {

    if (event.page <= this.paging.TotalCount) {

      this.paging.CurrentPage = event.page;
      this.getFunding();

    }

  }

  goToPage(): void {

    this.paging.CurrentPage = this.gotopage;
    this.getFunding();

}

  changeArrange(field: string) {

    this.compToSearch.ArrangeFor = field;

    if (this.compToSearch.Arrange === 'ASC') {

      this.compToSearch.Arrange = 'DESC';

    } else {

      this.compToSearch.Arrange = 'ASC';

    }

    this.getFunding();

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteFunding(id) {
      this.fundingService.deleteFunding(id).subscribe(
        returned => {
          if (returned['r'] === 0) {
            this.modalRef.hide();
            this.getFunding();
          }
        }
      );
  }

  getFunding() {

    this.compToSearch.PageSize = this.paging.PageSize;
    this.compToSearch.PageNumber = this.paging.CurrentPage;

    this.fundingService.getFunding(this.compToSearch).subscribe(

      funding => {

        this.fundingToList.splice(0, this.paging.PageSize);
        funding['result'].forEach(funding => this.fundingToList.push(<FundingToList>funding));

        this.paging.CurrentPage = funding['paging']['CurrentPage'];
        this.paging.TotalCount = funding['paging']['TotalCount'];
        this.paging.PageSize = funding['paging']['PageSize'];
        this.paging.TotalPages = funding['paging']['TotalPages'];

      },
      error => {
        alertify.error('Error: Network');
      }

    );

  }

}
