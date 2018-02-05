(function(){
    adminLoginCtrl.$inject = ['AdminService','$location'];
    function adminLoginCtrl(AdminService,$location){
        var adminLogin = this;
        adminLogin.user = {};

        adminLogin.login = function(){
            AdminService.login().then(function(response){
                console.log(response);
                if(response){
                    $location.path('/veteran/dashboard');
                }
            },function(error){
                console.log(error);
            });
        }
    }

    angular.module('oweyaa')
        .controller("adminLoginCtrl",adminLoginCtrl);
})();