(function() {
  'use strict'

  BookService.$inject = ['$http'];
  function BookService($http) {

    function getBooks() {
      return $http.get('http://127.0.0.1:9000/api/books');
    }

    function getBook(id){
      return $http.get('http://127.0.0.1:9000/api/books/' + id);
    }

    function deleteBook(id) {
      let copyArr = [];
      getBooks().then(function(response) {
        let booksArr = response.data;
        for(let i = 0;i < booksArr;i++) {
          if(booksArr[i].bookID !== id) {
            copyArr.push(book[i]);
          }
        }
      });
      return copyArr;
    }

    function getCovers() {
      return $http.get('http://127.0.0.1:9000/api/books/covers');
    }

    return {
      getBooks : getBooks,
      getBook : getBook,
      deleteBook : deleteBook,
      getCovers : getCovers
    }
  }

  angular.module('bookstore').service('BookService', BookService);
})();
