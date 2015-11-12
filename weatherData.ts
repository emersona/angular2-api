import {Injectable, bind} from 'angular2/di';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rx';
import * as io from 'socket.io-client';
@Component({
  selector: 'my-app',
  appInjector: [Http]
})

@Injectable()
export class WeatherData {
  constructor(public http: Http) {
  }

  // Get request and serialize the result to JSON
  getData() {
    console.log("get data");
    console.log(this.http);
    this.http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
      .toRx()
      .map(res => res.json();
  }

  // Post request with Headers
  createQuestion(question) {
    return this.http.post('http://localhost:3333/api/questions/',
      JSON.stringify(question),
      {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .toRx()
      .map(res => res.json());
  }

  // Create an Observable from event
  // REMOVE THIS LATER
  getQuestionsFeed() {
    var socket = io('http://localhost:3333');
    return Observable
      .fromEvent(socket, 'questions:feed')
      .map(res => JSON.parse(res));
  }
}