System.register("index-old", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "index-old";
  var Component,
      Template,
      MyApp;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }],
    execute: function() {
      MyApp = function() {
        function MyApp() {
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.updateFullname();
          getData();
        }
        return ($traceurRuntime.createClass)(MyApp, {
          updateFullname: function() {
            this.fullName = this.firstName + " " + this.lastName;
          },
          firstNameChanged: function($event, first) {
            this.firstName = first.value;
            this.updateFullname();
          },
          lastNameChanged: function($event, last) {
            alert("wtf");
            this.lastName = last.value;
            this.updateFullname();
          },
          getData: function() {
            return this.http.get('http://localhost:3333/api/questions/').toRx().map(function(res) {
              return res.json();
            });
          }
        }, {});
      }();
      Object.defineProperty(MyApp, "annotations", {get: function() {
          return [new Component({selector: 'my-app'}), new Template({url: 'index.html'})];
        }});
    }
  };
});
