(function(){
//Injector will protect against minification
projectSubmissionCtrl.$inject = ['User'];
function projectSubmissionCtrl(User) {
    var vm = this;
    vm.user = User.getUser();
    vm.submissionForm = {};
    vm.submissionForm.projid = vm.user.company_project.length;
    vm.submissionForm.username = vm.user.company.username;
    vm.steps = {
      page1:true,
      page2:false,
      page3:false
    }

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
    }

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
      }
    }
    vm.prevPage = function(){
      vm.steps.page2 = false;
      vm.steps.page1 = true;
    }
    vm.submitProjForm = function(modal,data){
      vm.steps.page1 = false;
      vm.steps.page2 = false;
      vm.steps.page3 = true;
      console.log(data);
      User.updateUser(modal,data).then(function(response){
        console.log(response);
      },function(error){
        console.log(error);
      });
    }
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
