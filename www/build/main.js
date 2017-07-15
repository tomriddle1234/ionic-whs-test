webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 22;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 25;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whs_build_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Statics

// Operators


let HomePage = class HomePage {
    constructor(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        const app = new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["App"]([
            new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["ElementModule"](),
            new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["SceneModule"](),
            new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["DefineModule"]('camera', new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["PerspectiveCamera"]({
                position: new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, 0, 50)
            })),
            new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["RenderingModule"]({ bgColor: 0x162129 }),
            new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["ResizeModule"]() // Make it resizable.
        ]);
        const sphere = new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["Sphere"]({
            geometry: {
                radius: 3,
                widthSegments: 32,
                heightSegments: 32
            },
            material: new __WEBPACK_IMPORTED_MODULE_3_three__["MeshBasicMaterial"]({
                color: 0xF22222,
                wireframe: true
            }),
            position: [0, 10, 0]
        });
        sphere.addTo(app); // Add sphere to world.
        new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["Box"]({
            geometry: {
                width: 10,
                height: 10,
                depth: 10
            },
            material: new __WEBPACK_IMPORTED_MODULE_3_three__["MeshBasicMaterial"]({
                color: 0xF2F2F2,
                wireframe: true
            }),
            rotation: {
                x: -Math.PI / 2
            },
            position: [0, 0, 0]
        }).addTo(app);
        const text = new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["Text"]({
            text: 'hello world',
            parameters: {
                size: 12,
                height: 50,
                curveSegments: 6,
                font: '../gentilis_bold.typeface.fjson',
            },
            material: new __WEBPACK_IMPORTED_MODULE_3_three__["MeshBasicMaterial"]({
                color: 0xffffff
            })
        });
        text.addTo(app).then(self => self.position.set(10, 20, 30));
        app.start(); // Run app.
    }
    getActionGivenUrl(url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //this is not for binary data.
    extractData(res) {
        let body = res.json();
        console.log(res);
        let result = body || {};
        return result;
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Response */]) {
            const body = error.json() || '';
            console.log("Error Raw ", body);
            //   const err = body.error || JSON.stringify(body);
            //   console.log("Error Prcessed 1 ", err) ;
            //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            //return the whole error
            errMsg = body;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/tom/src/ionic-whs-test/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/tom/src/ionic-whs-test/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(26);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let app_component_MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = HomePage;
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
app_component_MyApp = app_component___decorate([
    Object(app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tom/src/ionic-whs-test/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/tom/src/ionic-whs-test/src/app/app.html"*/
    }),
    app_component___metadata("design:paramtypes", [app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(31);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AppModule = class AppModule {
};
AppModule = app_module___decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            app_component_MyApp,
            HomePage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(app_component_MyApp)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            HomePage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(33);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[32]);
//# sourceMappingURL=main.js.map