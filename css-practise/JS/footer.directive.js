(function () {
    'use strict';

    angular
        .module('designApp')
        .directive('footerDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/footer.directive.html' ,

          };
        })

})();
