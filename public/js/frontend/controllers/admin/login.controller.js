(function(){
    adminLoginCtrl.$inject = ['AdminService','$location'];
    function adminLoginCtrl(AdminService,$location){
        var adminLogin = this;
        adminLogin.user = {};

        adminLogin.loginUser = function(){
            AdminService.login(adminLogin.user).then(function(response){
                if(response.status === 200){
                    console.log(response);
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