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
      let check = false;
      for(var key in vm.steps){

        if (!vm.steps.hasOwnProperty(key)) continue;
        if(check){
          vm.steps[key] = true;
          console.log(key + ":1 " + vm.steps[key]);
          return;
        }
        if(vm.steps[key]){
          check = true;
          vm.steps[key] = false;
          console.log(key + ":1 " + vm.steps[key]);
        }
      }/*
      angular.forEach(vm.steps,function(value,key){
        let i = false;
        if(i){
          this.key = true;
          console.log(value + " " + key);
          return;
        }
        if(value){
          i = true;
          this.key = false;
          console.log(value+ " " + key);
        }
      },vm.steps);
      */
    }
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
