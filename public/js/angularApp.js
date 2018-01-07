(function(){
  angular.module('oweyaa',['ngRoute', 'ui.bootstrap', 'ngSanitize']);
  function routeConfig($routeProvider){
    $routeProvider.when('/', {
      templateUrl:"/js/frontend/views/home/home.view.html",
      controller:"homeCtrl",
      controllerAs:"vm"
    })
    .when('/company',{
      templateUrl:"/js/frontend/views/home/company.view.html",
      controller:"compHomeCtrl",
      controllerAs:"vm"
    })
    .when('/veteran',{
      templateUrl:"/js/frontend/views/home/veteran.view.html",
      controller:"vetHomeCtrl",
      controllerAs:"vm"
    })
    .when('/contact',{
      templateUrl:"/js/frontend/views/home/contact.view.html",
      controller:"contactCtrl",
      controllerAs:"vm"
    })
    .when('/register',{
      templateUrl:"/js/frontend/views/home/register.view.html",
      controller:"registerCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/profile',{
      templateUrl:"/js/frontend/views/veteran/profile.view.html",
      controller:"profileCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/career',{
      templateUrl:"/js/frontend/views/veteran/career.view.html",
      controller:"careerCtrl",
      controllerAs:"vm"
    })
    .when('/veteran/:veteranid/internship',{
      templateUrl:"/js/frontend/views/veteran/internship.view.html",
      controller:"internshipCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/dashboard',{
      templateUrl:"/js/frontend/views/company/dashboard.view.html",
      controller:"dashboardCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/browse-intern',{
      templateUrl:"/js/frontend/views/company/browse-interns.view.html",
      controller: "browseInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:compbrowseInternsCtrlanyid/favorite-intern',{
      templateUrl:"/js/frontend/views/company/favorite-interns.view.html",
      controller:"favoriteInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/project-submission',{
      templateUrl:"/js/frontend/views/company/project-submission.view.html",
      controller:"projectSubmissionCtrl",
      controllerAs:"vm"
    })
    .when('/notFound',{
      templateUrl:"/js/frontend/views/home/error.view.html",
      controller:"error.controller.js",
      controllerAs:"vm"
    })
  }
  function locationConfig($locationProvider){
    $locationProvider.html5Mode(true);
  }
  angular.module('oweyaa')
    .config(['$routeProvider', routeConfig])
    .config(['$locationProvider', locationConfig])
    .run(['$rootScope', '$location', 'User', function ($rootScope, $location, User) {
    /**
     * Checks everytime user tries to enter a login area and then validates whether 
     * user exists. If not redirects user to home page
     */
    $rootScope.$on('$routeChangeStart', function (event) {
      if($location.url().substring(1,9) == 'veteran/' || $location.url().substring(1,9) == 'company/'){
          if(!User.isLoggedIn()) {
            $location.url('/');
          }
      }
    });
  }]);
})();
