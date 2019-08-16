import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyService } from '../company.service';
import { CompanyToList } from '../CompanyToList';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';
declare let alertify: any;
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  decodedData = '';
  writePermission = 0;
  error: Boolean = false;
  errorMessage = '';

  modalRef: BsModalRef;

  private subscription: Subscription;

  company_id: number;

  companyToEdit: CompanyToList = {
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
    extra:''
  };

  constructor ( private activatedRoute: ActivatedRoute,
                private compService: CompanyService,
                private _location: Location,
                public jwtHelper: JwtHelperService,
                private modalService: BsModalService) {

   }

   openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);

  }

  ngOnInit() {

    this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if (this.decodedData['data']['permission'] > 295) {
      this.writePermission = 1;
    } else {
      this._location.back();
    }

    this.subscription = this.activatedRoute.params.subscribe (

      param => {

        this.company_id = param['id'];
        this.getCompany();
      }

    );
  }

  getCompany() {

    this.compService.getCompany(this.company_id).subscribe (
      company => {
         this.companyToEdit =  <CompanyToList>company[0];
      }

    );

  }

  goBack() {
    window.history.back();
  }

  editCompany() {

    this.compService.editCompany(this.companyToEdit).subscribe (

      returned => {

        if (returned['r'] === 0) {

          this.modalRef.hide();
          window.location.reload();

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
}
