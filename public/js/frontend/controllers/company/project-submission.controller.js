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
      var curStep;
      angular.forEach(vm.steps,function(value,key){
        if(value){
          var size = key.length;
          var strNum = key.substring(size-1);
          curStep = strNum;
        }
      });
      return curStep;
    };
    vm.nextPage = function(){
      // Iterate to next page and slide that in
      angular.forEach(vm.steps,function(value,key){
        let i = false;
        if(value){
          i = true;
          key = false;
          console.log(key);
        }
        if(i){
          key = true;
          console.log(key);
          return;
        }
      });
      
    }
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
