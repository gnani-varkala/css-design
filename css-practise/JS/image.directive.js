(function () {
    'use strict';

    angular
        .module('designApp')
        .directive('imageDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/image.directive.html' ,

          };
        })

})();
