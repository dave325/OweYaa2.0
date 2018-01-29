(function(){
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User'];
    function projectDashboardCtrl(User) {
        var vm = this;
        vm.user = User.getUser();
        console.log(vm.user);
        //Retrieve project information
        

        
    }
      angular.module('oweyaa')
        .controller('projectDashboardCtrl', projectDashboardCtrl);
    
    })();