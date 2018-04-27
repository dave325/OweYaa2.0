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
      vm.submissionForm.company_skills = [];
      let skillarr = vm.submissionForm.skills.split(',');
      for(let i = 0;i < skillarr.length;i++){
        let temp = skillarr[i];
        vm.submissionForm.company_skills.push({
          skillid: vm.submissionForm.username + i,
          projid: vm.submissionForm.projid,
          skill:temp
        });
      }
      console.log(vm.submissionForm);
      vm.submissionForm.skills = null;
      User.updateUser(modal,data).then(function(response){
        console.log(response);
      },function(error){
        console.log(error);
      });

    }
    vm.position = {};
    vm.careerOptions = ['developer','designer','marketing','sales','customer service'];
    vm.jobtype = ['job','internship','project'];
    vm.istemp = [
      {
        name: 'Temporary',
        value:0
      },
      {
        name:'Permanent',
        value:0
      }
    ];
    vm.position.designerOptions = ['Graphi Designer','UX Designer'];
  
  }
   angular.module('oweyaa')
	.controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
