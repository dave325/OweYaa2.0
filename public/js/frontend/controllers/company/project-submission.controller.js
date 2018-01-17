(function(){
//Injector will protect against minification
projectSubmissionCtrl.$inject = [];
function projectSubmissionCtrl() {
    var vm = this;
    vm.companyName ='Name of Company';
    vm.submissionForm = {};
    vm.steps = {
      active1:true,
      active2:false,
      active3:false
    };
    vm.currentStep = function(){
      angular.forEach(vm.steps,function(value,key){
        if(value){
          var size = value.length;
          var strNum = value.substring(size-1);
          return vm.steps.step + strNum;
        }
      })
    };
    vm.nextPage = function(){
      // Iterate to next page and slide that in
    }
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
