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
var weatherData_1 = require('weatherData');
var App = (function () {
    function App(weatherData) {
        weatherData.getData();
        // console.log("wtf");
        // this.http = http;
        // console.log("wtf part deux");
        // console.log(http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
        //   .toRx()
        //   .map(res => res.json());
        // console.log(weatherData.getData().subscribe(res => console.log(res)));
        // console.log(weatherData.getData().subscribe(res => console.log(res)));
        // weatherData.getQuestionsFeed().subscribe(res => console.log(res));
        // weatherData.createQuestion({'foo': 'bar'});
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [weatherData_1.WeatherData]
        }),
        angular2_1.View({
            directives: [angular2_1.coreDirectives],
            template: "\n  <div *ng-if=\"questions\">\n    {{questions | json}}\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [weatherData_1.WeatherData])
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App);
