webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchStationPage = /** @class */ (function () {
    function SearchStationPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.getStations();
        this.callback = this.navParams.get('callback');
    }
    SearchStationPage.prototype.getStations = function () {
        var _this = this;
        this.http
            .get('https://secure-spire-10955.herokuapp.com/stations')
            .subscribe(function (data) {
            // Step 1. Get all the object keys.
            var evilResponseProps = Object.values(data);
            // Step 2. Create an empty array.
            var goodResponse = [];
            // // Step 3. Iterate throw all keys.
            for (var _i = 0, evilResponseProps_1 = evilResponseProps; _i < evilResponseProps_1.length; _i++) {
                var prop = evilResponseProps_1[_i];
                goodResponse.push(prop.sid + prop.jname + ' (' + prop.kname + ')');
            }
            _this.items = goodResponse;
            _this.itemsCopy = goodResponse;
        });
    };
    SearchStationPage.prototype.getItems = function (ev) {
        // Reset stations back to all of the stations
        // if (this.items === null) {
        //   this.getStations();
        // }
        this.items = this.itemsCopy;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the stations
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                // console.log(item);
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchStationPage.prototype.selectStation = function (event, item) {
        var _this = this;
        var stationCode = item.substr(0, 10);
        var stationName = item.substr(10);
        this.callback(stationCode, stationName).then(function () { _this.navCtrl.pop(); });
    };
    SearchStationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-station',template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/search-station/search-station.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Search </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <li (click)="selectStation($event, item)" navPop> {{item | slice:10:end}} </li>\n      <!-- <li (click)="selectStation($event, item)" navPop> {{ item.jname + \' (\' + item.kname + \')\' }} </li> -->\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/search-station/search-station.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SearchStationPage);
    return SearchStationPage;
}());

//# sourceMappingURL=search-station.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchResultPage = /** @class */ (function () {
    // isSearch = false;
    function SearchResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchResult = this.navParams.get('data') || [];
        console.log(this.searchResult);
        // // // Step 1. Get all the object keys.
        // let tests = Object.values(this.searchResult);
        // console.log(tests[0]);
        // let data = tests[0]
        // // // Step 2. Create an empty array.
        // let goodResponse = [];
        // // // // Step 3. Iterate throw all keys.
        // for (let prop of data) {
        //   goodResponse.push(prop);
        // }
        // this.searchResult = goodResponse;
        // this.isSearch = true;
        // console.log(this.searchResult);
    }
    SearchResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchResultPage');
    };
    SearchResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-result',template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/search-result/search-result.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Search result </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="searchResult.Data">\n  <ion-card *ngFor="let item of searchResult.Data" class="cards-list-demo">\n    <div *ngIf="item.StartJName && item.EndKJName">\n      <ion-card-header>\n        <span class="start-station-label"> {{ item.StartJName }} </span>\n          <ion-icon name=\'md-arrow-dropright\' item-start></ion-icon>\n        <span class="end-station-label"> {{ item.EndKJName }} </span>\n      </ion-card-header>\n\n      <ion-list>\n        <button ion-item>\n          <ion-icon name=\'md-stopwatch\' item-start></ion-icon>\n          <div class="index"> 所要時間 </div>\n          <div class="data"> {{ item.ShtTravelJMsg }} </div>\n        </button>\n\n\n        <button ion-item>\n          <ion-icon name=\'md-refresh-circle\' item-start></ion-icon>\n          <div class="index"> 乗り換え回数 </div>\n          <div class="data"> {{ item.ShtTransferCnt }}回 </div>\n        </button>\n\n        <button ion-item>\n          <ion-icon name=\'ios-train\' item-start></ion-icon>\n          <div class="index"> 経由駅数 </div>\n          <div class="data"> {{ item.ShtStatnCnt }} </div>\n        </button>\n\n        <button ion-item>\n          <p>\n            {{ item.ShtStatnKName }}\n          </p>\n        </button>\n      </ion-list>\n      <div></div>\n    </div>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/search-result/search-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchResultPage);
    return SearchResultPage;
}());

//# sourceMappingURL=search-result.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/search-result/search-result.module": [
		281,
		1
	],
	"../pages/search-station/search-station.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__travel_travel__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__travel_travel__["a" /* TravelPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Search" tabIcon="ios-navigate"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Travel" tabIcon="ios-plane"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="AboutMe" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  AboutMe Page.\n</ion-content>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelPage = /** @class */ (function () {
    function TravelPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TravelPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
        });
        profileModal.present();
    };
    TravelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-travel',template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/travel/travel.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Modals</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Travle Page.\n</ion-content>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/travel/travel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TravelPage);
    return TravelPage;
}());

var Profile = /** @class */ (function () {
    function Profile(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    Profile.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/travel/modal-content.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  test\n</ion-content>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/travel/modal-content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], Profile);
    return Profile;
}());
//# sourceMappingURL=travel.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_station_search_station__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_result_search_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.apiAuthKey = '4c61457a686a686a36326f41794859'; // Api認証キー
        this.startStationName = 'のるところ';
        this.endStationName = 'おりるところ';
        this.isStartStation = false;
        this.openSearchPage = function (isStartStation) {
            _this.isStartStation = isStartStation;
            _this.openNavDetailsPage(__WEBPACK_IMPORTED_MODULE_2__search_station_search_station__["a" /* SearchStationPage */], null, _this.updateSearchStation);
        };
        /*
        * 駅検索から検索した駅名を「のるところ、おりるところ」に更新する
        *
        * @selectStationName 更新する駅名
        */
        this.updateSearchStation = function (selectedStatCode, selectedStatName) {
            // console.log(selectedStation);
            return new Promise(function () {
                // 「のるところ」更新
                if (_this.isStartStation) {
                    _this.startStationName = selectedStatName;
                    // this.startStationName = selectedStation.jname + ' (' + selectedStation.kname +')';
                    _this.startStationCode = selectedStatCode;
                    return;
                }
                // 「おりるところ」更新
                _this.endStationName = selectedStatName;
                _this.endStationCode = selectedStatCode;
            });
        };
        /*
        * Apiで検索結果を取得し、成功した場合は検索結果画面に飛ばす
        */
        this.search = function () {
            var httpResult = false;
            _this.loading = true;
            _this.openNavDetailsPage(__WEBPACK_IMPORTED_MODULE_3__search_result_search_result__["a" /* SearchResultPage */], _this.searchResult, null);
            _this.http
                .get('https://secure-spire-10955.herokuapp.com/search?start=' + _this.startStationCode + '&end=' + _this.endStationCode)
                .subscribe(function (data) {
                // console.log(data);
                _this.searchResult = data;
                _this.loading = false;
                httpResult = true;
                // 結果画面に飛ばす
                _this.openNavDetailsPage(__WEBPACK_IMPORTED_MODULE_3__search_result_search_result__["a" /* SearchResultPage */], _this.searchResult, null);
            });
        };
    }
    /*
    * 指定したページに飛ばす
    *
    * @openPageName 移動先ページ名
    * @data         渡すデータ
    * @callback     Callback関数名
    */
    HomePage.prototype.openNavDetailsPage = function (openPageName, data, callback) {
        this.navCtrl.push(openPageName, {
            data: data,
            callback: callback
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Search </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content search-page-wrap" padding>\n  <button ion-button outline icon-start (click)="openSearchPage(true)" class="start-station">\n    <ion-icon name=\'ios-bus\' is-active="false"></ion-icon> {{ startStationName }}\n  </button>\n\n  <!-- <button ion-button round icon-start class="change-station">\n    <ion-icon name=\'sync\' is-active="false"></ion-icon>\n    いれかえる\n  </button> -->\n\n  <button ion-button outline icon-start color="dark" (click)="openSearchPage(false)" class="end-station">\n    <ion-icon name=\'ios-bus\' is-active="false"></ion-icon> {{ endStationName }}\n  </button>\n\n  <button color="danger" icon-start="" ion-button="" class="search-btn" ng-reflect-color="danger" (click)="search()">\n    <ion-icon name="md-search" role="img" class="icon icon-md ion-md-close" aria-label="close" ng-reflect-name="close"></ion-icon>\n    しらべる\n  <div class="button-effect"></div></button>\n\n  <div *ngIf="loading">loading...</div>\n</ion-content>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_travel_travel__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_station_search_station__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_result_search_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_travel_travel__["a" /* TravelPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_station_search_station__["a" /* SearchStationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_result_search_result__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/search-station/search-station.module#SearchStationPageModule', name: 'SearchStationPage', segment: 'search-station', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-result/search-result.module#SearchResultPageModule', name: 'SearchResultPage', segment: 'search-result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_travel_travel__["a" /* TravelPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_station_search_station__["a" /* SearchStationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_result_search_result__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/leejuseung/Work/1_SRC/kenchanayo/ionic-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map