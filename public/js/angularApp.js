(function(){
  angular.module('oweyaa',['ngRoute', 'ui.bootstrap', 'ngSanitize']);
  function routeConfig($routeProvider){
    $routeProvider.when('/', {
      templateUrl:"/js/frontend/js/home/home.view.html",
      controller:"homeCtrl",
      controllerAs:"vm"
    })
    .when('/company',{
      templateUrl:"/js/frontend/js/home/company.view.html",
      controller:"compHomeCtrl",
      controllerAs:"vm"
    })
    .when('/veteran',{
      templateUrl:"/js/frontend/js/home/veteran.view.html",
      controller:"vetHomeCtrl",
      controllerAs:"vm"
    })
    .when('/contact',{
      templateUrl:"/js/frontend/js/home/contact.view.html",
      controller:"contactCtrl",
      controllerAs:"vm"
    })
    .when('/register',{
      templateUrl:"/js/frontend/js/home/register.view.html",
      controller:"registerCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/profile',{
      templateUrl:"/js/frontend/js/veteran/profile.view.html",
      controller:"profileCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/career',{
      templateUrl:"/js/frontend/js/veteran/career.view.html",
      controller:"careerCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/internship',{
      templateUrl:"/js/frontend/js/veteran/internship.view.html",
      controller:"internshipCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/dashboard',{
      templateUrl:"/js/frontend/js/company/dashboard.view.html",
      controller:"dashboardCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/browse-intern',{
      templateUrl:"/js/frontend/js/company/browse-interns.view.html",
      controller: "browseInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:compbrowseInternsCtrlanyid/favorite-intern',{
      templateUrl:"/js/frontend/js/company/favorite-interns.view.html",
      controller:"favoriteInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/project-submission',{
      templateUrl:"/js/frontend/js/company/project-submission.view.html",
      controller:"projectSubmissionCtrl",
      controllerAs:"vm"
    })
    .when('/notFound',{
      templateUrl:"/js/frontend/js/home/error.view.html",
      controller:"error.controller.js",
      controllerAs:"vm"
    })
    .otherwise({redirectTo:'/notFound'})
  }
  function locationConfig($locationProvider){
    $locationProvider.html5Mode(true);
  }
  angular.module('oweyaa')
    .config(['$routeProvider', routeConfig])
    .config(['$locationProvider', locationConfig]);
})();
