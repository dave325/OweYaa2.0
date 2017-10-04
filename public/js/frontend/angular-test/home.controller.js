(function(){
  function homeCtrl($http){
    var vm = this;
  vm.dtest = function(){
    $http.post('../../backend/utilities/test.php').then(function(data){
      console.log(data.data);
    },function(data){
      console.log(data);
    })
  }
  }
  angular.module('angTest')
    .controller('homeCtrl', homeCtrl);
})();
