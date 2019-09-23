import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyToSearch } from './CompanyToSearch';
import { CompanyToList } from './CompanyToList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyUrl = environment.companyURL;

  private httpOptions = {

    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})

  };

  private httpOptionsForDelete = {

    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-type':'application/x-www-form-urlencoded'})

  };

  constructor(private http: HttpClient) { }

  generateCompanyId() {
    return 'Y'+ Math.floor(Math.random()*(1111111 - 9999999 + 1)+9999999);
  }

  listCompany(comp: CompanyToSearch): Observable<any> {

    const url = this.companyUrl + '/list?PageNumber=' + comp.PageNumber +
              '&PageSize=' + comp.PageSize + '&ToSearch=' + comp.ToSearch +
              '&ArrangeFor=' + comp.ArrangeFor + '&Arrange=' + comp.Arrange;

    return this.http.get<any>(url, this.httpOptions);

  }

  confirmCompany(id: number): Observable<any> {

    const url = this.companyUrl + '/confirm';
    const param = 'id=' + id;

    return this.http.post<any>(url, param, this.httpOptions);

  }

  clearconfirmedCompany(): Observable<any> {

    const url = this.companyUrl + '/clearconfirmed';

    return this.http.get<any>(url, this.httpOptions);
  }

  getCompany(comp_id: number): Observable<any> {

    const url = this.companyUrl + '?id=' + comp_id;

    return this.http.get<any>(url, this.httpOptions);

  }

  addCompany(c: CompanyToList): Observable<any>{
    
    const url = this.companyUrl + '/add';

    return this.http.post<any>(url, c, this.httpOptions);

  }

  deleteCompany(id: number): Observable<any>{
    
    const url = this.companyUrl + '/delete';
    const param = 'id=' + id;

    return this.http.post<any>(url, param, this.httpOptionsForDelete);

  }

  editCompany(c: CompanyToList): Observable<CompanyToList> {

    return this.http.put<any>(this.companyUrl, c, this.httpOptions);

  }

}
