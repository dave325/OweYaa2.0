(function () {
  //Injector will protect against minification
  favoriteInternsCtrl.$inject = ['$http', 'User'];
  function favoriteInternsCtrl($http,User) {
    var vm = this;
    vm.user = User.getUser();
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


    User.getFavUsers(vm.user).then(function (response) {
      console.log(response);
      vm.users = response.data.projects[0];
    }, function (data) {
      console.log(data);
    });
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
