(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nsokolowski/WORKSPACE/asoiaf/asoiaf-panic-tester/src/main.ts */"zUnb");


/***/ }),

/***/ "45Wa":
/*!*******************************************************************!*\
  !*** ./src/app/attacker-settings/attacker-settings.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRhY2tlci1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "8LaI":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/defender-settings/defender-settings.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\" [formGroup]=\"defenderForm\">\n    <div class=\"u-mb\">\n    <h4>Morale of defender</h4>\n    <mat-button-toggle-group formControlName=\"morale\" aria-label=\"Morale of defender\">\n        <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n        <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n        <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n        <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n        <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n        <mat-button-toggle [value]=\"7\">7</mat-button-toggle>\n        <mat-button-toggle [value]=\"8\">8</mat-button-toggle>\n        <mat-button-toggle [value]=\"9\">9</mat-button-toggle>\n        <mat-button-toggle [value]=\"10\">10</mat-button-toggle>\n        <mat-button-toggle [value]=\"11\">11</mat-button-toggle>\n        <mat-button-toggle [value]=\"12\">12</mat-button-toggle>\n    </mat-button-toggle-group>\n    </div>\n    <div class=\"u-mb\">\n        <h4>Def-Value of defender</h4>\n        <mat-button-toggle-group formControlName=\"def\" aria-label=\"Def-Value of defender\">\n            <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n            <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n            <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n            <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n            <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n        </mat-button-toggle-group>\n    </div>\n    <div>\n        <mat-slide-toggle formControlName=\"panicked\">Panicked</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n        <mat-slide-toggle formControlName=\"vulnerable\">Vulnerable</mat-slide-toggle>\n    </div>\n</div>\n");

/***/ }),

/***/ "8tzo":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attacker-settings/attacker-settings.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\" [formGroup]=\"attackerForm\">\n    <h4>Dice</h4>\n    <mat-button-toggle-group formControlName=\"diceCount\" aria-label=\"Morale of defender\">\n        <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n        <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n        <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n        <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n        <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n        <mat-button-toggle [value]=\"7\">7</mat-button-toggle>\n        <mat-button-toggle [value]=\"8\">8</mat-button-toggle>\n        <mat-button-toggle [value]=\"9\">9</mat-button-toggle>\n    </mat-button-toggle-group>\n\n    <div>\n        <h4>To Hit</h4>\n        <mat-button-toggle-group formControlName=\"toHit\" aria-label=\"Def-Value of defender\">\n            <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n            <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n            <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n            <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n            <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n        </mat-button-toggle-group>\n    </div>\n\n    <div class=\"u-mb\">\n        <h4>Extra damage on failed panic-test</h4>\n        <mat-button-toggle-group formControlName=\"extradDamageOnFailedPanictest\" >\n            <mat-button-toggle [value]=\"0\">0</mat-button-toggle>\n            <mat-button-toggle [value]=\"1\">1</mat-button-toggle>\n            <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n            <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n            <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n        </mat-button-toggle-group>\n    </div>\n\n\n    <div class=\"u-mb\">\n        <mat-slide-toggle formControlName=\"reroll\">Reroll</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n    </div>\n\n    <div class=\"u-mb\">\n        <mat-slide-toggle formControlName=\"weakened\">Weakened</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n    </div>\n\n    <div>\n        <mat-slide-toggle formControlName=\"sundering\">Sundering</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n        <mat-slide-toggle formControlName=\"critBlow\">Critical Blow</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n        <mat-slide-toggle formControlName=\"vicious\">Vicious</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n        <mat-slide-toggle formControlName=\"precision\">precision</mat-slide-toggle>&nbsp;&nbsp;&nbsp;&nbsp;\n    </div>\n</div>\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\n* {\n  font-family: \"Palatino\", serif;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n.app {\n  margin: 40px;\n  padding: 20px;\n  min-height: calc(100vh - 82px);\n  color: #FFF;\n  /*text-align: center;*/\n  border: 1px solid rgba(255,255,255,.5);\n  background: rgba(0,15,22, .5);\n  /*background: linear-gradient(182deg, rgba(38, 2, 2, 0.2), rgba(9, 22, 59, .9));*/\n  /*box-shadow: rgba(0,0,0,.5) 0 0 20px 26px;*/\n\n}\n\n.app-title-wrapper {\n  perspective: 500px;\n}\n\n.app__title {\n  /*text-shadow: rgba(0,0,0,.5) 0 8px 6px;*/\n  /*transform: rotate3d(0.9, 0, 0, 19deg);*/\n  text-shadow: rgba(0,0,0,.5) 0 8px 6px;\n  text-outline: #FFFFFF 1px;\n  transform-origin: 50% 100%;\n  font-size: 5vw;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: .05em;\n}\n\n.app__title-subtitle {\n  font-size: .5em;\n}\n\n.p {\n  padding: 20px;\n}\n\n.u-mb {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLGlGQUFpRjtFQUNqRiw0Q0FBNEM7O0FBRTlDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlDQUF5QztFQUN6QyxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbioge1xuICBmb250LWZhbWlseTogXCJQYWxhdGlub1wiLCBzZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFwcCB7XG4gIG1hcmdpbjogNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgycHgpO1xuICBjb2xvcjogI0ZGRjtcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwxNSwyMiwgLjUpO1xuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODJkZWcsIHJnYmEoMzgsIDIsIDIsIDAuMiksIHJnYmEoOSwgMjIsIDU5LCAuOSkpOyovXG4gIC8qYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNSkgMCAwIDIwcHggMjZweDsqL1xuXG59XG5cbi5hcHAtdGl0bGUtd3JhcHBlciB7XG4gIHBlcnNwZWN0aXZlOiA1MDBweDtcbn1cblxuLmFwcF9fdGl0bGUge1xuICAvKnRleHQtc2hhZG93OiByZ2JhKDAsMCwwLC41KSAwIDhweCA2cHg7Ki9cbiAgLyp0cmFuc2Zvcm06IHJvdGF0ZTNkKDAuOSwgMCwgMCwgMTlkZWcpOyovXG4gIHRleHQtc2hhZG93OiByZ2JhKDAsMCwwLC41KSAwIDhweCA2cHg7XG4gIHRleHQtb3V0bGluZTogI0ZGRkZGRiAxcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICBmb250LXNpemU6IDV2dztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG59XG5cbi5hcHBfX3RpdGxlLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAuNWVtO1xufVxuXG4ucCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi51LW1iIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "JSeB":
/*!*************************************************!*\
  !*** ./src/app/sequence/sequence.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\nlabel {\n    width: 300px;\n    display: inline-block;\n}\n\n.box {\n    max-width: 600px;\n    border-radius: 20px;\n    margin: 0 auto 20px;\n    background: rgba(0,0,0, .3);\n    box-shadow: rgba(0,0,0,.3) 0 0 20px 26px;\n    padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLGFBQWE7QUFDakIiLCJmaWxlIjoic2VxdWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5sYWJlbCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJveCB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgLjMpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjMpIDAgMCAyMHB4IDI2cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "PEj0":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"result\" *ngIf=\"wounds$\">\n    <h1>Avg. Wounds after {{amountOfIterations | number:'1.0-2' }} Fights: {{wounds$ | async | number:'1.0-2'}}</h1>\n</div>\n\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let AppComponent = class AppComponent {
    constructor() {
        this.attackerSubject1$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.attackerSubject2$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.defenderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.defenderSubject$.subscribe(v => console.log('defenderSubject$', v));
        this.attackerSubject1$.subscribe(v => console.log('attackerSubject$', v));
        this.attackerSubject2$.subscribe(v => console.log('attackerSubject$', v));
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "my-app",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\" style=\"text-align: center\">\n  <div class=\"app-title-wrapper\">\n    <h1 class=\"app__title\">Compare attacks\n      <br><span class=\"app__title-subtitle\">For ASOIAF-TMG</span>\n    </h1>\n  </div>\n\n\n  <div class=\"p\">\n    <app-defender-settings [defenderSubject$]=\"defenderSubject$\"></app-defender-settings>\n  </div>\n\n  <hr>\n\n  <div>\n    <div style=\"display: inline-block; width: 50%; border-right: 1px solid\">\n      <div class=\"p\">\n        <h2>Attack Option 1</h2>\n        <app-attacker-settings [attackerSubject$]=\"attackerSubject1$\"></app-attacker-settings>\n        <div *ngIf=\"defenderSubject$.getValue() && attackerSubject1$.getValue()\">\n          <app-result  [defender$]=\"defenderSubject$\" [attacker$]=\"attackerSubject1$\"></app-result>\n        </div>\n      </div>\n\n    </div>\n    <div style=\"display: inline-block; width: 50%\">\n      <div class=\"p\">\n        <h2>Attack Option 2</h2>\n        <app-attacker-settings [attackerSubject$]=\"attackerSubject2$\"></app-attacker-settings>\n        <div *ngIf=\"defenderSubject$.getValue() && attackerSubject1$.getValue()\">\n          <app-result [defender$]=\"defenderSubject$\" [attacker$]=\"attackerSubject2$\"></app-result>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _sequence_sequence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequence/sequence.component */ "w2ZS");
/* harmony import */ var _defender_settings_defender_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defender-settings/defender-settings.component */ "rctn");
/* harmony import */ var _attacker_settings_attacker_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attacker-settings/attacker-settings.component */ "ZzlX");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./result/result.component */ "nNT0");

















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"]
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sequence_sequence_component__WEBPACK_IMPORTED_MODULE_13__["SequenceComponent"], _defender_settings_defender_settings_component__WEBPACK_IMPORTED_MODULE_14__["DefenderSettingsComponent"], _attacker_settings_attacker_settings_component__WEBPACK_IMPORTED_MODULE_15__["AttackerSettingsComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_16__["ResultComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZzlX":
/*!******************************************************************!*\
  !*** ./src/app/attacker-settings/attacker-settings.component.ts ***!
  \******************************************************************/
/*! exports provided: AttackerSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackerSettingsComponent", function() { return AttackerSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_attacker_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./attacker-settings.component.html */ "8tzo");
/* harmony import */ var _attacker_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attacker-settings.component.css */ "45Wa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AttackerSettingsComponent = class AttackerSettingsComponent {
    constructor() {
        this.diceCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](7);
        this.toHit = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](4);
        this.extradDamageOnFailedPanictest = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0);
        this.weakened = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.sundering = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.critBlow = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.vicious = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.precision = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.reroll = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.attackerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            diceCount: this.diceCount,
            toHit: this.toHit,
            weakened: this.weakened,
            sundering: this.sundering,
            critBlow: this.critBlow,
            vicious: this.vicious,
            precision: this.precision,
            reroll: this.reroll,
            extradDamageOnFailedPanictest: this.extradDamageOnFailedPanictest
        });
        this.full$ = this.attackerForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this.attackerForm.value));
    }
    ngOnInit() {
        this.full$.subscribe(val => this.attackerSubject$.next(val));
    }
};
AttackerSettingsComponent.ctorParameters = () => [];
AttackerSettingsComponent.propDecorators = {
    attackerSubject$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AttackerSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-attacker-settings',
        template: _raw_loader_attacker_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_attacker_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AttackerSettingsComponent);



/***/ }),

/***/ "c+cB":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".result {\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdCB7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
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


/***/ }),

/***/ "nNT0":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./result.component.html */ "PEj0");
/* harmony import */ var _result_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result.component.css */ "c+cB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let ResultComponent = class ResultComponent {
    constructor() {
        this.amountOfIterations = 200000;
        this.iterationArray = this.arrayFromLength(this.amountOfIterations);
    }
    ngOnInit() {
        this.wounds$ = this.avg();
    }
    avg() {
        return this.iterate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(results => {
            const sum = results.reduce((prev, cur) => prev + cur, 0);
            return sum / this.amountOfIterations;
        }));
    }
    iterate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.attacker$, this.defender$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([attacker, defender]) => {
            return this.iterationArray.map(_ => this.getWounds(attacker, defender));
        }));
    }
    getWounds(attacker, defender) {
        let attackDice = this.rollSequenceD6(attacker.diceCount);
        attackDice = attacker.reroll ? this.reroll(attackDice, attacker.toHit) : attackDice; // reroll
        attackDice = attacker.weakened ? this.reroll(attackDice, attacker.toHit, false) : attackDice; // weakened
        const toDefend = this.toDefend(attackDice, attacker);
        const precisionWounds = this.precisionWounds(attackDice, attacker);
        let defDice = this.rollSequenceD6(toDefend);
        const defence = attacker.sundering ? defender.def + 1 : defender.def;
        defDice = defender.vulnerable ? this.reroll(defDice, defence, false) : defDice;
        const successfulDefended = this.successfulDefended(defDice, defence);
        const totalWounds = toDefend - successfulDefended + precisionWounds;
        return totalWounds > 0 ? totalWounds + this.getPanicDamage(defender, attacker) : 0;
    }
    getPanicDamage(defender, attacker) {
        const targetMorale = attacker.vicious ? Math.min(defender.morale + 2, 12) : defender.morale;
        let res1 = this.d(6);
        let res2 = this.d(6);
        if (defender.panicked && res1 + res2 >= targetMorale) {
            res1 = res1 > targetMorale / 2 ? this.d(6) : res1;
            res2 = res2 > targetMorale / 2 ? this.d(6) : res2;
        }
        return res1 + res2 < targetMorale ? (this.d(3) + attacker.extradDamageOnFailedPanictest) : 0;
    }
    successfulDefended(sequence, target) {
        return sequence.filter(r => r >= target).length;
    }
    precisionWounds(sequence, attacker) {
        const sixes = sequence.filter(r => r === 6).length;
        return attacker.precision ? sixes : 0;
    }
    toDefend(sequence, attacker) {
        const hitsWithoutSixes = sequence.filter(r => r >= attacker.toHit && r !== 6).length;
        const sixes = sequence.filter(r => r === 6).length;
        if (!attacker.critBlow || (attacker.critBlow && attacker.precision)) {
            return hitsWithoutSixes + sixes;
        }
        else {
            return hitsWithoutSixes + (sixes * 2);
        }
    }
    reroll(sequence, target, misses = true) {
        return sequence.map(orig => {
            let d = orig;
            if (misses && orig < target) {
                d = this.d(6);
            }
            if (!misses && orig >= target) {
                d = this.d(6);
            }
            return d;
        });
    }
    rollSequenceD6(length) {
        return this.arrayFromLength(length).map(_ => this.d(6));
    }
    arrayFromLength(length) {
        return Array.from(Array(length).keys());
    }
    d(sides) {
        return 1 + Math.floor(Math.random() * sides);
    }
};
ResultComponent.ctorParameters = () => [];
ResultComponent.propDecorators = {
    attacker$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    defender$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-result',
        template: _raw_loader_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_result_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResultComponent);



/***/ }),

/***/ "rctn":
/*!******************************************************************!*\
  !*** ./src/app/defender-settings/defender-settings.component.ts ***!
  \******************************************************************/
/*! exports provided: DefenderSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefenderSettingsComponent", function() { return DefenderSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_defender_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./defender-settings.component.html */ "8LaI");
/* harmony import */ var _defender_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defender-settings.component.css */ "xKqR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let DefenderSettingsComponent = class DefenderSettingsComponent {
    constructor() {
        this.morale = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](6);
        this.def = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](4);
        this.panicked = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.vulnerable = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.defenderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            morale: this.morale,
            def: this.def,
            panicked: this.panicked,
            vulnerable: this.vulnerable,
        });
        this.full$ = this.defenderForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this.defenderForm.value));
    }
    ngOnInit() {
        this.full$.subscribe(val => this.defenderSubject$.next(val));
    }
};
DefenderSettingsComponent.ctorParameters = () => [];
DefenderSettingsComponent.propDecorators = {
    defenderSubject$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DefenderSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-defender-settings',
        template: _raw_loader_defender_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_defender_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefenderSettingsComponent);



/***/ }),

/***/ "w2ZS":
/*!************************************************!*\
  !*** ./src/app/sequence/sequence.component.ts ***!
  \************************************************/
/*! exports provided: SequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceComponent", function() { return SequenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sequence_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sequence.component.html */ "zJNE");
/* harmony import */ var _sequence_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence.component.css */ "JSeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let SequenceComponent = class SequenceComponent {
    constructor() {
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
        this.full$ = this.panicForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this.panicForm.value));
        this.resRough$ = this.full$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((fullForm) => {
            return this.iterationArray.map(c => {
                let res1 = this.d(6);
                let res2 = this.d(6);
                if (fullForm.panicked && res1 + res2 >= fullForm.morale) {
                    res1 = res1 > fullForm.morale / 2 ? this.d(6) : res1;
                    res2 = res2 > fullForm.morale / 2 ? this.d(6) : res2;
                }
                return res1 + res2 < fullForm.morale;
            });
        }));
        this.res$ = this.res();
        this.dmg$ = this.dmg();
        this.dmgAvg = 2;
        this.dmgAvgPanicked = 7 / 3;
    }
    dmg() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.resRough$, this.full$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([results, form]) => {
            const successes = results.filter(r => r).length;
            const damagePerFail = (form.panicked ? this.dmgAvgPanicked : this.dmgAvg) +
                form.extraDamagePerFail;
            return (successes * damagePerFail) / this.amountOfIterations;
        }));
    }
    res() {
        return this.resRough$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resArray) => {
            const successesCount = resArray.filter(r => r).length;
            return (successesCount * 100) / resArray.length;
        }));
    }
    d(sides) {
        return 1 + Math.floor(Math.random() * sides);
    }
    ngOnInit() { }
};
SequenceComponent.ctorParameters = () => [];
SequenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sequence',
        template: _raw_loader_sequence_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sequence_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SequenceComponent);



/***/ }),

/***/ "xKqR":
/*!*******************************************************************!*\
  !*** ./src/app/defender-settings/defender-settings.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZlbmRlci1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "zJNE":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sequence/sequence.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"box\" [formGroup]=\"panicForm\">\n        <h4>Morale of target (including modifiers)</h4>\n        <mat-button-toggle-group formControlName=\"morale\" aria-label=\"Morale of target (including modifiers)\">\n            <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n            <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n            <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n            <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n            <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n            <mat-button-toggle [value]=\"7\">7</mat-button-toggle>\n            <mat-button-toggle [value]=\"8\">8</mat-button-toggle>\n            <mat-button-toggle [value]=\"9\">9</mat-button-toggle>\n            <mat-button-toggle [value]=\"10\">10</mat-button-toggle>\n            <mat-button-toggle [value]=\"11\">11</mat-button-toggle>\n            <mat-button-toggle [value]=\"12\">12</mat-button-toggle>\n        </mat-button-toggle-group>\n\n        <div>\n            <h4>Panic token</h4>\n            <mat-slide-toggle formControlName=\"panicked\">Panicked</mat-slide-toggle>\n        </div>\n\n        <div>\n\n            <h4>Extra Wounds per failed test</h4>\n            <mat-button-toggle-group formControlName=\"extraDamagePerFail\" aria-label=\"Extra Wounds per failed test\">\n                <mat-button-toggle [value]=\"0\">0</mat-button-toggle>\n                <mat-button-toggle [value]=\"1\">1</mat-button-toggle>\n                <mat-button-toggle [value]=\"2\">2</mat-button-toggle>\n                <mat-button-toggle [value]=\"3\">3</mat-button-toggle>\n                <mat-button-toggle [value]=\"4\">4</mat-button-toggle>\n                <mat-button-toggle [value]=\"5\">5</mat-button-toggle>\n                <mat-button-toggle [value]=\"6\">6</mat-button-toggle>\n            </mat-button-toggle-group>\n\n        </div>\n\n\n\n    </div>\n\n    <div class=\"box\">\n\n        <h3>{{res$ | async | number:'1.0-3'}} % probability the target fails the test</h3>\n\n        <h2>{{dmg$ | async | number:'1.0-3' }} average wounds caused on the target</h2>\n\n    </div>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map