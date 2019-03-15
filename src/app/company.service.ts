import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyToSearch } from './CompanyToSearch';
import { CompanyToList } from './CompanyToList';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyUrl = 'http://localhost:8088/company';

  private httpOptions = {

    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})

  };

  constructor(private http: HttpClient) { }

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

  getCompany(comp_id: number): Observable<any> {

    const url = this.companyUrl + '?comp_id=' + comp_id;

    return this.http.get<any>(url, this.httpOptions);

  }

  editCompany(c: CompanyToList): Observable<CompanyToList> {

    return this.http.put<any>(this.companyUrl, c, this.httpOptions);

  }

}
