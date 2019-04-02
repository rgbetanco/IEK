import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { catchError, tap, map } from 'rxjs/operators';
import { UserToLogin } from './userToLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private loginUrl = 'http://rgbetanco.net:8082/user/signin';
  private loginUrl = 'http://34.192.48.45:5000/user/signin';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

constructor(private http: HttpClient) { }

  login(loginUser: UserToLogin): Observable<Login> {

    const params = 'email=' + loginUser.email
                 + '&password=' + loginUser.password;

    return this.http.post<Login>(this.loginUrl, params, this.httpOptions);

  }

}
