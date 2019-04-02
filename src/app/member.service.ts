import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberToList } from './MemberToList';
import { MemberToRegister } from './MemberToRegister';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // private memberUrl = 'http://rgbetanco.net:8082/user';
  private memberUrl = 'http://34.192.48.45:5000/user';

  private httpOptions = {

    headers: new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
  };

  constructor(private http: HttpClient) { }

  listMembers(): Observable<any> {

    const url = this.memberUrl + '/list';

    return this.http.get<any>(url, this.httpOptions);

  }

  register(m: MemberToRegister): Observable<MemberToRegister> {

    const url = this.memberUrl + '/register';
    const param = 'email=' + m.email + '&password=' + m.password;

    return this.http.post<MemberToRegister>(url, param, this.httpOptions);

  }

  disableMember(id: number): Observable<any> {

    const url = this.memberUrl + '/enable';
    const param = 'id=' + id + '&enabled=0';

    return this.http.post<any>(url, param, this.httpOptions);

  }

  updatePermission(memberToList: MemberToList): Observable<any> {

    const url = this.memberUrl + '/updatepermission';
    let write = 0;
    if (memberToList.writePermission) {
      write = 1;
    }
    const param = 'id=' + memberToList.id + '&write=' + write;

    return this.http.post<any>(url, param, this.httpOptions);

  }

  getPermission(): Observable<any> {

    const url = this.memberUrl + '/permission';

    return this.http.get<any>(url, this.httpOptions);

  }



}
