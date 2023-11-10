function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactsContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contact</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <mat-tab-group>\n          <mat-tab label=\"TeepZr (20)\">\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Rechercher</mat-label>\n                <input [(ngModel)]=\"contact\" name=\"contact\" placeholder=\"Taper pour filtrer\" matInput>\n              </mat-form-field>\n            </form>\n\n            <mat-paginator [length]=\"listTeepzrsToInvite?.length\" [pageSize]=\"pageSizeT\"\n              (page)=\"pageEvent = getPaginatorDataTeepzr($event)\">\n            </mat-paginator>\n            <ion-spinner *ngIf=\"loading && listTeepzrsToInvite.length ==  0 \" color=\"primary\" name=\"dots\"></ion-spinner>\n\n            <ion-item *ngFor=\"let c of listTeepzrsToInvite |filter:contact | slice: lowValueT : highValueT  ;trackBy: trackByFn \">\n              <img alt=\"\" src=\"../../assets/img/man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg\">\n              <ion-label> {{ c?.prenom }} <b> {{c?.nom}} </b>\n                <p>\n                  {{ c?.phone }}\n                </p>\n              </ion-label>\n              <ion-button *ngIf=\"!loading && c?.invited == false\" (click)=\"sendInvitationToJoinCircle(c?._id)\" size=\"small\">\n                <span >\n                    Inviter\n                </span>\n                <ion-spinner *ngIf=\"loading\" color=\"primary\" name=\"dots\"></ion-spinner>\n\n              </ion-button>\n\n              <button *ngIf=\"!loading  && c?.invited\" mat-stroked-button>Invité</button>\n\n\n            </ion-item>\n          </mat-tab>\n\n          <mat-tab [label]=\" 'Inviter  (' + listContacts.length + ')'\">\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Rechercher</mat-label>\n                <input [(ngModel)]=\"term\" name=\"term\" placeholder=\"Taper pour filtrer\" matInput>\n              </mat-form-field>\n\n            </form>\n\n\n            <ion-list>\n              <mat-paginator [length]=\"listContacts?.length\" [pageSize]=\"pageSize\"\n                (page)=\"pageEvent = getPaginatorData($event)\">\n              </mat-paginator>\n              <ion-spinner *ngIf=\"loading && listContacts.length ==  0 \" color=\"primary\" name=\"dots\"></ion-spinner>\n\n              <ion-item *ngFor=\"let c of listContacts|filter:term | slice: lowValue : highValue ;trackBy: trackByFn \">\n\n\n                <div class=\"round-bg\">\n                  {{c?.familyName | slice:0:1}}\n                </div>\n                <ion-label> {{ c?.givenName }} <b> {{c?.familyName}} </b>\n                  <p>\n                    {{ c?.phone }}\n                  </p>\n                </ion-label>\n                <div *ngIf=\"c?.invited  == false\" (click)=\"sendSms(c?.phone)\" class=\"example-button-container\">\n                  <button mat-mini-fab disabled color=\"warn\" aria-label=\"Example icon button with a home icon\">\n                    <span style=\"    margin-left: 6px;\n                        margin-bottom: 14px;\" class=\"material-icons\">\n                      send\n                    </span>\n                  </button>\n                </div>\n                <div *ngIf=\"c?.invited\" class=\"example-button-container\">\n                  <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n                    <span class=\"material-icons\">\n                      check\n                    </span>\n\n                  </button>\n                </div>\n\n              </ion-item>\n\n            </ion-list>\n\n            <!--ion-list>\n              <ion-item-sliding *ngFor=\"let c of listContacts\">\n                <ion-item>\n                    <img alt=\"\"\n                    src=\"../../assets/img/Illustration 5-05.png\">\n\n                  <ion-label> {{ c?.givenName }} <b> {{c?.familyName}} </b>\n                    <p>\n                      {{ c?.phone }}\n                    </p>\n                  </ion-label>\n                  <div id=\"arrowAnim\">\n                \n                    <div class=\"arrowSliding delay1\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                    <div class=\"arrowSliding delay2\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                \n                  </div>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                  <ion-item-option *ngIf=\"c?.invited == false\"  (click)=\"sendSms(c?.phone)\" color=\"primary\">\n                      <ion-icon name=\"send-outline\" slot=\"icon-only\"></ion-icon>\n                  </ion-item-option>\n                  <ion-item-option *ngIf=\"c?.invited\" color=\"primary\">\n                    <ion-icon  name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list-->\n\n            <!--ion-list>\n              <ion-item-sliding (ionDrag)=\"drag()\" *ngFor=\"let c of myContacts\">\n                <ion-item>\n                    <img alt=\"\"\n                    src=\"../../assets/img/man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg\">\n\n                  <ion-label> {{ c?.name.givenName }} <b> {{c?.name.familyName}} </b>\n                    <p>\n                      {{ c?.phoneNumbers[0].value }}\n                    </p>\n                  </ion-label>\n                  <div id=\"arrowAnim\">\n                \n                    <div class=\"arrowSliding delay1\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                    <div class=\"arrowSliding delay2\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                    <div class=\"arrowSliding delay3\">\n                      <div class=\"arrow\"></div>\n                    </div>\n                  </div>\n                </ion-item>\n                <ion-item-options side=\"end\">\n                  <ion-item-option (click)=\"sendSms(c)\" color=\"primary\">\n                      <ion-icon name=\"checkmark-outline\" slot=\"icon-only\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list-->\n\n\n            <ion-row>\n              <ion-col>\n\n              </ion-col>\n              <!--ion-col>\n                <ion-button routerLink=\"/outcircle\" size=\"small\" shape=\"round\">Valider</ion-button>\n\n              </ion-col-->\n              <ion-col>\n\n              </ion-col>\n            </ion-row>\n\n          </mat-tab>\n        </mat-tab-group>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

    /***/
  },

  /***/"./src/app/contacts/contacts-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/contacts/contacts-routing.module.ts ***!
    \*****************************************************/
  /*! exports provided: ContactsPageRoutingModule */
  /***/
  function srcAppContactsContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
      return ContactsPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./contacts.page */"./src/app/contacts/contacts.page.ts");
    var routes = [{
      path: '',
      component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
    }];
    var ContactsPageRoutingModule = /*#__PURE__*/_createClass(function ContactsPageRoutingModule() {
      _classCallCheck(this, ContactsPageRoutingModule);
    });
    ContactsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactsPageRoutingModule);

    /***/
  },

  /***/"./src/app/contacts/contacts.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/contacts/contacts.module.ts ***!
    \*********************************************/
  /*! exports provided: ContactsPageModule */
  /***/
  function srcAppContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
      return ContactsPageModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */
    var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./contacts-routing.module */"./src/app/contacts/contacts-routing.module.ts");
    /* harmony import */
    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../material.module */"./src/app/material.module.ts");
    /* harmony import */
    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ng2-search-filter */"./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */
    var _contacts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./contacts.page */"./src/app/contacts/contacts.page.ts");
    var ContactsPageModule = /*#__PURE__*/_createClass(function ContactsPageModule() {
      _classCallCheck(this, ContactsPageModule);
    });
    ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]],
      declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_8__["ContactsPage"]]
    })], ContactsPageModule);

    /***/
  },

  /***/"./src/app/contacts/contacts.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/contacts/contacts.page.scss ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppContactsContactsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ion-title {\n  color: #ea4e50;\n}\n\nimg {\n  width: 16%;\n  margin-right: 11px;\n  border-radius: 26px;\n  height: 78%;\n  margin-top: -1px;\n}\n\nion-content {\n  color: #ea4e50 !important;\n}\n\nion-spinner {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nmat-list-item {\n  margin-top: 21px;\n  color: #ea4e50;\n}\n\nmat-divider {\n  margin-top: 25px;\n}\n\n.example-button-container {\n  float: right;\n}\n\nion-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-label, b {\n  color: #ea4e50;\n}\n\n.example-full-width {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 95%;\n}\n\n.example-form {\n  margin-top: 16px;\n}\n\n.round-bg {\n  background: #ea4e50;\n  padding: 17px;\n  border-radius: 25px;\n  width: 46px;\n  margin-right: 29px;\n  color: white;\n  height: 49px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvQzpcXFVzZXJzXFxiYWRlclxcRHJvcGJveFxcTXkgUEMgKExBUFRPUC1JQVJVRDhFSilcXERvd25sb2Fkc1xcdGVlcHp5XFx0ZWVwenltb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDE2JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICBoZWlnaHQ6IDc4JTtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgY29sb3I6ICNlYTRlNTAgIWltcG9ydGFudDtcblxufVxuXG5pb24tc3Bpbm5lcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5tYXQtbGlzdC1pdGVte1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgY29sb3I6ICNlYTRlNTA7XG5cbn1cblxubWF0LWRpdmlkZXJ7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lcntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaW9uLWxhYmVsLCBie1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xufVxuLmV4YW1wbGUtZnVsbC13aWR0aHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5leGFtcGxlLWZvcm17XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yb3VuZC1iZ3tcbiAgYmFja2dyb3VuZDogI2VhNGU1MDtcbiAgcGFkZGluZzogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ5cHg7XG59IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNlYTRlNTA7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxNiU7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgaGVpZ2h0OiA3OCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgY29sb3I6ICNlYTRlNTAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWxhYmVsLCBiIHtcbiAgY29sb3I6ICNlYTRlNTA7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yb3VuZC1iZyB7XG4gIGJhY2tncm91bmQ6ICNlYTRlNTA7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA0NnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0OXB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/contacts/contacts.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/contacts/contacts.page.ts ***!
    \*******************************************/
  /*! exports provided: ContactsPage */
  /***/
  function srcAppContactsContactsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
      return ContactsPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ionic-native/contacts/ngx */"./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */
    var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic-native/sms/ngx */"./node_modules/@ionic-native/sms/ngx/index.js");
    /* harmony import */
    var _providers_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../providers/contact.service */"./src/app/providers/contact.service.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var ContactsPage = /*#__PURE__*/function () {
      function ContactsPage(contacts, sms, toastController, contactService) {
        _classCallCheck(this, ContactsPage);
        this.contacts = contacts;
        this.sms = sms;
        this.toastController = toastController;
        this.contactService = contactService;
        this.myContacts = [];
        this.listTeepzrsToInvite = [];
        this.listContacts = [];
        this.listTeepZrs = [];
        this.contactsTest = [{
          givenName: 'Chris',
          familyName: 'Hounsounou',
          phone: '+22998090908',
          invited: false
        }, {
          givenName: 'Elvire',
          familyName: 'Anato',
          phone: '+229 98098867',
          invited: false
        }, {
          givenName: 'Deborah',
          familyName: 'Houeha',
          phone: '+229 90980000',
          invited: true
        }, {
          givenName: 'Claudia',
          familyName: 'Houeha',
          phone: '+229 66889545',
          invited: false
        }];
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
      _createClass(ContactsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = localStorage.getItem('teepzyUserId');
          //  this.contactsTests = this.listSorter(this.contactsTest) 
          // this.loadContacts()
          this.getTeepzr();
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index; // or item.id
        }
      }, {
        key: "getPaginatorData",
        value: function getPaginatorData(event) {
          console.log(event);
          if (event.pageIndex === this.pageIndex + 1) {
            this.lowValue = this.lowValue + this.pageSize;
            this.highValue = this.highValue + this.pageSize;
          } else if (event.pageIndex === this.pageIndex - 1) {
            this.lowValue = this.lowValue - this.pageSize;
            this.highValue = this.highValue - this.pageSize;
          }
          this.pageIndex = event.pageIndex;
        }
      }, {
        key: "getPaginatorDataTeepzr",
        value: function getPaginatorDataTeepzr(event) {
          console.log(event);
          if (event.pageIndex === this.pageIndexT + 1) {
            this.lowValueT = this.lowValueT + this.pageSizeT;
            this.highValueT = this.highValueT + this.pageSizeT;
          } else if (event.pageIndex === this.pageIndex - 1) {
            this.lowValueT = this.lowValueT - this.pageSizeT;
            this.highValueT = this.highValueT - this.pageSizeT;
          }
          this.pageIndexT = event.pageIndex;
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          var _this = this;
          this.loading = true;
          var options = {
            filter: '',
            multiple: true,
            hasPhoneNumber: true
          };
          this.contacts.find(['*'], options).then(function (contacts) {
            _this.myContacts = _this.listSorter(contacts);
            var _iterator = _createForOfIteratorHelper(_this.myContacts),
              _step;
            try {
              var _loop = function _loop() {
                var mC = _step.value;
                var inviteViaSms = {
                  phone: mC.phoneNumbers[0].value
                };
                _this.contactService.checkInviteViaSms(inviteViaSms).subscribe(function (res) {
                  console.log(res);
                  if (res['status'] == 201) {
                    _this.listContacts.push({
                      givenName: mC.name.givenName,
                      familyName: mC.name.familyName,
                      phone: mC.phoneNumbers[0].value,
                      invited: true
                    });
                  } else {
                    _this.listContacts.push({
                      givenName: mC.name.givenName,
                      familyName: mC.name.familyName,
                      phone: mC.phoneNumbers[0].value,
                      invited: false
                    });
                  }
                  _this.loading = false;
                }, function (error) {
                  alert(JSON.stringify(error));
                  _this.loading = false;
                });
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }, {
        key: "getTeepzr",
        value: function getTeepzr() {
          var _this2 = this;
          var list = [];
          this.loading = true;
          this.contactService.teepZrs(this.userId).subscribe(function (res) {
            console.log(res);
            _this2.listTeepZrs = res['data'];
            _this2.contactsTest.forEach(function (um) {
              _this2.listTeepZrs.filter(function (x, index) {
                x['phone'] == um.phone ? list.push(x) : null;
              });
            });
            _this2.loading = false;
            _this2.listTeepZrs = list;
            console.log(list);
            _this2.listTeepZrs.forEach(function (e) {
              var invitation = {
                idSender: _this2.userId,
                idReceiver: e['_id']
              };
              _this2.contactService.checkInvitationTeepzr(invitation).subscribe(function (res) {
                console.log(res);
                if (res['status'] == 201) {
                  _this2.listTeepzrsToInvite.push({
                    _id: e['_id'],
                    nom: e['nom'],
                    prenom: e['prenom'],
                    phone: e['phone'],
                    invited: true
                  });
                } else {
                  _this2.listTeepzrsToInvite.push({
                    _id: e['_id'],
                    nom: e['nom'],
                    prenom: e['prenom'],
                    phone: e['phone'],
                    invited: false
                  });
                }
              });
            });
            console.log(_this2.listTeepZrs);
          }, function (error) {
            console.log(error);
            _this2.loading = false;
          });
        }
      }, {
        key: "sendSms",
        value: function sendSms(contact) {
          var _this3 = this;
          this.sms.send(contact, "This is my predefined to you").then(function (res) {
            if (res) {
              _this3.sendInvitationSmsToServer(contact);
            }
          }, function (error) {
            console.log(error);
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "sendInvitationSmsToServer",
        value: function sendInvitationSmsToServer(phone) {
          var _this4 = this;
          var inviteViaSms = {
            senderId: this.userId,
            phone: phone
          };
          this.contactService.inviteViaSms(inviteViaSms).subscribe(function (res) {
            console.log(res);
            _this4.presentToast('Invitation envoyée');
            _this4.listContacts.find(function (c, index) {
              return c['phone'] == phone ? c['invited'] = true : null;
            });
          }, function (error) {
            _this4.presentToast('Invitation non envoyée');
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "sendInvitationToJoinCircle",
        value: function sendInvitationToJoinCircle(idReceiver) {
          var _this5 = this;
          console.log(idReceiver);
          this.loading = true;
          var invitation = {
            idSender: this.userId,
            idReceiver: idReceiver
          };
          this.contactService.inviteToJoinCircle(invitation).subscribe(function (res) {
            console.log(res);
            _this5.listTeepzrsToInvite.find(function (c, index) {
              return c['_id'] == idReceiver ? c['invited'] = true : null;
            });
            _this5.presentToast('Invitation envoyée');
            console.log(_this5.listTeepzrsToInvite);
            //  this.getTeepzr()
            _this5.loading = false;
          }, function (error) {
            _this5.presentToast('Invitation non envoyée');
            _this5.loading = false;
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "listSorter",
        value: function listSorter(array) {
          array.sort(function (a, b) {
            return a.name.familyName.localeCompare(b.name.familyName, 'fr', {
              sensitivity: 'base'
            });
          });
          return array;
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.toastController.create({
                    message: msg,
                    duration: 4000
                  });
                case 2:
                  toast = _context.sent;
                  toast.present();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }]);
      return ContactsPage;
    }();
    ContactsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"]
      }, {
        type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_3__["SMS"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _providers_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
      }];
    };
    ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contacts.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contacts.page.scss */"./src/app/contacts/contacts.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_3__["SMS"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _providers_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])], ContactsPage);

    /***/
  }
}]);
//# sourceMappingURL=contacts-contacts-module-es5.js.map