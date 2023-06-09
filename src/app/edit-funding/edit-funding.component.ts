import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundingToList } from '../FundingToList';
import { FundingService } from '../funding.service';
import { CompanyService } from '../company.service';
import { CompanyToSearch } from '../CompanyToSearch';
import { CompanyToList } from '../CompanyToList';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { faUserCheck, faBuilding, faUserTimes, faExclamationCircle, faMoneyBillAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';

declare let alertify: any;
alertify.set('notifier', 'position', 'top-center');

@Component({
  selector: 'app-edit-funding',
  templateUrl: './edit-funding.component.html',
  styleUrls: ['./edit-funding.component.css']
})
export class EditFundingComponent implements OnInit {

  // icons
  faUserCheck = faUserCheck;
  faBuilding = faBuilding;
  faUserTimes = faUserTimes;
  faExclamationCircle = faExclamationCircle;
  faMoneyBillAlt = faMoneyBillAlt;
  faUserEdit = faUserEdit;

  private subscription: Subscription;
  modalRef: BsModalRef;
  error: Boolean = false;
  errorMessage = '';

  companyToAdd: CompanyToList = {
    id: '0',
    comp_banno: '0',
    comp_industry: '',
    comp_location: '',
    comp_name: '',
    comp_tel: '',
    comp_area: '',
    comp_fax: '',
    comp_url: '',
    comp_amount: '',
    comp_extra_url: '',
    comp_employee: '',
    comp_contact: '',
    comp_tag: '',
    comp_desc: '',
    comp_media_report: '',
    comp_business: '',
    comp_createdate: '',
    done: '0',
    confirmed: 0,
    comp_keyword: '',
    extra: '',
    representative: '',
    approved_date: '',
    capital: 0,
    location: '',
    established_date: ''
  };

  FundingToList: FundingToList = {
    id: '0',
    article_id: '',
    comp_id: 0,
    company_name: '',
    address: '',
    investment_type: '',
    announced_on: '',
    raised_amount: '',
    raised_currency_code: '',
    post_amount: '',
    post_currency_code: '',
    capital_sought_amount: '',
    capital_sought_currency_code: '',
    investor_count: '',
    investor_names: '',
    url: '',
    created: '',
    updated: '',
    s_name: '',
    author: '',
    title: '',
  };

  compToSearch: CompanyToSearch = {
    PageNumber: 1,
    PageSize: 10,
    ToSearch: '',
    ArrangeFor: 'id',
    Arrange: 'ASC',
    Filter: {
      companySource: [],
      companyIndustry: [],
      approvedDate: [],
      updatedDate: []
    },
    Status: 0
  };

  id = 0
  type = 0;

  constructor(private activatedRoute: ActivatedRoute, private fundingService: FundingService, private companyService: CompanyService, private modalService: BsModalService) { }

  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe(
      param => {
        this.id = param['id'];
        this.type = param['type'];  // 1 = add, 0 = edit
        if (this.type < 1) {
          this.getFunding();
        } else {
          this.FundingToList.comp_id = this.id
        }
      }
    );
  }

  addCompany() {
    this.companyService.addCompany(this.companyToAdd).subscribe(
      returned => {
        this.FundingToList.comp_id = returned['r'];
        this.modalRef.hide();
      }, error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    )
  }

  generateCompanyId() {
    this.companyToAdd.comp_banno = this.companyService.generateCompanyId();
  }

  searchCompanyKeyword() {
    let companyStatus = +localStorage.getItem('companyListStatus');
    this.companyService.listCompany(this.compToSearch, companyStatus).subscribe(
      returned => {
        if (returned) {
          this.FundingToList.comp_id = returned['companies'][0]['id'];
          this.modalRef.hide();
        } else {
          this.error = true;
          this.errorMessage = returned['m'];
        }
      }
    )
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);

  }

  actionFunding(toKeep) {
    if (this.type < 1) {
      this.editFunding()
    } else {
      this.addFunding()
    }

    if (toKeep == 1) {
      localStorage.setItem('status', '2')
      this.updateStatus(2);
    } else {
      localStorage.setItem('status', '1');
      this.updateStatus(1);
    }
  }

  updateStatus(newStatus) {
    this.fundingService.changeFundingStatus(+this.FundingToList.id, newStatus).subscribe(
      result => {
        if (result['r'] === 0) {
          alertify.success('保留成功');
        } else {
          alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        }
      }, error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    )
  }

  addFunding() {
    this.fundingService.addFunding(this.FundingToList).subscribe(
      returned => {
        if (returned['r'] === 0) {
          this.modalRef.hide();
          window.history.back();
        } else {
          this.error = true;
          this.errorMessage = returned['m'];
        }
      }
    );
  }

  editFunding() {
    this.fundingService.editFunding(this.FundingToList).subscribe(
      returned => {

        if (returned['r'] === 0) {

          this.modalRef.hide();
          window.history.back();

        } else {

          this.error = true;
          this.errorMessage = returned['m'];

        }

      },
      error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    );
  }

  goBack() {
    window.history.back();
  }

  getFunding() {

    this.fundingService.getFundingById(this.id).subscribe(

      funding => {

        funding['result'].forEach(
          funding => {
            this.FundingToList = <FundingToList>funding
          }
        );

      },
      error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }

    );

  }

}
