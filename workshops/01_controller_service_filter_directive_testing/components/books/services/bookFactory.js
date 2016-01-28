(function() {
  'use strict';

  BookFactory.$inject = ['$http'];
  function BookFactory($http) {
    return {
      getBooks : function() {
        return $http.get('http://127.0.0.1:9000/api/books');
      },

      getBook : function(id){
        return $http.get('http://127.0.0.1:9000/api/books/:' + id);
      },

      deleteBook : function(id) {
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
    }
  }
  
})();
