(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firebase = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

var name = "firebase";
var version = "7.24.0";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase__default['default'].registerVersion(name, version, 'app');

module.exports = firebase__default['default'];
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon style=\"font-size: 30px;\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <label class=\"btn\" for=\"modal-2\">\n            <img src=\"../../assets/img/Illustration 5-05.png\" alt=\"\">\n          </label>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Nom</mat-label>\n            <input matInput type=\"text\" name=\"nom\" #nom=\"ngModel\" required [(ngModel)]=\"user.nom\"\n              placeholder=\"Entrer votre nom\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Prénoms</mat-label>\n            <input matInput type=\"text\" name=\"prenom\" #prenom=\"ngModel\" required [(ngModel)]=\"user.prenom\"\n              placeholder=\"Entrer votre prénom\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Email</mat-label>\n            <input matInput type=\"email\" name=\"email\" #email=\"ngModel\" required [(ngModel)]=\"user.email\"\n              placeholder=\"Entrer votre email\">\n          </mat-form-field>\n          <span>\n            <mat-form-field class=\"code\">\n         \n              <mat-select [(ngModel)]=\"selected\" name=\"code\" required>\n                <mat-option *ngFor=\"let c of codes\" [value]=\"c.dial_code\">\n                  {{c.dial_code}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width phone\">\n              <mat-label>Téléphone</mat-label>\n              <input matInput type=\"tel\" name=\"phone\" #phone=\"ngModel\" required [(ngModel)]=\"telephone\"\n                placeholder=\"Entrer votre numero\">\n            </mat-form-field>\n          </span>\n\n        </form>\n\n      </ion-col>\n      <ion-col size=\"12\">\n        <div style=\"margin-left: 16px;margin-bottom: 2px;\" id=\"recaptcha-container\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n  <input class=\"modal-state\" id=\"modal-2\" type=\"checkbox\" />\n  <div class=\"modal\">\n    <label class=\"modal__bg\" for=\"modal-2\"></label>\n    <div class=\"modal__inner\">\n      <label class=\"modal__close\" for=\"modal-2\"></label>\n      <!--button class=\"warn-btn\" mat-raised-button color=\"warn\">Valider</button-->\n\n      <h2 style=\"font-size: 20px;\n      font-weight: 200;\">Choisir un avatar</h2>\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n        <mat-grid-tile>\n                <button (click)=\"choseAvatr('http://localhost:5000/1.png')\" mat-raised-button>\n                  <img src=\"http://localhost:5000/1.png\" alt=\"\" />\n                  </button>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/2.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/2.png\" alt=\"\" />\n          \n            </button>\n     \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/3.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/3.png\" alt=\"\" />\n          \n              </button>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/4.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/4.png\" alt=\"\" />\n          \n              </button>\n   \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/5.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/5.png\" alt=\"\" />\n          \n              </button>\n \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/6.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/6.png\" alt=\"\" />\n          \n              </button>\n    \n        </mat-grid-tile>\n      </mat-grid-list>\n\n  \n      <div>\n          <button class=\"mat-raised-btn\" mat-raised-button>Choisir dans la galérie</button>\n          <button class=\"mat-raised-btn\" mat-raised-button>Prendre une photo</button>\n      </div>\n\n  \n\n    </div>\n  </div>\n\n\n</ion-content>\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <button style=\"float: right;\" [disabled]=\"nom.errors?.required \n        || prenom.errors?.required \n        || email.errors?.required\n        || phone.errors?.required\n        || selected == ''\" (click)=\"signIn()\" mat-button>Suivant</button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 88%;\n  border-radius: 12px;\n}\n\nmat-form-field {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.code {\n  width: 25%;\n  float: left;\n  margin-left: 34px;\n}\n\n.phone {\n  width: 52%;\n  float: right;\n  margin-right: 32px;\n}\n\nbutton {\n  font-size: large;\n  color: #ea4e50;\n}\n\n/* [Object] Modal\n * =============================== */\n\n.modal {\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: left;\n  background: rgba(0, 0, 0, 0.9);\n  transition: opacity 0.25s ease;\n}\n\n.modal__bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n}\n\n.modal-state {\n  display: none;\n}\n\n.modal-state:checked + .modal {\n  visibility: visible;\n  opacity: 1;\n  height: 90%;\n}\n\n.modal-state:checked + .modal .modal__inner {\n  top: 0;\n}\n\n.modal__inner {\n  transition: top 0.25s ease;\n  position: absolute;\n  top: -20%;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 50%;\n  margin: auto;\n  overflow: auto;\n  background: #fff;\n  border-radius: 27px;\n  padding: 1em 2em;\n  height: 50%;\n}\n\n.modal__close {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  width: 1.1em;\n  height: 1.1em;\n  cursor: pointer;\n}\n\n.modal__close:after,\n.modal__close:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 1.5em;\n  background: #ccc;\n  display: block;\n  transform: rotate(45deg);\n  left: 50%;\n  margin: -3px 0 0 -1px;\n  top: 0;\n}\n\n.modal__close:hover:after,\n.modal__close:hover:before {\n  background: #aaa;\n}\n\n.modal__close:before {\n  transform: rotate(-45deg);\n}\n\n@media screen and (max-width: 768px) {\n  .modal__inner {\n    width: 90%;\n    height: 90%;\n    box-sizing: border-box;\n  }\n}\n\n/* Other\n * =============================== */\n\n.btn {\n  cursor: pointer;\n  background: #aaa;\n  padding: 0.5em 1em;\n  color: #fff;\n  border-radius: 34px;\n  width: 66%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn:hover,\n.btn:focus {\n  background: #aaa;\n}\n\n.btn:active {\n  background: #27ae60;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;\n}\n\n.btn--blue:hover,\n.btn--blue:focus {\n  background: #aaa;\n}\n\n.btn--blue:active {\n  background: #27ae60;\n}\n\n.warn-btn {\n  float: right;\n  margin-bottom: 48px;\n  margin-top: 26px;\n}\n\n.mat-raised-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcYmFkZXJcXERyb3Bib3hcXE15IFBDIChMQVBUT1AtSUFSVUQ4RUopXFxEb3dubG9hZHNcXHRlZXB6eVxcdGVlcHp5bW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FETUE7b0NBQUE7O0FBRUM7RUFDRyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FO0VBQ0UsYUFBQTtBQ0hKOztBRE1FO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE9FO0VBQ0UsTUFBQTtBQ0pKOztBRE9FO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSko7O0FET0U7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLE1BQUE7QUNKSjs7QURPRTs7RUFFRSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UseUJBQUE7QUNKSjs7QURPRTtFQUVFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQ0xKO0FBQ0Y7O0FEU0U7b0NBQUE7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRGFFOztFQUVFLGdCQUFBO0FDVko7O0FEYUU7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0FDVko7O0FEY0U7O0VBRUUsZ0JBQUE7QUNYSjs7QURjRTtFQUNFLG1CQUFBO0FDWEo7O0FEY0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1hKOztBRGNJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4OCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY29kZXtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xufVxuXG4ucGhvbmV7XG4gICAgd2lkdGg6IDUyJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG59XG5cbmJ1dHRvbntcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG5cbi8vIG1vZGFsXG5cbi8qIFtPYmplY3RdIE1vZGFsXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gLm1vZGFsIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjkpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlO1xuICB9XG4gIFxuICAubW9kYWxfX2JnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLm1vZGFsLXN0YXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAubW9kYWwtc3RhdGU6Y2hlY2tlZCArIC5tb2RhbCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogOTAlO1xuXG4gIH1cbiAgXG4gIC5tb2RhbC1zdGF0ZTpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgLm1vZGFsX19pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdG9wIC4yNXMgZWFzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIFxuICAubW9kYWxfX2Nsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB0b3A6IDFlbTtcbiAgICB3aWR0aDogMS4xZW07XG4gICAgaGVpZ2h0OiAxLjFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5tb2RhbF9fY2xvc2U6YWZ0ZXIsXG4gIC5tb2RhbF9fY2xvc2U6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW46IC0zcHggMCAwIC0xcHg7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICAubW9kYWxfX2Nsb3NlOmhvdmVyOmFmdGVyLFxuICAubW9kYWxfX2Nsb3NlOmhvdmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2FhYTtcbiAgfVxuICBcbiAgLm1vZGFsX19jbG9zZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBcbiAgICAubW9kYWxfX2lubmVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgLyogT3RoZXJcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIFxuICAuYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2FhYTtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICAgIHdpZHRoOiA2NiU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gIH1cbiAgXG4gIC5idG46aG92ZXIsXG4gIC5idG46Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICNhYWE7XG4gIH1cbiAgXG4gIC5idG46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLCAuMikgaW5zZXQ7XG4gIH1cbiAgXG4gIFxuICAuYnRuLS1ibHVlOmhvdmVyLFxuICAuYnRuLS1ibHVlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICB9XG4gIFxuICAuYnRuLS1ibHVlOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcbiAgfVxuXG4gIC53YXJuLWJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICB9XG5cbiAgICAubWF0LXJhaXNlZC1idG57XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICB9XG4gIFxuIiwiaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4OCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb2RlIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzNHB4O1xufVxuXG4ucGhvbmUge1xuICB3aWR0aDogNTIlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6ICNlYTRlNTA7XG59XG5cbi8qIFtPYmplY3RdIE1vZGFsXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubW9kYWwge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZTtcbn1cblxuLm1vZGFsX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1zdGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbC1zdGF0ZTpjaGVja2VkICsgLm1vZGFsIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5tb2RhbC1zdGF0ZTpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICB0b3A6IDA7XG59XG5cbi5tb2RhbF9faW5uZXIge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4yNXMgZWFzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMCU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIGhlaWdodDogNTAlO1xufVxuXG4ubW9kYWxfX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICB0b3A6IDFlbTtcbiAgd2lkdGg6IDEuMWVtO1xuICBoZWlnaHQ6IDEuMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbF9fY2xvc2U6YWZ0ZXIsXG4ubW9kYWxfX2Nsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0zcHggMCAwIC0xcHg7XG4gIHRvcDogMDtcbn1cblxuLm1vZGFsX19jbG9zZTpob3ZlcjphZnRlcixcbi5tb2RhbF9fY2xvc2U6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cblxuLm1vZGFsX19jbG9zZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWxfX2lubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbi8qIE90aGVyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB3aWR0aDogNjYlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyN2FlNjA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMikgaW5zZXQ7XG59XG5cbi5idG4tLWJsdWU6aG92ZXIsXG4uYnRuLS1ibHVlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cblxuLmJ0bi0tYmx1ZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xufVxuXG4ud2Fybi1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbi5tYXQtcmFpc2VkLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/window.service */ "./src/app/providers/window.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");








let SignupPage = class SignupPage {
    constructor(authService, router, toastController, win, alertCtrl, statusBar, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.win = win;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.user = {
            email: '',
            phone: '',
            nom: '',
            prenom: '',
            photo: ''
        };
        this.typeProfile = '';
        this.loading = false;
        this.telephone = '';
        this.codes = [];
        this.isLoading = false;
        this.selected = '+229';
        this.captcha = false;
    }
    ngOnInit() {
        this.windowRef = this.win.windowRef;
        //console.log(this.win.windowRef)
        this.windowRef.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].RecaptchaVerifier('recaptcha-container');
        this.windowRef.recaptchaVerifier.render();
    }
    listCountriesCodes() {
        this.authService.listCodes().subscribe(res => {
            this.codes = res;
        });
    }
    signIn() {
        const appVerifier = this.windowRef.recaptchaVerifier;
        const phoneNumberString = this.selected + this.telephone;
        this.user.phone = this.selected + this.telephone;
        console.log(phoneNumberString);
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithPhoneNumber(phoneNumberString, appVerifier)
            .then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.windowRef.confirmationResult = result;
            console.log(this.windowRef.confirmationResult);
            let alert = yield this.alertCtrl.create({
                //  title: 'Enter the Confirmation code',
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation de Code' }],
                buttons: [
                    {
                        text: 'Annuler',
                        handler: data => { console.log('Cancel clicked'); }
                    },
                    {
                        text: 'Envoyer',
                        handler: data => {
                            this.verificationCode = data.confirmationCode;
                            this.verifyCode();
                        }
                    }
                ]
            });
            yield alert.present();
        }))
            .catch(error => console.log(error));
    }
    choseAvatr(url) {
        console.log(url);
        this.user.photo = url;
        this.presentToast("Avatar choisi ");
    }
    verifyCode() {
        this.presentLoading();
        this.windowRef.confirmationResult
            .confirm(this.verificationCode)
            .then(result => {
            this.presentToast('1ere étape passée ! ');
            this.router.navigate(['/signup-final'], {
                replaceUrl: true,
                queryParams: this.user,
            });
            // this.obj.user = result.user;
        })
            .catch(error => {
            console.log(error, "Incorrect code entered?");
            this.presentToast("Incorrect code ");
        });
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
    modal() {
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismissLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _providers_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map