(function() {
  'use strict';

  BookController.$inject = ['BookService'];
  function BookController(BookService) {
    BookService.getBooks()
        .then(function(response) {
          angular.extend(this, response.data);
        });
  }

  angular.module('bookstore').controller('BookController', BookController);
})();
