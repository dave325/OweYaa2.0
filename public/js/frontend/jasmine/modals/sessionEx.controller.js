function promezioTestCtrl($scope,$window) {
     $scope.user = {
      name:'bla'
     }
      //SAVE VAUE
      $window.sessionStorage.user = JSON.stringify($scope.user);

      //RETRIEVE VALUE
      $scope.name = JSON.parse(sessionStorage.user).name;

}
