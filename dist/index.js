System.register("index", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "index";
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
            this.lastName = last.value;
            this.updateFullname();
          }
        }, {});
      }();
      Object.defineProperty(MyApp, "annotations", {get: function() {
          return [new Component({selector: 'my-app'}), new Template({url: 'app.html'})];
        }});
    }
  };
});
