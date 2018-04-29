(function () {
  //Injector will protect against minification
  favoriteInternsCtrl.$inject = ['$http', 'User', '$timeout'];
  function favoriteInternsCtrl($http, User, $timeout) {
    var vm = this;
    vm.user = User.getUser();
    vm.resultInfo = '';
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
      }, function (data) {
        console.log(data);
      });
    }

    vm.removeFavUser = function (user) {
      id = {
        favid: user.favid
      }
      User.removeFavUser(id).then(function (response) {
        console.log(response);
        vm.resultInfo = "Successfully deleted user!";
        $timeout(function () {
          vm.resultInfo = '';
          getUser();
        }, 500);
      }, function (error) {
        console.log(error);
      });
    }
    // Filter user function
    vm.filterUsers = function () {
      let user = [];
      if (vm.test == undefined || vm.test.length === 0) {
        vm.users = vm.copyUsers;
      } else {
        // Loop through every user in database
        for (let i = 0; i < vm.users.length; i++) {
          // Loop through individual skills
          for (let j = 0; j < vm.users[i].user.skill.length; j++) {
            // Check if the skill exists in current user
            if (vm.users[i].user.skill[j].skill.toLowerCase().indexOf(vm.test.toLowerCase()) > -1) {
              // Add user to temp array
              user.push(vm.users[i]);
              break;
            }
          }
        }
        if(user.length === 0){
          vm.resultInfo = "No interns match that criteria";
        }
        if(vm.users.length === 0 || vm.test.length === 0){
          vm.users = vm.copyUsers;
          vm.resultInfo = null;
        }else{
        // Set vm.users to temp array and only show results
        vm.users = user;
        }
      }
    }
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
