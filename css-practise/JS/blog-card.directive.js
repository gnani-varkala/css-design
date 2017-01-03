(function () {
    'use strict';

    angular
        .module('designApp')
        .directive('blogCardDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/blog-cards.directive.html' ,

          };
        })

})();
