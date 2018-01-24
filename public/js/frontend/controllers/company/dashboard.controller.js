(function(){
//Injector will protect against minification
dashboardCtrl.$inject = ['User'];
function dashboardCtrl(User) {
    var vm = this;
    vm.user = User.getUser();
    console.log(vm.user);
    vm.user.matched_projects = [];
    vm.user.unmatched_projects = [];
    vm.user.total_interns = 0;
    for(let i = 0; i < vm.user.company_project;i++){
        if(vm.company.user.company_project[i].initiated == 1){
            vm.user.matched_projects.push(vm.company.user.company_project[i]);
        }else{
            vm.user.unmatched_projects.push(vm.company.user.company_project[i]);
        }
    }
    // Fake information. Once testing has progressed far enough we will add the info from the database
    vm.projects = {
     projectCard1: {
        text: "Total Projects With OweYaa",
        detail: "Count",
        amount: vm.user.company_project.length,
        img: "assets/images/signUpIcon.png"
    },
    projectCard2: {
        text: "Total Projects With Matched",
        detail: "Count",
        amount: vm.user.matched_projects.length,
        img: "assets/images/hands.PNG"
    },
    projectCard3: {
        text: "Projects With Unmatched",
        detail: "Count",
        amount: vm.user.unmatched_projects.length,
        img: "assets/images/Computer.PNG"
    },
    projectCard4: {
        text: "# Of Hires From Projects",
        detail: "Count",
        amount: 0,
        img: "assets/images/check.png"
    }
  }

  vm.projectTypes ={
      projectMatched: {
          title: "Matched Project",
          project: vm.user.matched_projects
    },
      projectQueued: {
          title: "Queued Project",
          project: vm.user.unmatched_projects
    }
  }

  vm.openModal = function(modal){
    if(User.getUser()){ 
        var m = $uibModal.open({
            templateUrl: '/js/frontend/modals/company/' + modal +'/' + modal + '.modal.view.html',
            controller: modal + 'ModalCtrl',
            controllerAs: modal + 'vm',
            windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal",
            resolve: {
                    CurrUser: vm.user
            }
        });
}

angular.module('oweyaa')
.controller('dashboardCtrl', dashboardCtrl);
})();
