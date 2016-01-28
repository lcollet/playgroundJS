// 1. create our the entry point of our application

// 2. Bootstrap our application
// 2.a Using directive ng-app

// 2.b Programmatically

(function(){
'use strict';

  angular.module('bookstore', ['ngRoute', 'Books', 'Core']);
  document.addEventListener('DOMContentLoaded', function() {
        angular.bootstrap(document.body, ['bookstore']);
  });


})();
