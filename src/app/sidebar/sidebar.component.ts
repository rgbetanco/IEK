import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FundingService } from '../funding.service';
import { CompanyService } from '../company.service';
import { CountMenu } from '../CountMenu';
import { faUserCheck, faBuilding, faUserTimes, faExclamationCircle, faMoneyBillAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
declare let alertify: any;
alertify.set('notifier','position', 'top-center');

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() needRefresh = 0;
  @Output() statusChanged = new EventEmitter<Number>();

  status = -1;
  companyStatus = -1
  // icons
  faUserCheck = faUserCheck;
  faBuilding = faBuilding;
  faUserTimes = faUserTimes;
  faExclamationCircle = faExclamationCircle;
  faMoneyBillAlt = faMoneyBillAlt;
  faUserEdit = faUserEdit;

  companyCount: any = {
    scrapped: 0,
    ready: 0,
    keep: 0,
    notscrapped: 0
  }

  countMenu: CountMenu = {
    notProcessed: 0,
    edited: 0,
    toKeep: 0,
    ready: 0,
    unknown: 0,
    notFound: 0
  };

  constructor(
    private router: Router,
    private fundingService: FundingService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('status')) {
      this.status = +localStorage.getItem('status');
    }

    if (localStorage.getItem('companyListStatus')) {
      this.companyStatus = +localStorage.getItem('companyListStatus')
    }

    this.getCountFunding()
    this.getCountCompany()
  }

  goToPageNotFound() {
    this.router.navigate(['/page/not/found']);
  }

  ngOnChanges(changes) {
    this.status = this.needRefresh;
    this.getCountFunding();
    this.getCountCompany();
  }

  goToCompanyList(companyStatus) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.status = -1
      this.companyStatus = companyStatus
      localStorage.setItem('companyListStatus', companyStatus)
      this.statusChanged.emit(companyStatus);
      this.router.navigate(['/dashboard'])
    }
  }

  getCountCompany() {
    this.companyService.countCompany().subscribe(
      count => {
        this.companyCount.scrapped = count.scrapped
        this.companyCount.keep = count.keep
        this.companyCount.ready = count.ready
        this.companyCount.notscrapped = count.notScrapped
      }, error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁')
      }
    )
  }

  goToFilterFunding(status) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.companyStatus = -1
      this.status = status;
      this.statusChanged.emit(status);
      this.router.navigate(['/filter/funding']);
    }
  }

  getCountFunding() {
    this.fundingService.countFunding()
      .subscribe(
        count => {
          this.countMenu = <CountMenu>count;
        }, error => {
          alertify.error('Error: Network');
        });

  }

}
