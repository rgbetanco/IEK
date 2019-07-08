import { Component, OnInit, TemplateRef } from '@angular/core';
import { CompanyToList } from '../CompanyToList';
import { CompanyService } from '../company.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare let alertify: any;

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  error: Boolean = false;
  errorMessage = '';

  modalRef: BsModalRef;

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
    extra:''
  };

  constructor(private compService: CompanyService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);

  }

  addCompany() {

    this.compService.addCompany(this.companyToAdd).subscribe(
      returned => {
        
          this.modalRef.hide();
          window.history.back();
      
      }, error => {
        alertify.error('Error: Network or possibly duplicated record');
      }
    )

  }

  goBack() {
    window.history.back();
  }

}
