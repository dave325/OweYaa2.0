(function(){
//Injector will protect against minification
dashboardCtrl.$inject = ['CurrUser'];
function dashboardCtrl(CurrUser) {
    var vm = this;
    vm.user = CurrUser;
    vm.companyName = CurrUser.name;
    // Fake information. Once testing has progressed far enough we will add the info from the database
    vm.projects = {
     projectCard1: {
        text: "Total Projects With OweYaa",
        detail: "Count",
        amount: vm.user.companyProject.length,
        img: "assets/images/signUpIcon.png"
    },
    projectCard2: {
        text: "Total Projects With Matched",
        detail: "Count",
        amount: 0,
        img: "assets/images/hands.PNG"
    },
    projectCard3: {
        text: "Projects With Unmatched",
        detail: "Count",
        amount: 0,
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
          text: "Matched Project"
    },
      projectQueued: {
          text: "Queued Project"
    }
  }
}

angular.module('oweyaa')
.controller('dashboardCtrl', dashboardCtrl);
})();
