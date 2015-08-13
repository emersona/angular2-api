import {Component, Template} from 'angular2/angular2';

@Component({selector: 'my-app'})
@Template({url: 'app.html'})
class MyApp {  
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.updateFullname();
  }
  updateFullname(){
    this.fullName = this.firstName + " " + this.lastName;
  }
  firstNameChanged($event, first){
    this.firstName = first.value;
    this.updateFullname();
  }
  lastNameChanged($event, last){
    this.lastName = last.value;
    this.updateFullname();
  }
}