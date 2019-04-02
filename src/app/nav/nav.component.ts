import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  decodedData = '';
  adminPermission = 0;
  writePermission = 0;
  userEmail = '';

  public membersLink = '/members';
  public dashboardLink = '/dashboard';

  constructor(private router: Router, public jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if (this.decodedData['data']['permission'] > 807) {
      this.adminPermission = 1;
    }

    if (this.decodedData['data']['permission'] > 295) {
      this.writePermission = 1;
    }

    this.userEmail = this.decodedData['data']['email'];

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
