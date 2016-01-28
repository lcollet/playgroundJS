(function() {
  'use strict';

  BookDetailsController.$inject = ['$scope', 'BookService', '$routeParams'];
  function BookDetailsController($scope, $routeParams, BookService) {
    var bookService = BookService;
    bookService.getBook($routeParams.id)
      .then(function(response) {
        $scope.book = response.data;
      });
  }

  angular.module('bookstore').controller('BookDetailsController', BookDetailsController);
})();
