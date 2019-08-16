import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundingToList } from '../FundingToList';
import { FundingService } from '../funding.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
declare let alertify: any;

@Component({
  selector: 'app-edit-funding',
  templateUrl: './edit-funding.component.html',
  styleUrls: ['./edit-funding.component.css']
})
export class EditFundingComponent implements OnInit {

  private subscription: Subscription;
  modalRef: BsModalRef;
  error: Boolean = false;
  errorMessage = '';

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
    updated: ''
  };

  id = 0
  type = 0;

  constructor(private activatedRoute: ActivatedRoute, private fundingService: FundingService, private modalService: BsModalService) { }

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

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);

  }

  actionFunding() {
    if (this.type < 1 ) {
      this.editFunding()
    } else {
      this.addFunding()
    }
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
        alertify.error('Error: Network or possibly duplicated record');
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
        alertify.error('Error: Network');
      }

    );

  }
  
}
