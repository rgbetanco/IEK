import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserToLogin } from '../userToLogin';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { MemberService } from '../member.service';
declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserToLogin = {email: '', password: ''};
  loginModel: Login = {r: 1, token: ''};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private memberService: MemberService
  ) {}

  ngOnInit() {
  }

  login() {

    this.loginService.login(this.model).subscribe(

      returned => {

        this.loginModel = returned;
        if (this.loginModel.r === 0) {

          localStorage.setItem('token', this.loginModel.token);
          this.router.navigate(['/dashboard']);

        } else {
          alertify.error('Wrong username or password');
        }

      }, error => {
        alertify.error('Error: Possible network error');
      }
    );

  }

}
