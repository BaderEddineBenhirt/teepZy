function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/"./node_modules/firebase/app/dist/index.cjs.js":
  /*!*****************************************************!*\
    !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/
  function node_modulesFirebaseAppDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    var firebase = __webpack_require__( /*! @firebase/app */"./node_modules/@firebase/app/dist/index.cjs.js");
    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
      };
    }
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

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon style=\"font-size: 30px;\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <label class=\"btn\" for=\"modal-2\">\n            <img src=\"../../assets/img/Illustration 5-05.png\" alt=\"\">\n          </label>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Nom</mat-label>\n            <input matInput type=\"text\" name=\"nom\" #nom=\"ngModel\" required [(ngModel)]=\"user.nom\"\n              placeholder=\"Entrer votre nom\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Prénoms</mat-label>\n            <input matInput type=\"text\" name=\"prenom\" #prenom=\"ngModel\" required [(ngModel)]=\"user.prenom\"\n              placeholder=\"Entrer votre prénom\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Email</mat-label>\n            <input matInput type=\"email\" name=\"email\" #email=\"ngModel\" required [(ngModel)]=\"user.email\"\n              placeholder=\"Entrer votre email\">\n          </mat-form-field>\n          <span>\n            <mat-form-field class=\"code\">\n         \n              <mat-select [(ngModel)]=\"selected\" name=\"code\" required>\n                <mat-option *ngFor=\"let c of codes\" [value]=\"c.dial_code\">\n                  {{c.dial_code}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width phone\">\n              <mat-label>Téléphone</mat-label>\n              <input matInput type=\"tel\" name=\"phone\" #phone=\"ngModel\" required [(ngModel)]=\"telephone\"\n                placeholder=\"Entrer votre numero\">\n            </mat-form-field>\n          </span>\n\n        </form>\n\n      </ion-col>\n      <ion-col size=\"12\">\n        <div style=\"margin-left: 16px;margin-bottom: 2px;\" id=\"recaptcha-container\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n  <input class=\"modal-state\" id=\"modal-2\" type=\"checkbox\" />\n  <div class=\"modal\">\n    <label class=\"modal__bg\" for=\"modal-2\"></label>\n    <div class=\"modal__inner\">\n      <label class=\"modal__close\" for=\"modal-2\"></label>\n      <!--button class=\"warn-btn\" mat-raised-button color=\"warn\">Valider</button-->\n\n      <h2 style=\"font-size: 20px;\n      font-weight: 200;\">Choisir un avatar</h2>\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n        <mat-grid-tile>\n                <button (click)=\"choseAvatr('http://localhost:5000/1.png')\" mat-raised-button>\n                  <img src=\"http://localhost:5000/1.png\" alt=\"\" />\n                  </button>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/2.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/2.png\" alt=\"\" />\n          \n            </button>\n     \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/3.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/3.png\" alt=\"\" />\n          \n              </button>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/4.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/4.png\" alt=\"\" />\n          \n              </button>\n   \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/5.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/5.png\" alt=\"\" />\n          \n              </button>\n \n        </mat-grid-tile>\n        <mat-grid-tile>\n            <button (click)=\"choseAvatr('http://localhost:5000/6.png')\" mat-raised-button>\n                <img src=\"http://localhost:5000/6.png\" alt=\"\" />\n          \n              </button>\n    \n        </mat-grid-tile>\n      </mat-grid-list>\n\n  \n      <div>\n          <button class=\"mat-raised-btn\" mat-raised-button>Choisir dans la galérie</button>\n          <button class=\"mat-raised-btn\" mat-raised-button>Prendre une photo</button>\n      </div>\n\n  \n\n    </div>\n  </div>\n\n\n</ion-content>\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <button style=\"float: right;\" [disabled]=\"nom.errors?.required \n        || prenom.errors?.required \n        || email.errors?.required\n        || phone.errors?.required\n        || selected == ''\" (click)=\"signIn()\" mat-button>Suivant</button>\n  </ion-toolbar>\n</ion-footer>";

    /***/
  },

  /***/"./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/
  /*! exports provided: SignupPageRoutingModule */
  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./signup.page */"./src/app/signup/signup.page.ts");
    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];
    var SignupPageRoutingModule = /*#__PURE__*/_createClass(function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    });
    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);

    /***/
  },

  /***/"./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/
  /*! exports provided: SignupPageModule */
  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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
    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./signup-routing.module */"./src/app/signup/signup-routing.module.ts");
    /* harmony import */
    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../material.module */"./src/app/material.module.ts");
    /* harmony import */
    var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./signup.page */"./src/app/signup/signup.page.ts");
    var SignupPageModule = /*#__PURE__*/_createClass(function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    });
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })], SignupPageModule);

    /***/
  },

  /***/"./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 88%;\n  border-radius: 12px;\n}\n\nmat-form-field {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.code {\n  width: 25%;\n  float: left;\n  margin-left: 34px;\n}\n\n.phone {\n  width: 52%;\n  float: right;\n  margin-right: 32px;\n}\n\nbutton {\n  font-size: large;\n  color: #ea4e50;\n}\n\n/* [Object] Modal\n * =============================== */\n\n.modal {\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: left;\n  background: rgba(0, 0, 0, 0.9);\n  transition: opacity 0.25s ease;\n}\n\n.modal__bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n}\n\n.modal-state {\n  display: none;\n}\n\n.modal-state:checked + .modal {\n  visibility: visible;\n  opacity: 1;\n  height: 90%;\n}\n\n.modal-state:checked + .modal .modal__inner {\n  top: 0;\n}\n\n.modal__inner {\n  transition: top 0.25s ease;\n  position: absolute;\n  top: -20%;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 50%;\n  margin: auto;\n  overflow: auto;\n  background: #fff;\n  border-radius: 27px;\n  padding: 1em 2em;\n  height: 50%;\n}\n\n.modal__close {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  width: 1.1em;\n  height: 1.1em;\n  cursor: pointer;\n}\n\n.modal__close:after,\n.modal__close:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 1.5em;\n  background: #ccc;\n  display: block;\n  transform: rotate(45deg);\n  left: 50%;\n  margin: -3px 0 0 -1px;\n  top: 0;\n}\n\n.modal__close:hover:after,\n.modal__close:hover:before {\n  background: #aaa;\n}\n\n.modal__close:before {\n  transform: rotate(-45deg);\n}\n\n@media screen and (max-width: 768px) {\n  .modal__inner {\n    width: 90%;\n    height: 90%;\n    box-sizing: border-box;\n  }\n}\n\n/* Other\n * =============================== */\n\n.btn {\n  cursor: pointer;\n  background: #aaa;\n  padding: 0.5em 1em;\n  color: #fff;\n  border-radius: 34px;\n  width: 66%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn:hover,\n.btn:focus {\n  background: #aaa;\n}\n\n.btn:active {\n  background: #27ae60;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;\n}\n\n.btn--blue:hover,\n.btn--blue:focus {\n  background: #aaa;\n}\n\n.btn--blue:active {\n  background: #27ae60;\n}\n\n.warn-btn {\n  float: right;\n  margin-bottom: 48px;\n  margin-top: 26px;\n}\n\n.mat-raised-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcYmFkZXJcXERyb3Bib3hcXE15IFBDIChMQVBUT1AtSUFSVUQ4RUopXFxEb3dubG9hZHNcXHRlZXB6eVxcdGVlcHp5bW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FETUE7b0NBQUE7O0FBRUM7RUFDRyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FO0VBQ0UsYUFBQTtBQ0hKOztBRE1FO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE9FO0VBQ0UsTUFBQTtBQ0pKOztBRE9FO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSko7O0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSko7O0FET0U7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLE1BQUE7QUNKSjs7QURPRTs7RUFFRSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UseUJBQUE7QUNKSjs7QURPRTtFQUVFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQ0xKO0FBQ0Y7O0FEU0U7b0NBQUE7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRGFFOztFQUVFLGdCQUFBO0FDVko7O0FEYUU7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0FDVko7O0FEY0U7O0VBRUUsZ0JBQUE7QUNYSjs7QURjRTtFQUNFLG1CQUFBO0FDWEo7O0FEY0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1hKOztBRGNJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4OCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY29kZXtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xufVxuXG4ucGhvbmV7XG4gICAgd2lkdGg6IDUyJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG59XG5cbmJ1dHRvbntcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG5cbi8vIG1vZGFsXG5cbi8qIFtPYmplY3RdIE1vZGFsXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gLm1vZGFsIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjkpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlO1xuICB9XG4gIFxuICAubW9kYWxfX2JnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLm1vZGFsLXN0YXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAubW9kYWwtc3RhdGU6Y2hlY2tlZCArIC5tb2RhbCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogOTAlO1xuXG4gIH1cbiAgXG4gIC5tb2RhbC1zdGF0ZTpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgLm1vZGFsX19pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogdG9wIC4yNXMgZWFzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIFxuICAubW9kYWxfX2Nsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB0b3A6IDFlbTtcbiAgICB3aWR0aDogMS4xZW07XG4gICAgaGVpZ2h0OiAxLjFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5tb2RhbF9fY2xvc2U6YWZ0ZXIsXG4gIC5tb2RhbF9fY2xvc2U6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW46IC0zcHggMCAwIC0xcHg7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICAubW9kYWxfX2Nsb3NlOmhvdmVyOmFmdGVyLFxuICAubW9kYWxfX2Nsb3NlOmhvdmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2FhYTtcbiAgfVxuICBcbiAgLm1vZGFsX19jbG9zZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBcbiAgICAubW9kYWxfX2lubmVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgLyogT3RoZXJcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gIFxuICAuYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2FhYTtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICAgIHdpZHRoOiA2NiU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gIH1cbiAgXG4gIC5idG46aG92ZXIsXG4gIC5idG46Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICNhYWE7XG4gIH1cbiAgXG4gIC5idG46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLCAuMikgaW5zZXQ7XG4gIH1cbiAgXG4gIFxuICAuYnRuLS1ibHVlOmhvdmVyLFxuICAuYnRuLS1ibHVlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICB9XG4gIFxuICAuYnRuLS1ibHVlOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzI3YWU2MDtcbiAgfVxuXG4gIC53YXJuLWJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICB9XG5cbiAgICAubWF0LXJhaXNlZC1idG57XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICB9XG4gIFxuIiwiaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4OCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb2RlIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzNHB4O1xufVxuXG4ucGhvbmUge1xuICB3aWR0aDogNTIlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6ICNlYTRlNTA7XG59XG5cbi8qIFtPYmplY3RdIE1vZGFsXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubW9kYWwge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZTtcbn1cblxuLm1vZGFsX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1zdGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbC1zdGF0ZTpjaGVja2VkICsgLm1vZGFsIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5tb2RhbC1zdGF0ZTpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICB0b3A6IDA7XG59XG5cbi5tb2RhbF9faW5uZXIge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4yNXMgZWFzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMCU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIGhlaWdodDogNTAlO1xufVxuXG4ubW9kYWxfX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICB0b3A6IDFlbTtcbiAgd2lkdGg6IDEuMWVtO1xuICBoZWlnaHQ6IDEuMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbF9fY2xvc2U6YWZ0ZXIsXG4ubW9kYWxfX2Nsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0zcHggMCAwIC0xcHg7XG4gIHRvcDogMDtcbn1cblxuLm1vZGFsX19jbG9zZTpob3ZlcjphZnRlcixcbi5tb2RhbF9fY2xvc2U6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cblxuLm1vZGFsX19jbG9zZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWxfX2lubmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbi8qIE90aGVyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB3aWR0aDogNjYlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyN2FlNjA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMikgaW5zZXQ7XG59XG5cbi5idG4tLWJsdWU6aG92ZXIsXG4uYnRuLS1ibHVlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cblxuLmJ0bi0tYmx1ZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xufVxuXG4ud2Fybi1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbi5tYXQtcmFpc2VkLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzNHB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/
  /*! exports provided: SignupPage */
  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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
    /* harmony import */
    var _providers_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../providers/window.service */"./src/app/providers/window.service.ts");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! firebase/app */"./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */
    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ionic-native/status-bar/ngx */"./node_modules/@ionic-native/status-bar/ngx/index.js");
    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(authService, router, toastController, win, alertCtrl, statusBar, loadingCtrl) {
        _classCallCheck(this, SignupPage);
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
      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.windowRef = this.win.windowRef;
          //console.log(this.win.windowRef)
          this.windowRef.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].RecaptchaVerifier('recaptcha-container');
          this.windowRef.recaptchaVerifier.render();
        }
      }, {
        key: "listCountriesCodes",
        value: function listCountriesCodes() {
          var _this = this;
          this.authService.listCodes().subscribe(function (res) {
            _this.codes = res;
          });
        }
      }, {
        key: "signIn",
        value: function signIn() {
          var _this2 = this;
          var appVerifier = this.windowRef.recaptchaVerifier;
          var phoneNumberString = this.selected + this.telephone;
          this.user.phone = this.selected + this.telephone;
          console.log(phoneNumberString);
          firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithPhoneNumber(phoneNumberString, appVerifier).then(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this3 = this;
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.windowRef.confirmationResult = result;
                    console.log(this.windowRef.confirmationResult);
                    _context.next = 4;
                    return this.alertCtrl.create({
                      //  title: 'Enter the Confirmation code',
                      inputs: [{
                        name: 'confirmationCode',
                        placeholder: 'Confirmation de Code'
                      }],
                      buttons: [{
                        text: 'Annuler',
                        handler: function handler(data) {
                          console.log('Cancel clicked');
                        }
                      }, {
                        text: 'Envoyer',
                        handler: function handler(data) {
                          _this3.verificationCode = data.confirmationCode;
                          _this3.verifyCode();
                        }
                      }]
                    });
                  case 4:
                    alert = _context.sent;
                    _context.next = 7;
                    return alert.present();
                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "choseAvatr",
        value: function choseAvatr(url) {
          console.log(url);
          this.user.photo = url;
          this.presentToast("Avatar choisi ");
        }
      }, {
        key: "verifyCode",
        value: function verifyCode() {
          var _this4 = this;
          this.presentLoading();
          this.windowRef.confirmationResult.confirm(this.verificationCode).then(function (result) {
            _this4.presentToast('1ere étape passée ! ');
            _this4.router.navigate(['/signup-final'], {
              replaceUrl: true,
              queryParams: _this4.user
            });
            // this.obj.user = result.user;
          })["catch"](function (error) {
            console.log(error, "Incorrect code entered?");
            _this4.presentToast("Incorrect code ");
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.toastController.create({
                    message: msg,
                    duration: 4000
                  });
                case 2:
                  toast = _context2.sent;
                  toast.present();
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "modal",
        value: function modal() {}
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this5 = this;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.isLoading = true;
                  _context3.next = 3;
                  return this.loadingCtrl.create({
                    duration: 5000
                  }).then(function (a) {
                    a.present().then(function () {
                      console.log('presented');
                      if (!_this5.isLoading) {
                        a.dismiss().then(function () {
                          return console.log('abort presenting');
                        });
                      }
                    });
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
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.isLoading = false;
                  _context4.next = 3;
                  return this.loadingCtrl.dismiss().then(function () {
                    return console.log('dismissed');
                  });
                case 3:
                  return _context4.abrupt("return", _context4.sent);
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }]);
      return SignupPage;
    }();
    SignupPage.ctorParameters = function () {
      return [{
        type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _providers_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./signup.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./signup.page.scss */"./src/app/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _providers_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], SignupPage);

    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map