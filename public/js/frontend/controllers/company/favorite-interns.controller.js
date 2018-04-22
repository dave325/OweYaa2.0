(function () {
  //Injector will protect against minification
  favoriteInternsCtrl.$inject = ['$http', 'User','$timeout'];
  function favoriteInternsCtrl($http, User,$timeout) {
    var vm = this;
    vm.user = User.getUser();
    vm.users = getUser();
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
      return User.getFavUsers(vm.user).then(function (response) {
        console.log(response);
        return response.data.projects[0];
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
        $timeout(function(){
          vm.users = getUser();
        },1000);
      }, function (error) {
        console.log(error);
      });
    }
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
