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

module.exports = "<app-nav></app-nav>\n\n<div class=\"container mt-3 mb-3\">\n\n  <div *ngIf=\"error\" class=\"alert alert-danger col-md-12\" role=\"alert\">\n    {{errorMessage}}\n  </div>\n\n\n  <form #companyForm=\"ngForm\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"comp_banno\">統編</label>\n        <div class=\"form-inline\">\n          <input type=\"text\" class=\"form-control\" id=\"comp_banno\" name=\"comp_banno\" placeholder=\"\"\n            value={{companyToAdd?.comp_banno}} [(ngModel)]=\"companyToAdd.comp_banno\">\n            <button class=\"btn btn-success ml-2\" (click)=\"generateCompanyId()\">隨機統編<i class=\"fa fa-cubes ml-2\"></i></button>\n        </div>\n      </div>\n      <div class=\"form-group col-md-8\">\n        <label for=\"inputName\">公司名稱</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\"\n          value={{companyToAdd?.comp_name}} [(ngModel)]=\"companyToAdd.comp_name\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputIndustry\">產業類別</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputIndustry\" name=\"industry\" placeholder=\"\"\n          value={{companyToAdd?.comp_industry}} [(ngModel)]=\"companyToAdd.comp_industry\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputLocation\">公司地址</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputLocation\" name=\"location\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_location}}\" [(ngModel)]=\"companyToAdd.comp_location\">\n      </div>\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputArea\">公司地區</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputArea\" name=\"area\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_area}}\" [(ngModel)]=\"companyToAdd.comp_area\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAmount\">資本額</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAmount\" name=\"amount\" placeholder=\"\"\n          value={{companyToAdd?.comp_amount}} [(ngModel)]=\"companyToAdd.comp_amount\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputEmployees\">員工人數</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputEmployees\" name=\"Employees\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_employee}}\" [(ngModel)]=\"companyToAdd.comp_employee\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputContact\">聯絡人</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputContact\" name=\"contact\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_contact}}\" [(ngModel)]=\"companyToAdd.comp_contact\">\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputTel\">電話</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputTel\" name=\"tel\" placeholder=\"\" value={{companyToAdd?.comp_tel}}\n          [(ngModel)]=\"companyToAdd.comp_tel\">\n      </div>\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputFax\">傳真</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputFax\" name=\"fax\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_fax}}\" [(ngModel)]=\"companyToAdd.comp_fax\">\n      </div>\n      <div class=\"form-group col-md-8\">\n        <label for=\"inputUrl\">公司網址</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputUrl\" name=\"url\" placeholder=\"\"\n          value=\"{{companyToAdd?.comp_url}}\" [(ngModel)]=\"companyToAdd.comp_url\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputExtraURL\">粉絲專頁(FB)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputExtraURL\" name=\"extraUrl\" placeholder=\"\"\n        value=\"{{companyToAdd?.comp_extra_url}}\" [(ngModel)]=\"companyToAdd.comp_extra_url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputTags\">標籤(Yourator)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputTags\" name=\"tag\" placeholder=\"\"\n        value=\"{{companyToAdd?.comp_tag}}\" [(ngModel)]=\"companyToAdd.comp_tag\">\n    </div>\n    <!-- TABS -->\n    <div class=\"mt-4\">\n      <tabset>\n        <tab heading=\"公司簡介\" id=\"tab1\">\n          <div class=\"form-group\">\n            <label for=\"inputDescription\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputDescription\" name=\"description\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_desc}}\" [(ngModel)]=\"companyToAdd.comp_desc\"></textarea>\n          </div>\n        </tab>\n        <tab heading=\"媒體報導\">\n          <div class=\"form-group\">\n            <label for=\"inputMediaReport\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputMediaReport\" name=\"mediareport\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_media_report}}\" [(ngModel)]=\"companyToAdd.comp_media_report\"></textarea>\n          </div>\n        </tab>\n        <tab heading=\"主要商品/服務項目\">\n          <div class=\"form-group\">\n            <label for=\"inputBusiness\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputBusiness\" name=\"business\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_business}}\" [(ngModel)]=\"companyToAdd.comp_business\"></textarea>\n          </div>\n        </tab>\n        <tab heading=\"關鍵字\">\n          <div class=\"form-group\">\n            <label for=\"inputKeyword\"></label>\n            <textarea rows=\"10\" cols=\"10\" class=\"form-control\" id=\"inputKeyword\" name=\"keyword\" placeholder=\"\"\n              value=\"{{companyToAdd?.comp_keyword}}\" [(ngModel)]=\"companyToAdd.comp_keyword\"></textarea>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openModal(template)\">確認<i\n        class=\"\tfa fa-check-circle-o ml-2\"></i></button>\n    <button class=\"btn btn-danger ml-2\" (click)=\"goBack()\">返回<i class=\"fa fa-history ml-2\"></i></button>\n  </form>\n\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{companyToAdd.comp_name}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>統編</strong> : {{companyToAdd.comp_banno}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>產業類別</strong> : {{companyToAdd.comp_industry}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>公司地址</strong> : {{companyToAdd.comp_location}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>公司地區</strong> : {{companyToAdd.comp_area}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>資本額</strong> : {{companyToAdd.comp_amount}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>員工人數</strong> : {{companyToAdd.comp_employee}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>聯絡人</strong> : {{companyToAdd.comp_contact}}\n      </div>\n\n      <div class=\"alert alert-success m-2\" role=\"alert\">\n        <strong>電話</strong> : {{companyToAdd.comp_tel}}\n      </div>\n\n      <div class=\"alert alert-success m-2\" role=\"alert\">\n        <strong>傳真</strong> : {{companyToAdd.comp_fax}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>公司網址</strong> : {{companyToAdd.comp_url}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>粉絲專頁(FB)</strong> : {{companyToAdd.comp_extra_url}}\n      </div>\n\n      <div class=\"alert alert-dark m-2\" role=\"alert\">\n        <strong>標籤(Yourator)</strong> : {{companyToAdd.comp_tag}}\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          公司簡介\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_desc}}\n        </div>\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          媒體報導\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_media_report}}\n        </div>\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          主要商品/服務項目\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_business}}\n        </div>\n      </div>\n\n      <div class=\"card m-2 border-info\">\n        <div class=\"card-header\">\n          品牌/縮寫/關鍵字\n        </div>\n        <div class=\"card-body\">\n          {{companyToAdd.comp_keyword}}\n        </div>\n      </div>\n\n      <button class=\"btn btn-danger ml-2\" (click)=\"addCompany()\">發送<i class=\"fa fa-send ml-2\"></i></button>\n\n    </div>\n  </ng-template>\n\n</div>"

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



alertify.set('notifier', 'position', 'top-center');
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
            extra: '',
            representative: '',
            approved_date: '',
            capital: 0,
            location: '',
            established_date: ''
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
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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
/* harmony import */ var _filter_funding_filter_funding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-funding/filter-funding.component */ "./src/app/filter-funding/filter-funding.component.ts");
/* harmony import */ var _list_funding_list_funding_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-funding/list-funding.component */ "./src/app/list-funding/list-funding.component.ts");
/* harmony import */ var _entry_screen_entry_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entry-screen/entry-screen.component */ "./src/app/entry-screen/entry-screen.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
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
    { path: 'edit/funding/:id/type/:type', component: _edit_funding_edit_funding_component__WEBPACK_IMPORTED_MODULE_8__["EditFundingComponent"] },
    { path: 'filter/funding', component: _filter_funding_filter_funding_component__WEBPACK_IMPORTED_MODULE_9__["FilterFundingComponent"] },
    { path: 'list/funding', component: _list_funding_list_funding_component__WEBPACK_IMPORTED_MODULE_10__["ListFundingComponent"] },
    { path: 'entry/screen', component: _entry_screen_entry_screen_component__WEBPACK_IMPORTED_MODULE_11__["EntryScreenComponent"] },
    { path: 'page/not/found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
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

module.exports = ".alertify .ajs-dialog {\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    margin: auto;\n}"

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
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _filter_funding_filter_funding_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filter-funding/filter-funding.component */ "./src/app/filter-funding/filter-funding.component.ts");
/* harmony import */ var _list_funding_list_funding_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list-funding/list-funding.component */ "./src/app/list-funding/list-funding.component.ts");
/* harmony import */ var _entry_screen_entry_screen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./entry-screen/entry-screen.component */ "./src/app/entry-screen/entry-screen.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
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
                _edit_funding_edit_funding_component__WEBPACK_IMPORTED_MODULE_19__["EditFundingComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
                _filter_funding_filter_funding_component__WEBPACK_IMPORTED_MODULE_24__["FilterFundingComponent"],
                _list_funding_list_funding_component__WEBPACK_IMPORTED_MODULE_25__["ListFundingComponent"],
                _entry_screen_entry_screen_component__WEBPACK_IMPORTED_MODULE_26__["EntryScreenComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"]
            ],
            imports: [
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_29__["AlertModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__["FontAwesomeModule"],
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
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot()
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
    CompanyService.prototype.listCompany = function (comp, status) {
        // const url = this.companyUrl + '/list?PageNumber=' + comp.PageNumber +
        //           '&PageSize=' + comp.PageSize + '&ToSearch=' + comp.ToSearch +
        //   '&ArrangeFor=' + comp.ArrangeFor + '&Arrange=' + comp.Arrange +
        //   '&status=' + status + '&filter=' + comp.Filter;
        var url = this.companyUrl + '/list';
        console.log(comp);
        return this.http.post(url, comp, this.httpOptions);
    };
    CompanyService.prototype.confirmCompany = function (id, status) {
        var url = this.companyUrl + '/confirm';
        var param = 'id=' + id + '&status=' + status;
        return this.http.post(url, param, this.httpOptions);
    };
    CompanyService.prototype.countCompIndustry = function () {
        return this.http.get(this.companyUrl + '/countCompIndustry', this.httpOptions);
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
    CompanyService.prototype.countCompany = function () {
        return this.http.get(this.companyUrl + '/count', this.httpOptions);
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

module.exports = "#main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n}\n\n"

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






alertify.set('notifier', 'position', 'top-center');
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
            extra: '',
            representative: '',
            approved_date: '',
            capital: 0,
            location: '',
            established_date: ''
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
                //window.location.reload();
            }
            else {
                _this.error = true;
                _this.errorMessage = returned['m'];
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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

module.exports = ".centered-th {\n    cursor: pointer; \n}\n\n.button {\n    border: none;\n    color: #28A745;\n    border-color: #28A745;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin-right: 2px; /* Safari */\n    transition-duration: 0.4s;\n    font-size: 1.5em;\n    cursor: pointer;\n    border-radius: 15%;\n  }\n\n.button1 {\n    background-color: white; \n    color: rgb(53, 131, 204); \n    border: 1px solid rgb(53, 131, 204);\n  }\n\n.button1:hover {\n    background-color: rgb(53, 131, 204);\n    color: white;\n  }\n\n.button2 {\n    background-color: white; \n    color: rgb(23, 143, 49); \n    border: 1px solid rgb(23, 143, 49);\n  }\n\n.button2:hover {\n    background-color: rgb(23, 143, 49);\n    color: white;\n  }\n\n.button3 {\n    background-color: white; \n    color: #FFC107; \n    border: 1px solid #FFC107;\n  }\n\n.button3:hover {\n    background-color: #FFC107;\n    color: white;\n  }\n\n.button4 {\n    background-color: white; \n    color: #FA6A00; \n    border: 1px solid #FA6A00;\n  }\n\n.button4:hover {\n    background-color: #FA6A00;\n    color: white;\n  }\n\n.button5 {\n    background-color: white; \n    color: #007BFF; \n    border: 1px solid #007BFF;\n  }\n\n.button5:hover {\n    background-color: #007BFF;\n    color: white;\n  }\n\n.button6 {\n    background-color: white; \n    color: #DC3545; \n    border: 1px solid #DC3545;\n  }\n\n.button6:hover {\n    background-color: #DC3545;\n    color: white;\n  }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav (clearSearch)=\"OnChanges($event)\"></app-nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-2\" style=\"background-color: rgb(254, 254, 254)\">\n      <app-sidebar (statusChanged)=\"updateStatusListener($event)\" [needRefresh]=\"menuNeedRefresh\"></app-sidebar>\n    </div>\n    <div class=\"col {{fullscreen}}\">\n      <div class=\"form-inline mt-2\" name=\"searchName\">\n        <ng-multiselect-dropdown [disabled]=\"companyStatus == 4\" [placeholder]=\"'公司資料來源 (可複選)'\" [data]=\"dropdownList\"\n          [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n          (onDeSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n        </ng-multiselect-dropdown>\n\n        <ng-multiselect-dropdown [disabled]=\"companyStatus == 4\" class=\"ml-2\" [placeholder]=\"'產業類別 (可複選)'\"\n          [data]=\"dropdownListIndustry\" [(ngModel)]=\"selectedItemsIndustry\" [settings]=\"dropdownSettings\"\n          (onSelect)=\"onItemIndustrySelect($event)\" (onDeSelect)=\"onItemIndustrySelect($event)\"\n          (onSelectAll)=\"onSelectIndustryAll($event)\">\n        </ng-multiselect-dropdown>\n\n        <!-- <input name=\"original\" placeholder=\"公司成立日期\" type=\"text\" class=\"form-control ml-2\" size=\"23px\" bsDaterangepicker [(ngModel)]=\"bsRangeCValue\" (ngModelChange)=\"processCDate($event)\"> -->\n        <input name=\"updated\" placeholder=\"資料取得日期\" type=\"text\" class=\"form-control ml-2 mr-2\" size=\"23px\"\n          bsDaterangepicker [(ngModel)]=\"bsRangePValue\" (ngModelChange)=\"processPDate($event)\">\n\n      </div>\n\n      <form class=\"form-inline mt-2\">\n        <!-- <button class=\"mb-2 mr-sm-2 btn btn-outline-info\" (click)=toggleMenu()><i class=\"fa fa-bars\"></i></button> -->\n        <input class=\"form-control mb-2 mr-sm-2 col-md-6\" type=\"search\"\n          placeholder=\"篩選條件：統編、公司名稱、產業類別、公司地區、標籤、公司簡介、媒體報導、主要商品/服務項目\" name=\"toSearch\" aria-label=\"Search\"\n          [(ngModel)]=\"compToSearch.ToSearch\">\n        <button class=\"btn btn-outline-primary mb-2 mr-sm-2\" (click)=\"doSearch()\"><i class=\"fa fa-search\"></i>\n          搜尋</button>\n        <span *ngIf=\"writePermission > 0 || adminPermission > 0\">\n          <button class=\"btn btn-outline-danger mb-2 mr-sm-2\" (click)=\"openModal(clearConfirmed)\">重置確認狀態</button>\n        </span>\n        <button class=\"btn btn-outline-danger mb-2\" tooltip=\"加新\" (click)=\"navigateToAdd()\">加入新公司</button>\n        <!-- <button class=\"btn btn-outline-danger mb-2\" tooltip=\"找不到公司\" (click)=\"navigateToFunding(0)\">找不到公司</button> -->\n\n        <!-- <div class=\"btn-group mb-2\" dropdown [autoClose]=\"true\" container=\"body\">\n          <button id=\"button-nested\" dropdownToggle type=\"button\" class=\"btn btn-outline-info dropdown-toggle ml-2\"\n            aria-controls=\"dropdown-nested\">\n            Menu <span class=\"caret\"></span>\n          </button>\n          <ul id=\"dropdown-nested\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-nested\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"\">公司基本資料管理</a></li>\n\n            <li role=\"menuitem\" dropdown triggers=\"mouseover\" placement=\"right\" container=\"body\">\n              <a dropdownToggle class=\"dropdown-item dropdown-toggle\" (click)=\"false\">募資紀錄管理<span class=\"caret\"></span></a>\n              <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"navigateToFunding(0)\">找不到公司</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div> -->\n\n      </form>\n\n      <ng-template #clearConfirmed>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title pull-left\">重置公司資料更新狀態</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          確認重置狀態？\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-danger\" (click)=\"clearConfirmedCompany()\"><i class=\"fa fa-send\"></i> 確定</button>\n        </div>\n      </ng-template>\n\n      <table class=\"table table-hover table-sm\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <!-- COMP_ID -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'id'\"\n              (click)=\"changeArrange('id')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                編號<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                編號<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'id'\"\n              (click)=\"changeArrange('id')\">\n              編號 <i class=\"fa fa-unsorted\"></i>\n            </th>\n            <!-- TONPIEN -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_banno'\"\n              (click)=\"changeArrange('comp_banno')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                統編<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                統編<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_banno'\"\n              (click)=\"changeArrange('comp_banno')\">\n              統編 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- COMP_NAME -->\n            <th class=\"centered-th mx-auto p-2 perc20\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_name'\"\n              (click)=\"changeArrange('comp_name')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                公司名稱<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                公司名稱<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc20\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_name'\"\n              (click)=\"changeArrange('comp_name')\">\n              公司名稱 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- COMP_ESTABLISHED_DATE -->\n            <th class=\"centered-th mx-auto p-2 perc30\" scope=\"col\"\n              *ngIf=\"compToSearch.ArrangeFor === 'established_date'\" (click)=\"changeArrange('established_date')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                公司成立日期<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                公司成立日期<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc30\" scope=\"col\"\n              *ngIf=\"compToSearch.ArrangeFor !== 'established_date'\" (click)=\"changeArrange('established_date')\">\n              公司成立日期 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- COMP_LOCATION -->\n            <!-- <th class=\"centered-th mx-auto p-2 perc30\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_location'\"\n              (click)=\"changeArrange('comp_location')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                公司地址<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                公司地址<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc30\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_location'\"\n              (click)=\"changeArrange('comp_location')\">\n              公司地址 <i class=\"fa fa-unsorted\"></i>\n            </th> -->\n\n            <!-- CAPITAL -->\n            <th class=\"centered-th mx-auto p-2 perc15\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'capital'\"\n              (click)=\"changeArrange('capital')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                資本額<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                資本額<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'capital'\"\n              (click)=\"changeArrange('capital')\">\n              資本額 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- INDUSTRY -->\n            <th class=\"centered-th mx-auto p-2 perc15\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'comp_industry'\"\n              (click)=\"changeArrange('comp_industry')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                產業類別<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                產業類別<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'comp_industry'\"\n              (click)=\"changeArrange('comp_industry')\">\n              產業類別 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <!-- REPRESENTATIVE -->\n            <th class=\"centered-th mx-auto p-2 perc15\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor === 'representative'\"\n              (click)=\"changeArrange('representative')\">\n              <span *ngIf=\"compToSearch.Arrange === 'ASC'\">\n                代表人<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"compToSearch.Arrange === 'DESC'\">\n                代表人<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"compToSearch.ArrangeFor !== 'representative'\"\n              (click)=\"changeArrange('representative')\">\n              代表人 <i class=\"fa fa-unsorted\"></i>\n            </th>\n\n            <th scope=\"col\" class=\"text-center perc15\">管理</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let list of compToList\" [class.table-success]=\"list.confirmed == 1\">\n            <td (click)=\"openModal(template)\">{{list.id}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_banno}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_name.substr(0, 4) + '...'}}</td>\n            <td (click)=\"openModal(template)\">{{list.established_date}}</td>\n            <td (click)=\"openModal(template)\">{{list.capital}}</td>\n            <td (click)=\"openModal(template)\">{{list.comp_industry}}</td>\n            <td (click)=\"openModal(template)\">{{list.representative}}</td>\n            <td class=\"text-center\">\n\n              <i class=\"fa fa-border fa-external-link button button1\" (click)=\"openModal(template)\" tooltip=\"展開\"></i>\n              <i class=\"fa fa-border fa-money button button2\" (click)=\"navigateToFunding(list.id)\" tooltip=\"募資\"></i>\n              <span *ngIf=\"writePermission > 0 || adminPermission > 0\">\n                <i class=\"fa fa-border fa-edit button button3\" (click)=\"navigateToEdit(list)\" tooltip=\"編輯\"></i>\n                <i class=\"fa fa-border fa-save button button4\" (click)=\"openModal(confirmKeep)\" tooltip=\"保留\"></i>\n                <i class=\"fa fa-border fa-send button button5\" (click)=\"openModal(confirmSend)\" tooltip=\"送出\"></i>\n                <i class=\"fa fa-border fa-remove button button6\" (click)=\"openModal(confirmDelete)\" tooltip=\"刪除\"></i>\n              </span>\n            </td>\n\n            <ng-template #confirmSend>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">確認送出</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                請再次確認該筆資料是否正確？\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"confirmCompany(list.id)\"><i class=\"fa fa-send\"></i> 確認</button>\n              </div>\n            </ng-template>\n\n            <ng-template #confirmKeep>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">確認保留</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                保留資料，不更新至前台？\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-default\" style=\"background-color: #FA6A00; color: white;\"\n                  (click)=\"confirmCompanyKeep(list.id)\"> 保留 <fa-icon [icon]=\"faUserTimes\" size=\"lg\"\n                    style=\"color: white !important; margin-left: 5px; \"></fa-icon></button>\n                <!-- <button class=\"btn btn-default\" style=\"background-color: #FA6A00; color: white;\" (click)=\"confirmCompanyKeep(list.id)\"> 確認 <i class=\"fa fa-user-times fa-2x\" style=\"color: white !important; margin-left: 5px; \"></i></button> -->\n              </div>\n            </ng-template>\n\n            <ng-template #confirmDelete>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">刪除公司</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                請再次確認該筆資料是否正確？\n              </div>\n              <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"deleteCompany(list.id)\"><i class=\"fa fa-send\"></i> 確認</button>\n              </div>\n            </ng-template>\n\n            <ng-template #template>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">{{list.comp_name}}</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>編號</strong> : {{list.id}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>統編</strong> : {{list.comp_banno}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>產業類別</strong> : {{list.comp_industry}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>公司地址</strong> : {{list.location}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>公司成立日期 </strong> : {{list.established_date}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>資本額</strong> : {{list.comp_amount}}\n                </div>\n\n                <div class=\"alert alert-dark m-2\" role=\"alert\">\n                  <strong>員工人數</strong> : {{list.comp_employee}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>代表人</strong> : {{list.representative}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>聯絡人</strong> : {{list.comp_contact}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>電話</strong> : {{list.comp_tel}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>傳真</strong> : {{list.comp_fax}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>公司網址</strong> : {{list.comp_url}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>粉絲專頁(FB)</strong> : {{list.comp_extra_url}}\n                </div>\n\n                <div class=\"alert alert-success m-2\" role=\"alert\">\n                  <strong>標籤(Yourator)</strong> : {{list.comp_tag}}\n                </div>\n\n                <div class=\"card m-2 border-success\">\n                  <div class=\"card-header\">\n                    公司簡介\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_desc}}\n                  </div>\n                </div>\n\n                <div class=\"card m-2 border-success\">\n                  <div class=\"card-header\">\n                    媒體報導\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_media_report}}\n                  </div>\n                </div>\n\n                <div class=\"card m-2 border-success\">\n                  <div class=\"card-header\">\n                    主要商品/服務項目\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_business}}\n                  </div>\n                </div>\n                <div class=\"card m-2 border-success\">\n                  <div class=\"card-header\">\n                    品牌/縮寫/關鍵字\n                  </div>\n                  <div class=\"card-body\">\n                    {{list.comp_keyword}}\n                  </div>\n                </div>\n\n              </div>\n            </ng-template>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: 25px\">\n  <div class=\"row text-center\">\n    <div class=\"col-2\"></div>\n    <div class=\"col col-sm-8\">\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"paging.TotalCount\" [(ngModel)]=\"paging.CurrentPage\" [maxSize]=10\n        (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n        lastText=\"{{paging.TotalPages}} &raquo;\">\n      </pagination>\n    </div>\n    <div class=\"col col-sm-2\">\n      <div class=\"form-group form-inline\">\n        <input class=\"form-control form-control-sm col-md-4\" type=\"text\" name=\"newpage\" placeholder=\"Go to page\"\n          [(ngModel)]=\"gotopage\">\n        <button class=\"form-control form-control-sm btn btn-outline-primary ml-2\" (click)=\"goToPage()\"> <i\n            class=\"fa fa-search\"></i> 提交</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








alertify.set('notifier', 'position', 'top-center');
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
        //icon
        this.faUserTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUserTimes"];
        // 公司資料來源 - source
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        //產業類別 - industry
        this.dropdownListIndustry = [];
        this.selectedItemsIndustry = [];
        this.dropdownSettingsIndustry = {};
        this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuNeedRefresh = 0;
        this.status = 0;
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
            Arrange: 'ASC',
            Filter: {
                companySource: [],
                companyIndustry: [],
                approvedDate: [],
                updatedDate: []
            },
            Status: 0
        };
        this.companyStatus = -1;
        this.compToList = [];
        this.gotopage = 1;
        this.paging = {
            CurrentPage: 1,
            PageSize: 10,
            TotalCount: 240,
            TotalPages: 0,
        };
        this.confirmedClass = 'table-success';
        this.minPDate = new Date(2017, 5, 10);
        this.maxPDate = new Date(2018, 9, 15);
        this.minCDate = new Date(2017, 5, 10);
        this.maxCDate = new Date(2018, 9, 15);
        this.initDate = "";
        this.endDate = "";
        this.dateToFilter = 0; // 1 = approved, 2 = done (updated)
        this._bsRangePValue = [null, null];
        this._bsRangeCValue = [null, null];
    }
    DashboardComponent.prototype.OnChanges = function (clearSearch) {
        this.compToSearch.ToSearch = '';
        this.compToSearch.PageNumber = 1;
        this.compToSearch.PageSize = 10;
        this.compToSearch.ToSearch = '';
        this.compToSearch.ArrangeFor = 'id';
        this.compToSearch.Arrange = 'ASC';
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.cleanValues = function () {
        this.dateToFilter = 0;
        this.initDate = "";
        this.endDate = "";
    };
    DashboardComponent.prototype.ngOnChanges = function (changes) {
        console.log("changes");
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
        this.getCountCompIndustry();
        this.dropdownList = [
            { item_id: 1, item_text: '財政部財資中心' },
            { item_id: 2, item_text: '104 人力銀行' },
            { item_id: 3, item_text: 'Yourator' },
            { item_id: 4, item_text: '其他' }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        this.companyStatus = +localStorage.getItem('companyListStatus');
        this.decodedData = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (this.decodedData['data']['permission'] > 807) {
            this.adminPermission = 1;
        }
        if (this.decodedData['data']['permission'] > 295) {
            this.writePermission = 1;
        }
        this.getCompanies(this.companyStatus);
    };
    // COMPANY SOURCE
    DashboardComponent.prototype.onItemSelect = function (item) {
        this.selectedItemsIndustry = [];
        this.cleanValues();
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.onSelectAll = function (items) {
        this.selectedItemsIndustry = [];
        this.cleanValues();
        this.getCompanies(this.companyStatus);
    };
    // COMPANY INDUSTRY
    DashboardComponent.prototype.onItemIndustrySelect = function (item) {
        this.selectedItems = [];
        this.cleanValues();
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.onSelectIndustryAll = function (items) {
        this.selectedItems = [];
        this.cleanValues();
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.modalRef.hide();
        this.companyService.deleteCompany(id).subscribe(function (response) {
            alertify.success('刪除成功');
            _this.getCompanies(_this.companyStatus);
        }, function (error) {
            alertify.error('網路或伺服器連接失敗');
        });
    };
    DashboardComponent.prototype.clearConfirmedCompany = function () {
        var _this = this;
        this.modalRef.hide();
        this.companyService.clearconfirmedCompany().subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.getCompanies(_this.companyStatus);
                alertify.success('保留成功');
            }
            else {
                alertify.error('網路或伺服器連接失敗');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗');
        });
    };
    DashboardComponent.prototype.goToPageNotFound = function () {
        this.router.navigate(['/page/not/found']);
    };
    DashboardComponent.prototype.confirmCompanyKeep = function (id) {
        var _this = this;
        this.menuNeedRefresh = 0;
        this.modalRef.hide();
        this.companyService.confirmCompany(id, 2).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.getCompanies(_this.companyStatus);
                _this.menuNeedRefresh = 1;
                _this.statusChanged.emit(_this.companyStatus);
                alertify.success('保留成功');
            }
            else {
                alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    DashboardComponent.prototype.confirmCompany = function (id) {
        var _this = this;
        this.menuNeedRefresh = 0;
        this.modalRef.hide();
        this.companyService.confirmCompany(id, 3).subscribe(function (returned) {
            if (returned['r'] === 0) {
                _this.menuNeedRefresh = 1;
                _this.statusChanged.emit(_this.companyStatus);
                _this.getCompanies(_this.companyStatus);
                alertify.success('保留成功');
            }
            else {
                alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    DashboardComponent.prototype.pageChanged = function (event) {
        if (event.page <= this.paging.TotalCount) {
            this.paging.CurrentPage = event.page;
            this.getCompanies(this.companyStatus);
        }
    };
    DashboardComponent.prototype.goToPage = function () {
        this.paging.CurrentPage = this.gotopage;
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.changeArrange = function (field) {
        this.compToSearch.ArrangeFor = field;
        if (this.compToSearch.Arrange === 'ASC') {
            this.compToSearch.Arrange = 'DESC';
        }
        else {
            this.compToSearch.Arrange = 'ASC';
        }
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.doSearch = function () {
        this.paging = {
            CurrentPage: 1,
            PageSize: 10,
            TotalCount: 0,
            TotalPages: 0,
        };
        this.getCompanies(this.companyStatus);
    };
    DashboardComponent.prototype.getCompanies = function (status) {
        var _this = this;
        this.compToSearch.PageSize = this.paging.PageSize;
        this.compToSearch.PageNumber = this.paging.CurrentPage;
        this.compToSearch.Status = status;
        this.compToSearch.Filter.companySource = [];
        this.compToSearch.Filter.companyIndustry = [];
        this.compToSearch.Filter.approvedDate = [];
        this.compToSearch.Filter.updatedDate = [];
        if (this.selectedItems.length > 0) {
            this.selectedItems.forEach(function (element) {
                _this.compToSearch.Filter.companySource.push(element.item_id);
            });
        }
        if (this.selectedItemsIndustry.length > 0) {
            this.selectedItemsIndustry.forEach(function (element) {
                var indexOfParenthesis = element.item_text.indexOf("(");
                _this.compToSearch.Filter.companyIndustry.push(element.item_text.substring(0, indexOfParenthesis));
            });
        }
        if (this.dateToFilter > 0) {
            if (this.dateToFilter == 1) {
                this.compToSearch.Filter.approvedDate.push(this.initDate);
                this.compToSearch.Filter.approvedDate.push(this.endDate);
            }
            if (this.dateToFilter == 2) {
                this.compToSearch.Filter.updatedDate.push(this.initDate);
                this.compToSearch.Filter.updatedDate.push(this.endDate);
            }
        }
        // if (filterArray.length > 0) {
        //   this.compToSearch.Filter = "{"
        // }
        // if (filterArray['companySource'] && filterArray['companySource'].length > 0) {
        //   this.compToSearch.Filter += "companySource:"+JSON.stringify(filterArray['companySource'])
        // }
        // if (filterArray['companyIndustry'] && filterArray['companyIndustry'].length > 0) {
        //   this.compToSearch.Filter += "companyIndustry:"+JSON.stringify(filterArray['companyIndustry'])
        // }
        // if (filterArray['approvedDate']) {
        //   this.compToSearch.Filter += "approvedDate:["+filterArray['approvedDate']['init']+","+filterArray['approvedDate']['end']+"]"
        // }
        // if (filterArray['updatedDate']) {
        //   this.compToSearch.Filter += "updatedDate:["+filterArray['updatedDate']['init']+","+filterArray['updatedDate']['end']+"]"
        // }
        // if (filterArray.length > 0) {
        //   this.compToSearch.Filter += "}"
        // }
        //console.log(this.compToSearch.Filter)
        this.companyService.listCompany(this.compToSearch, status).subscribe(function (companies) {
            _this.compToList.splice(0, _this.paging.PageSize);
            companies['companies'].forEach(function (company) { return _this.compToList.push(company); });
            _this.paging.CurrentPage = companies['paging']['CurrentPage'];
            _this.paging.TotalCount = companies['paging']['TotalCount'];
            _this.paging.PageSize = companies['paging']['PageSize'];
            _this.paging.TotalPages = companies['paging']['TotalPages'];
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    DashboardComponent.prototype.getCountCompIndustry = function () {
        var _this = this;
        var tmp = [];
        this.companyService.countCompIndustry().subscribe(function (result) {
            result.forEach(function (element) {
                tmp.push({ item_id: element.item_id, item_text: element.item_text });
            });
            _this.dropdownListIndustry = tmp;
        });
    };
    DashboardComponent.prototype.updateStatusListener = function (newStatus) {
        this.companyStatus = newStatus;
        localStorage.setItem('companyListStatus', newStatus);
        this.getCompanies(this.companyStatus);
    };
    Object.defineProperty(DashboardComponent.prototype, "bsValue", {
        get: function () {
            return this._bsValue;
        },
        set: function (v) {
            console.log(v);
            this._bsValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "bsRangePValue", {
        get: function () {
            return this._bsRangePValue;
        },
        set: function (v) {
            this._bsRangePValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "bsRangeCValue", {
        get: function () {
            return this._bsRangeCValue;
        },
        set: function (v) {
            this._bsRangeCValue = v;
        },
        enumerable: true,
        configurable: true
    });
    // APPROVED DATE
    DashboardComponent.prototype.processCDate = function (newDate) {
        this.bsRangePValue = [null, null];
        this.cleanValues();
        var initCDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
        var endCDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
        this.initDate = initCDate;
        this.endDate = endCDate;
        this.dateToFilter = 1;
        this.getCompanies(this.companyStatus);
    };
    // DONE ( UPDATE ) DATE
    DashboardComponent.prototype.processPDate = function (newDate) {
        this.bsRangeCValue = [null, null];
        this.cleanValues();
        var initPDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
        var endPDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
        this.initDate = initPDate;
        this.endDate = endPDate;
        this.dateToFilter = 2;
        this.getCompanies(this.companyStatus);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "statusChanged", void 0);
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

module.exports = "<app-nav></app-nav>\n\n<div class=\"container mt-3 mb-3\" id=\"main\">\n\n    <div *ngIf=\"error\" class=\"alert alert-danger col-md-12\" role=\"alert\">\n        {{errorMessage}}\n    </div>\n\n    <form #companyForm=\"ngForm\">\n\n        <div class=\"form-row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-outline-danger\" tooltip=\"加新\" (click)=\"openModal(companyAdd)\">加入新公司</button>\n            </div>\n            <div class=\"col-md-4\"></div>\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-4\">\n                <label for=\"comp_id\">編號</label>\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control\" id=\"comp_id\" name=\"comp_id\" placeholder=\"\"\n                        value={{FundingToList?.comp_id}} [(ngModel)]=\"FundingToList.comp_id\" disabled>\n                </div>\n            </div>\n\n            <div class=\"form-group col-4\">\n                <label for=\"inputName\">公司名稱</label>\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\"\n                        value={{FundingToList?.company_name}} [(ngModel)]=\"FundingToList.company_name\">\n                    <button id=\"comp_btn\" name=\"comp_btn\" class=\"btn btn-warning ml-2\"\n                        (click)=\"openModal(companySearch)\">比對資料庫<i class=\"fa fa-database ml-2\"></i></button>\n                </div>\n            </div>\n\n            <div class=\"form-group col-4\">\n                <label for=\"address\">地區</label>\n                <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"\"\n                    value={{FundingToList?.address}} [(ngModel)]=\"FundingToList.address\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n            <div class=\"form-group col-4\">\n                <label for=\"investment_type\">募資階段</label>\n                <input type=\"text\" class=\"form-control\" id=\"investment_type\" name=\"investment_type\" placeholder=\"\"\n                    value={{FundingToList?.investment_type}} [(ngModel)]=\"FundingToList.investment_type\">\n            </div>\n           \n            <div class=\"form-group col-md-2\">\n                <label for=\"announced_on\">募資公佈日期</label>\n                <input type=\"text\" class=\"form-control\" id=\"announced_on\" name=\"announced_on\" placeholder=\"\"\n                    value={{FundingToList?.announced_on}} [(ngModel)]=\"FundingToList.announced_on\">\n            </div>\n\n            <div class=\"form-group col-md-2\">\n                <label for=\"Raised amount\">已募資額</label>\n                <input type=\"text\" class=\"form-control\" id=\"raised_amount\" name=\"raised_amount\" placeholder=\"已募資額\"\n                    value={{FundingToList?.raised_amount}} [(ngModel)]=\"FundingToList.raised_amount\">\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"Raised amount\">已募資額弊別</label>\n                <input type=\"text\" class=\"form-control\" id=\"raised_amount_currency\" name=\"raised_amount_currency\" placeholder=\"已募資額幣別\"\n                    value={{FundingToList?.raised_currency_code}} [(ngModel)]=\"FundingToList.raised_currency_code\">\n            </div>\n\n        </div>\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-2\">\n                <label for=\"post_amount\">交易後估值</label>\n                <input type=\"text\" class=\"form-control\" id=\"post_amount\" name=\"post_amount\" placeholder=\"交易後估值\"\n                    value={{FundingToList?.post_amount}} [(ngModel)]=\"FundingToList.post_amount\">\n            </div>\n            <div class=\"form-group col-md-2\">\n                <label for=\"post_currency_code\">交易後估值幣別</label>\n                <input type=\"text\" class=\"form-control\" id=\"post_currency_code\" name=\"post_currency_code\" placeholder=\"交易後估值幣別\"\n                    value={{FundingToList?.post_currency_code}} [(ngModel)]=\"FundingToList.post_currency_code\">\n            </div>\n\n            <div class=\"form-group col-md-2\">\n                <label for=\"created_at\">資料建立日期</label>\n                <input type=\"text\" class=\"form-control\" id=\"created_at\" name=\"created_at\" placeholder=\"資料建立日期\"\n                    value={{FundingToList?.created}} [(ngModel)]=\"FundingToList.created\" disabled>\n            </div>\n\n            <div class=\"form-group col-md-2\">\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"updated_at\">上次資料日期</label>\n                <input type=\"text\" class=\"form-control\" id=\"updated_at\" name=\"updated_at\" placeholder=\"上次資料日期\"\n                    value={{FundingToList?.updated}} [(ngModel)]=\"FundingToList.updated\" disabled />\n            </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label for=\"investors_name\">投資者名稱</label>\n                <textarea class=\"form-control\" rows=\"5\" id=\"investors_name\" name=\"investor_names\" placeholder=\"投資者名稱\"\n                    value={{FundingToList?.investor_names}} [(ngModel)]=\"FundingToList.investor_names\">\n                </textarea>\n            </div>\n            <div class=\"form-group col-md-2\">\n                <label for=\"investor_count\">投資者數目</label>\n                <input type=\"text\" class=\"form-control\" id=\"investor_count\" name=\"investor_count\" placeholder=\"\"\n                    value={{FundingToList?.investor_count}} [(ngModel)]=\"FundingToList.investor_count\">\n            </div>\n            <div class=\"form-group col-md-2\">\n                <label for=\"capital_sought_amount\">預募得資金</label>\n                <input type=\"text\" class=\"form-control\" id=\"capital_sought_amount\" name=\"capital_sought_amount\"\n                    placeholder=\"\" value={{FundingToList?.capital_sought_amount}}\n                    [(ngModel)]=\"FundingToList.capital_sought_amount\">\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label for=\"capital_sought_currency_code\">預募得資金幣別</label>\n                <input type=\"text\" class=\"form-control\" id=\"capital_sought_currency_code\"\n                    name=\"capital_sought_currency_code\" placeholder=\"\"\n                    value={{FundingToList?.capital_sought_currency_code}}\n                    [(ngModel)]=\"FundingToList.capital_sought_currency_code\">\n            </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label for=\"sname\">來源網站</label>\n                <input type=\"text\" class=\"form-control\" id=\"sname\"\n                    name=\"s_name\" placeholder=\"來源網站\"\n                    value={{FundingToList?.s_name}}\n                    [(ngModel)]=\"FundingToList.s_name\" disabled>\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label for=\"author\">作者</label>\n                <input type=\"text\" class=\"form-control\" id=\"author\"\n                    name=\"author\" placeholder=\"作者\"\n                    value={{FundingToList?.author}}\n                    [(ngModel)]=\"FundingToList.author\" disabled>\n            </div>\n\n            <div class=\"form-group col-md-4\"></div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label for=\"title\">新聞標題</label>\n                <textarea class=\"form-control\" rows=\"5\" id=\"title\" name=\"title\" value={{FundingToList?.title}} placeholder=\"新聞標題\"\n                    [(ngModel)]=\"FundingToList.title\" disabled >\n                </textarea>\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label for=\"url\">新聞連結</label>\n                <input type=\"text\" class=\"form-control\" id=\"url\" name=\"url\" placeholder=\"新聞連結\" disabled value={{FundingToList?.url}}\n                    [(ngModel)]=\"FundingToList.url\">\n            </div>\n            <div class=\"form-group col-md-4\"></div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openModal(template)\">確認<i\n                class=\"\tfa fa-check-circle-o fa-lg ml-2\"></i></button>\n        <button class=\"btn btn-danger ml-2\" (click)=\"goBack()\">返回<i class=\"fa fa-history fa-lg ml-2\"></i></button>\n\n    </form>\n\n    <ng-template #template>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">{{FundingToList.company_name.substr(0,10)}}</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>編號</strong> : {{FundingToList.comp_id}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>公司名稱</strong> : {{FundingToList.company_name}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>地區</strong> : {{FundingToList.address}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>投資類型</strong> : {{FundingToList.investment_type}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>募資公佈日期</strong> : {{FundingToList.announced_on}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>已募得資金</strong> : {{FundingToList.raised_amount}}\n            </div>\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>募得資金幣別</strong> : {{FundingToList.raised_currency_code}}\n            </div>\n            <!-- 1 post amount -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>交易後估值</strong> : {{FundingToList.post_amount}}\n            </div>\n            <!-- 2 post currency -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>交易後估值幣別</strong> : {{FundingToList.post_currency_code}}\n            </div>\n            <!-- 3 created at -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>資料建立日期</strong> : {{FundingToList.created}}\n            </div>\n            <!-- 4 investor name -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>投資者名稱</strong> : {{FundingToList.investor_names}}\n            </div>\n            <!-- 5 investors count -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>投資者數目</strong> : {{FundingToList.investor_count}}\n            </div>\n            <!-- 6 capital -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>預募得資金</strong> : {{FundingToList.capital_sought_amount}}\n            </div>\n            <!-- 7 capital currency -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>預募得資金幣別</strong> : {{FundingToList.capital_sought_currency_code}}\n            </div>\n            <!-- 8 sname -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>來源網站</strong> : {{FundingToList.s_name}}\n            </div>\n            <!-- 8 author -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>作者</strong> : {{FundingToList.author}}\n            </div>\n            <!-- title -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>新聞標題</strong> : {{FundingToList.title}}\n            </div>\n            <!-- url -->\n            <div class=\"alert alert-dark m-2\" role=\"alert\">\n                <strong>新聞連結</strong> : {{FundingToList.url}}\n            </div>\n            <button class=\"btn btn-default ml-2\" style=\"background-color: #FA6A00; color: white;\" (click)=\"actionFunding(1)\">保留 <fa-icon [icon]=\"faUserTimes\" size=\"lg\" style=\"color: white !important;\"></fa-icon></button>\n            <button class=\"btn btn-primary ml-2\" (click)=\"actionFunding(2)\">發送<i class=\"fa fa-send fa-lg ml-2\"></i></button>\n        </div>\n    </ng-template>\n\n</div>\n\n<!-- MODALS -->\n\n<ng-template #companyAdd>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">加入新公司</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n                <label for=\"comp_banno\">統編</label>\n                <div class=\"form-inline\">\n                    <input type=\"text\" class=\"form-control\" id=\"comp_banno\" name=\"comp_banno\" placeholder=\"\"\n                        value={{companyToAdd?.comp_banno}} [(ngModel)]=\"companyToAdd.comp_banno\">\n                    <button class=\"btn btn-success ml-2\" (click)=\"generateCompanyId()\">產生統編流水號<i\n                            class=\"fa fa-barcode fa-lg ml-2\"></i></button>\n                </div>\n                <label for=\"inputName\">公司名稱</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"\"\n                    value={{companyToAdd?.comp_name}} [(ngModel)]=\"companyToAdd.comp_name\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"addCompany()\">確認 <i class=\"fa fa-check-circle-o fa-lg\"></i></button>\n    </div>\n</ng-template>\n\n<ng-template #companySearch>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">公司搜索</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"inlineFormInputName\">關鍵字</label>\n            <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName\" placeholder=\"Keyword\"\n                value={{compToSearch?.ToSearch}} [(ngModel)]=\"compToSearch.ToSearch\">\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"searchCompanyKeyword()\"><i class=\"fa fa-send fa-lg\"></i> 確認</button>\n    </div>\n</ng-template>"

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






alertify.set('notifier', 'position', 'top-center');
var EditFundingComponent = /** @class */ (function () {
    function EditFundingComponent(activatedRoute, fundingService, companyService, modalService) {
        this.activatedRoute = activatedRoute;
        this.fundingService = fundingService;
        this.companyService = companyService;
        this.modalService = modalService;
        // icons
        this.faUserCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserCheck"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBuilding"];
        this.faUserTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserTimes"];
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExclamationCircle"];
        this.faMoneyBillAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMoneyBillAlt"];
        this.faUserEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserEdit"];
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
            extra: '',
            representative: '',
            approved_date: '',
            capital: 0,
            location: '',
            established_date: ''
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
            updated: '',
            s_name: '',
            author: '',
            title: '',
        };
        this.compToSearch = {
            PageNumber: 1,
            PageSize: 10,
            ToSearch: '',
            ArrangeFor: 'id',
            Arrange: 'ASC',
            Filter: {
                companySource: [],
                companyIndustry: [],
                approvedDate: [],
                updatedDate: []
            },
            Status: 0
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
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    EditFundingComponent.prototype.generateCompanyId = function () {
        this.companyToAdd.comp_banno = this.companyService.generateCompanyId();
    };
    EditFundingComponent.prototype.searchCompanyKeyword = function () {
        var _this = this;
        var companyStatus = +localStorage.getItem('companyListStatus');
        this.companyService.listCompany(this.compToSearch, companyStatus).subscribe(function (returned) {
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
    EditFundingComponent.prototype.actionFunding = function (toKeep) {
        if (this.type < 1) {
            this.editFunding();
        }
        else {
            this.addFunding();
        }
        if (toKeep == 1) {
            localStorage.setItem('status', '2');
            this.updateStatus(2);
        }
        else {
            localStorage.setItem('status', '1');
            this.updateStatus(1);
        }
    };
    EditFundingComponent.prototype.updateStatus = function (newStatus) {
        this.fundingService.changeFundingStatus(+this.FundingToList.id, newStatus).subscribe(function (result) {
            if (result['r'] === 0) {
                alertify.success('保留成功');
            }
            else {
                alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
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
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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

/***/ "./src/app/entry-screen/entry-screen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/entry-screen/entry-screen.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mediaViewInfo {\n\t--web-view-name: Home page;\n\t--web-view-id: Home_page;\n\t--web-enable-deep-linking: true;\n}\n:root {\n\t--web-view-ids: Home_page;\n}\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tborder: none;\n}\n#Home_page {\n\tposition: absolute;\n\twidth: 1366px;\n\theight: 768px;\n\tbackground-color: rgba(255,255,255,1);\n\toverflow: hidden;\n\t--web-view-name: Home page;\n\t--web-view-id: Home_page;\n\t--web-enable-deep-linking: true;\n}\n@-webkit-keyframes fadein {\n\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n\n}\n@keyframes fadein {\n\n\t0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n\n}\n#___ {\n\tposition: absolute;\n\twidth: 1366px;\n\theight: 91px;\n\tleft: 0px;\n\ttop: 0px;\n\toverflow: visible;\n}\n.Rectangle_313 {\n\tposition: absolute;\n\toverflow: visible;\n\twidth: 1366px;\n\theight: 91px;\n\tleft: 0px;\n\ttop: 0px;\n}\n#logo3 {\n\tposition: absolute;\n\twidth: 273px;\n\theight: 51px;\n\tleft: 18px;\n\ttop: 14.737px;\n\toverflow: visible;\n}\n#Group_4 {\n\tposition: absolute;\n\twidth: 90px;\n\theight: 40px;\n\tleft: 823px;\n\ttop: 30px;\n\toverflow: visible;\n}\n.Rectangle_82 {\n\tposition: absolute;\n\toverflow: visible;\n\twidth: 90px;\n\theight: 40px;\n\tleft: 0px;\n\ttop: 0px;\n}\n#____by {\n\tposition: absolute;\n\tleft: 40px;\n\ttop: 9px;\n\toverflow: visible;\n\twidth: 37px;\n\twhite-space: nowrap;\n\tline-height: 24px;\n\tmargin-top: -4px;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(28,124,213,1);\n}\n.Icon_awesome_home {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 28.487px;\n\theight: 23.5px;\n\tleft: 11.999px;\n\ttop: 7px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_9 {\n\tposition: absolute;\n\twidth: 90px;\n\theight: 40px;\n\tleft: 1243px;\n\ttop: 30px;\n\toverflow: visible;\n\t--web-animation: fadein 1s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Home_page_log_in.html;\n\tcursor: pointer;\n}\n.Rectangle_82_b {\n\tposition: absolute;\n\toverflow: visible;\n\twidth: 90px;\n\theight: 40px;\n\tleft: 0px;\n\ttop: 0px;\n\t--web-animation: fadein 1s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Home_page_log_in.html;\n\tcursor: pointer;\n}\n#__ {\n\tposition: absolute;\n\tleft: 47px;\n\ttop: 9px;\n\toverflow: visible;\n\twidth: 33px;\n\twhite-space: nowrap;\n\tline-height: 24px;\n\tmargin-top: -4px;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(28,124,213,1);\n}\n.Icon_awesome_sign_out_alt {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 30px;\n\theight: 20.003px;\n\tleft: 10px;\n\ttop: 8.997px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_5 {\n\tposition: absolute;\n\twidth: 127px;\n\theight: 40px;\n\tleft: 927px;\n\ttop: 30px;\n\toverflow: visible;\n}\n.Rectangle_82_ca {\n\tposition: absolute;\n\toverflow: visible;\n\twidth: 127px;\n\theight: 40px;\n\tleft: 0px;\n\ttop: 0px;\n}\n#____ {\n\tposition: absolute;\n\tleft: 49px;\n\ttop: 9px;\n\toverflow: visible;\n\twidth: 65px;\n\twhite-space: nowrap;\n\tline-height: 24px;\n\tmargin-top: -4px;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(28,124,213,1);\n}\n.Icon_awesome_users {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 30.194px;\n\theight: 25px;\n\tleft: 11.294px;\n\ttop: 7px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_6 {\n\tposition: absolute;\n\twidth: 163px;\n\theight: 27.017px;\n\tleft: 1066px;\n\ttop: 37.134px;\n\toverflow: visible;\n}\n#user_itri_org_tw {\n\tposition: absolute;\n\tleft: 34px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 130px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(28,124,213,0.816);\n}\n.Icon_awesome_user_circle {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 27.017px;\n\theight: 27.017px;\n\tleft: 0px;\n\ttop: 0px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#____card {\n\tposition: absolute;\n\twidth: 455px;\n\theight: 261px;\n\tleft: 118px;\n\ttop: 254px;\n\toverflow: visible;\n}\n.Rectangle_314 {\n\t-webkit-filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));\n\t        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));\n\tposition: absolute;\n\toverflow: visible;\n\twidth: 473px;\n\theight: 279px;\n\tleft: 0px;\n\ttop: 0px;\n}\n#______ {\n\tposition: absolute;\n\tleft: 161px;\n\ttop: 14px;\n\toverflow: visible;\n\twidth: 145px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 24px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_awesome_building {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 28.748px;\n\theight: 31.569px;\n\tleft: 120.5px;\n\ttop: 14px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_15 {\n\tposition: absolute;\n\twidth: 103px;\n\theight: 25px;\n\tleft: 263px;\n\ttop: 76px;\n\toverflow: visible;\n}\n#_235_ {\n\tposition: absolute;\n\tleft: 72px;\n\ttop: 3px;\n\toverflow: visible;\n\twidth: 32px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_____ch {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 73px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#Group_114 {\n\tposition: absolute;\n\twidth: 152.43px;\n\theight: 22.993px;\n\tleft: 229.57px;\n\ttop: 147px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Keep_list.html;\n\tcursor: pointer;\n}\n#Group_17 {\n\tposition: absolute;\n\twidth: 119px;\n\theight: 22px;\n\tleft: 33.43px;\n\ttop: 0px;\n\toverflow: visible;\n}\n#_16_ {\n\tposition: absolute;\n\tleft: 96px;\n\ttop: 3px;\n\toverflow: visible;\n\twidth: 24px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_______cl {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 97px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_awesome_user_times {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 27.489px;\n\theight: 21.993px;\n\tleft: 0px;\n\ttop: 1px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_14 {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tleft: -1536px;\n\ttop: -264px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-out;\n\t--web-action-type: page;\n\t--web-action-target: Need_to_confirm_list_of_company_______.html;\n\tcursor: pointer;\n}\n#_____co {\n\tposition: absolute;\n\tleft: 54px;\n\ttop: 76px;\n\toverflow: visible;\n\twidth: 73px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_1430_ {\n\tposition: absolute;\n\tleft: 126px;\n\ttop: 77px;\n\toverflow: visible;\n\twidth: 45px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_material_rate_review {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 23.25px;\n\theight: 26.57px;\n\tleft: 17px;\n\ttop: 76px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_16 {\n\tposition: absolute;\n\twidth: 160.427px;\n\theight: 22px;\n\tleft: 229.573px;\n\ttop: 113px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Updated_list.html;\n\tcursor: pointer;\n}\n#_219_ {\n\tposition: absolute;\n\tleft: 129.427px;\n\ttop: 3px;\n\toverflow: visible;\n\twidth: 32px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_______ct {\n\tposition: absolute;\n\tleft: 33.427px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 97px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_awesome_user_check {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 26.772px;\n\theight: 21.715px;\n\tleft: 0px;\n\ttop: 0.285px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n.Line_104 {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 361px;\n\theight: 1px;\n\tleft: 52.5px;\n\ttop: 61.5px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_18 {\n\tposition: absolute;\n\twidth: 183.823px;\n\theight: 25px;\n\tleft: 17.177px;\n\ttop: 183px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Unmatched_list.html;\n\tcursor: pointer;\n}\n#_66_ {\n\tposition: absolute;\n\tleft: 160.823px;\n\ttop: 4px;\n\toverflow: visible;\n\twidth: 24px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_______ {\n\tposition: absolute;\n\tleft: 33.823px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 127px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_awesome_exclamation_circl {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 23.214px;\n\theight: 22.039px;\n\tleft: 0px;\n\ttop: 0.208px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#______card {\n\tposition: absolute;\n\twidth: 455px;\n\theight: 261px;\n\tleft: 796px;\n\ttop: 254px;\n\toverflow: visible;\n}\n.Rectangle_312 {\n\t-webkit-filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.161));\n\t        filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.161));\n\tposition: absolute;\n\toverflow: visible;\n\twidth: 476px;\n\theight: 282px;\n\tleft: 0px;\n\ttop: 0px;\n}\n.Line_101 {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 359px;\n\theight: 1px;\n\tleft: 52.5px;\n\ttop: 60.5px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#_______c {\n\tposition: absolute;\n\tleft: 171px;\n\ttop: 12px;\n\toverflow: visible;\n\twidth: 145px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 24px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_235__c {\n\tposition: absolute;\n\tleft: 335px;\n\ttop: 79px;\n\toverflow: visible;\n\twidth: 32px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_____c {\n\tposition: absolute;\n\tleft: 261px;\n\ttop: 76px;\n\toverflow: visible;\n\twidth: 73px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#Group_13 {\n\tposition: absolute;\n\twidth: 153px;\n\theight: 26.57px;\n\tleft: 22px;\n\ttop: 78px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: need_to_confirm_list_of_funding_________.html;\n\tcursor: pointer;\n}\n#_1430__c {\n\tposition: absolute;\n\tleft: 109px;\n\ttop: 1px;\n\toverflow: visible;\n\twidth: 45px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_____da {\n\tposition: absolute;\n\tleft: 37px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 73px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_material_rate_review_c {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 23.25px;\n\theight: 26.57px;\n\tleft: 0px;\n\ttop: 0px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_10 {\n\tposition: absolute;\n\twidth: 162.427px;\n\theight: 22px;\n\tleft: 227.573px;\n\ttop: 113px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Updated_list_page.html;\n\tcursor: pointer;\n}\n#_219__db {\n\tposition: absolute;\n\tleft: 131.427px;\n\ttop: 3px;\n\toverflow: visible;\n\twidth: 32px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_______dc {\n\tposition: absolute;\n\tleft: 33.427px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 97px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_awesome_user_check_dd {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 26.772px;\n\theight: 21.715px;\n\tleft: 0px;\n\ttop: 0.285px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_12 {\n\tposition: absolute;\n\twidth: 185.823px;\n\theight: 25px;\n\tleft: 22.177px;\n\ttop: 183px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Unmatched_list_from_DB_.html;\n\tcursor: pointer;\n}\n#_66__df {\n\tposition: absolute;\n\tleft: 162.823px;\n\ttop: 4px;\n\toverflow: visible;\n\twidth: 24px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#________dg {\n\tposition: absolute;\n\tleft: 33.823px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 127px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 18px;\n\tcolor: rgba(55,58,60,0.816);\n}\n.Icon_awesome_exclamation_circl_dh {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 23.214px;\n\theight: 22.039px;\n\tleft: 0px;\n\ttop: 0.208px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n.Icon_awesome_money_bill_alt {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 58.602px;\n\theight: 30.715px;\n\tleft: 95px;\n\ttop: 14.285px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}\n#Group_11 {\n\tposition: absolute;\n\twidth: 121px;\n\theight: 22px;\n\tleft: 261px;\n\ttop: 147px;\n\toverflow: visible;\n}\n#_20_ {\n\tposition: absolute;\n\tleft: 98px;\n\ttop: 3px;\n\toverflow: visible;\n\twidth: 24px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 14px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#_______dl {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n\toverflow: visible;\n\twidth: 97px;\n\twhite-space: nowrap;\n\ttext-align: left;\n\tfont-family: Helvetica Neue;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 16px;\n\tcolor: rgba(55,58,60,0.816);\n}\n#Group_115 {\n\tposition: absolute;\n\twidth: 27.489px;\n\theight: 21.993px;\n\tleft: 227.57px;\n\ttop: 147px;\n\toverflow: visible;\n\t--web-animation: fadein 0.3s ease-in-out;\n\t--web-action-type: page;\n\t--web-action-target: Keep_list_page.html;\n\tcursor: pointer;\n}\n.Icon_awesome_user_times_dn {\n\toverflow: visible;\n\tposition: absolute;\n\twidth: 27.489px;\n\theight: 21.993px;\n\tleft: 0px;\n\ttop: 0px;\n\t-webkit-transform: matrix(1,0,0,1,0,0);\n\t        transform: matrix(1,0,0,1,0,0);\n}"

/***/ }),

/***/ "./src/app/entry-screen/entry-screen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/entry-screen/entry-screen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div id=\"Home_page\">\n\t<div id=\"____card\" class=\"____card\">\n\t\t<svg class=\"Rectangle_314\">\n\t\t\t<rect fill=\"rgba(255,255,255,1)\" id=\"Rectangle_314\" rx=\"0\" ry=\"0\" x=\"0\" y=\"0\" width=\"455\" height=\"261\">\n\t\t\t</rect>\n\t\t</svg>\n\t\t<div id=\"______\">\n\t\t\t<span style=\"font-size: 18px;\"><strong>公司資料審查</strong></span>\n\t\t</div>\n\t\t<svg class=\"Icon_awesome_building\" viewBox=\"0 0 28.748 31.569\">\n\t\t\t<path fill=\"rgba(240,97,97,1)\" id=\"Icon_awesome_building\" d=\"M 27.97812843322754 29.59625244140625 L 26.69472694396973 29.59625244140625 L 26.69472694396973 1.479812622070312 C 26.69472694396973 0.6625244617462158 26.00522232055664 0 25.15464782714844 0 L 3.593521118164062 0 C 2.742947578430176 0 2.053440570831299 0.6625244617462158 2.053440570831299 1.479812622070312 L 2.053440570831299 29.59625244140625 L 0.7700402140617371 29.59625244140625 C 0.3447855412960052 29.59625244140625 0 29.92754554748535 0 30.33615875244141 L 0 31.5693359375 L 28.7481689453125 31.5693359375 L 28.7481689453125 30.33615875244141 C 28.7481689453125 29.92754554748535 28.40338516235352 29.59625244140625 27.97812843322754 29.59625244140625 Z M 8.213762283325195 4.686073303222656 C 8.213762283325195 4.277460098266602 8.558548927307129 3.9461669921875 8.983802795410156 3.9461669921875 L 11.55060291290283 3.9461669921875 C 11.97585868835449 3.9461669921875 12.32064342498779 4.277460098266602 12.32064342498779 4.686073303222656 L 12.32064342498779 7.152427673339844 C 12.32064342498779 7.561040878295898 11.97585868835449 7.892333984375 11.55060291290283 7.892333984375 L 8.983802795410156 7.892333984375 C 8.558548927307129 7.892333984375 8.213762283325195 7.561040878295898 8.213762283325195 7.152427673339844 L 8.213762283325195 4.686073303222656 Z M 8.213762283325195 10.60532379150391 C 8.213762283325195 10.19671154022217 8.558548927307129 9.86541748046875 8.983802795410156 9.86541748046875 L 11.55060291290283 9.86541748046875 C 11.97585868835449 9.86541748046875 12.32064342498779 10.19671154022217 12.32064342498779 10.60532379150391 L 12.32064342498779 13.07167816162109 C 12.32064342498779 13.48029232025146 11.97585868835449 13.81158447265625 11.55060291290283 13.81158447265625 L 8.983802795410156 13.81158447265625 C 8.558548927307129 13.81158447265625 8.213762283325195 13.48029232025146 8.213762283325195 13.07167816162109 L 8.213762283325195 10.60532379150391 Z M 11.55060291290283 19.7308349609375 L 8.983802795410156 19.7308349609375 C 8.558548927307129 19.7308349609375 8.213762283325195 19.39954566955566 8.213762283325195 18.99092864990234 L 8.213762283325195 16.52457427978516 C 8.213762283325195 16.11595916748047 8.558548927307129 15.78466796875 8.983802795410156 15.78466796875 L 11.55060291290283 15.78466796875 C 11.97585868835449 15.78466796875 12.32064342498779 16.11595916748047 12.32064342498779 16.52457427978516 L 12.32064342498779 18.99092864990234 C 12.32064342498779 19.39954566955566 11.97585868835449 19.7308349609375 11.55060291290283 19.7308349609375 Z M 16.42752456665039 29.59625244140625 L 12.32064342498779 29.59625244140625 L 12.32064342498779 24.41690826416016 C 12.32064342498779 24.0082950592041 12.66543006896973 23.677001953125 13.09068393707275 23.677001953125 L 15.65748500823975 23.677001953125 C 16.08273887634277 23.677001953125 16.42752456665039 24.0082950592041 16.42752456665039 24.41690826416016 L 16.42752456665039 29.59625244140625 Z M 20.5344066619873 18.99092864990234 C 20.5344066619873 19.39954566955566 20.18962287902832 19.7308349609375 19.76436614990234 19.7308349609375 L 17.19756507873535 19.7308349609375 C 16.77230834960938 19.7308349609375 16.42752456665039 19.39954566955566 16.42752456665039 18.99092864990234 L 16.42752456665039 16.52457427978516 C 16.42752456665039 16.11595916748047 16.77230834960938 15.78466796875 17.19756507873535 15.78466796875 L 19.76436614990234 15.78466796875 C 20.18962287902832 15.78466796875 20.5344066619873 16.11595916748047 20.5344066619873 16.52457427978516 L 20.5344066619873 18.99092864990234 Z M 20.5344066619873 13.07167816162109 C 20.5344066619873 13.48029232025146 20.18962287902832 13.81158447265625 19.76436614990234 13.81158447265625 L 17.19756507873535 13.81158447265625 C 16.77230834960938 13.81158447265625 16.42752456665039 13.48029232025146 16.42752456665039 13.07167816162109 L 16.42752456665039 10.60532379150391 C 16.42752456665039 10.19671154022217 16.77230834960938 9.86541748046875 17.19756507873535 9.86541748046875 L 19.76436614990234 9.86541748046875 C 20.18962287902832 9.86541748046875 20.5344066619873 10.19671154022217 20.5344066619873 10.60532379150391 L 20.5344066619873 13.07167816162109 Z M 20.5344066619873 7.152427673339844 C 20.5344066619873 7.561040878295898 20.18962287902832 7.892333984375 19.76436614990234 7.892333984375 L 17.19756507873535 7.892333984375 C 16.77230834960938 7.892333984375 16.42752456665039 7.561040878295898 16.42752456665039 7.152427673339844 L 16.42752456665039 4.686073303222656 C 16.42752456665039 4.277460098266602 16.77230834960938 3.9461669921875 17.19756507873535 3.9461669921875 L 19.76436614990234 3.9461669921875 C 20.18962287902832 3.9461669921875 20.5344066619873 4.277460098266602 20.5344066619873 4.686073303222656 L 20.5344066619873 7.152427673339844 Z\">\n\t\t\t</path>\n\t\t</svg>\n\t\t<div id=\"Group_15\">\n\t\t\t<div id=\"_235_\">\n\t\t\t\t<span>({{+companyCount.ready + +companyCount.keep}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"_____ch\">\n\t\t\t\t<span style=\"font-size: 14px;\"><strong>已審資料</strong></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"Group_114\">\n\t\t\t<div id=\"Group_17\">\n\t\t\t\t<div id=\"_16_\">\n\t\t\t\t\t<span>({{companyCount.keep}})</span>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"_______cl\">\n\t\t\t\t\t<span><button class=\"btn\" (click)=\"goToCompanyList(3)\" style=\"font-size: 14px;\">不更新至前台</button></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<svg class=\"Icon_awesome_user_times\" viewBox=\"0 0 27.489 21.993\">\n\t\t\t\t<path fill=\"rgba(250,106,0,1)\" id=\"Icon_awesome_user_times\" d=\"M 25.32683181762695 10.30942916870117 L 27.28561973571777 8.350637435913086 C 27.55624198913574 8.080014228820801 27.55624198913574 7.641864776611328 27.28561973571777 7.371242046356201 L 26.30622482299805 6.391846179962158 C 26.03560256958008 6.121223926544189 25.59745025634766 6.121223926544189 25.32682800292969 6.391846179962158 L 23.36803817749023 8.350637435913086 L 21.40924644470215 6.391846179962158 C 21.13862419128418 6.121223926544189 20.70047569274902 6.121223926544189 20.42984962463379 6.391846179962158 L 19.45045471191406 7.371240615844727 C 19.17983245849609 7.641863822937012 19.17983245849609 8.080014228820801 19.45045471191406 8.35063648223877 L 21.40924644470215 10.30942726135254 L 19.4504566192627 12.26821804046631 C 19.17983245849609 12.53884124755859 19.17983245849609 12.9769926071167 19.4504566192627 13.24761581420898 L 20.42985534667969 14.22700881958008 C 20.70047569274902 14.49763202667236 21.13862609863281 14.49763202667236 21.40925216674805 14.22700881958008 L 23.36804008483887 12.26821804046631 L 25.32683181762695 14.22700881958008 C 25.59745788574219 14.49763202667236 26.03560638427734 14.49763202667236 26.30622673034668 14.22700881958008 L 27.28562545776367 13.24761581420898 C 27.55624961853027 12.9769926071167 27.55624961853027 12.53884124755859 27.28562545776367 12.26821804046631 L 25.32683181762695 10.30942916870117 Z M 9.622134208679199 10.99672412872314 C 12.65912055969238 10.99672412872314 15.12049674987793 8.535348892211914 15.12049674987793 5.498362064361572 C 15.12049674987793 2.461375951766968 12.65912055969238 0 9.622134208679199 0 C 6.585147380828857 0 4.123771190643311 2.461376190185547 4.123771190643311 5.498362064361572 C 4.123771190643311 8.535348892211914 6.585147380828857 10.99672412872314 9.622134208679199 10.99672412872314 Z M 13.47098541259766 12.37131595611572 L 12.75362110137939 12.37131595611572 C 11.79999923706055 12.80946445465088 10.73898792266846 13.05860900878906 9.622133255004883 13.05860900878906 C 8.505279541015625 13.05860900878906 7.448561668395996 12.80946445465088 6.490643978118896 12.37131595611572 L 5.773279190063477 12.37131595611572 C 2.58594822883606 12.37131595611572 0 14.9572639465332 0 18.14459609985352 L 0 19.93156433105469 C 0 21.06989669799805 0.9235530495643616 21.99344825744629 2.061885595321655 21.99344825744629 L 17.18238067626953 21.99344825744629 C 18.32071304321289 21.99344825744629 19.2442684173584 21.06989669799805 19.2442684173584 19.93156433105469 L 19.2442684173584 18.14459609985352 C 19.2442684173584 14.9572639465332 16.65831756591797 12.37131595611572 13.47098541259766 12.37131595611572 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div id=\"Group_14\">\n\t\t</div>\n\t\t<div id=\"_____co\">\n\t\t\t<span><button class=\"btn\" (click)=\"goToCompanyList(1)\" style=\"font-size: 14px;\">待審資料</button></span>\n\t\t</div>\n\t\t<div id=\"_1430_\">\n\t\t\t<span>({{companyCount.scrapped}})</span>\n\t\t</div>\n\t\t<svg class=\"Icon_material_rate_review\" viewBox=\"6 6 23.25 26.57\">\n\t\t\t<path fill=\"rgba(240,173,78,1)\" id=\"Icon_material_rate_review\" d=\"M 26.92499923706055 6 L 8.324999809265137 6 C 7.046249866485596 6 6.011625289916992 7.195650100708008 6.011625289916992 8.656999588012695 L 6 32.56999969482422 L 10.64999961853027 27.25600051879883 L 26.92499923706055 27.25600051879883 C 28.20374870300293 27.25600051879883 29.24999809265137 26.06035041809082 29.24999809265137 24.59900093078613 L 29.24999809265137 8.656999588012695 C 29.24999809265137 7.195650100708008 28.20374870300293 6 26.92499923706055 6 Z M 10.64999961853027 21.94200134277344 L 10.64999961853027 18.66060447692871 L 18.64799880981445 9.520524978637695 C 18.8804988861084 9.254825592041016 19.24087333679199 9.254825592041016 19.47337532043457 9.520524978637695 L 21.5310001373291 11.87196922302246 C 21.76349830627441 12.13767051696777 21.76349830627441 12.54950523376465 21.5310001373291 12.81520462036133 L 13.52137470245361 21.94200134277344 L 10.64999961853027 21.94200134277344 Z M 24.59999847412109 21.94200134277344 L 15.88124942779541 21.94200134277344 L 18.20624923706055 19.28499984741211 L 24.59999847412109 19.28499984741211 L 24.59999847412109 21.94200134277344 Z\">\n\t\t\t</path>\n\t\t</svg>\n\t\t<div id=\"Group_16\">\n\t\t\t<div id=\"_219_\">\n\t\t\t\t<span>({{companyCount.ready}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"_______ct\">\n\t\t\t\t<span><button class=\"btn\" (click)=\"goToCompanyList(2)\" style=\"font-size: 14px;\">已更新至前台</button></span>\n\t\t\t</div>\n\t\t\t<svg class=\"Icon_awesome_user_check\" viewBox=\"0 0 26.772 21.715\">\n\t\t\t\t<path fill=\"rgba(92,184,92,1)\" id=\"Icon_awesome_user_check\" d=\"M 9.370227813720703 10.857666015625 C 12.32770442962646 10.857666015625 14.72464179992676 8.42741584777832 14.72464179992676 5.4288330078125 C 14.72464179992676 2.430250883102417 12.32770442962646 -1.136737779461328e-07 9.370227813720703 -1.136737779461328e-07 C 6.412749290466309 -1.136737779461328e-07 4.015811443328857 2.430251359939575 4.015811443328857 5.4288330078125 C 4.015811443328857 8.42741584777832 6.412749290466309 10.857666015625 9.370227813720703 10.857666015625 Z M 13.11831665039062 12.21487522125244 L 12.41973304748535 12.21487522125244 C 11.49107551574707 12.64748573303223 10.45784091949463 12.89348030090332 9.370226860046387 12.89348030090332 C 8.282610893249512 12.89348030090332 7.253559112548828 12.64748573303223 6.320719242095947 12.21487522125244 L 5.622135639190674 12.21487522125244 C 2.518248558044434 12.21487522125244 -2.769322371420913e-08 14.76812553405762 -2.769322371420913e-08 17.9151496887207 L -2.769322371420913e-08 19.67952156066895 C -2.769322371420913e-08 20.80345916748047 0.8993744254112244 21.71533203125 2.007905721664429 21.71533203125 L 16.73254585266113 21.71533203125 C 17.84107780456543 21.71533203125 18.74045562744141 20.80345916748047 18.74045562744141 19.67952156066895 L 18.74045562744141 17.9151496887207 C 18.74045562744141 14.76812553405762 16.22220611572266 12.21487522125244 13.11831665039062 12.21487522125244 Z M 26.62984657287598 6.769076824188232 L 25.4669361114502 5.577277660369873 C 25.27451133728027 5.377937793731689 24.96077346801758 5.377937793731689 24.7641658782959 5.573037147521973 L 20.3802375793457 9.983964920043945 L 18.4769115447998 8.041460037231445 C 18.28448867797852 7.842120170593262 17.97075271606445 7.842120170593262 17.77414512634277 8.037219047546387 L 16.59868240356445 9.220535278320312 C 16.40207672119141 9.415634155273438 16.40207672119141 9.733728408813477 16.59450340270996 9.933069229125977 L 20.01212501525879 13.42363834381104 C 20.20454788208008 13.62298011779785 20.51828384399414 13.62298011779785 20.71489334106445 13.42787933349609 L 26.62566566467285 7.481610774993896 C 26.81809043884277 7.282270431518555 26.82227325439453 6.964173793792725 26.62984657287598 6.769075870513916 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t\t<svg class=\"Line_104\" viewBox=\"0 0 361 1\">\n\t\t\t<path fill=\"transparent\" stroke=\"rgba(112,112,112,0.212)\" stroke-width=\"1px\" stroke-linejoin=\"miter\" stroke-linecap=\"butt\" stroke-miterlimit=\"4\" shape-rendering=\"auto\" id=\"Line_104\" d=\"M 0 0 L 361 0\">\n\t\t\t</path>\n\t\t</svg>\n\t\t<div id=\"Group_18\">\n\t\t\t<div id=\"_66_\">\n\t\t\t\t<span>({{companyCount.notscrapped}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"_______\">\n\t\t\t\t<span><button class=\"btn\" (click)=\"goToCompanyList(4)\" style=\"font-size: 14px;\"><strong>未成功比對資料</strong></button></span>\n\t\t\t</div>\n\t\t\t<svg class=\"Icon_awesome_exclamation_circl\" viewBox=\"1.125 1.125 23.214 22.039\">\n\t\t\t\t<path fill=\"rgba(178,102,242,1)\" id=\"Icon_awesome_exclamation_circl\" d=\"M 24.33924293518066 12.14454555511475 C 24.33924293518066 18.23182487487793 19.1421070098877 23.16409301757812 12.73212146759033 23.16409301757812 C 6.322135925292969 23.16409301757812 1.125 18.23182487487793 1.125 12.14454555511475 C 1.125 6.0608229637146 6.322135925292969 1.124999761581421 12.73212146759033 1.124999761581421 C 19.1421070098877 1.124999761581421 24.33924293518066 6.060823917388916 24.33924293518066 12.14454555511475 Z M 12.73212146759033 14.36622905731201 C 11.54309272766113 14.36622905731201 10.57918643951416 15.28133964538574 10.57918643951416 16.41017723083496 C 10.57918643951416 17.53901481628418 11.54309272766113 18.45412445068359 12.73212146759033 18.45412445068359 C 13.92114925384521 18.45412445068359 14.88505458831787 17.53901481628418 14.88505458831787 16.41017723083496 C 14.88505458831787 15.28133964538574 13.92114925384521 14.36622905731201 12.73212146759033 14.36622905731201 Z M 10.68809700012207 7.019300937652588 L 11.03528118133545 13.06227970123291 C 11.05152130126953 13.34505462646484 11.2977991104126 13.56642246246338 11.59607410430908 13.56642246246338 L 13.86816883087158 13.56642246246338 C 14.16644287109375 13.56642246246338 14.4127197265625 13.34505462646484 14.4289608001709 13.06227970123291 L 14.77614402770996 7.019300937652588 C 14.79369449615479 6.713865280151367 14.53754234313965 6.457037925720215 14.21535301208496 6.457037925720215 L 11.2488431930542 6.457037925720215 C 10.92665195465088 6.457037925720215 10.67054653167725 6.713865280151367 10.68809700012207 7.019300937652588 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n\t<div id=\"______card\" class=\"______card\">\n\t\t<svg class=\"Rectangle_312\">\n\t\t\t<rect fill=\"rgba(255,255,255,1)\" id=\"Rectangle_312\" rx=\"0\" ry=\"0\" x=\"0\" y=\"0\" width=\"455\" height=\"261\">\n\t\t\t</rect>\n\t\t</svg>\n\t\t<svg class=\"Line_101\" viewBox=\"0 0 359 1\">\n\t\t\t<path fill=\"transparent\" stroke=\"rgba(112,112,112,0.212)\" stroke-width=\"1px\" stroke-linejoin=\"miter\" stroke-linecap=\"butt\" stroke-miterlimit=\"4\" shape-rendering=\"auto\" id=\"Line_101\" d=\"M 0 0 L 359 0\">\n\t\t\t</path>\n\t\t</svg>\n\t\t<div id=\"_______c\">\n\t\t\t<span style=\"font-size: 18px;\"><strong>募資資料審查</strong></span>\n\t\t</div>\n\t\t<div id=\"_235__c\">\n\t\t\t<span>({{countMenu['edited'] + countMenu['toKeep']}})</span>\n\t\t</div>\n\t\t<div id=\"_____c\">\n\t\t\t<span style=\"font-size: 14px;\"><strong>已審資料</strong></span>\n\t\t</div>\n\t\t<div id=\"Group_13\">\n\t\t\t<div id=\"_1430__c\">\n\t\t\t\t<span>({{countMenu.notProcessed}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"_____da\">\n\t\t\t\t<span><button class=\"btn\" (click)=\"goToFunding(0)\" style=\"font-size: 14px;\">待審資料</button></span>\n\t\t\t</div>\n\t\t\t<svg class=\"Icon_material_rate_review_c\" viewBox=\"6 6 23.25 26.57\">\n\t\t\t\t<path fill=\"rgba(240,173,78,1)\" id=\"Icon_material_rate_review_c\" d=\"M 26.92499923706055 6 L 8.324999809265137 6 C 7.046249866485596 6 6.011625289916992 7.195650100708008 6.011625289916992 8.656999588012695 L 6 32.56999969482422 L 10.64999961853027 27.25600051879883 L 26.92499923706055 27.25600051879883 C 28.20374870300293 27.25600051879883 29.24999809265137 26.06035041809082 29.24999809265137 24.59900093078613 L 29.24999809265137 8.656999588012695 C 29.24999809265137 7.195650100708008 28.20374870300293 6 26.92499923706055 6 Z M 10.64999961853027 21.94200134277344 L 10.64999961853027 18.66060447692871 L 18.64799880981445 9.520524978637695 C 18.8804988861084 9.254825592041016 19.24087333679199 9.254825592041016 19.47337532043457 9.520524978637695 L 21.5310001373291 11.87196922302246 C 21.76349830627441 12.13767051696777 21.76349830627441 12.54950523376465 21.5310001373291 12.81520462036133 L 13.52137470245361 21.94200134277344 L 10.64999961853027 21.94200134277344 Z M 24.59999847412109 21.94200134277344 L 15.88124942779541 21.94200134277344 L 18.20624923706055 19.28499984741211 L 24.59999847412109 19.28499984741211 L 24.59999847412109 21.94200134277344 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div id=\"Group_10\">\n\t\t\t<div id=\"_219__db\">\n\t\t\t\t<span>({{countMenu.edited}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"_______dc\">\n\t\t\t\t<span><button class=\"btn\" (click)=\"goToFunding(1)\" style=\"font-size: 14px;\">已更新至前台</button></span>\n\t\t\t</div>\n\t\t\t<svg class=\"Icon_awesome_user_check_dd\" viewBox=\"0 0 26.772 21.715\">\n\t\t\t\t<path fill=\"rgba(92,184,92,1)\" id=\"Icon_awesome_user_check_dd\" d=\"M 9.370227813720703 10.857666015625 C 12.32770442962646 10.857666015625 14.72464179992676 8.42741584777832 14.72464179992676 5.4288330078125 C 14.72464179992676 2.430250883102417 12.32770442962646 -1.136737779461328e-07 9.370227813720703 -1.136737779461328e-07 C 6.412749290466309 -1.136737779461328e-07 4.015811443328857 2.430251359939575 4.015811443328857 5.4288330078125 C 4.015811443328857 8.42741584777832 6.412749290466309 10.857666015625 9.370227813720703 10.857666015625 Z M 13.11831665039062 12.21487522125244 L 12.41973304748535 12.21487522125244 C 11.49107551574707 12.64748573303223 10.45784091949463 12.89348030090332 9.370226860046387 12.89348030090332 C 8.282610893249512 12.89348030090332 7.253559112548828 12.64748573303223 6.320719242095947 12.21487522125244 L 5.622135639190674 12.21487522125244 C 2.518248558044434 12.21487522125244 -2.769322371420913e-08 14.76812553405762 -2.769322371420913e-08 17.9151496887207 L -2.769322371420913e-08 19.67952156066895 C -2.769322371420913e-08 20.80345916748047 0.8993744254112244 21.71533203125 2.007905721664429 21.71533203125 L 16.73254585266113 21.71533203125 C 17.84107780456543 21.71533203125 18.74045562744141 20.80345916748047 18.74045562744141 19.67952156066895 L 18.74045562744141 17.9151496887207 C 18.74045562744141 14.76812553405762 16.22220611572266 12.21487522125244 13.11831665039062 12.21487522125244 Z M 26.62984657287598 6.769076824188232 L 25.4669361114502 5.577277660369873 C 25.27451133728027 5.377937793731689 24.96077346801758 5.377937793731689 24.7641658782959 5.573037147521973 L 20.3802375793457 9.983964920043945 L 18.4769115447998 8.041460037231445 C 18.28448867797852 7.842120170593262 17.97075271606445 7.842120170593262 17.77414512634277 8.037219047546387 L 16.59868240356445 9.220535278320312 C 16.40207672119141 9.415634155273438 16.40207672119141 9.733728408813477 16.59450340270996 9.933069229125977 L 20.01212501525879 13.42363834381104 C 20.20454788208008 13.62298011779785 20.51828384399414 13.62298011779785 20.71489334106445 13.42787933349609 L 26.62566566467285 7.481610774993896 C 26.81809043884277 7.282270431518555 26.82227325439453 6.964173793792725 26.62984657287598 6.769075870513916 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t\t<div id=\"Group_12\">\n\t\t\t<div id=\"_66__df\">\n\t\t\t\t<span>({{countMenu.notFound}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"________dg\">\n\t\t\t\t<span><button class=\"btn\" (click)=\"goToFunding(3)\" style=\"font-size: 14px;\"><strong>未成功比對資料</strong></button></span>\n\t\t\t</div>\n\t\t\t<svg class=\"Icon_awesome_exclamation_circl_dh\" viewBox=\"1.125 1.125 23.214 22.039\">\n\t\t\t\t<path fill=\"rgba(178,102,242,1)\" id=\"Icon_awesome_exclamation_circl_dh\" d=\"M 24.33924293518066 12.14454555511475 C 24.33924293518066 18.23182487487793 19.1421070098877 23.16409301757812 12.73212146759033 23.16409301757812 C 6.322135925292969 23.16409301757812 1.125 18.23182487487793 1.125 12.14454555511475 C 1.125 6.0608229637146 6.322135925292969 1.124999761581421 12.73212146759033 1.124999761581421 C 19.1421070098877 1.124999761581421 24.33924293518066 6.060823917388916 24.33924293518066 12.14454555511475 Z M 12.73212146759033 14.36622905731201 C 11.54309272766113 14.36622905731201 10.57918643951416 15.28133964538574 10.57918643951416 16.41017723083496 C 10.57918643951416 17.53901481628418 11.54309272766113 18.45412445068359 12.73212146759033 18.45412445068359 C 13.92114925384521 18.45412445068359 14.88505458831787 17.53901481628418 14.88505458831787 16.41017723083496 C 14.88505458831787 15.28133964538574 13.92114925384521 14.36622905731201 12.73212146759033 14.36622905731201 Z M 10.68809700012207 7.019300937652588 L 11.03528118133545 13.06227970123291 C 11.05152130126953 13.34505462646484 11.2977991104126 13.56642246246338 11.59607410430908 13.56642246246338 L 13.86816883087158 13.56642246246338 C 14.16644287109375 13.56642246246338 14.4127197265625 13.34505462646484 14.4289608001709 13.06227970123291 L 14.77614402770996 7.019300937652588 C 14.79369449615479 6.713865280151367 14.53754234313965 6.457037925720215 14.21535301208496 6.457037925720215 L 11.2488431930542 6.457037925720215 C 10.92665195465088 6.457037925720215 10.67054653167725 6.713865280151367 10.68809700012207 7.019300937652588 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t\t<svg class=\"Icon_awesome_money_bill_alt\" viewBox=\"0 9 58.602 30.715\">\n\t\t\t<path fill=\"rgba(92,184,92,1)\" id=\"Icon_awesome_money_bill_alt\" d=\"M 32.23086166381836 26.91707420349121 L 30.76581954956055 26.91707420349121 L 30.76581954956055 19.87822532653809 C 30.76581954956055 19.52467918395996 30.43801879882812 19.23833084106445 30.03330230712891 19.23833084106445 L 28.78985214233398 19.23833084106445 C 28.3558349609375 19.23833084106445 27.931884765625 19.35031127929688 27.57112312316895 19.56067657470703 L 26.16742897033691 20.37814331054688 C 25.83073806762695 20.57397270202637 25.73969841003418 20.97124290466309 25.96415519714355 21.26519393920898 L 26.77725219726562 22.3298282623291 C 27.00142478942871 22.62394714355469 27.45620155334473 22.70347785949707 27.79270935058594 22.50739669799805 L 27.83574295043945 22.48259925842285 L 27.83574295043945 26.91707420349121 L 26.37070465087891 26.91707420349121 C 25.96598815917969 26.91707420349121 25.63818359375 27.20343208312988 25.63818359375 27.55697822570801 L 25.63818359375 28.83676910400391 C 25.63818359375 29.19031143188477 25.96598815917969 29.47666168212891 26.37070465087891 29.47666168212891 L 32.23086166381836 29.47666168212891 C 32.63557815551758 29.47666168212891 32.96337890625 29.19031143188477 32.96337890625 28.83676910400391 L 32.96337890625 27.55697822570801 C 32.96337890625 27.20343208312988 32.63557815551758 26.91707420349121 32.23086166381836 26.91707420349121 Z M 55.67148590087891 9.000000953674316 L 2.930078268051147 9.000000953674316 C 1.312125682830811 9.000000953674316 0 10.14621257781982 0 11.55958271026611 L 0 37.1554069519043 C 0 38.56877899169922 1.312125682830811 39.71499633789062 2.930078268051147 39.71499633789062 L 55.67148590087891 39.71499633789062 C 57.2894401550293 39.71499633789062 58.6015625 38.56877899169922 58.6015625 37.1554069519043 L 58.6015625 11.55958271026611 C 58.6015625 10.14621257781982 57.2894401550293 9.000000953674316 55.67148590087891 9.000000953674316 Z M 4.39511775970459 35.87561416625977 L 4.39511775970459 30.75645065307617 C 7.631937503814697 30.75645065307617 10.25527381896973 33.0480842590332 10.25527381896973 35.87561416625977 L 4.39511775970459 35.87561416625977 Z M 4.39511775970459 17.95853805541992 L 4.39511775970459 12.83937358856201 L 10.25527381896973 12.83937358856201 C 10.25527381896973 15.66691493988037 7.631937503814697 17.95853805541992 4.39511775970459 17.95853805541992 Z M 29.30078125 33.31603622436523 C 24.44601249694824 33.31603622436523 20.51054763793945 29.3046932220459 20.51054763793945 24.35750198364258 C 20.51054763793945 19.40950202941895 24.44601249694824 15.39895725250244 29.30078125 15.39895725250244 C 34.15555572509766 15.39895725250244 38.09102249145508 19.40950202941895 38.09102249145508 24.35750198364258 C 38.09102249145508 29.30628776550293 34.15372467041016 33.31603622436523 29.30078125 33.31603622436523 Z M 54.20644760131836 35.87561416625977 L 48.34629058837891 35.87561416625977 C 48.34629058837891 33.0480842590332 50.96962356567383 30.75645065307617 54.20644760131836 30.75645065307617 L 54.20644760131836 35.87561416625977 Z M 54.20644760131836 17.95853805541992 C 50.96962356567383 17.95853805541992 48.34629058837891 15.66691493988037 48.34629058837891 12.83937358856201 L 54.20644760131836 12.83937358856201 L 54.20644760131836 17.95853805541992 Z\">\n\t\t\t</path>\n\t\t</svg>\n\t\t<div id=\"Group_11\">\n\t\t\t<div id=\"_20_\">\n\t\t\t\t<span>({{countMenu.toKeep}})</span>\n\t\t\t</div>\n\t\t\t<div id=\"_______dl\">\n\t\t\t\t<span><button class=\"btn\" (click)=\"goToFunding(2)\" style=\"font-size: 14px;\">不更新至前台</button></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"Group_115\">\n\t\t\t<svg class=\"Icon_awesome_user_times_dn\" viewBox=\"0 0 27.489 21.993\">\n\t\t\t\t<path fill=\"rgba(250,106,0,1)\" id=\"Icon_awesome_user_times_dn\" d=\"M 25.32683181762695 10.30942916870117 L 27.28561973571777 8.350637435913086 C 27.55624198913574 8.080014228820801 27.55624198913574 7.641864776611328 27.28561973571777 7.371242046356201 L 26.30622482299805 6.391846179962158 C 26.03560256958008 6.121223926544189 25.59745025634766 6.121223926544189 25.32682800292969 6.391846179962158 L 23.36803817749023 8.350637435913086 L 21.40924644470215 6.391846179962158 C 21.13862419128418 6.121223926544189 20.70047569274902 6.121223926544189 20.42984962463379 6.391846179962158 L 19.45045471191406 7.371240615844727 C 19.17983245849609 7.641863822937012 19.17983245849609 8.080014228820801 19.45045471191406 8.35063648223877 L 21.40924644470215 10.30942726135254 L 19.4504566192627 12.26821804046631 C 19.17983245849609 12.53884124755859 19.17983245849609 12.9769926071167 19.4504566192627 13.24761581420898 L 20.42985534667969 14.22700881958008 C 20.70047569274902 14.49763202667236 21.13862609863281 14.49763202667236 21.40925216674805 14.22700881958008 L 23.36804008483887 12.26821804046631 L 25.32683181762695 14.22700881958008 C 25.59745788574219 14.49763202667236 26.03560638427734 14.49763202667236 26.30622673034668 14.22700881958008 L 27.28562545776367 13.24761581420898 C 27.55624961853027 12.9769926071167 27.55624961853027 12.53884124755859 27.28562545776367 12.26821804046631 L 25.32683181762695 10.30942916870117 Z M 9.622134208679199 10.99672412872314 C 12.65912055969238 10.99672412872314 15.12049674987793 8.535348892211914 15.12049674987793 5.498362064361572 C 15.12049674987793 2.461375951766968 12.65912055969238 0 9.622134208679199 0 C 6.585147380828857 0 4.123771190643311 2.461376190185547 4.123771190643311 5.498362064361572 C 4.123771190643311 8.535348892211914 6.585147380828857 10.99672412872314 9.622134208679199 10.99672412872314 Z M 13.47098541259766 12.37131595611572 L 12.75362110137939 12.37131595611572 C 11.79999923706055 12.80946445465088 10.73898792266846 13.05860900878906 9.622133255004883 13.05860900878906 C 8.505279541015625 13.05860900878906 7.448561668395996 12.80946445465088 6.490643978118896 12.37131595611572 L 5.773279190063477 12.37131595611572 C 2.58594822883606 12.37131595611572 0 14.9572639465332 0 18.14459609985352 L 0 19.93156433105469 C 0 21.06989669799805 0.9235530495643616 21.99344825744629 2.061885595321655 21.99344825744629 L 17.18238067626953 21.99344825744629 C 18.32071304321289 21.99344825744629 19.2442684173584 21.06989669799805 19.2442684173584 19.93156433105469 L 19.2442684173584 18.14459609985352 C 19.2442684173584 14.9572639465332 16.65831756591797 12.37131595611572 13.47098541259766 12.37131595611572 Z\">\n\t\t\t\t</path>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n<!-- </div> -->\n\n<!-- <div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 20%;\">\n    <div class=\"col-6\">\n      <div class=\"card\">\n        <div class=\"card-header\" style=\"background-color: white;\">\n          <h5 class=\"card-title text-center\"><i class=\"fa fa-building fa-lg\" style=\"color: red !important; margin-left: 20px; margin-top: 10px; margin-bottom: 10px; margin-right: 10px;\"></i>公司資料審查</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-6\"><i class=\"fa fa-edit fa-lg\" style=\"color: orange !important; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=goToCompanyList() style=\"color: darkgray; margin-left: 10px;\">待審資料(---)</button></strong></div>\n            <div class=\"col-6\"><strong><span style=\"color: darkgray;\">已審資料(---)</span></strong></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\"></div>\n            <div class=\"col-6\"><i class=\"fa fa-user-plus fa-lg\" style=\"color: darkgray !important; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=\"goToPageNotFound()\" style=\"color: darkgray; margin-left: 10px;\">已更新至前台(---)</button></strong></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\"></div>\n            <div class=\"col-6\"><i class=\"fa fa-user-times fa-lg\" style=\"color: darkgray !important; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=\"goToPageNotFound()\" style=\"color: darkgray; margin-left: 10px;\">不更新至前台(---)</button></strong></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\"><i class=\"fa fa-exclamation-circle fa-lg\" style=\"color: darkgray !important; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=\"goToPageNotFound()\" style=\"color: darkgray; margin-left: 10px;\">未成功比對資料</button></strong></div>\n            <div class=\"col-6\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"card\">\n        <div class=\"card-header\" style=\"background-color: white;\">\n          <h5 class=\"card-title text-center\"><i class=\"fa fa-money fa-lg\" style=\"color:#5cb85c !important; margin-left: 20px; margin-top: 10px; margin-bottom: 10px; margin-right: 10px;\"></i>募資資料審查</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-6\"><i class=\"fa fa-edit fa-lg\" style=\"color: #f0ad4e !important; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=goToFunding(0) style=\"color: darkgray; margin-left: 10px;\">待審資料({{countMenu['notProcessed']}})</button></strong></div>\n            <div class=\"col-6\"><strong><span style=\"color: darkgray;\">已審資料({{countMenu['edited'] + countMenu['toKeep']}})</span></strong></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\"></div>\n            <div class=\"col-6\"><i class=\"fa fa-user-plus fa-lg\" style=\"color: #5cb85c !important; margin-top: 10px; margin-bottom: 10px;\"></i><button class=\"btn\" (click)=\"goToFunding(1)\" style=\"color: darkgray; margin-left: 10px;\">已更新至前台({{countMenu['edited']}})</button></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\"></div>\n            <div class=\"col-6\"><i class=\"fa fa-user-times fa-lg\" style=\"color: #fa6a00 !important; margin-top: 10px; margin-bottom: 10px;\"></i><button class=\"btn\" (click)=\"goToFunding(2)\" style=\"color: darkgray; margin-left: 10px;\">不更新至前台({{countMenu['toKeep']}})</button></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\"><i class=\"fa fa-exclamation-circle fa-lg\" style=\"color: #b266f2 !important; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=\"goToFunding(3)\" style=\"color: darkgray; margin-left: 10px;\">未成功比對資料({{countMenu['notFound']}})</button></strong></div>\n            <div class=\"col-6\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/entry-screen/entry-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/entry-screen/entry-screen.component.ts ***!
  \********************************************************/
/*! exports provided: EntryScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryScreenComponent", function() { return EntryScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _funding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funding.service */ "./src/app/funding.service.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




alertify.set('notifier', 'position', 'top-center');
var EntryScreenComponent = /** @class */ (function () {
    function EntryScreenComponent(router, fundingService, companyService) {
        this.router = router;
        this.fundingService = fundingService;
        this.companyService = companyService;
        this.status = 0;
        this.countMenu = {
            notProcessed: 0,
            edited: 0,
            toKeep: 0,
            ready: 0,
            unknown: 0,
            notFound: 0
        };
        this.companyCount = {
            scrapped: 0,
            ready: 0,
            keep: 0,
            notscrapped: 0
        };
        this.ReadyAndToKeep = 0;
    }
    EntryScreenComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('status')) {
            this.status = +localStorage.getItem('status');
        }
        this.getCountFunding();
        this.getCountCompany();
    };
    EntryScreenComponent.prototype.goToCompanyList = function (companyStatus) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        else {
            localStorage.setItem('companyListStatus', companyStatus);
            this.router.navigate(['/dashboard']);
        }
    };
    EntryScreenComponent.prototype.goToPageNotFound = function () {
        this.router.navigate(['/page/not/found']);
    };
    EntryScreenComponent.prototype.getCountFunding = function () {
        var _this = this;
        this.fundingService.countFunding()
            .subscribe(function (count) {
            _this.countMenu = count;
            _this.ReadyAndToKeep = _this.countMenu.ready + _this.countMenu.toKeep;
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    EntryScreenComponent.prototype.getCountCompany = function () {
        var _this = this;
        this.companyService.countCompany().subscribe(function (count) {
            _this.companyCount.scrapped = count.scrapped;
            _this.companyCount.keep = count.keep;
            _this.companyCount.ready = count.ready;
            _this.companyCount.notscrapped = count.notScrapped;
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    EntryScreenComponent.prototype.goToFunding = function (newStatus) {
        localStorage.setItem('status', newStatus);
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/filter/funding']);
        }
    };
    EntryScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-screen',
            template: __webpack_require__(/*! ./entry-screen.component.html */ "./src/app/entry-screen/entry-screen.component.html"),
            styles: [__webpack_require__(/*! ./entry-screen.component.css */ "./src/app/entry-screen/entry-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _funding_service__WEBPACK_IMPORTED_MODULE_2__["FundingService"],
            _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]])
    ], EntryScreenComponent);
    return EntryScreenComponent;
}());



/***/ }),

/***/ "./src/app/filter-funding/filter-funding.component.css":
/*!*************************************************************!*\
  !*** ./src/app/filter-funding/filter-funding.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filter-funding/filter-funding.component.html":
/*!**************************************************************!*\
  !*** ./src/app/filter-funding/filter-funding.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-2\" style=\"background-color: rgb(255, 254, 254);\">\n      <app-sidebar \n        (statusChanged) = \"updateStatusListener($event)\"\n        [needRefresh] = \"menuNeedRefresh\"\n      ></app-sidebar>\n    </div>\n    <div class=\"col col-10\">\n      <div class=\"row\">\n        <div class=\"col-12 from-group form-inline ml-10 mt-2\">\n      \n          <input list=\"snameToList\" type=\"text\" class=\"form-control\" placeholder=\"募資紀錄來源\" [(ngModel)]=\"sname_string\" (ngModelChange)=\"deputySName($event)\"/>\n          <datalist id=\"snameToList\">\n            <div *ngFor=\"let item of sname\">\n              <option value={{item}}>\n            </div>\n          </datalist>\n      \n          <input list=\"countriesToList\" type=\"text\" class=\"form-control ml-2 mr-2\" placeholder=\"City/Country\" [(ngModel)]=\"cityCountry\" (ngModelChange)=\"processCountry($event)\"/>\n          <datalist id=\"countriesToList\">\n            <div *ngFor=\"let country of comboCountries\">\n              <option value={{country}}>\n            </div>\n          </datalist>\n          \n        \n          <input placeholder=\"募資公佈日期\" type=\"text\" class=\"form-control\" size=\"23px\" bsDaterangepicker [(ngModel)]=\"bsRangePValue\" (ngModelChange)=\"processPDate($event)\">\n          <input placeholder=\"紀錄取得日期\" type=\"text\" class=\"form-control ml-2 mr-2\" size=\"23px\" bsDaterangepicker [(ngModel)]=\"bsRangeCValue\" (ngModelChange)=\"processCDate($event)\">\n      \n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"toSearchText\" />\n          <button class=\"btn btn-primary ml-1\" (click)=\"processToSearch()\"><i class=\"fa fa-search\"></i></button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-12\">\n          <app-list-funding [sname]=\"snameToSearch\" \n                          [cityCountry] = \"cityCountry\" \n                          [toSearch] = \"toSearch\"\n                          [initDate] = \"initDate\"\n                          [endDate] = \"endDate\"\n                          [dateField] = \"dateField\"\n                          [status] = \"status\"\n                          (statusChanged) = \"updatedStatusListener($event)\">\n          </app-list-funding>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/filter-funding/filter-funding.component.ts":
/*!************************************************************!*\
  !*** ./src/app/filter-funding/filter-funding.component.ts ***!
  \************************************************************/
/*! exports provided: FilterFundingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFundingComponent", function() { return FilterFundingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _funding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../funding.service */ "./src/app/funding.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


alertify.set('notifier', 'position', 'top-center');
var FilterFundingComponent = /** @class */ (function () {
    function FilterFundingComponent(fundingService) {
        this.fundingService = fundingService;
        this.status = +localStorage.getItem('status');
        this.menuNeedRefresh = 0;
        this.sname = [];
        this.comboCountries = [];
        this.cityCountry = "";
        this.sname_string = "";
        this.snameToSearch = ""; // use this
        this.toSearchText = "";
        this.toSearch = "";
        this.initDate = "";
        this.endDate = "";
        this.dateField = "";
        this.minPDate = new Date(2017, 5, 10);
        this.maxPDate = new Date(2018, 9, 15);
        this.minCDate = new Date(2017, 5, 10);
        this.maxCDate = new Date(2018, 9, 15);
        this._bsRangePValue = [null, null];
        this._bsRangeCValue = [null, null];
    }
    FilterFundingComponent.prototype.ngOnInit = function () {
        this.getSName();
        this.getCountries();
    };
    FilterFundingComponent.prototype.getSName = function () {
        var _this = this;
        this.fundingService.snameFunding().subscribe(function (sname) {
            sname.forEach(function (element) {
                _this.sname.push(element);
            });
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    FilterFundingComponent.prototype.cleanValues = function () {
        this.cityCountry = "";
        this.sname_string = "";
        this.snameToSearch = ""; // use this
        this.toSearch = "";
        this.initDate = "";
        this.endDate = "";
        this.dateField = "";
    };
    FilterFundingComponent.prototype.cleanDates = function () {
        this.bsRangeCValue = [null, null];
        this.bsRangePValue = [null, null];
    };
    FilterFundingComponent.prototype.getCountries = function () {
        var _this = this;
        this.fundingService.getCountries().subscribe(function (countries) {
            countries.forEach(function (c) {
                _this.comboCountries.push(c);
            });
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    // event coming from the sidebar
    FilterFundingComponent.prototype.updateStatusListener = function (newStatus) {
        this.cleanValues();
        this.cleanDates();
        this.toSearchText = "";
        this.status = newStatus;
    };
    // event coming from the list
    FilterFundingComponent.prototype.updatedStatusListener = function (newStatus) {
        this.menuNeedRefresh = newStatus;
        this.status = newStatus;
    };
    FilterFundingComponent.prototype.processCountry = function (country) {
        this.toSearchText = "";
        this.cleanValues();
        this.cleanDates();
        this.cityCountry = country;
    };
    FilterFundingComponent.prototype.processToSearch = function () {
        this.cleanDates();
        this.cleanValues();
        this.toSearch = this.toSearchText;
    };
    FilterFundingComponent.prototype.processPDate = function (newDate) {
        this.toSearchText = "";
        this.bsRangeCValue = [null, null];
        this.cleanValues();
        var initPDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
        var endPDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
        this.initDate = initPDate;
        this.endDate = endPDate;
        this.dateField = 'post_time';
    };
    FilterFundingComponent.prototype.processCDate = function (newDate) {
        this.toSearchText = "";
        this.bsRangePValue = [null, null];
        this.cleanValues();
        var initCDate = newDate[0].getFullYear() + "-" + (newDate[0].getMonth() + 1) + "-" + newDate[0].getDate();
        var endCDate = newDate[1].getFullYear() + "-" + (newDate[1].getMonth() + 1) + "-" + newDate[1].getDate();
        this.initDate = initCDate;
        this.endDate = endCDate;
        this.dateField = 'created';
    };
    FilterFundingComponent.prototype.deputySName = function (SName) {
        this.toSearchText = "";
        this.cleanDates();
        this.cleanValues();
        var iOfComa = SName.indexOf("(");
        var dSName = SName.substr(0, iOfComa);
        var toReturn = dSName;
        if (dSName == '其他') {
            toReturn = "";
            this.sname_string = '其他';
            for (var i = 0; i < this.sname.length - 1; i++) {
                var element = this.sname[i];
                var eOfComa = element.indexOf("(");
                var dElement = element.substr(0, eOfComa);
                if (i < this.sname.length - 2) {
                    toReturn += dElement + ",";
                }
                else {
                    toReturn += dElement;
                }
            }
        }
        else {
            this.sname_string = toReturn;
        }
        if (toReturn) {
            this.snameToSearch = toReturn;
        }
    };
    Object.defineProperty(FilterFundingComponent.prototype, "bsValue", {
        get: function () {
            return this._bsValue;
        },
        set: function (v) {
            console.log(v);
            this._bsValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterFundingComponent.prototype, "bsRangePValue", {
        get: function () {
            return this._bsRangePValue;
        },
        set: function (v) {
            this._bsRangePValue = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterFundingComponent.prototype, "bsRangeCValue", {
        get: function () {
            return this._bsRangeCValue;
        },
        set: function (v) {
            this._bsRangeCValue = v;
        },
        enumerable: true,
        configurable: true
    });
    FilterFundingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-funding',
            template: __webpack_require__(/*! ./filter-funding.component.html */ "./src/app/filter-funding/filter-funding.component.html"),
            styles: [__webpack_require__(/*! ./filter-funding.component.css */ "./src/app/filter-funding/filter-funding.component.css")]
        }),
        __metadata("design:paramtypes", [_funding_service__WEBPACK_IMPORTED_MODULE_1__["FundingService"]])
    ], FilterFundingComponent);
    return FilterFundingComponent;
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
    FundingService.prototype.getFundingList = function (fun) {
        var url = this.fundingUrl + '/list?ToSearch=' + fun.ToSearch + '&PageNumber=' + fun.PageNumber +
            '&PageSize=' + fun.PageSize +
            '&ArrangeFor=' + fun.ArrangeFor + '&Arrange=' + fun.Arrange + '&InitDate=' + fun.InitDate +
            '&EndDate=' + fun.EndDate + '&DateField=' + fun.DateField + '&sname=' + fun.SName + '&status=' + fun.Status;
        return this.http.get(url, this.httpOptions);
    };
    FundingService.prototype.changeFundingStatus = function (Id, newStatus) {
        var url = this.fundingUrl + '/change/status';
        var a = { id: Id, status: newStatus };
        return this.http.put(url, a, this.httpOptions);
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
    FundingService.prototype.countFunding = function () {
        return this.http.get(this.fundingUrl + '/count', this.httpOptions);
    };
    FundingService.prototype.snameFunding = function () {
        return this.http.get(this.fundingUrl + '/sname', this.httpOptions);
    };
    FundingService.prototype.getCountries = function () {
        return this.http.get(this.fundingUrl + '/country', this.httpOptions);
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





alertify.set('notifier', 'position', 'top-center');
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
            Arrange: 'ASC',
            Filter: {
                companySource: [],
                companyIndustry: [],
                approvedDate: [],
                updatedDate: []
            },
            Status: 0
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
        var initial_id = this.route.snapshot.paramMap.get('id');
        if (initial_id != '0') {
            this.compToSearch.ToSearch = initial_id;
        }
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
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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

/***/ "./src/app/list-funding/list-funding.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-funding/list-funding.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    border: none;\n    color: #28A745;\n    border-color: #28A745;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin-right: 2px; /* Safari */\n    transition-duration: 0.4s;\n    font-size: 1.5em;\n    cursor: pointer;\n    border-radius: 15%;\n  }\n  \n  .button1 {\n    background-color: white; \n    color: #28A745; \n    border: 1px solid #28A745;\n  }\n  \n  .button1:hover {\n    background-color: #28A745;\n    color: white;\n  }\n  \n  .button2 {\n    background-color: white; \n    color: #FFC107; \n    border: 1px solid #FFC107;\n  }\n  \n  .button2:hover {\n    background-color: #FFC107;\n    color: white;\n  }\n  \n  .button3 {\n    background-color: white; \n    color: #FA6A00; \n    border: 1px solid #FA6A00;\n  }\n  \n  .button3:hover {\n    background-color: #FA6A00;\n    color: white;\n  }\n  \n  .button4 {\n    background-color: white; \n    color: #007BFF; \n    border: 1px solid #007BFF;\n  }\n  \n  .button4:hover {\n    background-color: #007BFF;\n    color: white;\n  }\n  \n  .button5 {\n    background-color: white; \n    color: #DC3545; \n    border: 1px solid #DC3545;\n  }\n  \n  .button5:hover {\n    background-color: #DC3545;\n    color: white;\n  }\n  \n  .button6 {\n    background-color: white; \n    color: #3C0BDD; \n    border: 1px solid #3C0BDD;\n  }\n  \n  .button6:hover {\n    background-color: #3C0BDD;\n    color: white;\n  }"

/***/ }),

/***/ "./src/app/list-funding/list-funding.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-funding/list-funding.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-12\" style=\"background-color: rgb(255, 255, 255)\">\n      <table class=\"table table-hover table-sm mt-2\">\n        <thead class=\"thead-dark\">\n            <tr>\n              <!-- COMP_ID -->\n              <th class=\"centered-th mx-auto p-2 perc5\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.id'\"\n                (click)=\"changeArrange('funding.id')\">\n                <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                  編號<i class=\"fa fa-sort-asc ml-1\"></i>\n                </span>\n                <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                  編號<i class=\"fa fa-sort-desc ml-1\"></i>\n                </span>\n              </th>\n              <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.id'\"\n                (click)=\"changeArrange('funding.id')\">\n                編號 <i class=\"fa fa-unsorted\"></i>\n              </th>\n    \n               <!-- COMP_NAME -->\n               <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.company_name'\"\n               (click)=\"changeArrange('funding.company_name')\">\n               <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                 公司名稱<i class=\"fa fa-sort-asc ml-1\"></i>\n               </span>\n               <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                 公司名稱<i class=\"fa fa-sort-desc ml-1\"></i>\n               </span>\n             </th>\n             <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.company_name'\"\n               (click)=\"changeArrange('funding.company_name')\">\n               公司名稱 <i class=\"fa fa-unsorted\"></i>\n             </th>\n    \n              <!-- COMP_ADDRESS -->\n              <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.address'\"\n              (click)=\"changeArrange('funding.address')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                地址<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                地址<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.address'\"\n              (click)=\"changeArrange('funding.address')\">\n              地址 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- INVESTMENT TYPE 募資階段 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.investment_type'\"\n              (click)=\"changeArrange('funding.investment_type')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                募資階段<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                募資階段<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.investment_type'\"\n              (click)=\"changeArrange('funding.investment_type')\">\n              募資階段 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- ANNOUNCED ON 募資公布日期 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.announced_on'\"\n              (click)=\"changeArrange('funding.announced_on')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                募資公布日期<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                募資公布日期<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.announced_on'\"\n              (click)=\"changeArrange('funding.announced_on')\">\n              募資公布日期 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- raised_amount - 已募資額 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.raised_amount'\"\n              (click)=\"changeArrange('funding.raised_amount')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                已募資額<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                已募資額<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.raised_amount'\"\n              (click)=\"changeArrange('funding.raised_amount')\">\n              已募資額 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- raised_currency_code - 幣別 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.raised_currency_code'\"\n              (click)=\"changeArrange('funding.raised_currency_code')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                幣別<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                幣別<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.raised_currency_code'\"\n              (click)=\"changeArrange('funding.raised_currency_code')\">\n              幣別 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- post_amount - 交易後估值 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.post_amount'\"\n              (click)=\"changeArrange('funding.post_amount')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                交易後估值<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                交易後估值<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.post_amount'\"\n              (click)=\"changeArrange('funding.post_amount')\">\n              交易後估值 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- post_currency_code - 幣別 -->\n            <th class=\"centered-th mx-auto p-2 perc5\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'funding.post_currency_code'\"\n              (click)=\"changeArrange('funding.post_currency_code')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                幣別<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                幣別<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc5\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'funding.post_currency_code'\"\n              (click)=\"changeArrange('funding.post_currency_code')\">\n              幣別 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- sname - 來源網站 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'article.s_name'\"\n              (click)=\"changeArrange('article.s_name')\">\n              <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                來源網站<i class=\"fa fa-sort-asc ml-1\"></i>\n              </span>\n              <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                來源網站<i class=\"fa fa-sort-desc ml-1\"></i>\n              </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'article.s_name'\"\n              (click)=\"changeArrange('article.s_name')\">\n              來源網站 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- article title - 新聞標題 -->\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor === 'article.title'\"   \n                (click)=\"changeArrange('article.title')\">\n            <span *ngIf=\"fundingToSearch.Arrange === 'ASC'\">\n                新聞標題<i class=\"fa fa-sort-asc ml-1\"></i>\n            </span>\n            <span *ngIf=\"fundingToSearch.Arrange === 'DESC'\">\n                新聞標題<i class=\"fa fa-sort-desc ml-1\"></i>\n            </span>\n            </th>\n            <th class=\"centered-th mx-auto p-2 perc10\" scope=\"col\" *ngIf=\"fundingToSearch.ArrangeFor !== 'article.title'\"   \n                (click)=\"changeArrange('article.title')\">   \n                新聞標題 <i class=\"fa fa-unsorted\"></i>\n            </th>\n    \n            <!-- article url - 新聞連結 -->\n            <th class=\"centered-th mx-auto p-2 perc5\" scope=\"col\">新聞連結</th>\n            <!-- action -->\n            <th scope=\"col\" class=\"text-center perc10\">管理</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let list of articleFundingToList\">\n                <td>{{list.id}}</td>\n                <td>{{list.company_name.substr(0, 4)}}</td>\n                <td>{{list.address.substr(0,8)}}</td>\n                <td>{{list.investment_type.substr(0,9)}}</td>\n                <td>{{list.announced_on.substr(0,10)}}</td>\n                <td>{{list.raised_amount}}</td>\n                <td>{{list.raised_currency_code}}</td>\n                <td>{{list.post_amount}}</td>\n                <td>{{list.post_currency_code}}</td>\n                <td>{{list.s_name}}</td>\n                <td>{{list.title.substr(0,5)}}</td>\n                <td class=\"text-center\"><a href={{list.page_url}} target=\"_blank\"><i class=\"fa fa-border fa-link button button6\"></i></a></td>\n                <td class=\"text-center\">\n                    <i tooltip=\"展開\" (click)=\"openModal(template, list.id)\" class=\"fa fa-border fa-external-link button button1\"></i>\n                    <span *ngIf=\"writePermission > 0 || adminPermission > 0\">\n                        <i tooltip=\"編輯\" (click)=\"navigateToEdit(list.id)\" class=\"fa fa-border fa-border fa-edit button button2\"></i>\n                        <i tooltip=\"保留\" (click)=\"openModal(confirmSave, list.id)\" class=\"fa fa-border fa-border fa-save button button3\"></i>\n                        <i tooltip=\"送出\" (click)=\"openModal(confirmSend, list.id)\" class=\"fa fa-border fa-border fa-send button button4\"></i>\n                        <i tooltip=\"刪除\" (click)=\"openModal(confirmDelete, list.id)\" class=\"fa fa-border fa-border fa-remove button button5\"></i>\n                    </span>\n                  </td>\n            </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  \n</div>\n\n\n<div class=\"container\" style=\"margin-top: 25px\">\n    <div class=\"row text-center\">\n      <div class=\"col col-sm-10\">\n        <pagination class=\"justify-content-center\" [boundaryLinks]=\"true\" [totalItems]=\"paging.TotalCount\" [(ngModel)]=\"paging.CurrentPage\" [maxSize]=10\n          (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n          lastText=\"{{paging.TotalPages}} &raquo;\">\n        </pagination>\n      </div>\n      <div class=\"col col-sm-2\">\n        <div class=\"form-group form-inline ml-2\">\n          <input class=\"form-control form-control-sm col-md-4\" type=\"text\" name=\"newpage\" placeholder=\"Go to page\"\n            [(ngModel)]=\"gotopage\">\n          <button class=\"form-control form-control-sm btn btn-outline-primary ml-2\" (click)=\"goToPage()\"> <i\n              class=\"fa fa-search\"></i> 提交</button>\n        </div>\n      </div>\n    </div>\n</div>\n\n<ng-template #confirmSave>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">確認保留</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body text-center\">\n    保留資料，不更新至前台\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" style=\"background-color: #FA6A00; color: white;\" (click)=\"changeStatus(2)\"> 保留 <fa-icon [icon]=\"faUserTimes\" size=\"lg\" style=\"color: white !important; margin-left: 5px; \"></fa-icon></button>\n  </div>\n</ng-template>\n\n<ng-template #confirmSend>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">確認送出</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body text-center\">\n    請再次確認該筆資料是否正確？\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" (click)=\"changeStatus(1)\"><i class=\"fa fa-send\"></i> 確認</button>\n  </div>\n</ng-template>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{selectedArticleFunding.company_name}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <!-- class=\"modal-body\"> -->\n<!-- id -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>編號</strong> : {{selectedArticleFunding.id}}\n    </div>\n<!-- company name -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>公司名稱</strong> : {{selectedArticleFunding.company_name}}\n    </div>\n<!-- address -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>地區</strong> : {{selectedArticleFunding.address}}\n    </div>\n<!-- investment type -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>募資階段</strong> : {{selectedArticleFunding.investment_type}}\n    </div>\n<!-- announced on -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>募資公布日期</strong> : {{selectedArticleFunding.announced_on}}\n    </div>\n<!-- raised amount -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>已募資額</strong> : {{selectedArticleFunding.raised_amount}}\n    </div>\n<!-- raised amount currency -->\n    <div class=\"alert alert-success m-2\" role=\"alert\">\n      <strong>已募資額幣別</strong> : {{selectedArticleFunding.raised_currency_code}}\n    </div>\n<!-- post amount -->\n    <div class=\"alert alert-success m-2\" role=\"alert\">\n      <strong>交易後估值</strong> : {{selectedArticleFunding.post_amount}}\n    </div>\n<!-- post amount currency -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>交易後估值幣別</strong> : {{selectedArticleFunding.post_currency_code}}\n    </div>\n<!-- created -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>資料建立日期</strong> : {{selectedArticleFunding.created}}\n    </div>\n<!-- updated -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>上次資料日期</strong> : {{selectedArticleFunding.updated}}\n    </div>\n<!-- investor names -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>投資者名稱</strong> : {{selectedArticleFunding.investor_names}}\n    </div>\n<!-- investor count -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>投資者數目</strong> : {{selectedArticleFunding.investor_count}}\n    </div>\n<!-- capital sought amount -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>預募資額</strong> : {{selectedArticleFunding.capital_sought_amount}}\n    </div>\n<!-- capital sought amount currency -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>預資額幣別</strong> : {{selectedArticleFunding.capital_sought_currency_code}}\n    </div>\n<!-- s_name -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>來源網站</strong> : {{selectedArticleFunding.s_name}}\n    </div>\n<!-- author -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>作者</strong> : {{selectedArticleFunding.author}}\n    </div>\n<!-- title -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>新聞標題</strong> : {{selectedArticleFunding.title}}\n    </div>\n<!-- URL -->\n    <div class=\"alert alert-dark m-2\" role=\"alert\">\n      <strong>新聞連結</strong> : <button class=\"btn\" (click)=\"goToUrl()\" style=\"cursor:pointer;\" >{{selectedArticleFunding.url}}</button>\n    </div>\n</ng-template>\n\n<ng-template #confirmDelete>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">刪除資料</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body text-center\">\n    請再次確認該筆資料是否刪除？\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" style=\"background-color: #1C7CD5; color: white;\" (click)=\"deleteFunding()\"><i class=\"fa fa-send\"></i> 確認</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/list-funding/list-funding.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-funding/list-funding.component.ts ***!
  \********************************************************/
/*! exports provided: ListFundingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFundingComponent", function() { return ListFundingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _funding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funding.service */ "./src/app/funding.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






alertify.set('notifier', 'position', 'top-center');
var ListFundingComponent = /** @class */ (function () {
    function ListFundingComponent(router, fundingService, jwtHelper, modalService) {
        this.router = router;
        this.fundingService = fundingService;
        this.jwtHelper = jwtHelper;
        this.modalService = modalService;
        // icons
        this.faUserCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserCheck"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBuilding"];
        this.faUserTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserTimes"];
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExclamationCircle"];
        this.faMoneyBillAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMoneyBillAlt"];
        this.faUserEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserEdit"];
        this.status = +localStorage.getItem('status');
        this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fundingToSearch = {
            PageNumber: 1,
            PageSize: 10,
            ToSearch: '',
            ArrangeFor: 'funding.id',
            Arrange: 'ASC',
            InitDate: '',
            EndDate: '',
            DateField: '',
            SName: '',
            Status: +localStorage.getItem('status')
        };
        this.articleFundingToList = [];
        this.gotopage = 1;
        this.paging = {
            CurrentPage: 1,
            PageSize: 10,
            TotalCount: 240,
            TotalPages: 0,
        };
        this.writePermission = 0;
        this.adminPermission = 0;
        this.decodedData = '';
        this.idSelected = '0';
    }
    ListFundingComponent.prototype.ngOnInit = function () {
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
        // if (localStorage.getItem('status')) {
        //   this.status = +localStorage.getItem('status');
        // }
        this.getList(this.status);
    };
    ListFundingComponent.prototype.setSelectedArticleFunding = function () {
        var _this = this;
        this.articleFundingToList.forEach(function (element) {
            if (element.id == _this.idSelected) {
                _this.selectedArticleFunding = element;
            }
        });
    };
    ListFundingComponent.prototype.openModal = function (template, id) {
        this.idSelected = id;
        this.setSelectedArticleFunding();
        this.modalRef = this.modalService.show(template);
    };
    ListFundingComponent.prototype.ngOnChanges = function (changes) {
        this.fundingToSearch.ToSearch = "";
        this.fundingToSearch.InitDate = "";
        this.fundingToSearch.EndDate = "";
        this.fundingToSearch.DateField = "";
        if (this.cityCountry) {
            this.fundingToSearch.ToSearch = this.cityCountry;
        }
        else if (this.sname) {
            this.fundingToSearch.SName = this.sname;
        }
        else if (this.toSearch) {
            this.fundingToSearch.ToSearch = this.toSearch;
        }
        if (this.initDate && this.endDate && this.dateField) {
            this.fundingToSearch.InitDate = this.initDate;
            this.fundingToSearch.EndDate = this.endDate;
            this.fundingToSearch.DateField = this.dateField;
        }
        this.getList(this.status);
    };
    ListFundingComponent.prototype.pageChanged = function (event) {
        if (event.page <= this.paging.TotalCount) {
            this.paging.CurrentPage = event.page;
            this.getList(this.status);
        }
    };
    ListFundingComponent.prototype.goToPage = function () {
        this.paging.CurrentPage = this.gotopage;
        this.getList(this.status);
    };
    ListFundingComponent.prototype.navigateToEdit = function (id) {
        localStorage.setItem('status', '' + this.status);
        this.router.navigate(['/edit/funding', id, 'type', 0]);
    };
    ListFundingComponent.prototype.changeArrange = function (field) {
        this.fundingToSearch.ArrangeFor = field;
        if (this.fundingToSearch.Arrange === 'ASC') {
            this.fundingToSearch.Arrange = 'DESC';
        }
        else {
            this.fundingToSearch.Arrange = 'ASC';
        }
        this.getList(this.status);
    };
    ListFundingComponent.prototype.getList = function (status) {
        var _this = this;
        console.log(status);
        this.fundingToSearch.Status = status;
        this.fundingToSearch.PageSize = this.paging.PageSize;
        this.fundingToSearch.PageNumber = this.paging.CurrentPage;
        this.fundingService.getFundingList(this.fundingToSearch).subscribe(function (funding) {
            _this.articleFundingToList.splice(0, _this.paging.PageSize);
            funding['funding'].forEach(function (fund) { return _this.articleFundingToList.push(fund); });
            _this.paging.CurrentPage = funding['paging']['CurrentPage'];
            _this.paging.TotalCount = funding['paging']['TotalCount'];
            _this.paging.PageSize = funding['paging']['PageSize'];
            _this.paging.TotalPages = funding['paging']['TotalPages'];
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    ListFundingComponent.prototype.deleteFunding = function () {
        var _this = this;
        this.fundingService.deleteFunding(+this.idSelected).subscribe(function (result) {
            if (result['r'] === 0) {
                _this.statusChanged.emit(0);
                _this.getList(_this.fundingToSearch.Status);
                alertify.success('刪除成功');
            }
            else {
                alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
        this.modalRef.hide();
    };
    ListFundingComponent.prototype.changeStatus = function (newStatus) {
        var _this = this;
        this.modalRef.hide();
        this.status = newStatus;
        this.fundingService.changeFundingStatus(+this.idSelected, newStatus).subscribe(function (result) {
            if (result['r'] === 0) {
                _this.statusChanged.emit(newStatus);
                _this.getList(newStatus);
                alertify.success('發送成功');
            }
            else {
                alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    ListFundingComponent.prototype.goToUrl = function () {
        window.open(this.selectedArticleFunding.url, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListFundingComponent.prototype, "cityCountry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListFundingComponent.prototype, "toSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListFundingComponent.prototype, "initDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListFundingComponent.prototype, "endDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListFundingComponent.prototype, "dateField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListFundingComponent.prototype, "sname", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ListFundingComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListFundingComponent.prototype, "statusChanged", void 0);
    ListFundingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-funding',
            template: __webpack_require__(/*! ./list-funding.component.html */ "./src/app/list-funding/list-funding.component.html"),
            styles: [__webpack_require__(/*! ./list-funding.component.css */ "./src/app/list-funding/list-funding.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _funding_service__WEBPACK_IMPORTED_MODULE_2__["FundingService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ListFundingComponent);
    return ListFundingComponent;
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

module.exports = "html,\nbody {\n  height: 10%;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #ffffff;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.wrapper{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  text-align:center;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.spanner{\n  position:absolute;\n  top: 50%;\n  left: 0;\n  background: #2a2a2a;\n  width: 100%;\n  display:block;\n  text-align:center;\n  height: 300px;\n  color: #FFF;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 1000;\n  visibility: hidden;\n}\n\n.overlay{\n  position: fixed;\n\twidth: 100%;\n\theight: 100%;\n  background: rgba(0,0,0,0.5);\n  visibility: hidden;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\" style=\"width: 300px;\">\n  <img src=\"../../assets/logo.jpg\">\n</div>\n\n<div class=\"text-center\">\n<form class=\"form-signin\" (ngSubmit)=\"login()\">\n\n    <h1 class=\"h3 mb-3 font-weight-normal\">請登錄</h1>\n\n      <div class=\"form-group\">\n\n        <label class=\"sr-only\">Email</label>\n        <input class=\"form-control\" placeholder=\"username@domain\" name=\"email\" type=\"text\" [(ngModel)]=\"model.email\" required autofocus>\n\n      </div>\n      <div class=\"form-group\">\n\n        <label class=\"sr-only\">密碼</label>\n        <input class=\"form-control\" name=\"password\" type=\"password\" [(ngModel)]=\"model.password\" required>\n\n      </div>\n      <div class=\"form-group\">\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n      </div>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2019-2020</p>\n  </form>\n</div>\n"

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





alertify.set('notifier', 'position', 'top-center');
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
                _this.router.navigate(['/entry/screen']);
            }
            else {
                alertify.error('Email帳號或密碼錯誤');
            }
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
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






alertify.set('notifier', 'position', 'top-center');
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  \n  <i class=\"navbar-brand\"><img src=\"../../assets/logo2.jpg\"></i>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n\n    <span class=\"nav-item\">\n      <button class=\" btn btn-outline-primary nav-link\" (click)=\"navigateToDashboard()\"><i class=\"fa fa-home\"></i> 首頁\n        <span class=\"sr-only\"></span></button>\n    </span>\n\n    <span class=\"nav-item\" *ngIf=\"adminPermission == 1\">\n      <a class=\" btn btn-outline-primary nav-link ml-2\" [routerLink]=\"membersLink\"><i class=\"fa fa-users\"></i> 會員中心</a>\n    </span>\n\n    <span>\n      <i class=\"fa fa-user-circle-o ml-2\"></i> {{userEmail}}\n    </span>\n\n    <span class=\"nav-item\">\n      <a class=\"btn btn-outline-primary nav-link ml-2\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> 登出</a>\n    </span>\n\n  </div>\n  </nav>"

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
        this.dashboardLink = '/entry/screen';
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

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<head>\n\t<title>Site Maintenance</title>\n\t<style>\n\thtml, body { height: 100%; width: 100%; margin: 0; }\n\tbody { text-align: center; padding: 150px; }\n\th1 { font-size: 50px; }\n\tbody { font: 20px Helvetica, sans-serif; color: #333; }\n\tarticle { text-align: left; width: 650px; margin: 0 auto; height: 100%; vertical-align: middle;}\n\ta { color: #dc8100; text-decoration: none; }\n\ta:hover { color: #333; text-decoration: none; }\n\t</style>\n</head>\n<body>\n\t<article>\n\t\t<h1>Page not found</h1>\n\t\t<div>\n\t\t\t<p>Sorry, the page was not found. If you think it is a bug in the code please report to the system administrator. Sorry for any inconvenience.</p>\n\t\t\t<p>&mdash; The Team</p>\n\t\t\t<button class=\"btn btn-danger ml-2\" (click)=\"goBack()\">返回<i class=\"fa fa-history fa-lg ml-2\"></i></button>\n\t\t</div>\n\t</article>\n</body>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.prototype.goBack = function () {
        window.history.back();
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- *ngIf=\"showMenu\" -->\n  <div class=\"card\">\n    <div class=\"card-body\" style=\"height: 800px;\">\n  <table>\n    <tr><fa-icon [icon]=\"faBuilding\" size=\"lg\" style=\"color:rgba(240,97,97,1) !important; margin-left: 0px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><span style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">公司資料審查</span></tr>\n    <tr *ngIf=\"companyStatus === 1\" style=\"background-color: whitesmoke;\"><i class=\"fa fa-edit fa-lg\" style=\"color: #f0AD4E !important; margin-left: 20px; margin-top: 10px; margin-bottom: 10px;\"></i><button class=\"btn\" (click)=\"goToCompanyList(1)\" style=\"color:rgba(55, 58, 60, 0.816); margin-left: 10px;\">待審資料({{companyCount.scrapped}})</button></tr>\n    <tr *ngIf=\"companyStatus !== 1\"><i class=\"fa fa-edit fa-lg\" style=\"color: #f0AD4E !important; margin-left: 20px; margin-top: 10px; margin-bottom: 10px;\"></i><button class=\"btn\" (click)=goToCompanyList(1) style=\"color:rgba(55, 58, 60, 0.816); margin-left: 10px;\">待審資料({{companyCount.scrapped}})</button></tr>\n    <tr><strong><span style=\"color: rgba(55, 58, 60, 0.816); margin-left: 65px;\">已審資料({{+companyCount.ready + +companyCount.keep}})</span></strong></tr>\n    <tr *ngIf=\"companyStatus === 2\" style=\"background-color: whitesmoke;\"><fa-icon [icon]=\"faUserCheck\" size=\"lg\" style=\"color: #5cb85c !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToCompanyList(2)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">已更新至前台({{companyCount.ready}})</button></strong></tr>\n    <tr *ngIf=\"companyStatus !== 2\"><fa-icon [icon]=\"faUserCheck\" size=\"lg\" style=\"color: #5cb85c !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToCompanyList(2)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">已更新至前台({{companyCount.ready}})</button></strong></tr>\n    <tr *ngIf=\"companyStatus === 3\" style=\"background-color: whitesmoke;\"><fa-icon [icon]=\"faUserTimes\" size=\"lg\" style=\"color: #fa6a00 !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToCompanyList(3)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">不更新至前台({{companyCount.keep}})</button></strong></tr>\n    <tr *ngIf=\"companyStatus !== 3\"><fa-icon [icon]=\"faUserTimes\" size=\"lg\" style=\"color: #fa6a00 !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToCompanyList(3)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">不更新至前台({{companyCount.keep}})</button></strong></tr>\n    <tr *ngIf=\"companyStatus === 4\" style=\"background-color: whitesmoke;\"><fa-icon [icon]=\"faExclamationCircle\" size=\"lg\" style=\"color: #b266f2 !important; margin-left: 18px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToCompanyList(4)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 1px;\">未成功比對資料({{companyCount.notscrapped}})</button></strong></tr>\n    <tr *ngIf=\"companyStatus !== 4\"><fa-icon [icon]=\"faExclamationCircle\" size=\"lg\" style=\"color: #b266f2 !important; margin-left: 18px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToCompanyList(4)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 1px;\">未成功比對資料({{companyCount.notscrapped}})</button></strong></tr>\n    <tr><span style=\"margin-left: 10px;\"><hr /></span></tr>\n    <tr><fa-icon [icon]=\"faMoneyBillAlt\" size=\"lg\" style=\"color: #5cb85c !important; margin-left: 0px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><span style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">募資資料審查</span></strong></tr>\n    <tr *ngIf=\"status === 0\" style=\"background-color: whitesmoke;\"><i class=\"fa fa-edit fa-lg\" style=\"color: #f0ad4e !important; margin-left: 20px; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=goToFilterFunding(0) style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">待審資料({{countMenu['notProcessed']}})</button></strong></tr>\n    <tr *ngIf=\"status !== 0\"><i class=\"fa fa-edit fa-lg\" style=\"color: #f0ad4e !important; margin-left: 20px; margin-top: 10px; margin-bottom: 10px;\"></i><strong><button class=\"btn\" (click)=goToFilterFunding(0) style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">待審資料({{countMenu['notProcessed']}})</button></strong></tr>\n    <tr><strong><span style=\"color: rgba(55, 58, 60, 0.816); margin-left: 65px;\">已審資料({{countMenu['edited'] + countMenu['toKeep']}})</span></strong></tr>\n    <tr *ngIf=\"status === 1\" style=\"background-color: whitesmoke;\"><fa-icon [icon]=\"faUserCheck\" size=\"lg\" style=\"color: #5cb85c !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToFilterFunding(1)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">已更新至前台({{countMenu['edited']}})</button></strong></tr>\n    <tr *ngIf=\"status !== 1\"><fa-icon [icon]=\"faUserCheck\" size=\"lg\" style=\"color: #5cb85c !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToFilterFunding(1)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">已更新至前台({{countMenu['edited']}})</button></strong></tr>\n    <tr *ngIf=\"status === 2\" style=\"background-color: whitesmoke;\"><fa-icon [icon]=\"faUserTimes\" size=\"lg\" style=\"color: #fa6a00 !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToFilterFunding(2)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">不更新至前台({{countMenu['toKeep']}})</button></strong></tr>\n    <tr *ngIf=\"status !== 2\"><fa-icon [icon]=\"faUserTimes\" size=\"lg\" style=\"color: #fa6a00 !important; margin-left: 16px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToFilterFunding(2)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 10px;\">不更新至前台({{countMenu['toKeep']}})</button></strong></tr>\n    <tr *ngIf=\"status === 3\" style=\"background-color: whitesmoke;\"><fa-icon [icon]=\"faExclamationCircle\" size=\"lg\" style=\"color: #b266f2 !important; margin-left: 18px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToFilterFunding(3)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 1px;\">未成功比對資料({{countMenu['notFound']}})</button></strong></tr>\n    <tr *ngIf=\"status !== 3\"><fa-icon [icon]=\"faExclamationCircle\" size=\"lg\" style=\"color: #b266f2 !important; margin-left: 18px; margin-top: 10px; margin-bottom: 10px;\"></fa-icon><strong><button class=\"btn\" (click)=\"goToFilterFunding(3)\" style=\"color: rgba(55, 58, 60, 0.816); margin-left: 1px;\">未成功比對資料({{countMenu['notFound']}})</button></strong></tr>\n  </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _funding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funding.service */ "./src/app/funding.service.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





alertify.set('notifier', 'position', 'top-center');
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, fundingService, companyService) {
        this.router = router;
        this.fundingService = fundingService;
        this.companyService = companyService;
        this.needRefresh = 0;
        this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.status = -1;
        this.companyStatus = -1;
        // icons
        this.faUserCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserCheck"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBuilding"];
        this.faUserTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserTimes"];
        this.faExclamationCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamationCircle"];
        this.faMoneyBillAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMoneyBillAlt"];
        this.faUserEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserEdit"];
        this.companyCount = {
            scrapped: 0,
            ready: 0,
            keep: 0,
            notscrapped: 0
        };
        this.countMenu = {
            notProcessed: 0,
            edited: 0,
            toKeep: 0,
            ready: 0,
            unknown: 0,
            notFound: 0
        };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('status')) {
            this.status = +localStorage.getItem('status');
        }
        if (localStorage.getItem('companyListStatus')) {
            this.companyStatus = +localStorage.getItem('companyListStatus');
        }
        this.getCountFunding();
        this.getCountCompany();
    };
    SidebarComponent.prototype.goToPageNotFound = function () {
        this.router.navigate(['/page/not/found']);
    };
    SidebarComponent.prototype.ngOnChanges = function (changes) {
        this.status = this.needRefresh;
        this.getCountFunding();
        this.getCountCompany();
    };
    SidebarComponent.prototype.goToCompanyList = function (companyStatus) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        else {
            this.status = -1;
            this.companyStatus = companyStatus;
            localStorage.setItem('companyListStatus', companyStatus);
            this.statusChanged.emit(companyStatus);
            this.router.navigate(['/dashboard']);
        }
    };
    SidebarComponent.prototype.getCountCompany = function () {
        var _this = this;
        this.companyService.countCompany().subscribe(function (count) {
            _this.companyCount.scrapped = count.scrapped;
            _this.companyCount.keep = count.keep;
            _this.companyCount.ready = count.ready;
            _this.companyCount.notscrapped = count.notScrapped;
        }, function (error) {
            alertify.error('網路或伺服器連接失敗, 請重新整理網頁');
        });
    };
    SidebarComponent.prototype.goToFilterFunding = function (status) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }
        else {
            this.companyStatus = -1;
            this.status = status;
            this.statusChanged.emit(status);
            this.router.navigate(['/filter/funding']);
        }
    };
    SidebarComponent.prototype.getCountFunding = function () {
        var _this = this;
        this.fundingService.countFunding()
            .subscribe(function (count) {
            _this.countMenu = count;
        }, function (error) {
            alertify.error('Error: Network');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "needRefresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "statusChanged", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _funding_service__WEBPACK_IMPORTED_MODULE_2__["FundingService"],
            _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]])
    ], SidebarComponent);
    return SidebarComponent;
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