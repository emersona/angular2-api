/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var WeatherData = (function () {
    function WeatherData(http) {
        this.http = http;
        this.http = http;
        console.log("wtf");
        this.http = http;
        console.log("wtf2");
    }
    // Get request and serialize the result to JSON
    WeatherData.prototype.getData = function () {
        console.log("get data");
        this.http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
            .toRx()
            .map(function (res) { return res.json(); });
    };
    WeatherData = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_2.Http])
    ], WeatherData);
    return WeatherData;
})();
exports.WeatherData = WeatherData;
