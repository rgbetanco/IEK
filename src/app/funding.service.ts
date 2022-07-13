import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FundingToList } from './FundingToList';
import { CompanyToSearch } from './CompanyToSearch';
import { environment } from 'src/environments/environment';
import { FundingToSearch } from './FundingToSearch';

@Injectable({
  providedIn: 'root'
})
export class FundingService {

  private fundingUrl = environment.fundingURL;

  private httpOptions = {

    headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })

  };

  constructor(private http: HttpClient) { }

  getFunding(comp: CompanyToSearch): Observable<any> {

    const url = this.fundingUrl + '/company?ToSearch=' + comp.ToSearch + '&PageNumber=' + comp.PageNumber +
      '&PageSize=' + comp.PageSize +
      '&ArrangeFor=' + comp.ArrangeFor + '&Arrange=' + comp.Arrange;

    return this.http.get<any>(url, this.httpOptions);

  }

  countCompIndustry(): Observable<any> {
    return this.http.get<any>(this.fundingUrl + '/countCompIndustry', this.httpOptions); 
  }

  fundingDownload() {
    const url = this.fundingUrl + '/download';
    return this.http.get<any>(url, this.httpOptions);
  }

  getFundingList(fun: FundingToSearch): Observable<any> {
    var compIndustry = '';
    if (fun.compIndustry.length > 0) {
      fun.compIndustry.forEach(element => {
        compIndustry += '&compIndustry[]=' + element  
      });
      
    }

    const url = this.fundingUrl + '/list?ToSearch=' + fun.ToSearch + '&PageNumber=' + fun.PageNumber +
      '&PageSize=' + fun.PageSize +
      '&ArrangeFor=' + fun.ArrangeFor + '&Arrange=' + fun.Arrange + '&InitDate=' + fun.InitDate + 
      '&EndDate=' + fun.EndDate + '&DateField=' + fun.DateField + '&sname=' + fun.SName + '&status=' + fun.Status + compIndustry;
       console.log(url)
    return this.http.get<any>(url, this.httpOptions);
    
  }

  changeFundingStatus(Id: number, newStatus: number): Observable<any> {
    const url = this.fundingUrl + '/change/status';
    const a = {id: Id, status: newStatus}
    return this.http.put<any>(url, a, this.httpOptions);
  }

  getFundingById(Id: number): Observable<any> {

    const url = this.fundingUrl + '?id=' + Id;
    return this.http.get<any>(url, this.httpOptions);

  }

  editFunding(comp: FundingToList): Observable<any> {
    
    return this.http.post<any>(this.fundingUrl+'/edit', comp, this.httpOptions);

  }

  addFunding(comp: FundingToList): Observable<any> {

    return this.http.post<any>(this.fundingUrl + '/add', comp, this.httpOptions);
    
  }

  deleteFunding(id: number): Observable<any> {

    var a = { id: id};
    return this.http.post<any>(this.fundingUrl + '/delete', a, this.httpOptions);

  }

  countFunding(): Observable<any> {

    return this.http.get<any>(this.fundingUrl + '/count', this.httpOptions);

  }

  snameFunding(): Observable<any> {
    return this.http.get<any>(this.fundingUrl + '/sname', this.httpOptions); 
  }

  getCountries(): Observable<any> {

    return this.http.get<any>(this.fundingUrl + '/country', this.httpOptions);

  }

}
