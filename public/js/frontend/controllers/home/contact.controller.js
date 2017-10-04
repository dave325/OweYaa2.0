(function(){
//Injector will protect against minification
contactCtrl.$inject = [];
function contactCtrl() {
    var vm = this;

    vm.fullName = "";
    vm.email = "";
    vm.subject = "";
    vm.description = "";

    vm.submit = function() {
      if (vm.fullName != "" && vm.email != "" && vm.submit != "" && vm.description != "") {
        //Send Email

        //Clear Page
        vm.fullName = "";
        vm.email = "";
        vm.subject = "";
        vm.description = "";
      }
    }
 }
 angular.module('oweyaa')
.controller('contactCtrl', contactCtrl);

})();
