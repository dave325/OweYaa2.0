(function(){
//Injector will protect against minification
projectSubmissionCtrl.$inject = [];
function projectSubmissionCtrl() {
    var vm = this;
    vm.companyName ='Name of Company';
    vm.submissionForm = {};
    vm.steps = {
      page1:true,
      page2:false,
      page3:false
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
          value = false;
          console.log(value+ " " + key);
        }
        if(i){
          value = true;
          console.log(value + " " + key);
          return;
        }
      });
      
    }
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
