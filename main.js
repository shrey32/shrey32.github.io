(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/about/about.component */ "./src/app/views/about/about.component.ts");
/* harmony import */ var _views_work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/work/work.component */ "./src/app/views/work/work.component.ts");
/* harmony import */ var _views_career_career_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/career/career.component */ "./src/app/views/career/career.component.ts");
/* harmony import */ var _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/skills/skills.component */ "./src/app/views/skills/skills.component.ts");
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/contact/contact.component */ "./src/app/views/contact/contact.component.ts");








class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-career");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact");
    } }, directives: [_views_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _views_work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"], _views_career_career_component__WEBPACK_IMPORTED_MODULE_4__["CareerComponent"], _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/contact/contact.component */ "./src/app/views/contact/contact.component.ts");
/* harmony import */ var _views_work_work_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/work/work.component */ "./src/app/views/work/work.component.ts");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/about/about.component */ "./src/app/views/about/about.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _views_career_career_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/career/career.component */ "./src/app/views/career/career.component.ts");
/* harmony import */ var _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/skills/skills.component */ "./src/app/views/skills/skills.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _views_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        _views_work_work_component__WEBPACK_IMPORTED_MODULE_1__["WorkComponent"],
        _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
        _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"],
        _views_career_career_component__WEBPACK_IMPORTED_MODULE_4__["CareerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _views_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
                    _views_work_work_component__WEBPACK_IMPORTED_MODULE_1__["WorkComponent"],
                    _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
                    _views_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"],
                    _views_career_career_component__WEBPACK_IMPORTED_MODULE_4__["CareerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/enums/view-type.ts":
/*!************************************!*\
  !*** ./src/app/enums/view-type.ts ***!
  \************************************/
/*! exports provided: ViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return ViewType; });
var ViewType;
(function (ViewType) {
    ViewType[ViewType["ABOUT"] = 0] = "ABOUT";
    ViewType[ViewType["WORK"] = 1] = "WORK";
    ViewType[ViewType["SKILLS"] = 2] = "SKILLS";
    ViewType[ViewType["CONTACT"] = 3] = "CONTACT";
    ViewType[ViewType["CAREER"] = 4] = "CAREER";
})(ViewType || (ViewType = {}));


/***/ }),

/***/ "./src/app/models/state.ts":
/*!*********************************!*\
  !*** ./src/app/models/state.ts ***!
  \*********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
class State {
}


/***/ }),

/***/ "./src/app/services/view-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/view-service.ts ***!
  \******************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/state */ "./src/app/models/state.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./src/app/utils/constants.ts");









class ViewService {
    constructor() {
        this.setViewType = (viewType) => {
            if (!this.state)
                this.state = new _models_state__WEBPACK_IMPORTED_MODULE_2__["State"]();
            this.state.viewType = viewType;
            if (viewType == _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].ABOUT) {
                this.viewTypeStr = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_ABOUT"];
            }
            else if (viewType == _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].WORK) {
                this.viewTypeStr = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_WORK"];
            }
            else if (viewType == _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].SKILLS) {
                this.viewTypeStr = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_SKILLS"];
            }
            else if (viewType == _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].CAREER) {
                this.viewTypeStr = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_CAREER"];
            }
            else if (viewType == _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].CONTACT) {
                this.viewTypeStr = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_CONTACT"];
            }
        };
        this.getViewType = () => {
            return this.state.viewType;
        };
        this.getViewTypeStr = () => {
            return this.viewTypeStr;
        };
    }
}
ViewService.ɵfac = function ViewService_Factory(t) { return new (t || ViewService)(); };
ViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewService, factory: ViewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: VIEW_ABOUT, VIEW_WORK, VIEW_SKILLS, VIEW_CONTACT, VIEW_CAREER, views, WORK_EXPERIENCE, SKILL_SET, OTHER_WORKS, SOCIAL_MEDIA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_ABOUT", function() { return VIEW_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_WORK", function() { return VIEW_WORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_SKILLS", function() { return VIEW_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_CONTACT", function() { return VIEW_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_CAREER", function() { return VIEW_CAREER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "views", function() { return views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORK_EXPERIENCE", function() { return WORK_EXPERIENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILL_SET", function() { return SKILL_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER_WORKS", function() { return OTHER_WORKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_MEDIA", function() { return SOCIAL_MEDIA; });
const VIEW_ABOUT = "ABOUT";
const VIEW_WORK = "WORK";
const VIEW_SKILLS = "SKILLS";
const VIEW_CONTACT = "CONTACT";
const VIEW_CAREER = "CAREER";
const views = [{ name: VIEW_ABOUT, label: "About" }, { name: VIEW_WORK, label: "Work" }, { name: VIEW_CAREER, label: "Career" }, { name: VIEW_CONTACT, label: "Contact" }];
const WORK_EXPERIENCE = [
    {
        companyName: "EMBL-EBI",
        tenure: "(April-2020 to Present)",
        designation: "Fullstack Software Engineer",
        image: "../../assets/embl.png"
    }, {
        companyName: "Morgan Stanley",
        tenure: "(August-2017 to April-2020)",
        designation: "Fullstack Software Engineer",
        image: "../../assets/MS.png"
    }, {
        companyName: "Amdocs",
        tenure: "(March-2017 to August-2017)",
        designation: "Software Engineer",
        image: "../../assets/amdocs.png"
    }, {
        companyName: "Impetus",
        tenure: "(August-2015 to March-2017)",
        designation: "Fullstack Software Engineer",
        image: "../../assets/impetus.png"
    }, {
        companyName: "Divergent",
        tenure: "(Janurary-2014 to August-2015)",
        designation: "Software Engineer",
        image: "../../assets/divergent.png"
    }
];
const SKILL_SET = [
    {
        skillName: "Java",
        level: "95%"
    }, {
        skillName: "Spring Boot",
        level: "90%"
    }, {
        skillName: "Angular, React",
        level: "80%"
    }, {
        skillName: "SQL",
        level: "80%"
    }, {
        skillName: "Javascript, HTML, CSS",
        level: "85%"
    }
];
const OTHER_WORKS = [{ projectName: "Node Chat App", "description": "Simple Chat application using NodeJS Server and Angular Material Design", repoURL: "https://github.com/shrey32/node-chat" }];
const SOCIAL_MEDIA = [
    {
        name: "Github",
        link: "https://www.github.com/shrey32",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
    }, {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/shrey-sharma-a6b906105/",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
    }, {
        name: "Facebook",
        link: "https://www.facebook.com/shreyyyy",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg"
    }, {
        name: "Twitter",
        link: "https://twitter.com/shrey_mode",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
    }, {
        name: "Instagram",
        link: "https://www.instagram.com/me_shreys/",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg"
    }
];


/***/ }),

/***/ "./src/app/views/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/view-service */ "./src/app/services/view-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AboutComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Shrey Sharma ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fullstack Developer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hi, I am Shrey. I am a Fullstack developer experienced in Java, Spring Frameworks, Angular. I also have mobile development experience in Android.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_section_0_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onLinkClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to know more about my work.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.type = _enums_view_type__WEBPACK_IMPORTED_MODULE_1__["ViewType"].ABOUT;
        this.onLinkClick = () => {
            this.viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_1__["ViewType"].WORK);
        };
    }
    ngOnInit() {
        console.log("About Component Initialized");
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 1, vars: 1, consts: [["class", "text-gray-700 body-font", 4, "ngIf"], [1, "text-gray-700", "body-font"], [1, "container", "mx-auto", "flex", "px-5", "py-24", "md:flex-row", "flex-col", "items-center", 2, "padding-top", "0px", "padding-bottom", "0px"], [1, "lg:max-w-lg", "lg:w-full", "md:w-1/2", "w-5/6", "mb-10", "md:mb-0"], ["alt", "Shrey", "src", "../../assets/profile-pic.jpg", 1, "object-cover", "object-center", "rounded"], [1, "lg:flex-grow", "md:w-1/2", "lg:pl-24", "md:pl-16", "flex", "flex-col", "md:items-start", "md:text-left", "items-center", "text-center"], [1, "title-font", "sm:text-4xl", "text-3xl", "mb-4", "font-medium", "text-gray-900"], [1, "hidden", "lg:inline-block"], [1, "mb-8", "leading-relaxed"], [1, "flex", "justify-center"], [1, "text-orange-500", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_section_0_Template, 16, 0, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewService.getViewType() == ctx.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html'
            }]
    }], function () { return [{ type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/career/career.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/career/career.component.ts ***!
  \**************************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/view-service */ "./src/app/services/view-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CareerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idx_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", experience_r2.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", experience_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r2.companyName + " " + experience_r2.tenure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](experience_r2.designation);
} }
function CareerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Professional Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CareerComponent_div_0_div_6_Template, 13, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.workExperience);
} }
class CareerComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.type = _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].CAREER;
        this.workExperience = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["WORK_EXPERIENCE"];
    }
    ngOnInit() {
    }
}
CareerComponent.ɵfac = function CareerComponent_Factory(t) { return new (t || CareerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"])); };
CareerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CareerComponent, selectors: [["app-career"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-gray-700", "body-font"], [1, "container", "px-5", "py-24", "mx-auto", "flex", "flex-wrap", 2, "padding-top", "0px", "padding-bottom", "0px"], [1, "lg:w-1/2", "w-full", "mb-6", "lg:mb-0"], [1, "sm:text-3xl", "text-2xl", "font-medium", "title-font", "mb-2", "text-gray-900"], ["class", "flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto", 4, "ngFor", "ngForOf"], [1, "flex", "relative", "pt-10", "pb-20", "sm:items-center", "md:w-2/3", "mx-auto"], [1, "h-full", "w-6", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "h-full", "w-1", "bg-gray-200", "pointer-events-none"], [1, "flex-shrink-0", "w-6", "h-6", "rounded-full", "mt-10", "sm:mt-0", "inline-flex", "items-center", "justify-center", "bg-orange-500", "text-white", "relative", "z-10", "title-font", "font-medium", "text-sm"], [1, "flex-grow", "md:pl-8", "pl-6", "flex", "sm:items-center", "items-start", "flex-col", "sm:flex-row"], [1, "flex-shrink-0", "w-24", "h-24", "bg-orange-100", "text-orange-500", "rounded-full", "inline-flex", "items-center", "justify-center"], [1, "object-cover", "object-center", "rounded", 3, "alt", "src"], [1, "flex-grow", "sm:pl-6", "mt-6", "sm:mt-0"], [1, "font-medium", "title-font", "text-gray-900", "mb-1", "text-xl"], [1, "leading-relaxed"]], template: function CareerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CareerComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewService.getViewType() == ctx.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CareerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-career',
                templateUrl: './career.component.html'
            }]
    }], function () { return [{ type: _services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/smtp.js */ "./src/assets/js/smtp.js");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/view-service */ "./src/app/services/view-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


//declare let Email: any;





function ContactComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cambridge, United Kingdom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EMAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "sharmashrey032@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PHONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "123-456-7890");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_section_0_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_section_0_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_section_0_Template_textarea_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_section_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendMail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Thanks for visiting my website, feel free to contact me for work, computer games and other gossips :)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.message);
} }
class ContactComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.type = _enums_view_type__WEBPACK_IMPORTED_MODULE_1__["ViewType"].CONTACT;
        this.sendMail = () => {
            const validationInfo = this.validate();
            if (validationInfo.error) {
                alert(validationInfo.msg);
            }
            else {
                _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_2__["Email"].send({
                    Host: 'smtp.elasticemail.com',
                    Username: 'sharmashrey032@gmail.com',
                    Password: '523A1DEA530787576154958814EBC7AC6F22',
                    To: 'sharmashrey032@gmail.com',
                    From: 'sharmashrey032@gmail.com',
                    Subject: 'Email From ' + this.name + " (" + this.email + ")",
                    Body: this.message
                }).then(message => { alert(message); this.name = ''; this.email = ''; this.message = ''; });
            }
        };
        this.validate = () => {
            if (!this.name || this.name.trim() === '') {
                return { error: true, msg: "Please enter Name" };
            }
            else if (!this.email || this.email.trim() === '') {
                return { error: true, msg: "Please enter Email" };
            }
            else if (!this.validateEmail(this.email)) {
                return { error: true, msg: "Email is invalid" };
            }
            else if (!this.message || this.message.trim() === '') {
                return { error: true, msg: "Please enter message" };
            }
            else {
                return { error: false };
            }
        };
        this.validateEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
    }
    ngOnInit() {
        console.log("Contact Component Initialized");
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 1, vars: 1, consts: [["class", "text-gray-700 body-font relative", 4, "ngIf"], [1, "text-gray-700", "body-font", "relative"], [1, "container", "px-5", "py-24", "mx-auto", "flex", "sm:flex-no-wrap", "flex-wrap", 2, "padding-top", "0px", "padding-bottom", "0px"], [1, "lg:w-2/3", "md:w-1/2", "bg-gray-300", "rounded-lg", "overflow-hidden", "sm:mr-10", "p-10", "flex", "items-end", "justify-start", "relative"], ["width", "100%", "height", "100%", "frameborder", "0", "title", "map", "marginheight", "0", "marginwidth", "0", "scrolling", "no", "src", "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Cambridge+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed", 1, "absolute", "inset-0", 2, "filter", "grayscale(1) contrast(1.2) opacity(0.4)"], [1, "bg-white", "relative", "flex", "flex-wrap", "py-6"], [1, "lg:w-1/2", "px-6"], [1, "title-font", "font-medium", "text-gray-900", "tracking-widest", "text-sm"], [1, "leading-relaxed"], [1, "lg:w-1/2", "px-6", "mt-4", "lg:mt-0"], [1, "text-orange-500", "leading-relaxed"], [1, "title-font", "font-medium", "text-gray-900", "tracking-widest", "text-sm", "mt-4"], [1, "lg:w-1/3", "md:w-1/2", "bg-white", "flex", "flex-col", "md:ml-auto", "w-full", "md:py-8", "mt-8", "md:mt-0"], [1, "text-gray-900", "text-lg", "mb-1", "font-medium", "title-font"], ["placeholder", "Name", "type", "text", 1, "bg-white", "rounded", "border", "border-gray-400", "focus:outline-none", "focus:border-orange-500", "text-base", "px-4", "py-2", "mb-4", 3, "ngModel", "ngModelChange"], ["placeholder", "Email", "type", "email", 1, "bg-white", "rounded", "border", "border-gray-400", "focus:outline-none", "focus:border-orange-500", "text-base", "px-4", "py-2", "mb-4", 3, "ngModel", "ngModelChange"], ["placeholder", "Message", 1, "bg-white", "rounded", "border", "border-gray-400", "focus:outline-none", "h-32", "focus:border-orange-500", "text-base", "px-4", "py-2", "mb-4", "resize-none", 3, "ngModel", "ngModelChange"], [1, "text-white", "bg-orange-500", "border-0", "py-2", "px-6", "focus:outline-none", "hover:bg-orange-600", "rounded", "text-lg", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactComponent_section_0_Template, 29, 3, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewService.getViewType() == ctx.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html'
            }]
    }], function () { return [{ type: _services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/view-service */ "./src/app/services/view-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = function (a0, a1) { return { "border-orange-500 bg-orange-500 text-white": a0, "hover:border-gray-200 hover:bg-gray-200 text-orange-500": a1 }; };
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const view_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onHeaderMenuClick(view_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const view_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r0.viewService.getViewTypeStr() === view_r2.name, ctx_r0.viewService.getViewTypeStr() !== view_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](view_r2.label);
} }
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", social_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", social_r5.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class HeaderComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.headerViews = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["views"];
        this.socialMedia = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["SOCIAL_MEDIA"];
        this.onHeaderMenuClick = (viewType) => {
            if (viewType == _utils_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_ABOUT"])
                this.viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].ABOUT);
            else if (viewType == _utils_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_WORK"])
                this.viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].WORK);
            else if (viewType == _utils_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_SKILLS"])
                this.viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].SKILLS);
            else if (viewType == _utils_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_CAREER"])
                this.viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].CAREER);
            else if (viewType == _utils_constants__WEBPACK_IMPORTED_MODULE_2__["VIEW_CONTACT"])
                this.viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].CONTACT);
        };
        viewService.setViewType(_enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].ABOUT);
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 2, consts: [[1, "text-gray-700", "body-font"], [1, "container", "mx-auto", "flex", "flex-wrap", "p-5", "flex-col", "md:flex-row", "items-center"], [1, "flex", "title-font", "font-medium", "items-center", "text-gray-900", "mb-4", "md:mb-0"], [1, "ml-3", "text-xl"], [1, "md:mr-auto", "md:ml-4", "md:py-1", "md:pl-4", "md:border-l", "md:border-gray-400", "flex", "flex-wrap", "items-center", "text-base", "justify-center"], [1, "flex"], ["class", "mr-3", 4, "ngFor", "ngForOf"], [1, "inline-flex", "sm:ml-auto", "sm:mt-0", "mt-4", "justify-center", "sm:justify-start"], ["class", "text-gray-500", "style", "margin-right: 10px; ", 3, "href", 4, "ngFor", "ngForOf"], [1, "mr-3"], ["href", "#", 1, "inline-block", "border", "border-white", "rounded", "py-1", "px-3", 3, "ngClass", "click"], [1, "text-gray-500", 2, "margin-right", "10px", 3, "href"], ["height", "24 ", "width", "24 ", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Shrey Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 5, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.headerViews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.socialMedia);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html'
            }]
    }], function () { return [{ type: _services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/skills/skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/view-service */ "./src/app/services/view-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SkillsComponent_section_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", skill_r2.skillName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", skill_r2.level, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", skill_r2.level);
} }
function SkillsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SkillsComponent_section_0_div_2_Template, 10, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.skillSet);
} }
class SkillsComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.type = _enums_view_type__WEBPACK_IMPORTED_MODULE_1__["ViewType"].SKILLS;
        this.skillSet = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["SKILL_SET"];
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 1, vars: 1, consts: [["class", "text-gray-700 body-font", 4, "ngIf"], [1, "text-gray-700", "body-font"], [1, "container", "px-5", "py-12", "mx-auto", 2, "width", "60%"], ["class", "relative pt-1", 4, "ngFor", "ngForOf"], [1, "relative", "pt-1"], [1, "flex", "mb-2", "items-center", "justify-between"], [1, "text-xs", "font-semibold", "inline-block", "py-1", "px-2", "rounded-full", "text-orange-500", "bg-orange-200"], [1, "text-right"], [1, "text-xs", "font-semibold", "inline-block", "text-orange-500"], [1, "overflow-hidden", "h-2", "mb-4", "text-xs", "flex", "rounded", "bg-orange-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-orange-500"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SkillsComponent_section_0_Template, 3, 1, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewService.getViewType() == ctx.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html'
            }]
    }], function () { return [{ type: _services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/work/work.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/work/work.component.ts ***!
  \**********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _enums_view_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../enums/view-type */ "./src/app/enums/view-type.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/view-service */ "./src/app/services/view-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function WorkComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r2.repoURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function WorkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WorkComponent_div_0_div_6_Template, 13, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
class WorkComponent {
    constructor(viewService) {
        this.viewService = viewService;
        this.type = _enums_view_type__WEBPACK_IMPORTED_MODULE_0__["ViewType"].WORK;
        this.projects = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["OTHER_WORKS"];
    }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-gray-700", "body-font"], [1, "container", "px-5", "py-24", "mx-auto", "flex", "flex-wrap", 2, "padding-top", "0px", "padding-bottom", "0px"], [1, "lg:w-1/2", "w-full", "mb-6", "lg:mb-0"], [1, "sm:text-3xl", "text-2xl", "font-medium", "title-font", "mb-2", "text-gray-900"], ["class", "flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "lg:w-3/5", "mx-auto", "border-b", "pb-10", "mb-10", "border-gray-200", "sm:flex-row", "flex-col"], [1, "sm:w-32", "sm:h-32", "h-20", "w-20", "sm:mr-10", "inline-flex", "items-center", "justify-center", "rounded-full", "bg-orange-100", "text-orange-500", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "sm:w-16", "sm:h-16", "w-10", "h-10"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], [1, "flex-grow", "sm:text-left", "text-center", "mt-6", "sm:mt-0"], [1, "text-gray-900", "text-lg", "title-font", "font-medium", "mb-2"], [1, "leading-relaxed", "text-base"], [1, "mt-3", "text-orange-500", "inline-flex", "items-center", 3, "href"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-2"], ["d", "M5 12h14M12 5l7 7-7 7"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WorkComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewService.getViewType() == ctx.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html'
            }]
    }], function () { return [{ type: _services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/js/smtp.js":
/*!*******************************!*\
  !*** ./src/assets/js/smtp.js ***!
  \*******************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
/* SmtpJS.com - v3.0.0 */
const Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
        })
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shrey\git\shrey32.github.io\shrey32.github.io\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map