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
      Object.keys(vm.steps).forEach(function(key){
        if(key){
          let i = true;
          key = false;
        }
        if(i){
          key = true;
          return;
        }
        console.log(key);
      });
      console.log(vm.steps[2]);
      
    }
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
