
(function () {
    'use strict';

    angular
        .module('designApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.when("/main", "/main/");
          $urlRouterProvider.otherwise('/main');

          $stateProvider
              .state('main', {
                  url:'/main',
                  templateUrl: 'VIEW/main-page.html'
              })
                  .state('main.carousel', {
                      url:'/',
                      templateUrl: 'VIEW/main-carousel.html'
                  })
                  .state('main.tastemaker', {
                      url:'/tastemaker',
                      controller : 'jsonCtrl',
                      templateUrl: 'VIEW/main-tastemaker.html',
                      resolve: {
                        getMyJson: function($http){
                          return  $http.get("JSON/tastemaker.json").then(function(response) {
                            return response.data;
                            })
                        }
                      }
                  })
                  .state('main.blog', {
                      url:'/blog',
                      templateUrl: 'VIEW/main-blog.html'
                  })
                  .state('main.alist', {
                      url:'/alist',
                      templateUrl: 'VIEW/main-alist.html'
                  })
                  .state('main.contribute', {
                      url:'/contribute',
                      templateUrl: 'VIEW/main-contribute.html'
                  })
                  .state('main.about', {
                      url:'/about',
                      templateUrl: 'VIEW/main-about.html'
                  })
                  .state('main.legal', {
                      url:'/legal',
                      templateUrl: 'VIEW/main-privacy-terms.html'
                  });
        }]);
})();
