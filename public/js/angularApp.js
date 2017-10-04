(function(){
  angular.module('oweyaa',['ngRoute', 'ui.bootstrap', 'ngSanitize']);
  function routeConfig($routeProvider){
    $routeProvider.when('/', {
      templateUrl:"/views/frontend/views/home/home.view.html",
      controller:"homeCtrl",
      controllerAs:"vm"
    })
    .when('/company',{
      templateUrl:"/views/frontend/views/home/company.view.html",
      controller:"compHomeCtrl",
      controllerAs:"vm"
    })
    .when('/veteran',{
      templateUrl:"/views/frontend/views/home/veteran.view.html",
      controller:"vetHomeCtrl",
      controllerAs:"vm"
    })
    .when('/contact',{
      templateUrl:"/views/frontend/views/home/contact.view.html",
      controller:"contactCtrl",
      controllerAs:"vm"
    })
    .when('/register',{
      templateUrl:"/views/frontend/views/home/register.view.html",
      controller:"registerCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/profile',{
      templateUrl:"/views/frontend/views/veteran/profile.view.html",
      controller:"profileCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/career',{
      templateUrl:"/views/frontend/views/veteran/career.view.html",
      controller:"careerCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/internship',{
      templateUrl:"/views/frontend/views/veteran/internship.view.html",
      controller:"internshipCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/dashboard',{
      templateUrl:"/views/frontend/views/company/dashboard.view.html",
      controller:"dashboardCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/browse-intern',{
      templateUrl:"/views/frontend/views/company/browse-interns.view.html",
      controller: "browseInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:compbrowseInternsCtrlanyid/favorite-intern',{
      templateUrl:"/views/frontend/views/company/favorite-interns.view.html",
      controller:"favoriteInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/project-submission',{
      templateUrl:"/views/frontend/views/company/project-submission.view.html",
      controller:"projectSubmissionCtrl",
      controllerAs:"vm"
    })
    .when('/notFound',{
      templateUrl:"/views/frontend/views/home/error.view.html",
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
