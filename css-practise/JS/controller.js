
(function () {
    'use strict';

    angular
        .module('designApp')
        .controller('jsonCtrl', jsonCtrl);

    jsonCtrl.$inject = ['$scope','getMyJson',"$rootScope"];
    function jsonCtrl($scope,getMyJson,$rootScope){
      $scope.myJson = getMyJson;

    }
})();
