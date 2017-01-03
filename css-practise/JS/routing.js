
(function () {
    'use strict';

    angular
        .module('designApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise('/');

          $stateProvider
              .state('main', {
                  url:'/',
                  templateUrl: 'VIEW/main-page.html'
              });
        }]);
})();
