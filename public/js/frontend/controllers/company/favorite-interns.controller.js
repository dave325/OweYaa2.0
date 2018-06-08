(function () {
  //Injector will protect against minification
  favoriteInternsCtrl.$inject = ['$http', 'User', '$timeout', '$uibModal'];
  function favoriteInternsCtrl($http, User, $timeout, $uibModal) {
    var vm = this;
    vm.user = User.getUser();
    vm.resultInfo = '';
    vm.noIntern = '';
    vm.projid = '';
    getUser();
    // Information will be retrieved from database
    vm.contents = {
      content1: {
        text: "",
        img: "assets/images/test.jpeg"
      },
      content2: {
        text: "",
        img: "assets/images/test.jpeg"
      }
    }
    // Retrieve current user
    function getUser() {
      User.getFavUsers(vm.user).then(function (response) {
        vm.users = response.data.projects;
        for (let j = 0; j < vm.users.length - 1; j++) {
          if (vm.users[j].contact_info.ismatched == 1) {
            vm.users[j].inProj = true;
          } else {
            for (let i = 0; i < vm.user.company_project.length; i++) {
              for (let k = 0; k < vm.user.company_project[i].candidates.length; k++) {
                if (vm.user.company_project[i].jobInfo.initiated == 1 && vm.users[j].contact_info.username === vm.user.company_project[i].candidates[k].username) {
                  vm.users[j].inProj = true;
                  break;
                }
              }
            }
          }
        }
        console.log(vm.users);
        vm.copyUsers = vm.users.slice();
        if (vm.copyUsers === undefined || vm.copyUsers.length === 0) {
          vm.noIntern = "No favorite interns selected!";
        }
      }, function (data) {
        console.log(data);
      });
    }


    vm.removeFavUser = function (user) {
      id = {
        favid: user.favid
      }
      User.removeFavUser(id).then(function (response) {
        vm.resultInfo = "Successfully deleted user!";
        $timeout(function () {
          vm.resultInfo = null;
          getUser();
        }, 1000);
      }, function (error) {
        console.log(error);
      });
    }

    vm.isFav = function (user) {
      return !user.isFav;
    }
    vm.inProj = function (user) {
      return !user.inProj;
    }
    // Filter user function
    vm.filterUsers = function () {
      let user = [];
      if (vm.copyUsers.length === null) {
        vm.resultInfo = "No interns are currectly selected";
        return;
      }
      if (vm.test == undefined || vm.test.length === 0) {
        vm.users = vm.copyUsers;
      } else {
        // Loop through every user in database
        for (let i = 0; i < vm.copyUsers.length; i++) {
          // Loop through individual skills
          for (let j = 0; j < vm.copyUsers[i].user.skill.length; j++) {
            // Check if the skill exists in current user
            if (vm.copyUsers[i].user.skill[j].skill.toLowerCase().indexOf(vm.test.toLowerCase()) > -1) {
              // Add user to temp array
              user.push(vm.copyUsers[i]);
              break;
            }
          }
        }
        // If user with skill is not found, then return nothing.  
        if (user.length === 0) {
          vm.users = [];
          vm.resultInfo = "No interns match that criteria";
        }
        // If the length of currenct array is empty and the input field is empty return every user
        else if (vm.test.length === 0) {
          vm.users = vm.copyUsers;
          vm.resultInfo = null;
        } else {
          // Set vm.users to temp array and only show results
          vm.users = user;
        }
      }
    }


    vm.addIntern = function (internid) {
      if (User.getUser()) {
        var m = $uibModal.open({
          templateUrl: '/js/frontend/modals/company/selectIntern/select-intern.modal.view.html',
          controller: 'selectInternModalCtrl',
          controllerAs: 'selectInternvm',
          windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
          backdrop: false,
          keyboard: false,
          resolve: {
            CurrUser: function () {
              return { user: vm.users[internid] };
            }
          }
        });
        m.result.then(function (response) {
          vm.resultInfo = "Successfully added candidate to project!";
          vm.users[internid].inProj = true;
          $timeout(function () {
            vm.resultInfo = "";
          }, 1500);
        }, function (error) {
          console.log(error);
        });
      }
    }
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
