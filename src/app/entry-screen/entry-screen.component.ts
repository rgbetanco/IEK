import { Component, OnInit } from '@angular/core';
import { CountMenu } from '../CountMenu';
import { Router } from '@angular/router';
import { FundingService } from '../funding.service';
import { CompanyService } from '../company.service';
declare let alertify: any;
alertify.set('notifier','position', 'top-center');

@Component({
  selector: 'app-entry-screen',
  templateUrl: './entry-screen.component.html',
  styleUrls: ['./entry-screen.component.css']
})
export class EntryScreenComponent implements OnInit {

  status = 0;

  countMenu: CountMenu = {
    notProcessed: 0,
    edited: 0,
    toKeep: 0,
    ready: 0,
    unknown: 0,
    notFound: 0
  };

  companyCount: any = {
    scrapped: 0,
    ready: 0,
    keep: 0,
    notscrapped: 0
  }

  ReadyAndToKeep = 0;

  constructor(
    private router: Router,
    private fundingService: FundingService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('status')) {
      this.status = +localStorage.getItem('status');
    }
    this.getCountFunding();
    this.getCountCompany();
  }

  goToCompanyList(companyStatus) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      localStorage.setItem('companyListStatus', companyStatus)
      this.router.navigate(['/dashboard'])
    }
  }

  goToPageNotFound() {
    this.router.navigate(['/page/not/found']);
  }

  getCountFunding() {
    this.fundingService.countFunding()
      .subscribe(
        count => {
          this.countMenu = <CountMenu>count;
          this.ReadyAndToKeep = this.countMenu.ready + this.countMenu.toKeep;
        }, error => {
          alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      });
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

  goToFunding(newStatus) {
    localStorage.setItem('status', newStatus);
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/filter/funding']);
    }
  }

}
