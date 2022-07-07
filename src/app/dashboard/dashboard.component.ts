import { Component, OnInit, TemplateRef, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { CompanyToSearch } from '../CompanyToSearch';
import { CompanyToList } from '../CompanyToList';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Paging } from '../Paging';
import { MemberService } from '../member.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { environment } from 'src/environments/environment';
import { faUserCheck, faBuilding, faUserTimes, faExclamationCircle, faMoneyBillAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';


declare let alertify: any;
alertify.set('notifier','position', 'top-center');

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})

export class DashboardComponent implements OnInit, OnChanges {

  companyDownloadUrl = environment.companyDownloadURL;

  //icon
  faUserTimes = faUserTimes;
  // 公司資料來源 - source
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  
  //產業類別 - industry
  dropdownListIndustry = [];
  selectedItemsIndustry = [];
  dropdownSettingsIndustry: IDropdownSettings = {};
  
  @Output() statusChanged = new EventEmitter<Number>();
  
  menuNeedRefresh = 0;
  status = 0;

  fullscreen = "col-10"
  showMenu = true

  writePermission = 0;
  adminPermission = 0;
  decodedData = '';
  modalRef: BsModalRef;

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

  companyStatus = -1

  compToList: CompanyToList[] = [];
  gotopage = 1;

  paging: Paging = {
    CurrentPage: 1,
    PageSize: 10,
    TotalCount: 240,
    TotalPages: 0,
  };

  confirmedClass = 'table-success';

  minPDate = new Date(2017, 5, 10);
  maxPDate = new Date(2018, 9, 15);
  minCDate = new Date(2017, 5, 10);
  maxCDate = new Date(2018, 9, 15);
  _bsValue: Date;
  initDate = "";
  endDate = "";

  dateToFilter = 0                // 1 = approved, 2 = done (updated)

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
    
    this.getCompanies(this.companyStatus);
    
  }

  cleanValues() {
    this.dateToFilter = 0;
    this.initDate = "";
    this.endDate = "";
  }

  ngOnChanges(changes) {
    console.log("changes")
  }

  toggleMenu() {
    if (this.showMenu) {
      this.showMenu = false
      this.fullscreen = "col-12"
    } else {
      this.showMenu = true
      this.fullscreen = "col-10"
    }
  }
  
  ngOnInit() {

    this.getCountCompIndustry()

    this.dropdownList = [
      { item_id: 1, item_text: '財政部財資中心' },
      { item_id: 2, item_text: '104 人力銀行' },
      { item_id: 3, item_text: 'Yourator' },
      { item_id: 4, item_text: '其他' }
    ];
    this.selectedItems = []
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    this.companyStatus = +localStorage.getItem('companyListStatus');

    this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if (this.decodedData['data']['permission'] > 807) {
      this.adminPermission = 1;
    }

    if (this.decodedData['data']['permission'] > 295) {
      this.writePermission = 1;
    }

    this.getCompanies(this.companyStatus);

  }
// COMPANY SOURCE
  onItemSelect(item: any) {
    this.selectedItemsIndustry = []
    this.cleanValues();
    this.getCompanies(this.companyStatus);
  }
  onSelectAll(items: any) {
    this.selectedItemsIndustry = []
    this.cleanValues();
    this.getCompanies(this.companyStatus);
  }
// COMPANY INDUSTRY
  onItemIndustrySelect(item: any) {
    this.selectedItems = []
    this.cleanValues();
    this.getCompanies(this.companyStatus);
  }
  onSelectIndustryAll(items: any) {
    this.selectedItems = []
    this.cleanValues();
    this.getCompanies(this.companyStatus);
  }

  deleteCompany(id) {

    this.modalRef.hide();
    this.companyService.deleteCompany(id).subscribe(
      response => {
        alertify.success('刪除成功');
        this.getCompanies(this.companyStatus);
      }, error => {
        alertify.error('網路或伺服器連接失敗');
      }
    );
  }

  clearConfirmedCompany() {

    this.modalRef.hide();

    this.companyService.clearconfirmedCompany().subscribe (

      returned => {

        if ( returned['r'] === 0) {

          this.getCompanies(this.companyStatus);
          alertify.success('保留成功');

        } else {
          alertify.error('網路或伺服器連接失敗');
        }
      }, error => {

        alertify.error('網路或伺服器連接失敗');

      }
    );
  }

  goToPageNotFound() {
    this.router.navigate(['/page/not/found']);
  }

  confirmCompanyKeep(id) {
    this.menuNeedRefresh = 0;
    this.modalRef.hide();
    this.companyService.confirmCompany(id, 2).subscribe(

      returned => {
        if (returned['r'] === 0) {
          this.getCompanies(this.companyStatus);
          this.menuNeedRefresh = 1;
          this.statusChanged.emit(this.companyStatus);
          alertify.success('保留成功');
        } else {
          alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        }
      }, error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    );
  }

  confirmCompany(id) {
    this.menuNeedRefresh = 0;
    this.modalRef.hide();
    this.companyService.confirmCompany(id, 3).subscribe(

      returned => {

        if (returned['r'] === 0) {
          this.menuNeedRefresh = 1;
          this.statusChanged.emit(this.companyStatus);
          this.getCompanies(this.companyStatus);
          alertify.success('保留成功');
        } else {
          alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        }

      }, error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    );
  }

  navigateToEdit(comp: CompanyToList) {
    this.router.navigate(['/company', comp.id]);
  }

  navigateToFunding(id) {
    this.router.navigate(['/funding', id]);
  }

  navigateToAdd() {
    this.router.navigate(['/add-company']);
    this.getCompanies(this.companyStatus);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pageChanged(event: any): void {

    if (event.page <= this.paging.TotalCount) {

      this.paging.CurrentPage = event.page;
      this.getCompanies(this.companyStatus);

    }

  }

  goToPage(): void {

      this.paging.CurrentPage = this.gotopage;
      this.getCompanies(this.companyStatus);

  }

  changeArrange(field: string) {

    this.compToSearch.ArrangeFor = field;
    if (this.compToSearch.Arrange === 'ASC') {
      this.compToSearch.Arrange = 'DESC';
    } else {
      this.compToSearch.Arrange = 'ASC';
    }

    this.getCompanies(this.companyStatus);

  }

  doSearch() {

    this.paging = {
      CurrentPage: 1,
      PageSize: 10,
      TotalCount: 0,
      TotalPages: 0,
    };

    this.getCompanies(this.companyStatus);

  }

  getCompanies(status) {
    this.compToSearch.PageSize = this.paging.PageSize;
    this.compToSearch.PageNumber = this.paging.CurrentPage;
    this.compToSearch.Status = status;

    this.compToSearch.Filter.companySource = []
    this.compToSearch.Filter.companyIndustry = []
    this.compToSearch.Filter.approvedDate = []
    this.compToSearch.Filter.updatedDate = []

    if (this.selectedItems.length > 0) {
      this.selectedItems.forEach(element => {
        this.compToSearch.Filter.companySource.push(element.item_id)
      });
    }

    if (this.selectedItemsIndustry.length > 0) {
      this.selectedItemsIndustry.forEach(element => {
        let indexOfParenthesis = element.item_text.indexOf("(")
        this.compToSearch.Filter.companyIndustry.push(element.item_text.substring(0, indexOfParenthesis))
      })
    }

    if (this.dateToFilter > 0) {
      if (this.dateToFilter == 1) {
        this.compToSearch.Filter.approvedDate.push(this.initDate)
        this.compToSearch.Filter.approvedDate.push(this.endDate)
      }

      if (this.dateToFilter == 2) {
        this.compToSearch.Filter.updatedDate.push(this.initDate)
        this.compToSearch.Filter.updatedDate.push(this.endDate)
      }
    }
    // if (filterArray.length > 0) {
    //   this.compToSearch.Filter = "{"
    // }
    // if (filterArray['companySource'] && filterArray['companySource'].length > 0) {
    //   this.compToSearch.Filter += "companySource:"+JSON.stringify(filterArray['companySource'])
    // }

    // if (filterArray['companyIndustry'] && filterArray['companyIndustry'].length > 0) {
    //   this.compToSearch.Filter += "companyIndustry:"+JSON.stringify(filterArray['companyIndustry'])
    // }

    // if (filterArray['approvedDate']) {
    //   this.compToSearch.Filter += "approvedDate:["+filterArray['approvedDate']['init']+","+filterArray['approvedDate']['end']+"]"
    // }

    // if (filterArray['updatedDate']) {
    //   this.compToSearch.Filter += "updatedDate:["+filterArray['updatedDate']['init']+","+filterArray['updatedDate']['end']+"]"
    // }

    // if (filterArray.length > 0) {
    //   this.compToSearch.Filter += "}"
    // }

    //console.log(this.compToSearch.Filter)

    this.companyService.listCompany(this.compToSearch, status).subscribe(

      companies => {

        this.compToList.splice(0, this.paging.PageSize);
        companies['companies'].forEach(company => this.compToList.push(<CompanyToList>company));

        this.paging.CurrentPage = companies['paging']['CurrentPage'];
        this.paging.TotalCount = companies['paging']['TotalCount'];
        this.paging.PageSize = companies['paging']['PageSize'];
        this.paging.TotalPages = companies['paging']['TotalPages'];

      },
      error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }

    );

  }

  getCountCompIndustry() {
    let tmp = [];
    this.companyService.countCompIndustry().subscribe(result => {
      result.forEach(element => {
        tmp.push(
          { item_id: element.item_id, item_text: element.item_text }
        )
      });
      this.dropdownListIndustry = tmp;
    })
  }

  updateStatusListener(newStatus) {
    this.companyStatus = newStatus;
    localStorage.setItem('companyListStatus', newStatus)
    this.getCompanies(this.companyStatus)
  }

  get bsValue(): Date {
    return this._bsValue;
  }
 
  set bsValue(v: Date) {
    console.log(v);
    this._bsValue = v;
  }
 
  _bsRangePValue: any = [null, null];
  get bsRangePValue(): any {
    return this._bsRangePValue;
  }
 
  set bsRangePValue(v: any) {
    this._bsRangePValue = v;
  }

  _bsRangeCValue: any = [null,null];
  get bsRangeCValue(): any {
    return this._bsRangeCValue;
  }
 
  set bsRangeCValue(v: any) {
    this._bsRangeCValue = v;
  }
// APPROVED DATE
  processCDate(newDate) {
    this.bsRangePValue = [null, null];
    this.cleanValues();
    let initCDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
    let endCDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
    this.initDate = initCDate;
    this.endDate = endCDate;
    this.dateToFilter = 1
    this.getCompanies(this.companyStatus)
  }
// DONE ( UPDATE ) DATE
  processPDate(newDate) {
    this.bsRangeCValue = [null, null];
    this.cleanValues();
    let initPDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
    let endPDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
    this.initDate = initPDate;
    this.endDate = endPDate;
    this.dateToFilter = 2
    this.getCompanies(this.companyStatus)
  }

}
