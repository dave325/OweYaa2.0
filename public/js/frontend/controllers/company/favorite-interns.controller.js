(function () {
  //Injector will protect against minification
  favoriteInternsCtrl.$inject = ['$http', 'User', '$timeout', '$uibModal'];
  function favoriteInternsCtrl($http, User, $timeout, $uibModal) {
    var vm = this;
    vm.user = User.getUser();
    vm.resultInfo = '';
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
        console.log(response);
        vm.users = response.data.projects;
        vm.copyUsers = vm.users.slice();
        if (vm.copyUsers === undefined || vm.copyUsers.length === 0) {
          vm.resultInfo = "No favorite interns selected!";
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
        vm.removeFavUser(user.favid);
        $timeout(function () {
          vm.resultInfo = null;
          getUser();
        }, 1000);
      }, function (error) {
        console.log(error);
      });
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

    // Remove any skill in the User object 
    vm.removeFavUser = function (id) {
      for (let i = 0; i < vm.users; i++) {
        if (vm.users[i].favid == id.favid) {
          vm.users.splice(i, 1);
          vm.copyUsers = vm.users;
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
              return internid;
            }
          }
        });
        m.result.then(function (response) {
          console.log(response);
        }, function (error) {
          console.log(error);
        });
      }
    }
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
