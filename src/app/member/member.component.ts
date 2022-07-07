import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MemberToRegister } from '../MemberToRegister';
import { MemberService } from '../member.service';
import { MemberToList } from '../MemberToList';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Location} from '@angular/common';

declare let alertify: any;
alertify.set('notifier','position', 'top-center');


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  model: MemberToRegister = {email: '', password: ''};
  mToList: MemberToList[] = [];
  adminPermission = 0;
  decodedData = '';
  modalRef: BsModalRef;

  constructor(
    private router: Router,
    private memberService: MemberService,
    public jwtHelper: JwtHelperService,
    private _location: Location,
    private modalService: BsModalService) { }

  ngOnInit() {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if (this.decodedData['data']['permission'] >= 807) {
      this.adminPermission = 1;
    } else {
      this._location.back();
    }

    this.listUser();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updatePermission(id) {

    const cMember: MemberToList = this.mToList.find(itemId => itemId.id === id);
    this.memberService.updatePermission(cMember).subscribe( returned => {
      alertify.success('Permission Updated');
    });

  }

  add() {

    if (this.model.email === '' || this.model.password === '') {

      alertify.error('必需參數錯誤');

    } else {
      this.memberService.register(this.model).subscribe(
        returned => {

          if (returned['r'] === 0) {

            this.model.email = '';
            this.model.password = '';
            this.listUser();
            alertify.success('User Registered');

          } else {

            alertify.error(returned['m']);

          }

        }, errorMessage => {
          alertify.error('Error, possible duplicated record');
        }
      );
    }
  }

  disableMember (id) {

    this.memberService.disableMember(id).subscribe(

      returned => {

        if ( returned['r'] === 0) {

          this.listUser();
          alertify.success('User disabled');

        } else {

          alertify.error('Network Error');

        }

        this.modalRef.hide();

      }

    );

  }

  listUser () {

    this.mToList.splice(0);

    this.memberService.listMembers().subscribe(
      members => {

        members['data'].forEach(member => {

          this.mToList.push(<MemberToList>member);

        });

      }
    );
  }

}
