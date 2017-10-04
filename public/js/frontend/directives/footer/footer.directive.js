(function(){

  function footerDir(){
    return {
      restrict: 'E',
      controller: 'footerCtrl',
      scope: {},
      bindToController: true,
      controllerAs:"footervm",
      templateUrl: '/js/frontend/directives/footer/footer.view.html'
    };
  }
angular.module('oweyaa').directive('footerBase', footerDir);
})();
