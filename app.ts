/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, coreDirectives} from 'angular2/angular2';
import {WeatherData} from 'weatherData';

@Component({
  selector: 'my-app',
  appInjector: [WeatherData]
})

@View({
  directives: [coreDirectives],
  template: `
  <div *ng-if="questions">
    {{questions | json}}
  </div>
  `
})

// @Injectable()

export class App {
  constructor(weatherData:WeatherData) {
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
}

bootstrap(App);