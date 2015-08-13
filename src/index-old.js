import {Component, Template} from 'angular2/angular2';

@Component({selector: 'my-app'})
@Template({url: 'index.html'})
class MyApp {  
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.updateFullname();
    getData()
  }
  updateFullname(){
    this.fullName = this.firstName + " " + this.lastName;
  }
  firstNameChanged($event, first){
    this.firstName = first.value;
    this.updateFullname();
  }
  lastNameChanged($event, last){
    alert("wtf");
    this.lastName = last.value;
    this.updateFullname();
  }
  // Get request and serialize the result to JSON
  getData() {
    return this.http.get('http://localhost:3333/api/questions/')
      .toRx()
      .map(res => res.json());
  }


}