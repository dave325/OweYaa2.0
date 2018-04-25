(function(){
//Injector will protect against minification
projectSubmissionCtrl.$inject = ['User'];
function projectSubmissionCtrl(User) {
    var vm = this;
    vm.user = User.getUser();
    // Stores information from form fields 
    vm.submissionForm = {};

    vm.submissionForm.projid = vm.user.company_info.username + vm.user.company_project.length;
    vm.submissionForm.username = vm.user.company_info.username;
    // Stores steps needed to submit project 
    vm.steps = {
      page1:true,
      page2:false,
      page3:false
    }

    // Returns current step based on what user selected 
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
      vm.steps.page1 = false;
      vm.steps.page2 = true;
      console.log(vm.steps);
    }

    vm.prevPage = function(){
      vm.steps.page1 = true;
      vm.steps.page2 = false;
      console.log(vm.steps);
    }
    // Submits project and sends data to server 
    vm.submitProjForm = function(modal,data){
      vm.steps.page1 = false;
      vm.steps.page2 = false;
      vm.steps.page3 = true;
      console.log('Exloded string');
      console.log(vm.submissionForm.skills.split(','));
      for(let i = 0;i < vm.submissionForm.skills.length;i++){
        let temp = vm.submissionForm.skills[i];
        vm.submissionForm.company_skillls[i].push({
          skillid: vm.submissionForm.username + i,
          projid: vm.submissionForm.projid,
          skill:temp
        });
      }
      console.log(vm.submissionForm);
      /*
      User.updateUser(modal,data).then(function(response){
        console.log(response);
      },function(error){
        console.log(error);
      });
      */
    }
    vm.careerOptions = ['developer','designer','marketing','sales','customer service'];

  
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
