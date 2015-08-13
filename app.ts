import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'Alice';
  }
}

class GetWeatherData {
  constructor() {
    console.log(this.http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
      .toRx()
      .map(res => res.json()));
  }
}

bootstrap(MyAppComponent);
bootstrap(GetWeatherData);