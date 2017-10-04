angular.module('oweyaa').directive('navbar', function($window, User) {
  return {
    restrict:'EA',
    controller:'navbarCtrl',
    bindToController:true,
    controllerAs:"navbarvm",
    templateUrl: '/js/frontend/directives/navbar/navbar.view.html'
  };
});
