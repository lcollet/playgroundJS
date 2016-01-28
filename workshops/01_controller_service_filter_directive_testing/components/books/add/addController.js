(function() {
  'use strict';

  AddBookController.$inject = ['BookService'];
  function AddBookController(BookService) {
      this.book = {};
      BookService.getCovers()
        .then(function(result) {
          this.book.covers = result.data;
        }.bind(this));
  }

  angular.module('Books').controller('AddBookController', AddBookController);
})();
