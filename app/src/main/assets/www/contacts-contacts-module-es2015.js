(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contact</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <mat-tab-group>\n          <mat-tab label=\"TeepZr (20)\">\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Rechercher</mat-label>\n                <input [(ngModel)]=\"contact\" name=\"contact\" placeholder=\"Taper pour filtrer\" matInput>\n              </mat-form-field>\n            </form>\n\n            <mat-paginator [length]=\"listTeepzrsToInvite?.length\" [pageSize]=\"pageSizeT\"\n              (page)=\"pageEvent = getPaginatorDataTeepzr($event)\">\n            </mat-paginator>\n            <ion-spinner *ngIf=\"loading && listTeepzrsToInvite.length ==  0 \" color=\"primary\" name=\"dots\"></ion-spinner>\n\n            <ion-item *ngFor=\"let c of listTeepzrsToInvite |filter:contact | slice: lowValueT : highValueT  ;trackBy: trackByFn \">\n              <img alt=\"\" src=\"../../assets/img/man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg\">\n              <ion-label> {{ c?.prenom }} <b> {{c?.nom}} </b>\n                <p>\n                  {{ c?.phone }}\n                </p>\n              </ion-label>\n              <ion-button *ngIf=\"!loading && c?.invited == false\" (click)=\"sendInvitationToJoinCircle(c?._id)\" size=\"small\">\n                <span >\n                    Inviter\n                </span>\n                <ion-spinner *ngIf=\"loading\" color=\"primary\" name=\"dots\"></ion-spinner>\n\n              </ion-button>\n\n              <button *ngIf=\"!loading  && c?.invited\" mat-stroked-button>Invité</button>\n\n\n            </ion-item>\n          </mat-tab>\n\n          <mat-tab [label]=\" 'Inviter  (' + listContacts.length + ')'\">\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Rechercher</mat-label>\n                <input [(ngModel)]=\"term\" name=\"term\" placeholder=\"Taper pour filtrer\" matInput>\n              </mat-form-field>\n\n            </form>\n\n\n            <ion-list>\n              <mat-paginator [length]=\"listContacts?.length\" [pageSize]=\"pageSize\"\n                (page)=\"pageEvent = getPaginatorData($event)\">\n              </mat-paginator>\n              <ion-spinner *ngIf=\"loading && listContacts.length ==  0 \" color=\"primary\" name=\"dots\"></ion-spinner>\n\n              <ion-item *ngFor=\"let c of listContacts|filter:term | slice: lowValue : highValue ;trackBy: trackByFn \">\n\n\n                <div class=\"round-bg\">\n                  {{c?.familyName | slice:0:1}}\n                </div>\n                <ion-label> {{ c?.givenName }} <b> {{c?.familyName}} </b>\n                  <p>\n                    {{ c?.phone }}\n                  </p>\n                </ion-label>\n                <div *ngIf=\"c?.invited  == false\" (click)=\"sendSms(c?.phone)\" class=\"example-button-container\">\n                  <button mat-mini-fab disabled color=\"warn\" aria-label=\"Example icon button with a home icon\">\n                    <span style=\"    margin-left: 6px;\n                        margin-bottom: 14px;\" class=\"material-icons\">\n                      send\n                    </span>\n                  </button>\n                </div>\n                <div *ngIf=\"c?.invited\" class=\"example-button-container\">\n                  <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n                    <span class=\"material-icons\">\n                      check\n                    </span>\n\n                  </button>\n                </div>\n\n              </ion-item>\n\n            </ion-list>\n\n            <!--ion-list>\n              <ion-item-sliding *ngFor=\"let c of listContacts\">\n                <ion-item>\n                    <img alt=\"\"\n                    src=\"../../assets/img/Illustration 5-05.png\">\n\n                  <ion-label> {{ c?.givenName }} <b> {{c?.familyName}} </b>\n                    <p>\n                      {{ c?.phone }}\n                    </p>\n                  </ion-label>\n                  <div id=\"arrowAnim\">\n                \n                    <div class=\"arrowSliding delay1\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                    <div class=\"arrowSliding delay2\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                \n                  </div>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                  <ion-item-option *ngIf=\"c?.invited == false\"  (click)=\"sendSms(c?.phone)\" color=\"primary\">\n                      <ion-icon name=\"send-outline\" slot=\"icon-only\"></ion-icon>\n                  </ion-item-option>\n                  <ion-item-option *ngIf=\"c?.invited\" color=\"primary\">\n                    <ion-icon  name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list-->\n\n            <!--ion-list>\n              <ion-item-sliding (ionDrag)=\"drag()\" *ngFor=\"let c of myContacts\">\n                <ion-item>\n                    <img alt=\"\"\n                    src=\"../../assets/img/man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg\">\n\n                  <ion-label> {{ c?.name.givenName }} <b> {{c?.name.familyName}} </b>\n                    <p>\n                      {{ c?.phoneNumbers[0].value }}\n                    </p>\n                  </ion-label>\n                  <div id=\"arrowAnim\">\n                \n                    <div class=\"arrowSliding delay1\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                    <div class=\"arrowSliding delay2\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                    <div class=\"arrowSliding delay3\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                  </div>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                  <ion-item-option (click)=\"sendSms(c)\" color=\"primary\">\n                      <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list-->\n\n\n            <ion-row>\n              <ion-col>\n\n              </ion-col>\n              <!--ion-col>\n                <ion-button routerLink=\"/outcircle\" size=\"small\" shape=\"round\">Valider</ion-button>\n\n              </ion-col-->\n              <ion-col>\n\n              </ion-col>\n            </ion-row>\n\n          </mat-tab>\n        </mat-tab-group>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/contacts/contacts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function() { return ContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");









let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_8__["ContactsPage"]]
    })
], ContactsPageModule);



/***/ }),

/***/ "./src/app/contacts/contacts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  color: #ea4e50;\n}\n\nimg {\n  width: 16%;\n  margin-right: 11px;\n  border-radius: 26px;\n  height: 78%;\n  margin-top: -1px;\n}\n\nion-content {\n  color: #ea4e50 !important;\n}\n\nion-spinner {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nmat-list-item {\n  margin-top: 21px;\n  color: #ea4e50;\n}\n\nmat-divider {\n  margin-top: 25px;\n}\n\n.example-button-container {\n  float: right;\n}\n\nion-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-label, b {\n  color: #ea4e50;\n}\n\n.example-full-width {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 95%;\n}\n\n.example-form {\n  margin-top: 16px;\n}\n\n.round-bg {\n  background: #ea4e50;\n  padding: 17px;\n  border-radius: 25px;\n  width: 46px;\n  margin-right: 29px;\n  color: white;\n  height: 49px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvQzpcXFVzZXJzXFxiYWRlclxcRHJvcGJveFxcTXkgUEMgKExBUFRPUC1JQVJVRDhFSilcXERvd25sb2Fkc1xcdGVlcHp5XFx0ZWVwenltb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDE2JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICBoZWlnaHQ6IDc4JTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgY29sb3I6ICNlYTRlNTAgIWltcG9ydGFudDtcblxufVxuXG5pb24tc3Bpbm5lcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5tYXQtbGlzdC1pdGVte1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgY29sb3I6ICNlYTRlNTA7XG5cbn1cblxubWF0LWRpdmlkZXJ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lcntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaW9uLWxhYmVsLCBie1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xufVxuLmV4YW1wbGUtZnVsbC13aWR0aHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5leGFtcGxlLWZvcm17XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yb3VuZC1iZ3tcbiAgYmFja2dyb3VuZDogI2VhNGU1MDtcbiAgcGFkZGluZzogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ5cHg7XG59IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNlYTRlNTA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxNiU7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgaGVpZ2h0OiA3OCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgY29sb3I6ICNlYTRlNTAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWxhYmVsLCBiIHtcbiAgY29sb3I6ICNlYTRlNTA7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yb3VuZC1iZyB7XG4gIGJhY2tncm91bmQ6ICNlYTRlNTA7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0OXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contacts/contacts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/contacts.page.ts ***!
  \*******************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _providers_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/contact.service */ "./src/app/providers/contact.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let ContactsPage = class ContactsPage {
    constructor(contacts, sms, toastController, contactService) {
        this.contacts = contacts;
        this.sms = sms;
        this.toastController = toastController;
        this.contactService = contactService;
        this.myContacts = [];
        this.listTeepzrsToInvite = [];
        this.listContacts = [];
        this.listTeepZrs = [];
        this.contactsTest = [
            {
                givenName: 'Chris',
                familyName: 'Hounsounou',
                phone: '+22998090908',
                invited: false
            },
            {
                givenName: 'Elvire',
                familyName: 'Anato',
                phone: '+229 98098867',
                invited: false
            },
            {
                givenName: 'Deborah',
                familyName: 'Houeha',
                phone: '+229 90980000',
                invited: true
            },
            {
                givenName: 'Claudia',
                familyName: 'Houeha',
                phone: '+229 66889545',
                invited: false
            }
        ];
        this.isDragged = true;
        this.loading = false;
        this.userId = '';
        this.term = '';
        this.contactsTests = [];
        this.pageIndex = 0;
        this.pageSize = 5;
        this.lowValue = 0;
        this.highValue = 5;
        this.pageIndexT = 0;
        this.pageSizeT = 5;
        this.lowValueT = 0;
        this.highValueT = 5;
    }
    ngOnInit() {
        this.userId = localStorage.getItem('teepzyUserId');
        //  this.contactsTests = this.listSorter(this.contactsTest) 
        // this.loadContacts()
        this.getTeepzr();
    }
    trackByFn(index, item) {
        return index; // or item.id
    }
    getPaginatorData(event) {
        console.log(event);
        if (event.pageIndex === this.pageIndex + 1) {
            this.lowValue = this.lowValue + this.pageSize;
            this.highValue = this.highValue + this.pageSize;
        }
        else if (event.pageIndex === this.pageIndex - 1) {
            this.lowValue = this.lowValue - this.pageSize;
            this.highValue = this.highValue - this.pageSize;
        }
        this.pageIndex = event.pageIndex;
    }
    getPaginatorDataTeepzr(event) {
        console.log(event);
        if (event.pageIndex === this.pageIndexT + 1) {
            this.lowValueT = this.lowValueT + this.pageSizeT;
            this.highValueT = this.highValueT + this.pageSizeT;
        }
        else if (event.pageIndex === this.pageIndex - 1) {
            this.lowValueT = this.lowValueT - this.pageSizeT;
            this.highValueT = this.highValueT - this.pageSizeT;
        }
        this.pageIndexT = event.pageIndex;
    }
    loadContacts() {
        this.loading = true;
        let options = {
            filter: '',
            multiple: true,
            hasPhoneNumber: true
        };
        this.contacts.find(['*'], options).then((contacts) => {
            this.myContacts = this.listSorter(contacts);
            for (const mC of this.myContacts) {
                let inviteViaSms = {
                    phone: mC.phoneNumbers[0].value,
                };
                this.contactService.checkInviteViaSms(inviteViaSms).subscribe(res => {
                    console.log(res);
                    if (res['status'] == 201) {
                        this.listContacts.push({
                            givenName: mC.name.givenName,
                            familyName: mC.name.familyName,
                            phone: mC.phoneNumbers[0].value,
                            invited: true
                        });
                    }
                    else {
                        this.listContacts.push({
                            givenName: mC.name.givenName,
                            familyName: mC.name.familyName,
                            phone: mC.phoneNumbers[0].value,
                            invited: false
                        });
                    }
                    this.loading = false;
                }, error => {
                    alert(JSON.stringify(error));
                    this.loading = false;
                });
            }
        });
    }
    getTeepzr() {
        let list = [];
        this.loading = true;
        this.contactService.teepZrs(this.userId).subscribe(res => {
            console.log(res);
            this.listTeepZrs = res['data'];
            this.contactsTest.forEach(um => {
                this.listTeepZrs.filter((x, index) => { x['phone'] == um.phone ? list.push(x) : null; });
            });
            this.loading = false;
            this.listTeepZrs = list;
            console.log(list);
            this.listTeepZrs.forEach(e => {
                let invitation = { idSender: this.userId, idReceiver: e['_id'] };
                this.contactService.checkInvitationTeepzr(invitation).subscribe(res => {
                    console.log(res);
                    if (res['status'] == 201) {
                        this.listTeepzrsToInvite.push({ _id: e['_id'], nom: e['nom'], prenom: e['prenom'], phone: e['phone'], invited: true });
                    }
                    else {
                        this.listTeepzrsToInvite.push({ _id: e['_id'], nom: e['nom'], prenom: e['prenom'], phone: e['phone'], invited: false });
                    }
                });
            });
            console.log(this.listTeepZrs);
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
    sendSms(contact) {
        this.sms.send(contact, "This is my predefined to you").then((res) => {
            if (res) {
                this.sendInvitationSmsToServer(contact);
            }
        }, error => {
            console.log(error);
            alert(JSON.stringify(error));
        });
    }
    sendInvitationSmsToServer(phone) {
        let inviteViaSms = {
            senderId: this.userId,
            phone: phone
        };
        this.contactService.inviteViaSms(inviteViaSms).subscribe(res => {
            console.log(res);
            this.presentToast('Invitation envoyée');
            this.listContacts.find((c, index) => c['phone'] == phone ? c['invited'] = true : null);
        }, error => {
            this.presentToast('Invitation non envoyée');
            alert(JSON.stringify(error));
        });
    }
    sendInvitationToJoinCircle(idReceiver) {
        console.log(idReceiver);
        this.loading = true;
        let invitation = {
            idSender: this.userId,
            idReceiver: idReceiver
        };
        this.contactService.inviteToJoinCircle(invitation).subscribe(res => {
            console.log(res);
            this.listTeepzrsToInvite.find((c, index) => c['_id'] == idReceiver ? c['invited'] = true : null);
            this.presentToast('Invitation envoyée');
            console.log(this.listTeepzrsToInvite);
            //  this.getTeepzr()
            this.loading = false;
        }, error => {
            this.presentToast('Invitation non envoyée');
            this.loading = false;
            alert(JSON.stringify(error));
        });
    }
    listSorter(array) {
        array.sort((a, b) => a.name.familyName.localeCompare(b.name.familyName, 'fr', { sensitivity: 'base' }));
        return array;
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000
            });
            toast.present();
        });
    }
};
ContactsPage.ctorParameters = () => [
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_3__["SMS"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _providers_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] }
];
ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.page.scss */ "./src/app/contacts/contacts.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_3__["SMS"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _providers_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])
], ContactsPage);



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module-es2015.js.map