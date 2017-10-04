(function(){
  angular.module('angTest', ['ngRoute']);
  function router($routeProvider){
    $routeProvider.when('/',{
      controller:'homeCtrl',
      templateUrl:'home.view.html',
      controllerAs:'vm'
    }).otherwise({redirectTo:'/'});
  }
  function locator($locationProvider){
    $locationProvider.hashPrefix('/');
  }

  angular.module('angTest')
    .config(['$routeProvider',router])
    .config(['$locationProvider', locator]);
})();
