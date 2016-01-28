(function() {
  'use strict'

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './components/books/list/books.html',
        controller : 'BookController',
        controllerAs : 'book'
      })
      .when('/books/add', {
        templateUrl: './components/books/add/add-book.html',
        controller : 'AddBookController'
      })
      .when('/books/:id', {
        templateUrl: './components/books/details/book-details.html',
        controller : 'BookDetailsController'
      }).otherwise({redirectTo : '/'});
  }

  angular.module('Core').config(routeConfig);
})();
