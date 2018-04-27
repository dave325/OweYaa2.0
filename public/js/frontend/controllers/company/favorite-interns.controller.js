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

    function getUser() {
      User.getFavUsers(vm.user).then(function (response) {
        console.log(response);
        vm.users = response.data.projects;
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
        $timeout(function(){
          vm.resultInfo = '';
          getUser();
        },500);
      }, function (error) {
        console.log(error);
      });
    }
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
