(function () {
  //Injector will protect against minification
  projectSubmissionCtrl.$inject = ['User'];
  function projectSubmissionCtrl(User) {
    var vm = this;
    vm.user = User.getUser();
    // Stores information from form fields 
    vm.submissionForm = {};
    vm.canSubmit = true;
    vm.matchedProj = 0;
    vm.queuedProj = 0;
    for (let i = 0; i < vm.user.company_project.length; i++) {
      if (vm.user.company_project[i].jobInfo.initiated == 1) {
        vm.matchedProj++;
      } else {
        vm.queuedProj++;
      }
    }
    if (vm.matchedProj >= 1 && vm.queuedProj >= 1) {
      vm.canSubmit = false;
    }
    vm.submissionForm.company_proj_job_info = {};
    vm.submissionForm.company_proj_manager_info = {};

    vm.submissionForm.projid = vm.user.company_info.username + (vm.user.company_project.length + 1);
    vm.submissionForm.company_proj_job_info.username = vm.user.company_info.username;
    // Stores steps needed to submit project 
    vm.steps = {
      page1: true,
      page2: false,
      page3: false
    }

    // Returns current step based on what user selected 
    vm.currentStep = function () {
      var curStep;
      angular.forEach(vm.steps, function (value, key) {
        if (value) {
          var size = key.length;
          var strNum = key.substring(size - 1);
          curStep = strNum;
        }
      });
      return curStep;
    }

    vm.nextPage = function () {
      vm.steps.page1 = false;
      vm.steps.page2 = true;
      console.log(vm.steps);
    }

    vm.prevPage = function () {
      vm.steps.page1 = true;
      vm.steps.page2 = false;
      console.log(vm.steps);
    }
    // Submits project and sends data to server 
    vm.submitProjForm = function (modal, data) {
      vm.steps.page1 = false;
      vm.steps.page2 = false;
      vm.steps.page3 = true;
      vm.submissionForm.company_skills = [];
      let skillarr = vm.submissionForm.skills.split(',');
      for (let i = 0; i < skillarr.length; i++) {
        let temp = skillarr[i];
        vm.submissionForm.company_skills.push({
          skillid: vm.submissionForm.projid + i,
          projid: vm.submissionForm.projid,
          skill: temp
        });
      }
      console.log(vm.submissionForm);
      vm.submissionForm.skills = null;
      if (vm.submissionForm.company_proj_manager_info.ismanager) {
        vm.submissionForm.company_proj_manager_info.managername = vm.user.company_info.firstname + vm.user.company_info.lastname;
        vm.submissionForm.company_proj_manager_info.managercontact = vm.user.company_info.email;
        vm.submissionForm.company_proj_manager_info.managerdept = vm.user.company_info.department;
      }
      User.addProjects(vm.submissionForm).then(function (response) {
        vm.submissionForm.mangerInfo = vm.submissionForm.company_proj_manager_info;
        vm.submissionForm.jobInfo = vm.submissionForm.company_proj_job_info;
        vm.submissionForm.skills = vm.submissionForm.company_skills;
        vm.submissionForm.candidates = [];
        console.log(vm.submissionForm);
        vm.user.company_project.push(vm.submissionForm);
        User.setUser(vm.user);
        console.log(response);
      }, function (error) {
        console.log(error);
      });

    }
    vm.position = {};
    vm.careerOptions = ['developer', 'designer', 'marketing', 'sales', 'customer service'];
    vm.jobtype = ['job', 'internship', 'project'];
    vm.istemp = [
      {
        name: 'Temporary',
        value: 0
      },
      {
        name: 'Permanent',
        value: 0
      }
    ];
    vm.position.designerOptions = ['Graphic Designer', 'UX Designer'];

  }
  angular.module('oweyaa')
    .controller('projectSubmissionCtrl', projectSubmissionCtrl);

})();
