(function(){
//Injector will protect against minification
contactCtrl.$inject = ['$http'];
function contactCtrl($http) {
    var vm = this;

    vm.form = {};

    vm.submit = function() {
      if (vm.form.fullName != "" && vm.form.email != "" && vm.form.submit != "" && vm.form.description != "") {
        //Send Email
        $http.post('/contact', vm.form).then();
        //Clear Page
        vm.form = {};
      }
    }
 }
 angular.module('oweyaa')
.controller('contactCtrl', contactCtrl);

})();
