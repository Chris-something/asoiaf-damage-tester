(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/nsokolowski/WORKSPACE/asoiaf/asoiaf-panic-tester/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html,\n* {\n  font-family: \"Palatino\", serif;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n.app {\n  margin: 40px;\n  padding: 20px;\n  min-height: calc(100vh - 82px);\n  color: #FFF;\n  text-align: center;\n  border: 1px solid rgba(255,255,255,.5);\n  background: rgba(0,15,22, .5);\n  /*background: linear-gradient(182deg, rgba(38, 2, 2, 0.2), rgba(9, 22, 59, .9));*/\n  /*box-shadow: rgba(0,0,0,.5) 0 0 20px 26px;*/\n\n}\n\n.app-title-wrapper {\n  perspective: 500px;\n}\n\n.app__title {\n  /*text-shadow: rgba(0,0,0,.5) 0 8px 6px;*/\n  /*transform: rotate3d(0.9, 0, 0, 19deg);*/\n  text-shadow: rgba(0,0,0,.5) 0 8px 6px;\n  text-outline: #FFFFFF 1px;\n  transform-origin: 50% 100%;\n  font-size: 5vw;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: .05em;\n}\n\n.app__title-subtitle {\n  font-size: .5em;\n}\n\npath {\n  fill: transparent;\n}\n\ntext {\n  fill: #FF9800;\n}\n\nlabel {\n  width: 300px;\n  display: inline-block;\n}\n\n.box {\n  max-width: 600px;\n  border-radius: 20px;\n  margin: 0 auto 20px;\n  background: rgba(0,0,0, .3);\n  box-shadow: rgba(0,0,0,.3) 0 0 20px 26px;\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLGlGQUFpRjtFQUNqRiw0Q0FBNEM7O0FBRTlDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlDQUF5QztFQUN6QyxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbioge1xuICBmb250LWZhbWlseTogXCJQYWxhdGlub1wiLCBzZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFwcCB7XG4gIG1hcmdpbjogNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgycHgpO1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDE1LDIyLCAuNSk7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MmRlZywgcmdiYSgzOCwgMiwgMiwgMC4yKSwgcmdiYSg5LCAyMiwgNTksIC45KSk7Ki9cbiAgLypib3gtc2hhZG93OiByZ2JhKDAsMCwwLC41KSAwIDAgMjBweCAyNnB4OyovXG5cbn1cblxuLmFwcC10aXRsZS13cmFwcGVyIHtcbiAgcGVyc3BlY3RpdmU6IDUwMHB4O1xufVxuXG4uYXBwX190aXRsZSB7XG4gIC8qdGV4dC1zaGFkb3c6IHJnYmEoMCwwLDAsLjUpIDAgOHB4IDZweDsqL1xuICAvKnRyYW5zZm9ybTogcm90YXRlM2QoMC45LCAwLCAwLCAxOWRlZyk7Ki9cbiAgdGV4dC1zaGFkb3c6IHJnYmEoMCwwLDAsLjUpIDAgOHB4IDZweDtcbiAgdGV4dC1vdXRsaW5lOiAjRkZGRkZGIDFweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcbn1cblxuLmFwcF9fdGl0bGUtc3VidGl0bGUge1xuICBmb250LXNpemU6IC41ZW07XG59XG5cbnBhdGgge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dCB7XG4gIGZpbGw6ICNGRjk4MDA7XG59XG5cbmxhYmVsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5ib3gge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAuMyk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjMpIDAgMCAyMHB4IDI2cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.morale = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](6);
          this.extraDamagePerFail = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0);
          this.panicked = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
          this.panicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            morale: this.morale,
            panicked: this.panicked,
            extraDamagePerFail: this.extraDamagePerFail
          });
          this.amountOfIterations = 100000;
          this.iterationArray = Array.from(Array(this.amountOfIterations).keys());
          this.full$ = this.panicForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.panicForm.value));
          this.resRough$ = this.full$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (fullForm) {
            return _this.iterationArray.map(function (c) {
              var res1 = _this.d(6);

              var res2 = _this.d(6);

              if (fullForm.panicked && res1 + res2 >= fullForm.morale) {
                res1 = res1 > fullForm.morale / 2 ? _this.d(6) : res1;
                res2 = res2 > fullForm.morale / 2 ? _this.d(6) : res2;
              }

              return res1 + res2 < fullForm.morale;
            });
          }));
          this.res$ = this.res();
          this.dmg$ = this.dmg();
          this.dmgAvg = 2;
          this.dmgAvgPanicked = 7 / 3;
        }

        _createClass(AppComponent, [{
          key: "dmg",
          value: function dmg() {
            var _this2 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.resRough$, this.full$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  results = _ref2[0],
                  form = _ref2[1];

              var successes = results.filter(function (r) {
                return r;
              }).length;
              var damagePerFail = (form.panicked ? _this2.dmgAvgPanicked : _this2.dmgAvg) + form.extraDamagePerFail;
              return successes * damagePerFail / _this2.amountOfIterations;
            }));
          }
        }, {
          key: "res",
          value: function res() {
            return this.resRough$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resArray) {
              var successesCount = resArray.filter(function (r) {
                return r;
              }).length;
              return successesCount * 100 / resArray.length;
            }));
          }
        }, {
          key: "d",
          value: function d(sides) {
            return 1 + Math.floor(Math.random() * sides);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "my-app",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app\">\n  <div class=\"app-title-wrapper\">\n    <h1 class=\"app__title\">The Panic-Tester\n      <br><span class=\"app__title-subtitle\">For ASOIAF-TMG</span>\n    </h1>\n  </div>\n  <div class=\"box\" [formGroup]=\"panicForm\">\n    <h4>Morale of target (including modifiers)</h4>\n    <mat-button-toggle-group formControlName=\"morale\" aria-label=\"Morale of target (including modifiers)\">\n      <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n      <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n      <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n      <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n      <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n      <mat-button-toggle [value]=\"7\">7</mat-button-toggle>\n      <mat-button-toggle [value]=\"8\">8</mat-button-toggle>\n      <mat-button-toggle [value]=\"9\">9</mat-button-toggle>\n      <mat-button-toggle [value]=\"10\">10</mat-button-toggle>\n      <mat-button-toggle [value]=\"11\">11</mat-button-toggle>\n      <mat-button-toggle [value]=\"12\">12</mat-button-toggle>\n    </mat-button-toggle-group>\n\n    <div>\n      <h4>Panic token</h4>\n      <mat-slide-toggle formControlName=\"panicked\">Panicked</mat-slide-toggle>\n    </div>\n\n    <div>\n\n      <h4>Extra Wounds per failed test</h4>\n      <mat-button-toggle-group formControlName=\"extraDamagePerFail\" aria-label=\"Extra Wounds per failed test\">\n        <mat-button-toggle [value]=\"0\">0</mat-button-toggle>\n        <mat-button-toggle [value]=\"1\">1</mat-button-toggle>\n        <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n        <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n        <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n        <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n        <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n      </mat-button-toggle-group>\n\n    </div>\n\n\n\n  </div>\n\n  <div class=\"box\">\n\n    <h3>{{res$ | async | number:'1.0-3'}} % probability the target fails the test</h3>\n\n    <h2>{{dmg$ | async | number:'1.0-3' }} average wounds caused on the target</h2>\n\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map