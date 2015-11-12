/// <reference path="typings/angular2/angular2.d.ts" />

import {Injectable, bind} from 'angular2/angular2';
import {Http, Headers} from 'angular2/angular2';
import {Observable} from 'rx';

@Injectable()
export class WeatherData {
  http;
  constructor(public http: Http) {
    this.http = http;
    console.log("wtf");
    this.http = http;
    console.log("wtf2");
  }

  // Get request and serialize the result to JSON
  getData() {
    console.log("get data");
    this.http.get('http://api.wunderground.com/api/6dcd84d359914e7c/conditions/q/MI/Detroit.json')
      .toRx()
      .map(res => res.json());
  }

  // // Post request with Headers
  // createQuestion(question) {
  //   return this.http.post('http://localhost:3333/api/questions/',
  //     JSON.stringify(question),
  //     {
  //       headers: new Headers({
  //         'Content-Type': 'application/json'
  //       })
  //     })
  //     .toRx()
  //     .map(res => res.json());
  // }

  // // Create an Observable from event
  // getQuestionsFeed() {
  //   var socket = io('http://localhost:3333');
  //   return Observable
  //     .fromEvent(socket, 'questions:feed')
  //     .map(res => JSON.parse(res));
  // }
}