(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n\n      <ion-row>\n          <ion-col>\n              <img class=\"illustration\" src=\"../../assets/img/Illustration 8 _Plan de travail 1-08.png\" alt=\"\">\n          </ion-col>\n      </ion-row>\n  \n      <ion-row>\n          <ion-col style=\"margin-top: 21px;\" size=\"12\">\n              <h3>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit\n              </h3>\n          </ion-col>\n      \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>Email</mat-label>\n              <input matInput type=\"email\" name=\"email\" #email=\"ngModel\" required [(ngModel)]=\"user.email\" placeholder=\"Entrer votre email\">\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>Mot de passe</mat-label>\n              <input matInput type=\"password\" name=\"password\" #password=\"ngModel\" required [(ngModel)]=\"user.password\" placeholder=\"\">\n            </mat-form-field>\n\n  \n  \n          </form>\n  \n        </ion-col>\n        <ion-col size=\"2\">\n\n        </ion-col>\n        <ion-col size=\"8\">\n            <ion-button style=\"margin-top: 31px;\" (click)=\"auth()\" expand=\"block\" shape=\"round\">Valider</ion-button>\n\n        </ion-col>\n        <ion-col size=\"2\">\n\n        </ion-col>\n      </ion-row>\n\n  </ion-grid>\n</ion-content>\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n      <span>\n          <ion-title>\n              Envie de devenir un teepZr?\n            </ion-title>\n            <button  style=\"display: block; margin-left: auto; margin-right: auto;\" routerLink=\"/signup\" mat-button>Inscrivez-vous</button>\n         \n      </span>\n  </ion-toolbar>\n  </ion-footer>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 80%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.illustration {\n  width: 35%;\n}\n\nmat-form-field {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3 {\n  text-align: center;\n  color: #ea4e50;\n  line-height: 37px;\n}\n\nbutton {\n  color: #ea4e50;\n}\n\n.text-bottom {\n  margin-left: 18px;\n}\n\nion-title {\n  text-align: center;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxiYWRlclxcRHJvcGJveFxcTXkgUEMgKExBUFRPUC1JQVJVRDhFSilcXERvd25sb2Fkc1xcdGVlcHp5XFx0ZWVwenltb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ssY0FBQTtBQ0VMOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmlsbHVzdHJhdGlvbntcbiAgICB3aWR0aDogMzUlO1xufVxubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oM3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlYTRlNTA7XG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbmJ1dHRvbntcbiAgICAgY29sb3I6ICNlYTRlNTA7XG5cbn1cbi50ZXh0LWJvdHRvbXtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn0iLCJpbWcge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmlsbHVzdHJhdGlvbiB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VhNGU1MDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG4udGV4dC1ib3R0b20ge1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let LoginPage = class LoginPage {
    constructor(authService, router, toastController, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.user = {
            email: '',
            password: '',
        };
        this.loading = false;
    }
    ngOnInit() {
    }
    auth() {
        this.presentLoading();
        this.authService.login(this.user).subscribe(res => {
            console.log(res);
            this.retourUsr = res;
            this.profileInfo = res['data'];
            this.dismissLoading();
            if (this.retourUsr['status'] == 200) {
                this.presentToast('Connexion réussie');
                localStorage.setItem('teepzyUserId', this.profileInfo['userI']['_id']);
                localStorage.setItem('teepzyToken', this.profileInfo['token']);
                localStorage.setItem('teepzyEmail', this.profileInfo['userI']['email']);
                this.router.navigate(['/contacts'], {
                    replaceUrl: true
                });
            }
        }, error => {
            console.log(error['status']);
            if (error['status'] === 404) {
                this.presentToast('Mot de passe Incorrects');
                this.dismissLoading();
            }
            else {
                this.presentToast('Oops! une erreur est survenue sur le serveur');
                this.dismissLoading();
            }
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.loadingCtrl.create({
                duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.loading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismissLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map