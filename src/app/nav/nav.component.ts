import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() clearSearch = new EventEmitter<boolean>();

  decodedData = '';
  adminPermission = 0;
  writePermission = 0;
  userEmail = '';

  public membersLink = '/members';
  public dashboardLink = '/entry/screen';

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

  navigateToDashboard() {

    this.clearSearch.emit(true);
    this.router.navigate([this.dashboardLink]);

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
