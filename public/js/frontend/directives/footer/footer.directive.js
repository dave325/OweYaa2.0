(function(){

  function footerDir(){
    return {
      restrict: 'E',
      controller: 'footerCtrl',
      scope: {},
      bindToController: true,
      controllerAs:"footervm",
      templateUrl: '/views/frontend/directives/footer/footer.view.html'
    };
  }
angular.module('oweyaa').directive('footerBase', footerDir);
})();
