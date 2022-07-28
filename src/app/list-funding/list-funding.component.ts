import { Component, OnInit, Input, OnChanges, SimpleChange, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FundingToSearch } from '../FundingToSearch';
import { Router } from '@angular/router';
import { FundingService } from '../funding.service';
import { Paging } from '../Paging';
import { ArticleFundingToList } from '../ArticleFundingToList';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { JwtHelperService } from '@auth0/angular-jwt';
import { faUserCheck, faBuilding, faUserTimes, faExclamationCircle, faMoneyBillAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
//import { Console } from 'console';

declare let alertify: any;
alertify.set('notifier','position', 'top-center');

@Component({
  selector: 'app-list-funding',
  templateUrl: './list-funding.component.html',
  styleUrls: ['./list-funding.component.css']
})
export class ListFundingComponent implements OnInit, OnChanges {

  // icons
  faUserCheck = faUserCheck;
  faBuilding = faBuilding;
  faUserTimes = faUserTimes;
  faExclamationCircle = faExclamationCircle;
  faMoneyBillAlt = faMoneyBillAlt;
  faUserEdit = faUserEdit;

  @Input() compIndustry: {item_id: number, item_text: string}[];
  @Input() cityCountry: string;
  @Input() toSearch: string;
  @Input() initDate: string;
  @Input() endDate: string;
  @Input() dateField: string;
  @Input() sname: string;
  @Input() status: number = +localStorage.getItem('status');

  @Output() statusChanged = new EventEmitter<Number>();

  fundingToSearch: FundingToSearch = {
    compIndustry: [],
    PageNumber: 1,
    PageSize: 10,
    ToSearch: '',
    ArrangeFor: 'funding.id',
    Arrange: 'ASC',
    InitDate: '',
    EndDate: '',
    DateField: '',
    SName: '',
    Status: +localStorage.getItem('status')
  };

  articleFundingToList: ArticleFundingToList[] = []
  selectedArticleFunding: ArticleFundingToList;
  gotopage = 1;

  paging: Paging = {
    CurrentPage: 1,
    PageSize: 10,
    TotalCount: 240,
    TotalPages: 0,
  };

  writePermission = 0;
  adminPermission = 0;
  decodedData = '';

  modalRef: BsModalRef;

  idSelected: String = '0';

  constructor(
    private router: Router,
    private fundingService: FundingService,
    public jwtHelper: JwtHelperService,
    private modalService: BsModalService
  ) { }

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

    // if (localStorage.getItem('status')) {
    //   this.status = +localStorage.getItem('status');
    // }

    this.getList(this.status);
    this.getDownloadableFunding();
  }

  setSelectedArticleFunding() {
    this.articleFundingToList.forEach(element => {
      if (element.id == this.idSelected) {
        this.selectedArticleFunding = element;    
      }
    });
  }

  openModal(template: TemplateRef<any>, id: String) {
    this.idSelected = id;
    this.setSelectedArticleFunding();
    this.modalRef = this.modalService.show(template);
  }

  ngOnChanges(changes) {
    this.fundingToSearch.compIndustry = [];
    this.fundingToSearch.ToSearch = "";
    this.fundingToSearch.InitDate = "";
    this.fundingToSearch.EndDate = "";
    this.fundingToSearch.DateField = "";
    if (this.compIndustry.length > 0) {
      
      this.compIndustry.forEach(element => {
        let indexOfParenthesis = element.item_text.indexOf("(")
        this.fundingToSearch.compIndustry.push(element.item_text.substring(0, indexOfParenthesis))
      })

      //console.log(this.fundingToSearch.compIndustry)
      
    }
    if (this.cityCountry) {
      this.fundingToSearch.ToSearch = this.cityCountry;
    } else if (this.sname) {
      this.fundingToSearch.SName = this.sname;
    } else if (this.toSearch) {
      this.fundingToSearch.ToSearch = this.toSearch;
    }
    if (this.initDate && this.endDate && this.dateField) {
      this.fundingToSearch.InitDate = this.initDate;
      this.fundingToSearch.EndDate = this.endDate;
      this.fundingToSearch.DateField = this.dateField;
    }
    
    this.getList(this.status);
    
  }

  pageChanged(event: any): void {

    if (event.page <= this.paging.TotalCount) {

      this.paging.CurrentPage = event.page;
      this.getList(this.status);

    }

  }

  goToPage(): void {

      this.paging.CurrentPage = this.gotopage;
      this.getList(this.status);

  }

  navigateToEdit(id) {
    localStorage.setItem('status', ''+this.status);
    this.router.navigate(['/edit/funding', id, 'type', 0]);
  }

  changeArrange(field: string) {

    this.fundingToSearch.ArrangeFor = field;

    if (this.fundingToSearch.Arrange === 'ASC') {

      this.fundingToSearch.Arrange = 'DESC';

    } else {

      this.fundingToSearch.Arrange = 'ASC';

    }

    this.getList(this.status);

  }

  getDownloadableFunding() {
    this.fundingService.fundingDownload().subscribe();
  }

  getList(status) {
    // console.log(status);
    this.fundingToSearch.Status = status;
    this.fundingToSearch.PageSize = this.paging.PageSize;
    this.fundingToSearch.PageNumber = this.paging.CurrentPage;

    this.fundingService.getFundingList(this.fundingToSearch).subscribe(

      funding => {

        this.articleFundingToList.splice(0, this.paging.PageSize);
        funding['funding'].forEach(fund => this.articleFundingToList.push(<ArticleFundingToList>fund));

        this.paging.CurrentPage = funding['paging']['CurrentPage'];
        this.paging.TotalCount = funding['paging']['TotalCount'];
        this.paging.PageSize = funding['paging']['PageSize'];
        this.paging.TotalPages = funding['paging']['TotalPages'];

      },
      error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }

    );
  }

  deleteFunding() {
    this.fundingService.deleteFunding(+this.idSelected).subscribe(result => {
      if (result['r'] === 0) {
        this.statusChanged.emit(0);
        this.getList(this.fundingToSearch.Status);
        alertify.success('刪除成功');
      } else {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    }, error => {
      alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
    });
    this.modalRef.hide();
  }

  changeStatus(newStatus: number) {
    this.modalRef.hide();
    this.status = newStatus;
    this.fundingService.changeFundingStatus(+this.idSelected, newStatus).subscribe(
      result => {
        if ( result['r'] === 0) {
          this.statusChanged.emit(newStatus);
          this.getList(newStatus);
          alertify.success('發送成功');
        } else {
          alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        }
      }, error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    )
  }

  goToUrl(): void {
    window.open(this.selectedArticleFunding.url, '_blank');
  }

}
