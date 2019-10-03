(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-company/add-company.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-company/add-company.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-company/add-company.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-company/add-company.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container mt-3 mb-3\">\n\n  <div *ngIf=\"error\" class=\"alert alert-danger col-md-12\" role=\"alert\">\n    {{errorMessage}}\n  </div>\n\n\n  <form #companyForm=\"ngForm\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"comp_banno\">統編</label>\n        <div class=\"form-inline\">\n          <input type=\"text\" class=\"form-control\" id=\"comp_banno\" name=\"comp_banno\" placeholder=\"\"\n            value={{companyToAdd?.comp_banno}} [(ngModel)]=\"companyToAdd.comp_banno\">\n            <button class=\"btn btn-success ml-2\" (click)=\"generateCompanyId()\">隨機統編<i class=\"fa fa-cubes ml-2\"></i></button>\n        </div>\n      </div>\n      <div class=\"form-group col-md-8\">\n        <label for=\"inputName\">公司名稱</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\"\n          value={{companyToAdd?.comp_name}} [(ngModel)]=\"companyToAdd.comp_name\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputIndustry\">產業類別</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputIndustry\" name=\"industry\" placeholder=\"\"\n          value={{companyToAdd?.comp_industry}} [(ngModel)]=\"companyToAdd.comp_industry\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputLocation\">公司地址</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputLocation\" name=\"location\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_location}}\" [(ngModel)]=\"companyToAdd.comp_location\">\n      </div>\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputArea\">公司地區</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputArea\" name=\"area\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_area}}\" [(ngModel)]=\"companyToAdd.comp_area\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAmount\">資本額</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAmount\" name=\"amount\" placeholder=\"\"\n          value={{companyToAdd?.comp_amount}} [(ngModel)]=\"companyToAdd.comp_amount\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputEmployees\">員工人數</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputEmployees\" name=\"Employees\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_employee}}\" [(ngModel)]=\"companyToAdd.comp_employee\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputContact\">聯絡人</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputContact\" name=\"contact\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_contact}}\" [(ngModel)]=\"companyToAdd.comp_contact\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputTel\">電話</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputTel\" name=\"tel\" placeholder=\"\" value={{companyToAdd?.comp_tel}}\n          [(ngModel)]=\"companyToAdd.comp_tel\">\n      </div>\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputFax\">傳真</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputFax\" name=\"fax\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_fax}}\" [(ngModel)]=\"companyToAdd.comp_fax\">\n      </div>\n      <div class=\"form-group col-md-8\">\n        <label for=\"inputUrl\">公司網址</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputUrl\" name=\"url\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_url}}\" [(ngModel)]=\"companyToAdd.comp_url\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputExtraURL\">粉絲專頁(FB)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputExtraURL\" name=\"extraUrl\" placeholder=\"\"\n        value=\"{{companyToAdd?.comp_extra_url}}\" [(ngModel)]=\"companyToAdd.comp_extra_url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputTags\">標籤(Yourator)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputTags\" name=\"tag\" placeholder=\"\"\n        value=\"{{companyToAdd?.comp_tag}}\" [(ngModel)]=\"companyToAdd.comp_tag\">\n    </div>\n    <!-- TABS -->\n    <div class=\"mt-4\">\n      <tabset>\n        <tab heading=\"公司簡介\" id=\"tab1\">\n          <div class=\"form-group\">\n            <label for=\"inputDescription\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputDescription\" name=\"description\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_desc}}\" [(ngModel)]=\"companyToAdd.comp_desc\"></textarea>\n          </div>\n        </tab>\n        <tab heading=\"媒體報導\">\n          <div class=\"form-group\">\n            <label for=\"inputMediaReport\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputMediaReport\" name=\"mediareport\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_media_report}}\" [(ngModel)]=\"companyToAdd.comp_media_report\"></textarea>\n          </div>\n        </tab>\n        <tab heading=\"主要商品/服務項目\">\n          <div class=\"form-group\">\n            <label for=\"inputBusiness\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputBusiness\" name=\"business\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_business}}\" [(ngModel)]=\"companyToAdd.comp_business\"></textarea>\n          </div>\n        </tab>\n        <tab heading=\"關鍵字\">\n          <div class=\"form-group\">\n            <label for=\"inputKeyword\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputKeyword\" name=\"keyword\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_keyword}}\" [(ngModel)]=\"companyToAdd.comp_keyword\"></textarea>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openModal(template)\">確認<i\n        class=\"\tfa fa-check-circle-o ml-2\"></i></button>\n    <button class=\"btn btn-danger ml-2\" (click)=\"goBack()\">返回<i class=\"fa fa-history ml-2\"></i></button>\n  </form>\n\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{companyToAdd.comp_name}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>統編</strong> : {{companyToAdd.comp_banno}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>產業類別</strong> : {{companyToAdd.comp_industry}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>公司地址</strong> : {{companyToAdd.comp_location}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>公司地區</strong> : {{companyToAdd.comp_area}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>資本額</strong> : {{companyToAdd.comp_amount}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>員工人數</strong> : {{companyToAdd.comp_employee}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>聯絡人</strong> : {{companyToAdd.comp_contact}}\n      </div>\n\n      <div class=\"alert alert-success m-2\" role=\"alert\">\n        <strong>電話</strong> : {{companyToAdd.comp_tel}}\n      </div>\n\n      <div class=\"alert alert-success m-2\" role=\"alert\">\n        <strong>傳真</strong> : {{companyToAdd.comp_fax}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>公司網址</strong> : {{companyToAdd.comp_url}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>粉絲專頁(FB)</strong> : {{companyToAdd.comp_extra_url}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>標籤(Yourator)</strong> : {{companyToAdd.comp_tag}}\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          公司簡介\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_desc}}\n        </div>\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          媒體報導\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_media_report}}\n        </div>\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          主要商品/服務項目\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_business}}\n        </div>\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          關鍵字\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_keyword}}\n        </div>\n      </div>\n\n      <button class=\"btn btn-danger ml-2\" (click)=\"addCompany()\">發送<i class=\"fa fa-send ml-2\"></i></button>\n\n    </div>\n  </ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/add-company/add-company.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-company/add-company.component.ts ***!
  \******************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(compService, modalService) {
        this.compService = compService;
        this.modalService = modalService;
        this.error = false;
        this.errorMessage = '';
        this.companyToAdd = {
            id: '0',
            comp_banno: '0',
            comp_industry: '',
            comp_location: '',
            comp_name: '',
            comp_tel: '',
            comp_area: '',
            comp_fax: '',
            comp_url: '',
            comp_amount: '',
            comp_extra_url: '',
            comp_employee: '',
            comp_contact: '',
            comp_tag: '',
            comp_desc: '',
            comp_media_report: '',
            comp_business: '',
            comp_createdate: '',
            done: '0',
            confirmed: 0,
            comp_keyword: '',
            extra: ''
        };
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
    };
    AddCompanyComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AddCompanyComponent.prototype.generateCompanyId = function () {
        this.companyToAdd.comp_banno = this.compService.generateCompanyId();
    };
    AddCompanyComponent.prototype.addCompany = function () {
        var _this = this;
        this.compService.addCompany(this.companyToAdd).subscribe(function (returned) {
            _this.modalRef.hide();
            window.history.back();
        }, function (error) {
            alertify.error('Error: Network or possibly duplicated record');
        });
    };
    AddCompanyComponent.prototype.goBack = function () {
        window.history.back();
    };
    AddCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__(/*! ./add-company.component.html */ "./src/app/add-company/add-company.component.html"),
            styles: [__webpack_require__(/*! ./add-company.component.css */ "./src/app/add-company/add-company.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/add-company/add-company.component.ts");
/* harmony import */ var _funding_funding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funding/funding.component */ "./src/app/funding/funding.component.ts");
/* harmony import */ var _edit_funding_edit_funding_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-funding/edit-funding.component */ "./src/app/edit-funding/edit-funding.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'company/:id', component: _company_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"] },
    { path: 'members', component: _member_member_component__WEBPACK_IMPORTED_MODULE_5__["MemberComponent"] },
    { path: 'add-company', component: _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__["AddCompanyComponent"] },
    { path: 'funding/:id', component: _funding_funding_component__WEBPACK_IMPORTED_MODULE_7__["FundingComponent"] },
    { path: 'edit/funding/:id/type/:type', component: _edit_funding_edit_funding_component__WEBPACK_IMPORTED_MODULE_8__["EditFundingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-company/add-company.component */ "./src/app/add-company/add-company.component.ts");
/* harmony import */ var _funding_funding_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./funding/funding.component */ "./src/app/funding/funding.component.ts");
/* harmony import */ var _edit_funding_edit_funding_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-funding/edit-funding.component */ "./src/app/edit-funding/edit-funding.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_13__["CompanyComponent"],
                _member_member_component__WEBPACK_IMPORTED_MODULE_16__["MemberComponent"],
                _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_17__["AddCompanyComponent"],
                _funding_funding_component__WEBPACK_IMPORTED_MODULE_18__["FundingComponent"],
                _edit_funding_edit_funding_component__WEBPACK_IMPORTED_MODULE_19__["EditFundingComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['34.192.48.45:5000', '34.192.48.45:80'],
                        blacklistedRoutes: ['']
                    }
                }),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__["CollapseModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__["AccordionModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company.service.ts":
/*!************************************!*\
  !*** ./src/app/company.service.ts ***!
  \************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.companyUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
        };
        this.httpOptionsForDelete = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-type': 'application/x-www-form-urlencoded' })
        };
    }
    CompanyService.prototype.generateCompanyId = function () {
        return 'Y' + Math.floor(Math.random() * (1111111 - 9999999 + 1) + 9999999);
    };
    CompanyService.prototype.listCompany = function (comp) {
        var url = this.companyUrl + '/list?PageNumber=' + comp.PageNumber +
            '&PageSize=' + comp.PageSize + '&ToSearch=' + comp.ToSearch +
            '&ArrangeFor=' + comp.ArrangeFor + '&Arrange=' + comp.Arrange;
        return this.http.get(url, this.httpOptions);
    };
    CompanyService.prototype.confirmCompany = function (id) {
        var url = this.companyUrl + '/confirm';
        var param = 'id=' + id;
        return this.http.post(url, param, this.httpOptions);
    };
    CompanyService.prototype.clearconfirmedCompany = function () {
        var url = this.companyUrl + '/clearconfirmed';
        return this.http.get(url, this.httpOptions);
    };
    CompanyService.prototype.getCompany = function (comp_id) {
        var url = this.companyUrl + '?id=' + comp_id;
        return this.http.get(url, this.httpOptions);
    };
    CompanyService.prototype.addCompany = function (c) {
        var url = this.companyUrl + '/add';
        return this.http.post(url, c, this.httpOptions);
    };
    CompanyService.prototype.deleteCompany = function (id) {
        var url = this.companyUrl + '/delete';
        var param = 'id=' + id;
        return this.http.post(url, param, this.httpOptionsForDelete);
    };
    CompanyService.prototype.editCompany = function (c) {
        return this.http.put(this.companyUrl, c, this.httpOptions);
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n}"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container mt-3 mb-3\" id=\"main\">\n\n    <div *ngIf=\"error\" class=\"alert alert-danger col-md-12\" role=\"alert\">\n        {{errorMessage}}\n    </div>\n  \n\n    <form #companyForm=\"ngForm\">\n\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n              <label for=\"comp_banno\">統編</label>\n              <input type=\"text\" class=\"form-control\" id=\"comp_banno\" name=\"comp_banno\" placeholder=\"\" value={{companyToEdit?.comp_banno}} [(ngModel)]=\"companyToEdit.comp_banno\">\n            </div>\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputName\">公司名稱</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\" value={{companyToEdit?.comp_name}} [(ngModel)]=\"companyToEdit.comp_name\">\n          </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputIndustry\">產業類別</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputIndustry\" name=\"industry\" placeholder=\"\" value={{companyToEdit?.comp_industry}} [(ngModel)]=\"companyToEdit.comp_industry\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputLocation\">公司地址</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputLocation\" name=\"location\" placeholder=\"\" value=\"{{companyToEdit?.comp_location}}\" [(ngModel)]=\"companyToEdit.comp_location\">\n        </div>\n        <div class=\"form-group col-md-2\">\n            <label for=\"inputArea\">公司地區</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputArea\" name=\"area\" placeholder=\"\" value=\"{{companyToEdit?.comp_area}}\" [(ngModel)]=\"companyToEdit.comp_area\">\n          </div>\n      </div>\n\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputAmount\">資本額</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputAmount\" name=\"amount\" placeholder=\"\" value={{companyToEdit?.comp_amount}} [(ngModel)]=\"companyToEdit.comp_amount\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmployees\">員工人數</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputEmployees\" name=\"Employees\" placeholder=\"\" value=\"{{companyToEdit?.comp_employee}}\" [(ngModel)]=\"companyToEdit.comp_employee\">\n          </div>\n          <div class=\"form-group col-md-4\">\n              <label for=\"inputContact\">聯絡人</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputContact\" name=\"contact\" placeholder=\"\" value=\"{{companyToEdit?.comp_contact}}\" [(ngModel)]=\"companyToEdit.comp_contact\">\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputTel\">電話</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputTel\" name=\"tel\" placeholder=\"\" value={{companyToEdit?.comp_tel}} [(ngModel)]=\"companyToEdit.comp_tel\">\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputFax\">傳真</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputFax\" name=\"fax\" placeholder=\"\" value=\"{{companyToEdit?.comp_fax}}\" [(ngModel)]=\"companyToEdit.comp_fax\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"inputUrl\">公司網址</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputUrl\" name=\"url\" placeholder=\"\" value=\"{{companyToEdit?.comp_url}}\" [(ngModel)]=\"companyToEdit.comp_url\">\n              </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputExtraURL\">粉絲專頁(FB)</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputExtraURL\" name=\"extraUrl\" placeholder=\"\" value=\"{{companyToEdit?.comp_extra_url}}\" [(ngModel)]=\"companyToEdit.comp_extra_url\" >\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputTags\">標籤(Yourator)</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputTags\" name=\"tag\" placeholder=\"\" value=\"{{companyToEdit?.comp_tag}}\" [(ngModel)]=\"companyToEdit.comp_tag\" >\n          </div>\n<!-- TABS -->\n          <div class=\"mt-4\">\n              <tabset>\n                <tab heading=\"公司簡介\" id=\"tab1\">\n                    <div class=\"form-group\">\n                        <label for=\"inputDescription\"></label>\n                        <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputDescription\" name=\"description\" placeholder=\"\" value=\"{{companyToEdit?.comp_desc}}\" [(ngModel)]=\"companyToEdit.comp_desc\" ></textarea>\n                    </div>\n                </tab>\n                <tab heading=\"媒體報導\">\n                    <div class=\"form-group\">\n                        <label for=\"inputMediaReport\"></label>\n                        <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputMediaReport\" name=\"mediareport\" placeholder=\"\" value=\"{{companyToEdit?.comp_media_report}}\" [(ngModel)]=\"companyToEdit.comp_media_report\" ></textarea>\n                    </div>\n                </tab>\n                <tab heading=\"主要商品/服務項目\">\n                    <div class=\"form-group\">\n                        <label for=\"inputBusiness\"></label>\n                        <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputBusiness\" name=\"business\" placeholder=\"\" value=\"{{companyToEdit?.comp_business}}\" [(ngModel)]=\"companyToEdit.comp_business\" ></textarea>\n                    </div>\n                </tab>\n                <tab heading=\"關鍵字\">\n                  <div class=\"form-group\">\n                      <label for=\"inputKeyword\"></label>\n                      <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputKeyword\" name=\"keyword\" placeholder=\"\" value=\"{{companyToEdit?.comp_keyword}}\" [(ngModel)]=\"companyToEdit.comp_keyword\" ></textarea>\n                  </div>\n              </tab>\n              </tabset>\n            </div>\n            \n  \n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openModal(template)\">確認<i class=\"\tfa fa-check-circle-o ml-2\"></i></button>\n      <button class=\"btn btn-danger ml-2\" (click)=\"goBack()\">返回<i class=\"fa fa-history ml-2\"></i></button>\n    </form>\n\n    <ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">{{companyToEdit.comp_name}}</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>編號</strong> : {{companyToEdit.id}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>統編</strong> : {{companyToEdit.comp_banno}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>產業類別</strong> : {{companyToEdit.comp_industry}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>公司地址</strong> : {{companyToEdit.comp_location}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>公司地區</strong> : {{companyToEdit.comp_area}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>資本額</strong> : {{companyToEdit.comp_amount}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>員工人數</strong> : {{companyToEdit.comp_employee}}\n          </div>\n          \n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>聯絡人</strong> : {{companyToEdit.comp_contact}}\n          </div>\n\n          <div class=\"alert alert-success m-2\" role=\"alert\">\n              <strong>電話</strong> : {{companyToEdit.comp_tel}}\n          </div>\n\n          <div class=\"alert alert-success m-2\" role=\"alert\">\n              <strong>傳真</strong> : {{companyToEdit.comp_fax}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>公司網址</strong> : {{companyToEdit.comp_url}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>粉絲專頁(FB)</strong> : {{companyToEdit.comp_extra_url}}\n          </div>\n\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n              <strong>標籤(Yourator)</strong> : {{companyToEdit.comp_tag}}\n          </div>\n\n          <div class=\"card m-2 border-info\">\n            <div class=\"card-header\">\n              公司簡介\n            </div>\n            <div class=\"card-body\">\n                {{companyToEdit.comp_desc}}\n            </div>\n          </div>\n\n          <div class=\"card m-2 border-info\">\n            <div class=\"card-header\">\n              媒體報導\n            </div>\n            <div class=\"card-body\">\n                {{companyToEdit.comp_media_report}}\n            </div>\n          </div>\n\n          <div class=\"card m-2 border-info\">\n            <div class=\"card-header\">\n              主要商品/服務項目\n            </div>\n            <div class=\"card-body\">\n                {{companyToEdit.comp_business}}\n            </div>\n          </div>\n\n          <div class=\"card m-2 border-info\">\n            <div class=\"card-header\">\n              關鍵字\n            </div>\n            <div class=\"card-body\">\n                {{companyToEdit.comp_keyword}}\n            </div>\n          </div>\n\n          <button class=\"btn btn-danger ml-2\" (click)=\"editCompany()\">發送<i class=\"fa fa-send ml-2\"></i></button>\n\n        </div>\n      </ng-template>\n  \n</div>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(activatedRoute, compService, _location, jwtHelper, modalService) {
        this.activatedRoute = activatedRoute;
        this.compService = compService;
        this._location = _location;
        this.jwtHelper = jwtHelper;
        this.modalService = modalService;
        this.decodedData = '';
        this.writePermission = 0;
        this.error = false;
        this.errorMessage = '';
        this.companyToEdit = {
            id: '0',
            comp_banno: '0',
            comp_industry: '',
            comp_location: '',
            comp_name: '',
            comp_tel: '',
            comp_area: '',
            comp_fax: '',
            comp_url: '',
            comp_amount: '',
            comp_extra_url: '',
            comp_employee: '',
            comp_contact: '',
            comp_tag: '',
            comp_desc: '',
            comp_media_report: '',
            comp_business: '',
            comp_createdate: '',
            done: '0',
            confirmed: 0,
            comp_keyword: '',
            extra: ''
        };
    }
    CompanyComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (this.decodedData['data']['permission'] > 295) {
            this.writePermission = 1;
        }
        else {
            this._location.back();
        }
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            _this.company_id = param['id'];
            _this.getCompany();
        });
    };
    CompanyComponent.prototype.getCompany = function () {
        var _this = this;
        this.compService.getCompany(this.company_id).subscribe(function (company) {
            _this.companyToEdit = company[0];
        });
    };
    CompanyComponent.prototype.goBack = function () {
        window.history.back();
    };
    CompanyComponent.prototype.editCompany = function () {
        var _this = this;
        this.compService.editCompany(this.companyToEdit).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.modalRef.hide();
                window.location.reload();
            }
            else {
                _this.error = true;
                _this.errorMessage = returned['m'];
            }
        }, function (error) {
            alertify.error('Error: Network or possibly duplicated record');
        });
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-th {\n    cursor: pointer; \n}\n\n/* .perc5 {\n    width: 5%\n}\n\n.perc10 {\n    width: 10%\n}\n\n.perc15 {\n    width: 15%\n}\n\n.perc20 {\n    width: 20%;\n}\n\n.perc30 {\n    width: 30%;\n}\n\n.perc50 {\n    width: 50%;\n} */\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav (clearSearch)=\"OnChanges($event)\"></app-nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-2\" *ngIf=\"showMenu\" style=\"background-color: rgb(182, 182, 182)\">\n\n            <accordion [isAnimated]=\"true\">\n                <accordion-group heading=\"Header\">\n                  This content is straight in the template.\n                </accordion-group>\n                <accordion-group heading=\"Content 1\">\n                  <p>Content 1</p>\n                </accordion-group>\n                <accordion-group heading=\"Content 2\">\n                  <p>Content 2</p>\n                </accordion-group>\n              </accordion>\n\n      <!-- <div style=\"color: rgb(3, 124, 3)\"><a (click)=\"toggleMenu()\">Menu</a></div>\n      <div style=\"color:honeydew\"><a (click)=false>公司基本資料管理</a></div>\n      <div style=\"color: rgba(42, 42, 233, 0.673); cursor: pointer;\"><a (click)=\"navigateToFunding(-1)\">募資紀錄管理</a></div>\n      <div style=\"color: rgba(42, 42, 233, 0.673); cursor: pointer;\"><a (click)=\"navigateToFunding(0)\">找不到公司</a></div> -->\n    </div>\n    <div class=\"col {{fullscreen}}\">\n      <form class=\"form-inline mt-2\">\n        <button class=\"mb-2 mr-sm-2 btn btn-outline-info\" (click)=toggleMenu()><i class=\"fa fa-bars\"></i></button>\n        <input class=\"form-control mb-2 mr-sm-2 col-md-6\" type=\"search\"\n          placeholder=\"篩選條件：統編、公司名稱、產業類別、公司地區、標籤、公司簡介、媒體報導、主要商品/服務項目\" name=\"toSearch\" aria-label=\"Search\"\n          [(ngModel)]=\"compToSearch.ToSearch\">\n        <button class=\"btn btn-outline-success mb-2 mr-sm-2\" (click)=\"doSearch()\">搜尋</button>\n        <span *ngIf=\"writePermission > 0 || adminPermission > 0\">\n          <button class=\"btn btn-outline-danger mb-2 mr-sm-2\" (click)=\"openModal(clearConfirmed)\">重置確認狀態</button>\n        </span>\n        <button class=\"btn btn-outline-danger mb-2\" tooltip=\"加新\" (click)=\"navigateToAdd()\">加入新公司</button>\n        <!-- <button class=\"btn btn-outline-danger mb-2\" tooltip=\"找不到公司\" (click)=\"navigateToFunding(0)\">找不到公司</button> -->\n\n        <!-- <div class=\"btn-group mb-2\" dropdown [autoClose]=\"true\" container=\"body\">\n          <button id=\"button-nested\" dropdownToggle type=\"button\" class=\"btn btn-outline-info dropdown-toggle ml-2\"\n            aria-controls=\"dropdown-nested\">\n            Menu <span class=\"caret\"></span>\n          </button>\n          <ul id=\"dropdown-nested\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-nested\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"\">公司基本資料管理</a></li>\n\n            <li role=\"menuitem\" dropdown triggers=\"mouseover\" placement=\"right\" container=\"body\">\n              <a dropdownToggle class=\"dropdown-item dropdown-toggle\" (click)=\"false\">募資紀錄管理<span class=\"caret\"></span></a>\n              <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"navigateToFunding(0)\">找不到公司</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div> -->\n\n      </form>\n\n      <ng-template #clearConfirmed>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">重置公司資料更新狀態</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          確認重置狀態？\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-danger\" (click)=\"clearConfirmedCompany()\"><i class=\"fa fa-send\"></i> 確定</button>\n        </div>\n      </ng-template>\n\n      <table class=\"table table-hover table-sm\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <!-- COMP_ID -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'id'\"\n              (click)=\"changeArrange('id')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                編號<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                編號<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'id'\"\n              (click)=\"changeArrange('id')\">\n              編號 <i class=\"fa fa-unsorted\"></i>\n            </th>\n            <!-- TONPIEN -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_banno'\"\n              (click)=\"changeArrange('comp_banno')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                統編<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                統編<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_banno'\"\n              (click)=\"changeArrange('comp_banno')\">\n              統編 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- COMP_NAME -->\n            <th class=\"centered-th mx-auto p-2 perc20\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_name'\"\n              (click)=\"changeArrange('comp_name')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                公司名稱<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                公司名稱<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc20\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_name'\"\n              (click)=\"changeArrange('comp_name')\">\n              公司名稱 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- COMP_LOCATION -->\n            <th class=\"centered-th mx-auto p-2 perc30\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_location'\"\n              (click)=\"changeArrange('comp_location')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                公司地址<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                公司地址<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc30\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_location'\"\n              (click)=\"changeArrange('comp_location')\">\n              公司地址 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- COMP_CONTACT -->\n            <th class=\"centered-th mx-auto p-2 perc15\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_contact'\"\n              (click)=\"changeArrange('comp_contact')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                聯絡人<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                聯絡人<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_contact'\"\n              (click)=\"changeArrange('comp_contact')\">\n              聯絡人 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <th scope=\"col\" class=\"text-center perc15\">管理</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let list of compToList\" [class.table-success]=\"list.confirmed == 1\">\n            <td (click)=\"openModal(template)\">{{list.id}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_banno}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_name}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_location}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_contact}}</td>\n            <td class=\"text-center\">\n\n              <button type=\"button\" class=\"btn btn-outline-info mr-2\" tooltip=\"展開\" (click)=\"openModal(template)\"><i\n                  class=\"fa fa-folder-open-o\"></i></button>\n              <button type=\"button\" class=\"btn btn-outline-success mr-2\" tooltip=\"募資\"\n                (click)=\"navigateToFunding(list.id)\"><i class=\"fa fa-money\"></i></button>\n              <span *ngIf=\"writePermission > 0 || adminPermission > 0\">\n                <button class=\"btn btn-outline-primary\" tooltip=\"編輯\" (click)=\"navigateToEdit(list)\"><i\n                    class=\"fa fa-edit\"></i></button>\n                <button class=\"btn btn-outline-warning ml-2\" tooltip=\"送出\" (click)=\"openModal(confirmSend)\"><i\n                    class=\"fa fa-send\"></i></button>\n                <button class=\"btn btn-outline-danger ml-2\" tooltip=\"刪除\" (click)=\"openModal(confirmDelete)\"><i\n                    class=\"fa fa-remove\"></i></button>\n              </span>\n            </td>\n\n            <ng-template #confirmSend>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">確認送出</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                請再次確認該筆資料是否正確？\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"confirmCompany(list.id)\"><i class=\"fa fa-send\"></i> 確認</button>\n              </div>\n            </ng-template>\n\n            <ng-template #confirmDelete>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">刪除公司</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                請再次確認該筆資料是否正確？\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"deleteCompany(list.id)\"><i class=\"fa fa-send\"></i> 確認</button>\n              </div>\n            </ng-template>\n\n            <ng-template #template>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">{{list.comp_name}}</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>編號</strong> : {{list.id}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>統編</strong> : {{list.comp_banno}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>產業類別</strong> : {{list.comp_industry}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>公司地址</strong> : {{list.comp_location}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>公司地區</strong> : {{list.comp_area}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>資本額</strong> : {{list.comp_amount}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>員工人數</strong> : {{list.comp_employee}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>聯絡人</strong> : {{list.comp_contact}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>電話</strong> : {{list.comp_tel}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>傳真</strong> : {{list.comp_fax}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>公司網址</strong> : {{list.comp_url}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>粉絲專頁(FB)</strong> : {{list.comp_extra_url}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>標籤(Yourator)</strong> : {{list.comp_tag}}\n                </div>\n\n                <div class=\"card m-2 border-info\">\n                  <div class=\"card-header\">\n                    公司簡介\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_desc}}\n                  </div>\n                </div>\n\n                <div class=\"card m-2 border-info\">\n                  <div class=\"card-header\">\n                    媒體報導\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_media_report}}\n                  </div>\n                </div>\n\n                <div class=\"card m-2 border-info\">\n                  <div class=\"card-header\">\n                    主要商品/服務項目\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_business}}\n                  </div>\n                </div>\n                <div class=\"card m-2 border-info\">\n                  <div class=\"card-header\">\n                    關鍵字\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_keyword}}\n                  </div>\n                </div>\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>額外的數據</strong> : {{list.extra}}\n                </div>\n\n              </div>\n            </ng-template>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: 25px\">\n  <div class=\"row\">\n    <div class=\"col col-lg-10\">\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"paging.TotalCount\" [(ngModel)]=\"paging.CurrentPage\" [maxSize]=10\n        (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n        lastText=\"{{paging.TotalPages}} &raquo;\">\n      </pagination>\n    </div>\n    <div class=\"col col-lg-2\">\n      <div class=\"form-group form-inline ml-2\">\n        <input class=\"form-control form-control-sm col-md-4\" type=\"text\" name=\"newpage\" placeholder=\"Go to page\"\n          [(ngModel)]=\"gotopage\">\n        <button class=\"form-control form-control-sm btn btn-outline-primary ml-2\" (click)=\"goToPage()\"> <i\n            class=\"fa fa-search\"></i> 提交</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: getAccordionConfig, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccordionConfig", function() { return getAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function getAccordionConfig() {
    return Object.assign(new ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionConfig"](), { closeOthers: true });
}
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, companyService, memberService, jwtHelper, modalService) {
        this.router = router;
        this.companyService = companyService;
        this.memberService = memberService;
        this.jwtHelper = jwtHelper;
        this.modalService = modalService;
        this.fullscreen = "col-10";
        this.showMenu = true;
        this.writePermission = 0;
        this.adminPermission = 0;
        this.decodedData = '';
        this.compToSearch = {
            PageNumber: 1,
            PageSize: 10,
            ToSearch: '',
            ArrangeFor: 'id',
            Arrange: 'ASC'
        };
        this.compToList = [];
        this.gotopage = 1;
        this.paging = {
            CurrentPage: 1,
            PageSize: 10,
            TotalCount: 240,
            TotalPages: 0,
        };
        this.confirmedClass = 'table-success';
    }
    DashboardComponent.prototype.OnChanges = function (clearSearch) {
        this.compToSearch.ToSearch = '';
        this.compToSearch.PageNumber = 1;
        this.compToSearch.PageSize = 10;
        this.compToSearch.ToSearch = '';
        this.compToSearch.ArrangeFor = 'id';
        this.compToSearch.Arrange = 'ASC';
        this.getCompanies();
    };
    DashboardComponent.prototype.toggleMenu = function () {
        if (this.showMenu) {
            this.showMenu = false;
            this.fullscreen = "col-12";
        }
        else {
            this.showMenu = true;
            this.fullscreen = "col-10";
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (this.decodedData['data']['permission'] > 807) {
            this.adminPermission = 1;
        }
        if (this.decodedData['data']['permission'] > 295) {
            this.writePermission = 1;
        }
        this.getCompanies();
    };
    DashboardComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.modalRef.hide();
        this.companyService.deleteCompany(id).subscribe(function (response) {
            alertify.success('Recorded deleted');
            _this.getCompanies();
        }, function (error) {
            alertify.error('Error deleting the company');
        });
    };
    DashboardComponent.prototype.clearConfirmedCompany = function () {
        var _this = this;
        this.modalRef.hide();
        this.companyService.clearconfirmedCompany().subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.getCompanies();
                alertify.success('Company confirmed flag cleared');
            }
            else {
                alertify.error('Error confirming the company');
            }
        }, function (error) {
            alertify.error('Network error');
        });
    };
    DashboardComponent.prototype.confirmCompany = function (id) {
        var _this = this;
        this.modalRef.hide();
        this.companyService.confirmCompany(id).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.getCompanies();
                alertify.success('Company confirmed to be sent');
            }
            else {
                alertify.error('Error confirming the company');
            }
        }, function (error) {
            alertify.error('Network error');
        });
    };
    DashboardComponent.prototype.navigateToEdit = function (comp) {
        this.router.navigate(['/company', comp.id]);
    };
    DashboardComponent.prototype.navigateToFunding = function (id) {
        this.router.navigate(['/funding', id]);
    };
    DashboardComponent.prototype.navigateToAdd = function () {
        this.router.navigate(['/add-company']);
        this.getCompanies();
    };
    DashboardComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    DashboardComponent.prototype.pageChanged = function (event) {
        if (event.page <= this.paging.TotalCount) {
            this.paging.CurrentPage = event.page;
            this.getCompanies();
        }
    };
    DashboardComponent.prototype.goToPage = function () {
        this.paging.CurrentPage = this.gotopage;
        this.getCompanies();
    };
    DashboardComponent.prototype.changeArrange = function (field) {
        this.compToSearch.ArrangeFor = field;
        if (this.compToSearch.Arrange === 'ASC') {
            this.compToSearch.Arrange = 'DESC';
        }
        else {
            this.compToSearch.Arrange = 'ASC';
        }
        this.getCompanies();
    };
    DashboardComponent.prototype.doSearch = function () {
        this.paging = {
            CurrentPage: 1,
            PageSize: 10,
            TotalCount: 0,
            TotalPages: 0,
        };
        this.getCompanies();
    };
    DashboardComponent.prototype.getCompanies = function () {
        var _this = this;
        this.compToSearch.PageSize = this.paging.PageSize;
        this.compToSearch.PageNumber = this.paging.CurrentPage;
        this.companyService.listCompany(this.compToSearch).subscribe(function (companies) {
            _this.compToList.splice(0, _this.paging.PageSize);
            companies['companies'].forEach(function (company) { return _this.compToList.push(company); });
            _this.paging.CurrentPage = companies['paging']['CurrentPage'];
            _this.paging.TotalCount = companies['paging']['TotalCount'];
            _this.paging.PageSize = companies['paging']['PageSize'];
            _this.paging.TotalPages = companies['paging']['TotalPages'];
        }, function (error) {
            alertify.error('Error: Network');
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            providers: [{ provide: ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionConfig"], useFactory: getAccordionConfig }]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-funding/edit-funding.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-funding/edit-funding.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n}"

/***/ }),

/***/ "./src/app/edit-funding/edit-funding.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-funding/edit-funding.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container mt-3 mb-3\" id=\"main\">\n\n    <div *ngIf=\"error\" class=\"alert alert-danger col-md-12\" role=\"alert\">\n        {{errorMessage}}\n    </div>\n\n    <form #companyForm=\"ngForm\">\n\n        <div class=\"form-row\">\n            <button class=\"btn btn-outline-danger\" tooltip=\"加新\" (click)=\"openModal(companyAdd)\">加入新公司</button>\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"comp_id\">編號</label>\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control\" id=\"comp_id\" name=\"comp_id\" placeholder=\"\"\n                        value={{FundingToList?.comp_id}} [(ngModel)]=\"FundingToList.comp_id\">\n                    <button id=\"comp_btn\" name=\"comp_btn\" class=\"btn btn-success ml-2\"\n                        (click)=\"openModal(companySearch)\">關鍵字<i class=\"fa fa-database ml-2\"></i></button>\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-8\">\n                <label for=\"inputName\">公司名稱</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\"\n                    value={{FundingToList?.company_name}} [(ngModel)]=\"FundingToList.company_name\">\n            </div>\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"address\">地區</label>\n                <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"\"\n                    value={{FundingToList?.address}} [(ngModel)]=\"FundingToList.address\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"investment_type\">投資類型</label>\n                <input type=\"text\" class=\"form-control\" id=\"investment_type\" name=\"investment_type\" placeholder=\"\"\n                    value={{FundingToList?.investment_type}} [(ngModel)]=\"FundingToList.investment_type\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"announced_on\">募資公佈日期</label>\n                <input type=\"text\" class=\"form-control\" id=\"announced_on\" name=\"announced_on\" placeholder=\"\"\n                    value={{FundingToList?.announced_on}} [(ngModel)]=\"FundingToList.announced_on\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"raised_amount\">已募得資金</label>\n                <input type=\"text\" class=\"form-control\" id=\"raised_amount\" name=\"raised_amount\" placeholder=\"\"\n                    value={{FundingToList?.raised_amount}} [(ngModel)]=\"FundingToList.raised_amount\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"raised_currency_code\">募得資金幣別</label>\n                <input type=\"text\" class=\"form-control\" id=\"raised_currency_code\" name=\"raised_currency_code\"\n                    placeholder=\"\" value={{FundingToList?.raised_currency_code}}\n                    [(ngModel)]=\"FundingToList.raised_currency_code\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"post_amount\">交易後估值</label>\n                <input type=\"text\" class=\"form-control\" id=\"post_amount\" name=\"post_amount\" placeholder=\"\"\n                    value={{FundingToList?.post_amount}} [(ngModel)]=\"FundingToList.post_amount\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"post_currency_code\">交易後估值幣別</label>\n                <input type=\"text\" class=\"form-control\" id=\"post_currency_code\" name=\"post_currency_code\" placeholder=\"\"\n                    value={{FundingToList?.post_currency_code}} [(ngModel)]=\"FundingToList.post_currency_code\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"capital_sought_amount\">預募得資金</label>\n                <input type=\"text\" class=\"form-control\" id=\"capital_sought_amount\" name=\"capital_sought_amount\"\n                    placeholder=\"\" value={{FundingToList?.capital_sought_amount}}\n                    [(ngModel)]=\"FundingToList.capital_sought_amount\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"capital_sought_currency_code\">預募得資金幣別</label>\n                <input type=\"text\" class=\"form-control\" id=\"capital_sought_currency_code\"\n                    name=\"capital_sought_currency_code\" placeholder=\"\"\n                    value={{FundingToList?.capital_sought_currency_code}}\n                    [(ngModel)]=\"FundingToList.capital_sought_currency_code\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"investor_count\">投資者數目</label>\n                <input type=\"text\" class=\"form-control\" id=\"investor_count\" name=\"investor_count\" placeholder=\"\"\n                    value={{FundingToList?.investor_count}} [(ngModel)]=\"FundingToList.investor_count\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"investor_names\">投資者名稱</label>\n                <input type=\"text\" class=\"form-control\" id=\"investor_names\" name=\"investor_names\" placeholder=\"\"\n                    value={{FundingToList?.investor_names}} [(ngModel)]=\"FundingToList.investor_names\">\n            </div>\n            <div class=\"form-group col-md-8\">\n                <label for=\"url\">新聞連結</label>\n                <input type=\"text\" class=\"form-control\" id=\"url\" name=\"url\" placeholder=\"\" value={{FundingToList?.url}}\n                    [(ngModel)]=\"FundingToList.url\">\n            </div>\n\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openModal(template)\">確認<i\n                class=\"\tfa fa-check-circle-o ml-2\"></i></button>\n        <button class=\"btn btn-danger ml-2\" (click)=\"goBack()\">返回<i class=\"fa fa-history ml-2\"></i></button>\n\n    </form>\n\n    <ng-template #template>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">{{FundingToList.company_name}}</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>編號</strong> : {{FundingToList.comp_id}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>公司名稱</strong> : {{FundingToList.company_name}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>地區</strong> : {{FundingToList.address}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>投資類型</strong> : {{FundingToList.investment_type}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>募資公佈日期</strong> : {{FundingToList.announced_on}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>已募得資金</strong> : {{FundingToList.raised_amount}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>募得資金幣別</strong> : {{FundingToList.raised_currency_code}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>交易後估值</strong> : {{FundingToList.post_amount}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>交易後估值幣別</strong> : {{FundingToList.post_currency_code}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>預募得資金</strong> : {{FundingToList.capital_sought_amount}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>預募得資金幣別</strong> : {{FundingToList.capital_sought_currency_code}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>投資者數目</strong> : {{FundingToList.investor_count}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>投資者名稱</strong> : {{FundingToList.investor_names}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>新聞連結</strong> : {{FundingToList.url}}\n            </div>\n            <button class=\"btn btn-danger ml-2\" (click)=\"actionFunding()\">發送<i class=\"fa fa-send ml-2\"></i></button>\n        </div>\n    </ng-template>\n\n</div>\n\n<!-- MODALS -->\n\n<ng-template #companyAdd>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">加入新公司</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n                <label for=\"comp_banno\">統編</label>\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control\" id=\"comp_banno\" name=\"comp_banno\" placeholder=\"\"\n                        value={{companyToAdd?.comp_banno}} [(ngModel)]=\"companyToAdd.comp_banno\">\n                    <button class=\"btn btn-success ml-2\" (click)=\"generateCompanyId()\">隨機統編<i\n                            class=\"fa fa-cubes ml-2\"></i></button>\n                </div>\n                <label for=\"inputName\">公司名稱</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\"\n                    value={{companyToAdd?.comp_name}} [(ngModel)]=\"companyToAdd.comp_name\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-danger ml-2\" (click)=\"modalRef.hide()\">返回<i class=\"fa fa-history ml-2\"></i></button>\n        <button class=\"btn btn-primary\" (click)=\"addCompany()\"><i class=\"fa fa-send\"></i> 確認</button>\n    </div>\n</ng-template>\n\n<ng-template #companySearch>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">公司搜索</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"inlineFormInputName\">關鍵字</label>\n            <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName\" placeholder=\"Keyword\"\n                value={{compToSearch?.ToSearch}} [(ngModel)]=\"compToSearch.ToSearch\">\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-success\" (click)=\"searchCompanyKeyword()\"><i class=\"fa fa-send\"></i> 確認</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/edit-funding/edit-funding.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-funding/edit-funding.component.ts ***!
  \********************************************************/
/*! exports provided: EditFundingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFundingComponent", function() { return EditFundingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _funding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funding.service */ "./src/app/funding.service.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditFundingComponent = /** @class */ (function () {
    function EditFundingComponent(activatedRoute, fundingService, companyService, modalService) {
        this.activatedRoute = activatedRoute;
        this.fundingService = fundingService;
        this.companyService = companyService;
        this.modalService = modalService;
        this.error = false;
        this.errorMessage = '';
        this.companyToAdd = {
            id: '0',
            comp_banno: '0',
            comp_industry: '',
            comp_location: '',
            comp_name: '',
            comp_tel: '',
            comp_area: '',
            comp_fax: '',
            comp_url: '',
            comp_amount: '',
            comp_extra_url: '',
            comp_employee: '',
            comp_contact: '',
            comp_tag: '',
            comp_desc: '',
            comp_media_report: '',
            comp_business: '',
            comp_createdate: '',
            done: '0',
            confirmed: 0,
            comp_keyword: '',
            extra: ''
        };
        this.FundingToList = {
            id: '0',
            article_id: '',
            comp_id: 0,
            company_name: '',
            address: '',
            investment_type: '',
            announced_on: '',
            raised_amount: '',
            raised_currency_code: '',
            post_amount: '',
            post_currency_code: '',
            capital_sought_amount: '',
            capital_sought_currency_code: '',
            investor_count: '',
            investor_names: '',
            url: '',
            created: '',
            updated: ''
        };
        this.compToSearch = {
            PageNumber: 1,
            PageSize: 10,
            ToSearch: '',
            ArrangeFor: 'id',
            Arrange: 'ASC'
        };
        this.id = 0;
        this.type = 0;
    }
    EditFundingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            _this.id = param['id'];
            _this.type = param['type']; // 1 = add, 0 = edit
            if (_this.type < 1) {
                _this.getFunding();
            }
            else {
                _this.FundingToList.comp_id = _this.id;
            }
        });
    };
    EditFundingComponent.prototype.addCompany = function () {
        var _this = this;
        this.companyService.addCompany(this.companyToAdd).subscribe(function (returned) {
            _this.FundingToList.comp_id = returned['r'];
            _this.modalRef.hide();
        }, function (error) {
            alertify.error('Error: Network or possibly duplicated record');
        });
    };
    EditFundingComponent.prototype.generateCompanyId = function () {
        this.companyToAdd.comp_banno = this.companyService.generateCompanyId();
    };
    EditFundingComponent.prototype.searchCompanyKeyword = function () {
        var _this = this;
        this.companyService.listCompany(this.compToSearch).subscribe(function (returned) {
            if (returned) {
                _this.FundingToList.comp_id = returned['companies'][0]['id'];
                _this.modalRef.hide();
            }
            else {
                _this.error = true;
                _this.errorMessage = returned['m'];
            }
        });
    };
    EditFundingComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    EditFundingComponent.prototype.actionFunding = function () {
        if (this.type < 1) {
            this.editFunding();
        }
        else {
            this.addFunding();
        }
    };
    EditFundingComponent.prototype.addFunding = function () {
        var _this = this;
        this.fundingService.addFunding(this.FundingToList).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.modalRef.hide();
                window.history.back();
            }
            else {
                _this.error = true;
                _this.errorMessage = returned['m'];
            }
        });
    };
    EditFundingComponent.prototype.editFunding = function () {
        var _this = this;
        this.fundingService.editFunding(this.FundingToList).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.modalRef.hide();
                window.history.back();
            }
            else {
                _this.error = true;
                _this.errorMessage = returned['m'];
            }
        }, function (error) {
            alertify.error('Error: Network or possibly duplicated record');
        });
    };
    EditFundingComponent.prototype.goBack = function () {
        window.history.back();
    };
    EditFundingComponent.prototype.getFunding = function () {
        var _this = this;
        this.fundingService.getFundingById(this.id).subscribe(function (funding) {
            funding['result'].forEach(function (funding) {
                _this.FundingToList = funding;
            });
        }, function (error) {
            alertify.error('Error: Network');
        });
    };
    EditFundingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-funding',
            template: __webpack_require__(/*! ./edit-funding.component.html */ "./src/app/edit-funding/edit-funding.component.html"),
            styles: [__webpack_require__(/*! ./edit-funding.component.css */ "./src/app/edit-funding/edit-funding.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _funding_service__WEBPACK_IMPORTED_MODULE_2__["FundingService"], _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], EditFundingComponent);
    return EditFundingComponent;
}());



/***/ }),

/***/ "./src/app/funding.service.ts":
/*!************************************!*\
  !*** ./src/app/funding.service.ts ***!
  \************************************/
/*! exports provided: FundingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundingService", function() { return FundingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FundingService = /** @class */ (function () {
    function FundingService(http) {
        this.http = http;
        this.fundingUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fundingURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
        };
    }
    FundingService.prototype.getFunding = function (comp) {
        var url = this.fundingUrl + '/company?ToSearch=' + comp.ToSearch + '&PageNumber=' + comp.PageNumber +
            '&PageSize=' + comp.PageSize +
            '&ArrangeFor=' + comp.ArrangeFor + '&Arrange=' + comp.Arrange;
        return this.http.get(url, this.httpOptions);
    };
    FundingService.prototype.getFundingById = function (Id) {
        var url = this.fundingUrl + '?id=' + Id;
        return this.http.get(url, this.httpOptions);
    };
    FundingService.prototype.editFunding = function (comp) {
        return this.http.post(this.fundingUrl + '/edit', comp, this.httpOptions);
    };
    FundingService.prototype.addFunding = function (comp) {
        return this.http.post(this.fundingUrl + '/add', comp, this.httpOptions);
    };
    FundingService.prototype.deleteFunding = function (id) {
        var a = { id: id };
        return this.http.post(this.fundingUrl + '/delete', a, this.httpOptions);
    };
    FundingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FundingService);
    return FundingService;
}());



/***/ }),

/***/ "./src/app/funding/funding.component.css":
/*!***********************************************!*\
  !*** ./src/app/funding/funding.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n    margin-top: 8px;\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n}"

/***/ }),

/***/ "./src/app/funding/funding.component.html":
/*!************************************************!*\
  !*** ./src/app/funding/funding.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div *ngIf=\"compToSearch.ToSearch > '0'\">\n  <button class=\"btn btn-outline-danger\" style=\"margin: 10px\" tooltip=\"加入新投資\"\n    (click)=\"navigateToAddFunding(compToSearch.ToSearch)\"><i class=\"fa fa-plus\"> 加入新投資</i></button>\n</div>\n<table class=\"table table-hover table-sm\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <!-- ID -->\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'id'\" (click)=\"changeArrange('id')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          id<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          id<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'id'\" (click)=\"changeArrange('id')\">\n        id <i class=\"fa fa-unsorted\"></i>\n      </th>\n      <!-- COMPANY NAME -->\n      <th class=\"centered-th\" style=\"word-wrap: break-word; max-width: 30%;\" scope=\"col\"\n        *ngIf=\"compToSearch.ArrangeFor === 'company_name'\" (click)=\"changeArrange('company_name')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          公司名稱<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          公司名稱<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" style=\"word-wrap: break-word; max-width: 30%;\" scope=\"col\"\n        *ngIf=\"compToSearch.ArrangeFor !== 'company_name'\" (click)=\"changeArrange('company_name')\">\n        公司名稱 <i class=\"fa fa-unsorted\"></i>\n      </th>\n\n      <!-- \"investment_type\" -->\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'investment_type'\"\n        (click)=\"changeArrange('investment_type')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          投資類型<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          投資類型<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'investment_type'\"\n        (click)=\"changeArrange('investment_type')\">\n        投資類型 <i class=\"fa fa-unsorted\"></i>\n      </th>\n      <!-- \"announced_on\" -->\n      <!-- <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'announced_on'\"\n        (click)=\"changeArrange('announced_on')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          募資公佈日期<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          募資公佈日期<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'announced_on'\"\n        (click)=\"changeArrange('announced_on')\">\n        募資公佈日期 <i class=\"fa fa-unsorted\"></i>\n      </th> -->\n      <!-- \"raised_amount\" -->\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'raised_amount'\"\n        (click)=\"changeArrange('raised_amount')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          已募得資金<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          已募得資金<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'raised_amount'\"\n        (click)=\"changeArrange('raised_amount')\">\n        已募得資金 <i class=\"fa fa-unsorted\"></i>\n      </th>\n      <!-- \"raised_currency_code\" -->\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'raised_currency_code'\"\n        (click)=\"changeArrange('raised_currency_code')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          募得資金幣別<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          募得資金幣別<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'raised_currency_code'\"\n        (click)=\"changeArrange('raised_currency_code')\">\n        募得資金幣別 <i class=\"fa fa-unsorted\"></i>\n      </th>\n      <!-- \"post_amount\" -->\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'post_amount'\"\n        (click)=\"changeArrange('post_amount')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          交易後估值<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          交易後估值<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'post_amount'\"\n        (click)=\"changeArrange('post_amount')\">\n        交易後估值 <i class=\"fa fa-unsorted\"></i>\n      </th>\n      <!-- \"post_currency_code\" -->\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'post_currency_code'\"\n        (click)=\"changeArrange('post_currency_code')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          交易後估值幣別<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          交易後估值幣別<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'post_currency_code'\"\n        (click)=\"changeArrange('post_currency_code')\">\n        交易後估值幣別 <i class=\"fa fa-unsorted\"></i>\n      </th>\n      <!-- capital_sought_amount -->\n      <!-- <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'capital_sought_amount'\"\n        (click)=\"changeArrange('capital_sought_amount')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          預募得資金<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          預募得資金<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'capital_sought_amount'\"\n        (click)=\"changeArrange('capital_sought_amount')\">\n        預募得資金 <i class=\"fa fa-unsorted\"></i>\n      </th> -->\n      <!-- capital_sought_currency_code -->\n      <!-- <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\"\n        *ngIf=\"compToSearch.ArrangeFor === 'capital_sought_currency_code'\"\n        (click)=\"changeArrange('capital_sought_currency_code')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          預募得資金幣別<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          預募得資金幣別<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\"\n        *ngIf=\"compToSearch.ArrangeFor !== 'capital_sought_currency_code'\"\n        (click)=\"changeArrange('capital_sought_currency_code')\">\n        預募得資金幣別 <i class=\"fa fa-unsorted\"></i>\n      </th> -->\n      <!-- \"investor_count\" -->\n      <!-- <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'investor_count'\"\n        (click)=\"changeArrange('investor_count')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          投資者數目<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          投資者數目<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'investor_count'\"\n        (click)=\"changeArrange('investor_count')\">\n        投資者數目 <i class=\"fa fa-unsorted\"></i>\n      </th> -->\n      <!-- \"investor_names\" -->\n      <!-- <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'investor_names'\"\n        (click)=\"changeArrange('investor_names')\">\n        <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n          投資者名稱<i class=\"fa fa-sort-asc ml-1\"></i>\n        </span>\n        <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n          投資者名稱<i class=\"fa fa-sort-desc ml-1\"></i>\n        </span>\n      </th>\n      <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'investor_names'\"\n        (click)=\"changeArrange('investor_names')\">\n        投資者名稱 <i class=\"fa fa-unsorted\"></i>\n      </th> -->\n\n      <th class=\"text-center centered-th\" scope=\"col\">\n        管理\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let list of fundingToList\">\n      <td style=\"width: 5%;\" (click)=\"openModal(template)\">{{list.id}}</td>\n      <td style=\"word-wrap: break-word; width: 350px;\" (click)=\"openModal(template)\">{{list.company_name}}</td>\n      <td style=\"width: 70px;\" (click)=\"openModal(template)\">{{list.investment_type}}</td>\n      <!-- <td style=\"width: 70px;\" (click)=\"openModal(template)\">{{list.announced_on}}</td> -->\n      <td style=\"width: 10%;\" (click)=\"openModal(template)\">{{list.raised_amount}}</td>\n      <td style=\"width: 100px;\" (click)=\"openModal(template)\">{{list.raised_currency_code}}</td>\n      <td style=\"width: 10%;\" (click)=\"openModal(template)\">{{list.post_amount}}</td>\n      <td style=\"width: 100px;\" (click)=\"openModal(template)\">{{list.post_currency_code}}</td>\n      <!-- <td (click)=\"openModal(template)\">{{list.capital_sought_amount}}</td>\n      <td (click)=\"openModal(template)\">{{list.capital_sought_currency_code}}</td>\n      <td (click)=\"openModal(template)\">{{list.investor_count}}</td>\n      <td (click)=\"openModal(template)\">{{list.investor_names}}</td> -->\n      <td style=\"width: 150px;\" class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-outline-info mr-2\" tooltip=\"展開\" (click)=\"openModal(template)\"><i\n            class=\"fa fa-folder-open-o\"></i></button>\n        <button class=\"btn btn-outline-primary mr-2\" tooltip=\"編輯\" (click)=\"navigateToEditFunding(list.id)\"><i\n            class=\"fa fa-edit\"></i></button>\n        <a class=\"btn btn-outline-warning mr-2\" tooltip=\"url\" href={{list.url}} target=\"_blank\"><i\n            class=\"fa fa-link\"></i></a>\n        <button class=\"btn btn-outline-danger\" tooltip=\"刪除\" (click)=\"openModal(confirmDelete)\"><i\n            class=\"fa fa-remove\"></i></button>\n      </td>\n\n      <!-- MODALS -->\n\n      <ng-template #confirmDelete>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">刪除公司</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          請再次確認該筆資料是否正確？\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-danger\" (click)=\"deleteFunding(list.id)\"><i class=\"fa fa-send\"></i> 確認</button>\n        </div>\n      </ng-template>\n\n      <ng-template #template>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\" style=\"overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2\">{{list.company_name}}</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>編號</strong> : {{list.comp_id}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>公司名稱</strong> : {{list.company_name}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>地區</strong> : {{list.address}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>投資類型</strong> : {{list.investment_type}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>募資公佈日期</strong> : {{list.announced_on}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>已募得資金</strong> : {{list.raised_amount}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>募得資金幣別</strong> : {{list.raised_currency_code}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>交易後估值</strong> : {{list.post_amount}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>交易後估值幣別</strong> : {{list.post_currency_code}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>預募得資金</strong> : {{list.capital_sought_amount}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>預募得資金幣別</strong> : {{list.capital_sought_currency_code}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>投資者數目</strong> : {{list.investor_count}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>投資者名稱</strong> : {{list.investor_names}}\n          </div>\n          <div class=\"alert alert-dark m-2\" role=\"alert\">\n            <strong>新聞連結</strong> : {{list.url}}\n          </div>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\"></button>\n        </div>\n      </ng-template>\n\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col col-lg-10\">\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"paging.TotalCount\" [(ngModel)]=\"paging.CurrentPage\" [maxSize]=10\n        (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n        lastText=\"{{paging.TotalPages}} &raquo;\">\n      </pagination>\n    </div>\n    <div class=\"col col-lg-2\">\n      <div class=\"form-group form-inline ml-2\">\n        <input class=\"form-control form-control-sm col-md-4\" type=\"text\" name=\"newpage\" placeholder=\"Go to page\"\n          [(ngModel)]=\"gotopage\">\n        <button class=\"form-control form-control-sm btn btn-outline-primary ml-2\" (click)=\"goToPage()\"> <i\n            class=\"fa fa-search\"></i> 提交</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/funding/funding.component.ts":
/*!**********************************************!*\
  !*** ./src/app/funding/funding.component.ts ***!
  \**********************************************/
/*! exports provided: FundingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundingComponent", function() { return FundingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _funding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../funding.service */ "./src/app/funding.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FundingComponent = /** @class */ (function () {
    function FundingComponent(modalService, route, router, fundingService, jwtHelper) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.fundingService = fundingService;
        this.jwtHelper = jwtHelper;
        this.writePermission = 0;
        this.adminPermission = 0;
        this.decodedData = '';
        this.compToSearch = {
            PageNumber: 1,
            PageSize: 10,
            ToSearch: '',
            ArrangeFor: 'id',
            Arrange: 'ASC'
        };
        this.gotopage = 1;
        this.paging = {
            CurrentPage: 1,
            PageSize: 10,
            TotalCount: 240,
            TotalPages: 0,
        };
        this.fundingToList = [];
    }
    FundingComponent.prototype.ngOnInit = function () {
        this.compToSearch.ToSearch = this.route.snapshot.paramMap.get('id');
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (this.decodedData['data']['permission'] > 807) {
            this.adminPermission = 1;
        }
        if (this.decodedData['data']['permission'] > 295) {
            this.writePermission = 1;
        }
        this.getFunding();
    };
    FundingComponent.prototype.navigateToEditFunding = function (id) {
        this.router.navigate(['/edit/funding', id, 'type', 0]);
    };
    FundingComponent.prototype.navigateToAddFunding = function (id) {
        this.router.navigate(['/edit/funding', id, 'type', 1]);
    };
    FundingComponent.prototype.pageChanged = function (event) {
        if (event.page <= this.paging.TotalCount) {
            this.paging.CurrentPage = event.page;
            this.getFunding();
        }
    };
    FundingComponent.prototype.goToPage = function () {
        this.paging.CurrentPage = this.gotopage;
        this.getFunding();
    };
    FundingComponent.prototype.changeArrange = function (field) {
        this.compToSearch.ArrangeFor = field;
        if (this.compToSearch.Arrange === 'ASC') {
            this.compToSearch.Arrange = 'DESC';
        }
        else {
            this.compToSearch.Arrange = 'ASC';
        }
        this.getFunding();
    };
    FundingComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    FundingComponent.prototype.deleteFunding = function (id) {
        var _this = this;
        this.fundingService.deleteFunding(id).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.modalRef.hide();
                _this.getFunding();
            }
        });
    };
    FundingComponent.prototype.getFunding = function () {
        var _this = this;
        this.compToSearch.PageSize = this.paging.PageSize;
        this.compToSearch.PageNumber = this.paging.CurrentPage;
        this.fundingService.getFunding(this.compToSearch).subscribe(function (funding) {
            _this.fundingToList.splice(0, _this.paging.PageSize);
            funding['result'].forEach(function (funding) { return _this.fundingToList.push(funding); });
            _this.paging.CurrentPage = funding['paging']['CurrentPage'];
            _this.paging.TotalCount = funding['paging']['TotalCount'];
            _this.paging.PageSize = funding['paging']['PageSize'];
            _this.paging.TotalPages = funding['paging']['TotalPages'];
        }, function (error) {
            alertify.error('Error: Network');
        });
    };
    FundingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-funding',
            template: __webpack_require__(/*! ./funding.component.html */ "./src/app/funding/funding.component.html"),
            styles: [__webpack_require__(/*! ./funding.component.css */ "./src/app/funding/funding.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _funding_service__WEBPACK_IMPORTED_MODULE_1__["FundingService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], FundingComponent);
    return FundingComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].loginURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    LoginService.prototype.login = function (loginUser) {
        var params = 'email=' + loginUser.email
            + '&password=' + loginUser.password;
        return this.http.post(this.loginUrl, params, this.httpOptions);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 10%;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #ffffff;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\" style=\"width: 300px;\">\n  <img src=\"../../assets/logo.jpg\">\n</div>\n\n<div class=\"text-center\">\n<form class=\"form-signin\" (ngSubmit)=\"login()\">\n\n    <h1 class=\"h3 mb-3 font-weight-normal\">請登錄</h1>\n\n      <div class=\"form-group\">\n\n        <label class=\"sr-only\">Email</label>\n        <input class=\"form-control\" placeholder=\"username@domain\" name=\"email\" type=\"text\" [(ngModel)]=\"model.email\" required autofocus>\n\n      </div>\n      <div class=\"form-group\">\n\n        <label class=\"sr-only\">密碼</label>\n        <input class=\"form-control\" name=\"password\" type=\"password\" [(ngModel)]=\"model.password\" required>\n\n      </div>\n      <div class=\"form-group\">\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n      </div>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2019-2020</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, loginService, memberService) {
        this.router = router;
        this.fb = fb;
        this.loginService = loginService;
        this.memberService = memberService;
        this.model = { email: '', password: '' };
        this.loginModel = { r: 1, token: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.model).subscribe(function (returned) {
            _this.loginModel = returned;
            if (_this.loginModel.r === 0) {
                localStorage.setItem('token', _this.loginModel.token);
                _this.router.navigate(['/dashboard']);
            }
            else {
                alertify.error('Wrong username or password');
            }
        }, function (error) {
            alertify.error('Error: Possible network error');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/member.service.ts":
/*!***********************************!*\
  !*** ./src/app/member.service.ts ***!
  \***********************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberService = /** @class */ (function () {
    function MemberService(http) {
        this.http = http;
        // private memberUrl = 'http://rgbetanco.net:8082/user';
        this.memberUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].memberURL;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    }
    MemberService.prototype.listMembers = function () {
        var url = this.memberUrl + '/list';
        return this.http.get(url, this.httpOptions);
    };
    MemberService.prototype.register = function (m) {
        var url = this.memberUrl + '/register';
        var param = 'email=' + m.email + '&password=' + m.password;
        return this.http.post(url, param, this.httpOptions);
    };
    MemberService.prototype.disableMember = function (id) {
        var url = this.memberUrl + '/enable';
        var param = 'id=' + id + '&enabled=0';
        return this.http.post(url, param, this.httpOptions);
    };
    MemberService.prototype.updatePermission = function (memberToList) {
        var url = this.memberUrl + '/updatepermission';
        var write = 0;
        if (memberToList.writePermission) {
            write = 1;
        }
        var param = 'id=' + memberToList.id + '&write=' + write;
        return this.http.post(url, param, this.httpOptions);
    };
    MemberService.prototype.getPermission = function () {
        var url = this.memberUrl + '/permission';
        return this.http.get(url, this.httpOptions);
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/member/member.component.css":
/*!*********************************************!*\
  !*** ./src/app/member/member.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member.component.html":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container-fluid mt-4\">\n<div class=\"text-center\">\n  <div class=\"card mb-2\">\n    <div class=\"card-header\">加入使用者</div>\n    <div class=\"card-body\">\n      <form #registerFrom=\"ngForm\" class=\"form-inline\" (ngSubmit)=\"add()\">\n\n              <div class=\"form-group mb-2\">\n                <!-- <label for=\"emailr\" class=\"sr-only\">Email</label> -->\n                <input type=\"text\" class=\"form-control\" id=\"emailr\" name=\"emailr\" placeholder=\"email@example.com\" [(ngModel)]=\"model.email\" required>\n              </div>\n              <div class=\"form-group mx-sm-3 mb-2\">\n                <!-- <label for=\"passwordr\" class=\"sr-only\">Password</label> -->\n                <input type=\"password\" class=\"form-control\" id=\"passwordr\" name=\"passwordr\" placeholder=\"Password\" [(ngModel)]=\"model.password\" required>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary mb-2\"> <i class=\"fa fa-address-book-o\"></i> 加入使用者</button>\n\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<table class=\"table table-hover table-sm\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">編號</th>\n      <th scope=\"col\">使用者(Email)</th>\n      <th scope=\"col\">最後登入</th>\n      <th scope=\"col\">創建</th>\n      <th scope=\"col\">權限</th>\n      <th scope=\"col\">管理</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of mToList\">\n      <th scope=\"row\">{{item.id}}</th>\n      <td>{{item.email}}</td>\n      <td>{{item.lastlogin}}</td>\n      <td>{{item.created}}</td>\n      <td>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" (change)=\"updatePermission(item.id)\" value=\"write\" [checked]=\"item.writePermission\" [disabled]=\"!adminPermission\" [(ngModel)]=\"item.writePermission\">\n            <label class=\"form-check-label\" for=\"inlineCheckbox2\">編輯</label>\n          </div>\n      </td>\n      <td><button class=\"btn btn-danger\" [disabled]=\"!adminPermission\" (click)=\"openModal(template)\"><i class=\"fa fa-close\"></i> 刪除</button></td>\n\n      <ng-template #template>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">確認</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            您確定要禁用該會員嗎？\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-danger\" (click)=\"disableMember(item.id)\">確認</button>\n          </div>\n        </ng-template>\n\n    </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member.service */ "./src/app/member.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberComponent = /** @class */ (function () {
    function MemberComponent(router, memberService, jwtHelper, _location, modalService) {
        this.router = router;
        this.memberService = memberService;
        this.jwtHelper = jwtHelper;
        this._location = _location;
        this.modalService = modalService;
        this.model = { email: '', password: '' };
        this.mToList = [];
        this.adminPermission = 0;
        this.decodedData = '';
    }
    MemberComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (this.decodedData['data']['permission'] >= 807) {
            this.adminPermission = 1;
        }
        else {
            this._location.back();
        }
        this.listUser();
    };
    MemberComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    MemberComponent.prototype.updatePermission = function (id) {
        var cMember = this.mToList.find(function (itemId) { return itemId.id === id; });
        this.memberService.updatePermission(cMember).subscribe(function (returned) {
            alertify.success('Permission Updated');
        });
    };
    MemberComponent.prototype.add = function () {
        var _this = this;
        if (this.model.email === '' || this.model.password === '') {
            alertify.error('必需參數錯誤');
        }
        else {
            this.memberService.register(this.model).subscribe(function (returned) {
                if (returned['r'] === 0) {
                    _this.model.email = '';
                    _this.model.password = '';
                    _this.listUser();
                    alertify.success('User Registered');
                }
                else {
                    alertify.error(returned['m']);
                }
            }, function (errorMessage) {
                alertify.error('Error, possible duplicated record');
            });
        }
    };
    MemberComponent.prototype.disableMember = function (id) {
        var _this = this;
        this.memberService.disableMember(id).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.listUser();
                alertify.success('User disabled');
            }
            else {
                alertify.error('Network Error');
            }
            _this.modalRef.hide();
        });
    };
    MemberComponent.prototype.listUser = function () {
        var _this = this;
        this.mToList.splice(0);
        this.memberService.listMembers().subscribe(function (members) {
            members['data'].forEach(function (member) {
                _this.mToList.push(member);
            });
        });
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The sidebar menu */\n.sidenav {\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 160px; /* Set the width of the sidebar */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: 1; /* Stay on top */\n    top: 94px; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n  }\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n  }\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #f1f1f1;\n  }\n/* Style page content */\n.main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }\n  "

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <i class=\"navbar-brand\"><img src=\"../../assets/logo_large.png\"></i>\n\n  <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button> -->\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"dashboardLink\">Home <span class=\"sr-only\"></span></a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"adminPermission == 1\">\n          <a class=\"nav-link\" [routerLink]=\"membersLink\">Members</a>\n        </li> -->\n    </ul>\n\n    <span class=\"nav-item\">\n      <button class=\" btn btn-outline-primary nav-link\" (click)=\"navigateToDashboard()\"><i class=\"fa fa-home\"></i> 首頁\n        <span class=\"sr-only\"></span></button>\n    </span>\n\n    <span class=\"nav-item\" *ngIf=\"adminPermission == 1\">\n      <a class=\" btn btn-outline-primary nav-link ml-2\" [routerLink]=\"membersLink\"><i class=\"fa fa-users\"></i> 會員中心</a>\n    </span>\n\n    <span>\n      <i class=\"fa fa-user-circle-o ml-2\"></i> {{userEmail}}\n    </span>\n\n    <span class=\"nav-item\">\n      <a class=\"btn btn-outline-primary nav-link ml-2\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> 登出</a>\n    </span>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(router, jwtHelper) {
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.clearSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.decodedData = '';
        this.adminPermission = 0;
        this.writePermission = 0;
        this.userEmail = '';
        this.membersLink = '/members';
        this.dashboardLink = '/dashboard';
    }
    NavComponent.prototype.ngOnInit = function () {
        this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (this.decodedData['data']['permission'] > 807) {
            this.adminPermission = 1;
        }
        if (this.decodedData['data']['permission'] > 295) {
            this.writePermission = 1;
        }
        this.userEmail = this.decodedData['data']['email'];
    };
    NavComponent.prototype.navigateToDashboard = function () {
        this.clearSearch.emit(true);
        this.router.navigate([this.dashboardLink]);
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "clearSearch", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    companyURL: 'http://localhost:5000/company',
    memberURL: 'http://localhost:5000/user',
    loginURL: 'http://localhost:5000/user/signin',
    fundingURL: 'http://localhost:5000/funding'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rgbetanco/Documents/angular/IEK/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map