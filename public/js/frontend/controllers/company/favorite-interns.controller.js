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


    $http({
      url: '/api/getProjects',
      method: 'POST'
    }).then(function (response) {
      console.log(response);
      vm.users = response.data.user;
    }, function (data) {
      console.log(data);
    });
  }


  angular.module('oweyaa')
    .controller('favoriteInternsCtrl', favoriteInternsCtrl);


})();
