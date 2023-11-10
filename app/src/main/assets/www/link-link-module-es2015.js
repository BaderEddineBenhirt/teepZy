(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["link-link-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/link/link.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link/link.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n\n        <ion-row>\n            <ion-col>\n                <img class=\"illustration\" src=\"../../assets/img/notepad.png\" alt=\"\">\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style=\"margin-top: 51px;\" size=\"12\">\n                <h3>\n                    Découvrez les teepZr  parmi  vos contacts\n                </h3>\n            </ion-col>\n            <ion-col size=\"2\">\n\n            </ion-col>\n            <ion-col size=\"8\">\n                <ion-button style=\"margin-top: 71px;\" routerLink=\"/contacts\" expand=\"block\" shape=\"round\">Valider</ion-button>\n\n            </ion-col>\n            <ion-col size=\"2\">\n\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n</ion-content>\n  <!-- Footer without a border -->\n  <ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <button  style=\"display: block; margin-left: auto; margin-right: auto;\" routerLink=\"/contacts\" mat-button>Passer cette étape</button>\n      </ion-toolbar>\n    </ion-footer>\n  ");

/***/ }),

/***/ "./src/app/link/link-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/link/link-routing.module.ts ***!
  \*********************************************/
/*! exports provided: LinkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPageRoutingModule", function() { return LinkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _link_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link.page */ "./src/app/link/link.page.ts");




const routes = [
    {
        path: '',
        component: _link_page__WEBPACK_IMPORTED_MODULE_3__["LinkPage"]
    }
];
let LinkPageRoutingModule = class LinkPageRoutingModule {
};
LinkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LinkPageRoutingModule);



/***/ }),

/***/ "./src/app/link/link.module.ts":
/*!*************************************!*\
  !*** ./src/app/link/link.module.ts ***!
  \*************************************/
/*! exports provided: LinkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPageModule", function() { return LinkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _link_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link-routing.module */ "./src/app/link/link-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _link_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link.page */ "./src/app/link/link.page.ts");








let LinkPageModule = class LinkPageModule {
};
LinkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _link_routing_module__WEBPACK_IMPORTED_MODULE_5__["LinkPageRoutingModule"]
        ],
        declarations: [_link_page__WEBPACK_IMPORTED_MODULE_7__["LinkPage"]]
    })
], LinkPageModule);



/***/ }),

/***/ "./src/app/link/link.page.scss":
/*!*************************************!*\
  !*** ./src/app/link/link.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 80%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.illustration {\n  width: 35%;\n}\n\nh3 {\n  text-align: center;\n  color: #ea4e50;\n  line-height: 37px;\n}\n\nbutton {\n  color: #ea4e50;\n}\n\n.text-bottom {\n  margin-left: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay9DOlxcVXNlcnNcXGJhZGVyXFxEcm9wYm94XFxNeSBQQyAoTEFQVE9QLUlBUlVEOEVKKVxcRG93bmxvYWRzXFx0ZWVwenlcXHRlZXB6eW1vYmlsZS1tYXN0ZXIvc3JjXFxhcHBcXGxpbmtcXGxpbmsucGFnZS5zY3NzIiwic3JjL2FwcC9saW5rL2xpbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ssY0FBQTtBQ0NMOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xpbmsvbGluay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbGx1c3RyYXRpb257XG4gICAgd2lkdGg6IDM1JTtcbn1cblxuaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xufVxuXG5idXR0b257XG4gICAgIGNvbG9yOiAjZWE0ZTUwO1xuXG59XG4udGV4dC1ib3R0b217XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG59IiwiaW1nIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbGx1c3RyYXRpb24ge1xuICB3aWR0aDogMzUlO1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlYTRlNTA7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogI2VhNGU1MDtcbn1cblxuLnRleHQtYm90dG9tIHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/link/link.page.ts":
/*!***********************************!*\
  !*** ./src/app/link/link.page.ts ***!
  \***********************************/
/*! exports provided: LinkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPage", function() { return LinkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinkPage = class LinkPage {
    constructor() { }
    ngOnInit() {
    }
};
LinkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-link',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/link/link.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link.page.scss */ "./src/app/link/link.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LinkPage);



/***/ })

}]);
//# sourceMappingURL=link-link-module-es2015.js.map