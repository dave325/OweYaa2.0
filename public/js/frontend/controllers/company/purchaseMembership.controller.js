(function(){
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User'];
    function purchaseMembershipCtrl(User) {
        var vm = this;
        vm.user = User.getUser();
    }
      angular.module('oweyaa')
        .controller('favoriteInternsCtrl', favoriteInternsCtrl);
    
    })();
    