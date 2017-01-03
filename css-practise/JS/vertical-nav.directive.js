(function () {
    'use strict';

    angular
        .module('designApp')
        .directive('navbarDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/vertical-navbar.directive.html' ,

          };
        })

})();
