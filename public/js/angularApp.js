(function(){
  angular.module('oweyaa',['ngRoute', 'ui.bootstrap', 'ngSanitize','ngFileUpload']);
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
    .when('/company/:companyid/project/:projectid',{
      templateUrl:"/js/frontend/views/company/dashboard.view.html",
      controller:"dashboardCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/browse-intern',{
      templateUrl:"/js/frontend/views/company/browse-interns.view.html",
      controller: "browseInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/favorite-intern',{
      templateUrl:"/js/frontend/views/company/favorite-interns.view.html",
      controller:"favoriteInternsCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/project-submission',{
      templateUrl:"/js/frontend/views/company/project-submission.view.html",
      controller:"projectSubmissionCtrl",
      controllerAs:"vm"
    })

    .when('/company/:companyid/project-dashboard',{
      templateUrl:"/js/frontend/views/company/projects-dashboard.view.html",
      controller: "projectDashboardCtrl",
      controllerAs:"vm"
    })

    .when('/company/:companyid/purchase-membership',{
      templateUrl:"/js/frontend/views/company/purchaseMembership.view.html",
      controller:"purchaseMembershipCtrl",
      controllerAs:"vm"
    })
    .when('/company/:companyid/request-discount',{
      templateUrl:"/js/frontend/views/company/request-discount.view.html",
      controller:"requestDiscountCtrl",
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
    .config(['$locationProvider', locationConfig]);
    
    //.run(['$rootScope', '$location', '$http','User','Authentication', function ($rootScope, $location, $http,User,Authentication) {
    /**
     * Checks everytime user tries to enter a login area and then validates whether 
     * user exists. If not redirects user to home page
     */
    /*
    $rootScope.$on('$routeChangeStart', function (event) {
      if($location.url().substring(1,9) == 'veteran/' || $location.url().substring(1,9) == 'company/'){
        user = User.getUser();
        if(Authentication.getToken() == null || user == null){
            $location.path("/");
        }
        return $http({
          url : '/api/check', 
          method: 'POST',
          headers:{
            "Authorization" : "Bearer " +  Authentication.getToken()
          }
        }).then(function(){
          return;
        },function(){
          $location.path('/');
        });
      }
    });
  }]);*/
})();
