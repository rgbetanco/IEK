import { Component, OnInit, Input } from '@angular/core';
import { FundingService } from '../funding.service';
import { environment } from 'src/environments/environment';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
declare let alertify: any;
alertify.set('notifier','position', 'top-center');

@Component({
  selector: 'app-filter-funding',
  templateUrl: './filter-funding.component.html',
  styleUrls: ['./filter-funding.component.css']
})
export class FilterFundingComponent implements OnInit {

  fundingDownloadUrl = environment.fundingDownloadURL;

  status = +localStorage.getItem('status');
  menuNeedRefresh = 0;
  sname = [];
  comboCountries = [];
  selectedItems = [];
  dropdownListIndustry = [];
  selectedItemsIndustry = [];
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsIndustry: IDropdownSettings = {};
  cityCountry = "";
  sname_string = "";
  snameToSearch = "";         // use this
  toSearchText = "";
  toSearch = "";
  initDate = "";
  endDate = "";
  dateField = "";
  minPDate = new Date(2017, 5, 10);
  maxPDate = new Date(2018, 9, 15);
  minCDate = new Date(2017, 5, 10);
  maxCDate = new Date(2018, 9, 15);
  _bsValue: Date;

  constructor(
    private fundingService: FundingService
  ) { }

  ngOnInit() {
    this.getSName();
    this.getCountries();
    this.getCountCompIndustry()

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
  }

  getSName() {
    this.fundingService.snameFunding().subscribe(
      sname => {
        sname.forEach(element => {
          this.sname.push(element);
        });
      },
      error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    )
  }

  getCountCompIndustry() {
    let tmp = [];
    this.fundingService.countCompIndustry().subscribe(result => {
      result.forEach(element => {
        tmp.push(
          { item_id: element.item_id, item_text: element.item_text }
        )
      });
      this.dropdownListIndustry = tmp;
    })
  }

  onItemIndustrySelect(item: any) {
    this.selectedItems = []
    this.cleanValues();
  }
  onSelectIndustryAll(items: any) {
    this.selectedItems = []
    this.cleanValues();
  }

  cleanValues() {
    this.cityCountry = "";
    this.sname_string = "";
    this.snameToSearch = "";         // use this
    this.toSearch = "";
    this.initDate = "";
    this.endDate = "";
    this.dateField = "";
  }

  cleanDates() {
    this.bsRangeCValue = [null, null];
    this.bsRangePValue = [null, null];
  }

  getCountries() {
    this.fundingService.getCountries().subscribe(
      countries => {
        countries.forEach(c => {
            this.comboCountries.push(c);
        })
      },
      error => {
        alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
      }
    )
  }
// event coming from the sidebar
  updateStatusListener(newStatus) {
    this.cleanValues();
    this.cleanDates();
    this.toSearchText = "";
    this.status = newStatus;
  }
// event coming from the list
  updatedStatusListener(newStatus) {
    this.menuNeedRefresh = newStatus;
    this.status = newStatus;
  }

  processCountry(country) {
    this.toSearchText = "";
    this.cleanValues();
    this.cleanDates();
    this.cityCountry = country;
  }

  processToSearch() {
    this.cleanDates();
    this.cleanValues();
    this.toSearch = this.toSearchText;
  }

  processPDate(newDate) {
    this.toSearchText = "";
    this.bsRangeCValue = [null, null];
    this.cleanValues();
    let initPDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
    let endPDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
    this.initDate = initPDate;
    this.endDate = endPDate;
    this.dateField = 'post_time';
  }

  processCDate(newDate) {
    this.toSearchText = "";
    this.bsRangePValue = [null, null];
    this.cleanValues();
    let initCDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
    let endCDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
    this.initDate = initCDate;
    this.endDate = endCDate;
    this.dateField = 'created';
  }

  deputySName(SName: String) {
    this.toSearchText = "";
    this.cleanDates();
    this.cleanValues();
    let iOfComa = SName.indexOf("(");
    let dSName = SName.substr(0, iOfComa);
    var toReturn = dSName;
    if (dSName == '其他') {
      toReturn = "";
      this.sname_string = '其他';
      for (let i = 0; i < this.sname.length - 1; i++) {
        const element = this.sname[i];
        let eOfComa = element.indexOf("(");
        let dElement = element.substr(0, eOfComa);
        if (i < this.sname.length - 2) {
          toReturn += dElement + ",";  
        } else {
          toReturn += dElement;
        }
      }
    } else {
      this.sname_string = toReturn;
    }

    if (toReturn) {
      this.snameToSearch = toReturn;
    }
    
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

}
