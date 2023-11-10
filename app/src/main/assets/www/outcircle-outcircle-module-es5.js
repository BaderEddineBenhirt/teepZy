function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outcircle-outcircle-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/outcircle/outcircle.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outcircle/outcircle.page.html ***!
    \*************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOutcircleOutcirclePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col>\n        <h3>\n          Vous les connaissez peut-être:\n        </h3>\n      </ion-col>\n    </ion-row>\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Rechercher</mat-label>\n        <input [(ngModel)]=\"term\" name=\"term\" placeholder=\"Taper pour filtrer\" matInput>\n      </mat-form-field>\n\n    </form>\n\n    <mat-paginator [length]=\"listTeepzrsToInvite?.length\" [pageSize]=\"pageSize\" (page)=\"pageEvent = getPaginatorData($event)\">\n    </mat-paginator>\n    <ion-spinner *ngIf=\"loading && listTeepzrsToInvite.length ==  0 \" color=\"primary\" name=\"dots\"></ion-spinner>\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let c of listTeepzrsToInvite |filter:term | slice: lowValue : highValue ;trackBy: trackByFn \">\n        <mat-card style=\"margin-top: 20px;\">\n          <img class=\"img-cl\"\n            src=\"../../assets/img/man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg\" alt=\"\">\n\n          <div class=\"cl-content\">\n\n            <strong>\n              {{ c?.nom }}\n              {{ c?.prenom }}\n            </strong><br>\n            <span>\n              {{ c?.circleMembersCount || '0' }} contact(s)\n            </span>\n            <div style=\"font-size: 12px;\">\n              12 amis en commun\n            </div>\n            <ion-button (click)=\"sendInvitationToJoinCircle(c?._id)\" *ngIf=\"!loading && c?.invited == false\"  size=\"small\" shape=\"round\">Ajouter</ion-button>\n            <ion-button *ngIf=\"!loading && c?.invited == true\"  size=\"small\" color=\"light\" shape=\"round\">Ajouté</ion-button>\n\n          </div>\n        </mat-card>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <button style=\"float: right;\" mat-button>Suivant</button>\n  </ion-toolbar>\n</ion-footer>";

    /***/
  },

  /***/"./src/app/outcircle/outcircle-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/outcircle/outcircle-routing.module.ts ***!
    \*******************************************************/
  /*! exports provided: OutcirclePageRoutingModule */
  /***/
  function srcAppOutcircleOutcircleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OutcirclePageRoutingModule", function () {
      return OutcirclePageRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _outcircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./outcircle.page */"./src/app/outcircle/outcircle.page.ts");
    var routes = [{
      path: '',
      component: _outcircle_page__WEBPACK_IMPORTED_MODULE_3__["OutcirclePage"]
    }];
    var OutcirclePageRoutingModule = /*#__PURE__*/_createClass(function OutcirclePageRoutingModule() {
      _classCallCheck(this, OutcirclePageRoutingModule);
    });
    OutcirclePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutcirclePageRoutingModule);

    /***/
  },

  /***/"./src/app/outcircle/outcircle.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/outcircle/outcircle.module.ts ***!
    \***********************************************/
  /*! exports provided: OutcirclePageModule */
  /***/
  function srcAppOutcircleOutcircleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OutcirclePageModule", function () {
      return OutcirclePageModule;
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
    var _outcircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./outcircle-routing.module */"./src/app/outcircle/outcircle-routing.module.ts");
    /* harmony import */
    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../material.module */"./src/app/material.module.ts");
    /* harmony import */
    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ng2-search-filter */"./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */
    var _outcircle_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./outcircle.page */"./src/app/outcircle/outcircle.page.ts");
    var OutcirclePageModule = /*#__PURE__*/_createClass(function OutcirclePageModule() {
      _classCallCheck(this, OutcirclePageModule);
    });
    OutcirclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _outcircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutcirclePageRoutingModule"]],
      declarations: [_outcircle_page__WEBPACK_IMPORTED_MODULE_8__["OutcirclePage"]]
    })], OutcirclePageModule);

    /***/
  },

  /***/"./src/app/outcircle/outcircle.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/outcircle/outcircle.page.scss ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppOutcircleOutcirclePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".img-cl {\n  margin-top: -30px !important;\n  border-radius: 49px;\n  width: 64px;\n  height: 61px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3 {\n  text-align: center;\n  color: #ea4e50;\n}\n\n.example-full-width {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 95%;\n}\n\nspan {\n  color: #ea4e50;\n}\n\nion-spinner {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 129px;\n  height: 75px;\n}\n\n.cl-content {\n  width: 156px;\n  line-height: 26px;\n  margin-top: 13px;\n  font-size: 14px;\n}\n\nmat-card {\n  background: #E5E3E3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0Y2lyY2xlL0M6XFxVc2Vyc1xcYmFkZXJcXERyb3Bib3hcXE15IFBDIChMQVBUT1AtSUFSVUQ4RUopXFxEb3dubG9hZHNcXHRlZXB6eVxcdGVlcHp5bW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcb3V0Y2lyY2xlXFxvdXRjaXJjbGUucGFnZS5zY3NzIiwic3JjL2FwcC9vdXRjaXJjbGUvb3V0Y2lyY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb3V0Y2lyY2xlL291dGNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNse1xuICAgIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNDlweDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDYxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oM3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlYTRlNTA7XG59XG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTUlO1xuICB9XG5zcGFue1xuICAgIGNvbG9yOiAjZWE0ZTUwO1xuXG59XG5cbmlvbi1zcGlubmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTI5cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuXG4gIH1cblxuLmNsLWNvbnRlbnR7XG4gICAgd2lkdGg6IDE1NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5tYXQtY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiAjRTVFM0UzO1xufSIsIi5pbWctY2wge1xuICBtYXJnaW4tdG9wOiAtMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0OXB4O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2MXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWE0ZTUwO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5NSU7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogI2VhNGU1MDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEyOXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5jbC1jb250ZW50IHtcbiAgd2lkdGg6IDE1NnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNFNUUzRTM7XG59Il19 */";

    /***/
  },

  /***/"./src/app/outcircle/outcircle.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/outcircle/outcircle.page.ts ***!
    \*********************************************/
  /*! exports provided: OutcirclePage */
  /***/
  function srcAppOutcircleOutcirclePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OutcirclePage", function () {
      return OutcirclePage;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _providers_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../providers/contact.service */"./src/app/providers/contact.service.ts");
    /* harmony import */
    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ionic/angular */"./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    var OutcirclePage = /*#__PURE__*/function () {
      function OutcirclePage(contactService, toastController) {
        _classCallCheck(this, OutcirclePage);
        this.contactService = contactService;
        this.toastController = toastController;
        this.loading = false;
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
        this.listTeepzrsToInvite = [];
        this.userId = '';
        this.pageIndex = 0;
        this.pageSize = 5;
        this.lowValue = 0;
        this.highValue = 5;
        this.term = '';
      }
      _createClass(OutcirclePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = localStorage.getItem('teepzyUserId');
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
        key: "getTeepzr",
        value: function getTeepzr() {
          var _this = this;
          this.loading = true;
          this.contactService.teepZrs(this.userId).subscribe(function (res) {
            console.log(res);
            _this.listTeepZrs = _this.listSorter(res['data']);
            _this.contactsTest.forEach(function (um) {
              _this.listTeepZrs.filter(function (x, index) {
                x['phone'] == um.phone ? _this.listTeepZrs.splice(index, 1) : null;
              });
            });
            _this.loading = false;
            _this.listTeepZrs.forEach(function (e) {
              var invitation = {
                idSender: _this.userId,
                idReceiver: e['_id']
              };
              _this.checkInvitation(invitation, e);
            });
            console.log(_this.listTeepZrs);
          }, function (error) {
            console.log(error);
            _this.loading = false;
            _this.presentToast('Oops! Une erreur est survenue sur le serveur');
          });
        }
      }, {
        key: "checkInvitation",
        value: function checkInvitation(invitation, e) {
          var _this2 = this;
          this.contactService.checkInvitationTeepzr(invitation).subscribe(function (res) {
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
        }
      }, {
        key: "sendInvitationToJoinCircle",
        value: function sendInvitationToJoinCircle(idReceiver) {
          var _this3 = this;
          console.log(idReceiver);
          this.loading = true;
          var invitation = {
            idSender: this.userId,
            idReceiver: idReceiver
          };
          this.contactService.inviteToJoinCircle(invitation).subscribe(function (res) {
            console.log(res);
            _this3.listTeepzrsToInvite.find(function (c, index) {
              return c['_id'] == idReceiver ? c['invited'] = true : null;
            });
            _this3.presentToast('Invitation envoyée');
            console.log(_this3.listTeepzrsToInvite);
            //  this.getTeepzr()
            _this3.loading = false;
          }, function (error) {
            _this3.presentToast('Invitation non envoyée');
            _this3.loading = false;
            alert(JSON.stringify(error));
          });
        }
      }, {
        key: "listSorter",
        value: function listSorter(array) {
          array.sort(function (a, b) {
            return a.nom.localeCompare(b.nom, 'fr', {
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
      return OutcirclePage;
    }();
    OutcirclePage.ctorParameters = function () {
      return [{
        type: _providers_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };
    OutcirclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outcircle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./outcircle.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/outcircle/outcircle.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./outcircle.page.scss */"./src/app/outcircle/outcircle.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], OutcirclePage);

    /***/
  }
}]);
//# sourceMappingURL=outcircle-outcircle-module-es5.js.map