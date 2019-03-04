import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyToSearch } from './CompanyToSearch';

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

}
