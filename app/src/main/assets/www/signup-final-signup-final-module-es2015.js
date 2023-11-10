(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-final-signup-final-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-final/signup-final.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-final/signup-final.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon style=\"font-size: 30px;\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img src=\"../../assets/img/Illustration 5-05.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Cercle Amical</mat-label>\n            <input matInput  type=\"text\" name=\"pAmical\" #pAmical=\"ngModel\" required [(ngModel)]=\"user.pseudoIntime\"  placeholder=\"Entrer un Pseudo\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Cercle Professionnel</mat-label>\n            <input matInput  type=\"text\" name=\"pProfessionnel\" #pProfessionnel=\"ngModel\" required [(ngModel)]=\"user.pseudoPro\"   placeholder=\"Entrer un Pseudo\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Mot de passe</mat-label>\n            <input matInput type=\"password\" name=\"passwordId\" #passwordId=\"ngModel\" minlength=\"8\" required [(ngModel)]=\"user.password\" placeholder=\"\">\n            \n          </mat-form-field>\n          <div style=\"font-size: 11px;margin-left: 34px;\" *ngIf=\"passwordId.errors?.minlength\">\n            Le mot de passe doit contenir au moins 8 caractères\n          </div>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Confirmer mot de passe</mat-label>\n            <input matInput name=\"conf\" #conf=\"ngModel\" required [(ngModel)]=\"user.conf\"  placeholder=\"\" type=\"password\">\n          </mat-form-field>\n\n\n        </form>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n  <!-- Footer without a border -->\n  <ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <button  style=\"float: right;\" \n        [disabled]=\"pAmical.errors?.required \n        || pProfessionnel.errors?.required \n        || passwordId.errors?.required\n        || conf.errors?.required\"\n\n        (click)=\"signup()\"  mat-button>Suivant</button>\n      </ion-toolbar>\n    </ion-footer>\n  \n  ");

/***/ }),

/***/ "./src/app/signup-final/signup-final-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/signup-final/signup-final-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SignupFinalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFinalPageRoutingModule", function() { return SignupFinalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_final_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-final.page */ "./src/app/signup-final/signup-final.page.ts");




const routes = [
    {
        path: '',
        component: _signup_final_page__WEBPACK_IMPORTED_MODULE_3__["SignupFinalPage"]
    }
];
let SignupFinalPageRoutingModule = class SignupFinalPageRoutingModule {
};
SignupFinalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupFinalPageRoutingModule);



/***/ }),

/***/ "./src/app/signup-final/signup-final.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/signup-final/signup-final.module.ts ***!
  \*****************************************************/
/*! exports provided: SignupFinalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFinalPageModule", function() { return SignupFinalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_final_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-final-routing.module */ "./src/app/signup-final/signup-final-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _signup_final_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-final.page */ "./src/app/signup-final/signup-final.page.ts");








let SignupFinalPageModule = class SignupFinalPageModule {
};
SignupFinalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _signup_final_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupFinalPageRoutingModule"]
        ],
        declarations: [_signup_final_page__WEBPACK_IMPORTED_MODULE_7__["SignupFinalPage"]]
    })
], SignupFinalPageModule);



/***/ }),

/***/ "./src/app/signup-final/signup-final.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/signup-final/signup-final.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 53%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nmat-form-field {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.code {\n  width: 25%;\n  float: left;\n  margin-left: 34px;\n}\n\n.phone {\n  width: 52%;\n  float: right;\n  margin-right: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWZpbmFsL0M6XFxVc2Vyc1xcYmFkZXJcXERyb3Bib3hcXE15IFBDIChMQVBUT1AtSUFSVUQ4RUopXFxEb3dubG9hZHNcXHRlZXB6eVxcdGVlcHp5bW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcc2lnbnVwLWZpbmFsXFxzaWdudXAtZmluYWwucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAtZmluYWwvc2lnbnVwLWZpbmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1maW5hbC9zaWdudXAtZmluYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOiA1MyU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb2Rle1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XG59XG5cbi5waG9uZXtcbiAgICB3aWR0aDogNTIlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG5cbn0iLCJpbWcge1xuICB3aWR0aDogNTMlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvZGUge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XG59XG5cbi5waG9uZSB7XG4gIHdpZHRoOiA1MiU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup-final/signup-final.page.ts":
/*!***************************************************!*\
  !*** ./src/app/signup-final/signup-final.page.ts ***!
  \***************************************************/
/*! exports provided: SignupFinalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFinalPage", function() { return SignupFinalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let SignupFinalPage = class SignupFinalPage {
    constructor(authService, router, toastController, route, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.user = {
            email: '',
            phone: '',
            nom: '',
            prenom: '',
            photo: '',
            pseudoIntime: '',
            pseudoPro: '',
            conf: '',
            password: '',
            role: ''
        };
        this.loading = false;
    }
    ngOnInit() {
        let usr = this.route.snapshot.queryParamMap;
        this.user.email = usr['params']['email'];
        this.user.phone = usr['params']['phone'];
        this.user.nom = usr['params']['nom'];
        this.user.prenom = usr['params']['prenom'];
        this.user.photo = usr['params']['photo'];
        console.log(usr['params']);
    }
    signup() {
        console.log(JSON.stringify(this.user));
        this.presentLoading();
        if (this.user.password == this.user.conf) {
            this.authService.signup(JSON.stringify(this.user)).subscribe(res => {
                console.log(res);
                this.retourUsr = res;
                this.profileInfo = res['data'];
                this.dismissLoading();
                if (this.retourUsr['status'] == 200) {
                    this.presentToast('Inscription réussie');
                    this.loading = false;
                    localStorage.setItem('teepzyUserId', this.profileInfo['userI']['_id']);
                    localStorage.setItem('teepzyToken', this.profileInfo['token']);
                    localStorage.setItem('teepzyEmail', this.profileInfo['userI']['email']);
                    this.router.navigate(['/link'], {
                        replaceUrl: true
                    });
                }
            }, error => {
                console.log(error);
                this.loading = false;
                if (error['status'] == 403) {
                    this.presentToast('Ce compte existe déjà. Vérifier email ou vos pseudo');
                    this.dismissLoading();
                }
                else {
                    this.presentToast('Oops! une erreur est survenue sur le serveur');
                    this.dismissLoading();
                }
            });
        }
        else {
            this.loading = false;
            this.presentToast('le mot de passe et la confirmation ne correspondent pas');
            this.dismissLoading();
        }
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
SignupFinalPage.ctorParameters = () => [
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
SignupFinalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-final',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-final.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-final/signup-final.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-final.page.scss */ "./src/app/signup-final/signup-final.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], SignupFinalPage);



/***/ })

}]);
//# sourceMappingURL=signup-final-signup-final-module-es2015.js.map