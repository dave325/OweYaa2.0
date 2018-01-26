(function(){
//Injector will protect against minification
favoriteInternsCtrl.$inject = [];
function favoriteInternsCtrl() {
    var vm = this;
    vm.user = "bla";
    // Information will be retrieved from database
    vm.contents = {
     content1: {
        text: "",
        img: "assets/images/test.jpeg"
     },
     content2: {
         text: "",
         img:   "assets/images/test.jpeg"
    }
  }
}
  angular.module('oweyaa')
	.controller('favoriteInternsCtrl', favoriteInternsCtrl);

})();
