function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-final-signup-final-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/signup-final/signup-final.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-final/signup-final.page.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupFinalSignupFinalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon style=\"font-size: 30px;\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img src=\"../../assets/img/Illustration 5-05.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Cercle Amical</mat-label>\n            <input matInput  type=\"text\" name=\"pAmical\" #pAmical=\"ngModel\" required [(ngModel)]=\"user.pseudoIntime\"  placeholder=\"Entrer un Pseudo\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Cercle Professionnel</mat-label>\n            <input matInput  type=\"text\" name=\"pProfessionnel\" #pProfessionnel=\"ngModel\" required [(ngModel)]=\"user.pseudoPro\"   placeholder=\"Entrer un Pseudo\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Mot de passe</mat-label>\n            <input matInput type=\"password\" name=\"passwordId\" #passwordId=\"ngModel\" minlength=\"8\" required [(ngModel)]=\"user.password\" placeholder=\"\">\n            \n          </mat-form-field>\n          <div style=\"font-size: 11px;margin-left: 34px;\" *ngIf=\"passwordId.errors?.minlength\">\n            Le mot de passe doit contenir au moins 8 caractères\n          </div>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Confirmer mot de passe</mat-label>\n            <input matInput name=\"conf\" #conf=\"ngModel\" required [(ngModel)]=\"user.conf\"  placeholder=\"\" type=\"password\">\n          </mat-form-field>\n\n\n        </form>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n  <!-- Footer without a border -->\n  <ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <button  style=\"float: right;\" \n        [disabled]=\"pAmical.errors?.required \n        || pProfessionnel.errors?.required \n        || passwordId.errors?.required\n        || conf.errors?.required\"\n\n        (click)=\"signup()\"  mat-button>Suivant</button>\n      </ion-toolbar>\n    </ion-footer>\n  \n  ";

    /***/
  },

  /***/"./src/app/signup-final/signup-final-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/signup-final/signup-final-routing.module.ts ***!
    \*************************************************************/
  /*! exports provided: SignupFinalPageRoutingModule */
  /***/
  function srcAppSignupFinalSignupFinalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SignupFinalPageRoutingModule", function () {
      return SignupFinalPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _signup_final_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./signup-final.page */"./src/app/signup-final/signup-final.page.ts");
    var routes = [{
      path: '',
      component: _signup_final_page__WEBPACK_IMPORTED_MODULE_3__["SignupFinalPage"]
    }];
    var SignupFinalPageRoutingModule = /*#__PURE__*/_createClass(function SignupFinalPageRoutingModule() {
      _classCallCheck(this, SignupFinalPageRoutingModule);
    });
    SignupFinalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupFinalPageRoutingModule);

    /***/
  },

  /***/"./src/app/signup-final/signup-final.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/signup-final/signup-final.module.ts ***!
    \*****************************************************/
  /*! exports provided: SignupFinalPageModule */
  /***/
  function srcAppSignupFinalSignupFinalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SignupFinalPageModule", function () {
      return SignupFinalPageModule;
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
    var _signup_final_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./signup-final-routing.module */"./src/app/signup-final/signup-final-routing.module.ts");
    /* harmony import */
    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../material.module */"./src/app/material.module.ts");
    /* harmony import */
    var _signup_final_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./signup-final.page */"./src/app/signup-final/signup-final.page.ts");
    var SignupFinalPageModule = /*#__PURE__*/_createClass(function SignupFinalPageModule() {
      _classCallCheck(this, SignupFinalPageModule);
    });
    SignupFinalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _signup_final_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupFinalPageRoutingModule"]],
      declarations: [_signup_final_page__WEBPACK_IMPORTED_MODULE_7__["SignupFinalPage"]]
    })], SignupFinalPageModule);

    /***/
  },

  /***/"./src/app/signup-final/signup-final.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/signup-final/signup-final.page.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSignupFinalSignupFinalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "img {\n  width: 53%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nmat-form-field {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.code {\n  width: 25%;\n  float: left;\n  margin-left: 34px;\n}\n\n.phone {\n  width: 52%;\n  float: right;\n  margin-right: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWZpbmFsL0M6XFxVc2Vyc1xcYmFkZXJcXERyb3Bib3hcXE15IFBDIChMQVBUT1AtSUFSVUQ4RUopXFxEb3dubG9hZHNcXHRlZXB6eVxcdGVlcHp5bW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcc2lnbnVwLWZpbmFsXFxzaWdudXAtZmluYWwucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAtZmluYWwvc2lnbnVwLWZpbmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1maW5hbC9zaWdudXAtZmluYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOiA1MyU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb2Rle1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XG59XG5cbi5waG9uZXtcbiAgICB3aWR0aDogNTIlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG5cbn0iLCJpbWcge1xuICB3aWR0aDogNTMlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvZGUge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XG59XG5cbi5waG9uZSB7XG4gIHdpZHRoOiA1MiU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/signup-final/signup-final.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/signup-final/signup-final.page.ts ***!
    \***************************************************/
  /*! exports provided: SignupFinalPage */
  /***/
  function srcAppSignupFinalSignupFinalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SignupFinalPage", function () {
      return SignupFinalPage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../providers/auth.service */"./src/app/providers/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var SignupFinalPage = /*#__PURE__*/function () {
      function SignupFinalPage(authService, router, toastController, route, loadingCtrl) {
        _classCallCheck(this, SignupFinalPage);
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
      _createClass(SignupFinalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var usr = this.route.snapshot.queryParamMap;
          this.user.email = usr['params']['email'];
          this.user.phone = usr['params']['phone'];
          this.user.nom = usr['params']['nom'];
          this.user.prenom = usr['params']['prenom'];
          this.user.photo = usr['params']['photo'];
          console.log(usr['params']);
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this = this;
          console.log(JSON.stringify(this.user));
          this.presentLoading();
          if (this.user.password == this.user.conf) {
            this.authService.signup(JSON.stringify(this.user)).subscribe(function (res) {
              console.log(res);
              _this.retourUsr = res;
              _this.profileInfo = res['data'];
              _this.dismissLoading();
              if (_this.retourUsr['status'] == 200) {
                _this.presentToast('Inscription réussie');
                _this.loading = false;
                localStorage.setItem('teepzyUserId', _this.profileInfo['userI']['_id']);
                localStorage.setItem('teepzyToken', _this.profileInfo['token']);
                localStorage.setItem('teepzyEmail', _this.profileInfo['userI']['email']);
                _this.router.navigate(['/link'], {
                  replaceUrl: true
                });
              }
            }, function (error) {
              console.log(error);
              _this.loading = false;
              if (error['status'] == 403) {
                _this.presentToast('Ce compte existe déjà. Vérifier email ou vos pseudo');
                _this.dismissLoading();
              } else {
                _this.presentToast('Oops! une erreur est survenue sur le serveur');
                _this.dismissLoading();
              }
            });
          } else {
            this.loading = false;
            this.presentToast('le mot de passe et la confirmation ne correspondent pas');
            this.dismissLoading();
          }
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
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.loading = true;
                  _context2.next = 3;
                  return this.loadingCtrl.create({
                    duration: 5000
                  }).then(function (a) {
                    a.present().then(function () {
                      console.log('presented');
                      if (!_this2.loading) {
                        a.dismiss().then(function () {
                          return console.log('abort presenting');
                        });
                      }
                    });
                  });
                case 3:
                  return _context2.abrupt("return", _context2.sent);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.loading = false;
                  _context3.next = 3;
                  return this.loadingCtrl.dismiss().then(function () {
                    return console.log('dismissed');
                  });
                case 3:
                  return _context3.abrupt("return", _context3.sent);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }]);
      return SignupFinalPage;
    }();
    SignupFinalPage.ctorParameters = function () {
      return [{
        type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };
    SignupFinalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-final',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./signup-final.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/signup-final/signup-final.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./signup-final.page.scss */"./src/app/signup-final/signup-final.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], SignupFinalPage);

    /***/
  }
}]);
//# sourceMappingURL=signup-final-signup-final-module-es5.js.map