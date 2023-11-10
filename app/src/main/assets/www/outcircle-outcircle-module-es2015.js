(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outcircle-outcircle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outcircle/outcircle.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outcircle/outcircle.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <h3>\n          Vous les connaissez peut-être:\n        </h3>\n      </ion-col>\n    </ion-row>\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Rechercher</mat-label>\n        <input [(ngModel)]=\"term\" name=\"term\" placeholder=\"Taper pour filtrer\" matInput>\n      </mat-form-field>\n\n    </form>\n\n    <mat-paginator [length]=\"listTeepzrsToInvite?.length\" [pageSize]=\"pageSize\" (page)=\"pageEvent = getPaginatorData($event)\">\n    </mat-paginator>\n    <ion-spinner *ngIf=\"loading && listTeepzrsToInvite.length ==  0 \" color=\"primary\" name=\"dots\"></ion-spinner>\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let c of listTeepzrsToInvite |filter:term | slice: lowValue : highValue ;trackBy: trackByFn \">\n        <mat-card style=\"margin-top: 20px;\">\n          <img class=\"img-cl\"\n            src=\"../../assets/img/man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg\" alt=\"\">\n\n          <div class=\"cl-content\">\n\n            <strong>\n              {{ c?.nom }}\n              {{ c?.prenom }}\n            </strong><br>\n            <span>\n              {{ c?.circleMembersCount || '0' }} contact(s)\n            </span>\n            <div style=\"font-size: 12px;\">\n              12 amis en commun\n            </div>\n            <ion-button (click)=\"sendInvitationToJoinCircle(c?._id)\" *ngIf=\"!loading && c?.invited == false\"  size=\"small\" shape=\"round\">Ajouter</ion-button>\n            <ion-button *ngIf=\"!loading && c?.invited == true\"  size=\"small\" color=\"light\" shape=\"round\">Ajouté</ion-button>\n\n          </div>\n        </mat-card>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <button style=\"float: right;\" mat-button>Suivant</button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/outcircle/outcircle-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/outcircle/outcircle-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OutcirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcirclePageRoutingModule", function() { return OutcirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _outcircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outcircle.page */ "./src/app/outcircle/outcircle.page.ts");




const routes = [
    {
        path: '',
        component: _outcircle_page__WEBPACK_IMPORTED_MODULE_3__["OutcirclePage"]
    }
];
let OutcirclePageRoutingModule = class OutcirclePageRoutingModule {
};
OutcirclePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutcirclePageRoutingModule);



/***/ }),

/***/ "./src/app/outcircle/outcircle.module.ts":
/*!***********************************************!*\
  !*** ./src/app/outcircle/outcircle.module.ts ***!
  \***********************************************/
/*! exports provided: OutcirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcirclePageModule", function() { return OutcirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _outcircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outcircle-routing.module */ "./src/app/outcircle/outcircle-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _outcircle_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./outcircle.page */ "./src/app/outcircle/outcircle.page.ts");









let OutcirclePageModule = class OutcirclePageModule {
};
OutcirclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _outcircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutcirclePageRoutingModule"]
        ],
        declarations: [_outcircle_page__WEBPACK_IMPORTED_MODULE_8__["OutcirclePage"]]
    })
], OutcirclePageModule);



/***/ }),

/***/ "./src/app/outcircle/outcircle.page.scss":
/*!***********************************************!*\
  !*** ./src/app/outcircle/outcircle.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-cl {\n  margin-top: -30px !important;\n  border-radius: 49px;\n  width: 64px;\n  height: 61px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3 {\n  text-align: center;\n  color: #ea4e50;\n}\n\n.example-full-width {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 95%;\n}\n\nspan {\n  color: #ea4e50;\n}\n\nion-spinner {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 129px;\n  height: 75px;\n}\n\n.cl-content {\n  width: 156px;\n  line-height: 26px;\n  margin-top: 13px;\n  font-size: 14px;\n}\n\nmat-card {\n  background: #E5E3E3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0Y2lyY2xlL0M6XFxVc2Vyc1xcYmFkZXJcXERyb3Bib3hcXE15IFBDIChMQVBUT1AtSUFSVUQ4RUopXFxEb3dubG9hZHNcXHRlZXB6eVxcdGVlcHp5bW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcb3V0Y2lyY2xlXFxvdXRjaXJjbGUucGFnZS5zY3NzIiwic3JjL2FwcC9vdXRjaXJjbGUvb3V0Y2lyY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb3V0Y2lyY2xlL291dGNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNse1xuICAgIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNDlweDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDYxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oM3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlYTRlNTA7XG59XG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTUlO1xuICB9XG5zcGFue1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xuXG59XG5cbmlvbi1zcGlubmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTI5cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuXG4gIH1cblxuLmNsLWNvbnRlbnR7XG4gICAgd2lkdGg6IDE1NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5tYXQtY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiAjRTVFM0UzO1xufSIsIi5pbWctY2wge1xuICBtYXJnaW4tdG9wOiAtMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0OXB4O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5NSU7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogI2VhNGU1MDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEyOXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5jbC1jb250ZW50IHtcbiAgd2lkdGg6IDE1NnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNFNUUzRTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/outcircle/outcircle.page.ts":
/*!*********************************************!*\
  !*** ./src/app/outcircle/outcircle.page.ts ***!
  \*********************************************/
/*! exports provided: OutcirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcirclePage", function() { return OutcirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/contact.service */ "./src/app/providers/contact.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let OutcirclePage = class OutcirclePage {
    constructor(contactService, toastController) {
        this.contactService = contactService;
        this.toastController = toastController;
        this.loading = false;
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
        this.listTeepzrsToInvite = [];
        this.userId = '';
        this.pageIndex = 0;
        this.pageSize = 5;
        this.lowValue = 0;
        this.highValue = 5;
        this.term = '';
    }
    ngOnInit() {
        this.userId = localStorage.getItem('teepzyUserId');
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
    getTeepzr() {
        this.loading = true;
        this.contactService.teepZrs(this.userId).subscribe(res => {
            console.log(res);
            this.listTeepZrs = this.listSorter(res['data']);
            this.contactsTest.forEach(um => {
                this.listTeepZrs.filter((x, index) => {
                    x['phone'] == um.phone ? this.listTeepZrs.splice(index, 1) : null;
                });
            });
            this.loading = false;
            this.listTeepZrs.forEach(e => {
                let invitation = {
                    idSender: this.userId,
                    idReceiver: e['_id']
                };
                this.checkInvitation(invitation, e);
            });
            console.log(this.listTeepZrs);
        }, error => {
            console.log(error);
            this.loading = false;
            this.presentToast('Oops! Une erreur est survenue sur le serveur');
        });
    }
    checkInvitation(invitation, e) {
        this.contactService.checkInvitationTeepzr(invitation).subscribe(res => {
            console.log(res);
            if (res['status'] == 201) {
                this.listTeepzrsToInvite.push({
                    _id: e['_id'],
                    nom: e['nom'],
                    prenom: e['prenom'],
                    phone: e['phone'],
                    invited: true
                });
            }
            else {
                this.listTeepzrsToInvite.push({
                    _id: e['_id'],
                    nom: e['nom'],
                    prenom: e['prenom'],
                    phone: e['phone'],
                    invited: false
                });
            }
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
        array.sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { sensitivity: 'base' }));
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
OutcirclePage.ctorParameters = () => [
    { type: _providers_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
OutcirclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outcircle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./outcircle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/outcircle/outcircle.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./outcircle.page.scss */ "./src/app/outcircle/outcircle.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], OutcirclePage);



/***/ })

}]);
//# sourceMappingURL=outcircle-outcircle-module-es2015.js.map