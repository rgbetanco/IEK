import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FundingToList } from './FundingToList';
import { CompanyToSearch } from './CompanyToSearch';
import { environment } from 'src/environments/environment';

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
}
