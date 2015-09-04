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
var di_1 = require('angular2/di');
var http_1 = require('angular2/http');
var rx_1 = require('rx');
var io = require('socket.io-client');
var WeatherData = (function () {
    function WeatherData(http) {
        this.http = http;
    }
    // Get request and serialize the result to JSON
    WeatherData.prototype.getData = function () {
        console.log("get data");
        console.log(this.http);
        this.http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
            .toRx()
            .map(function (res) { return res.json(); });
    };
    // Post request with Headers
    WeatherData.prototype.createQuestion = function (question) {
        return this.http.post('http://localhost:3333/api/questions/', JSON.stringify(question), {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        })
            .toRx()
            .map(function (res) { return res.json(); });
    };
    // Create an Observable from event
    WeatherData.prototype.getQuestionsFeed = function () {
        var socket = io('http://localhost:3333');
        return rx_1.Observable
            .fromEvent(socket, 'questions:feed')
            .map(function (res) { return JSON.parse(res); });
    };
    WeatherData = __decorate([
        Component({
            selector: 'my-app',
            appInjector: [http_1.Http]
        }),
        di_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof Http !== 'undefined' && Http) || Object])
    ], WeatherData);
    return WeatherData;
})();
exports.WeatherData = WeatherData;
