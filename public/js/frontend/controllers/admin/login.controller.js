(function () {
    adminLoginCtrl.$inject = ['AdminService', 'User', 'Authentication', '$location'];
    function adminLoginCtrl(AdminService, User,Authentication, $location) {
        var adminLogin = this;
        adminLogin.user = {};

        adminLogin.loginUser = function () {
            AdminService.login(adminLogin.user).then(function (response) {
                if (response.status === 200) {
                    Authentication.setToken(response.data.token).then(function(data){
                        User.getCurrentUser(2).then(function (data) {
                            User.setUser(data.data.user);
                            $location.path('/admin/dashboard');
                        }, function (data) {
                            console.log(data);
                        });
                    },function(error){
                        console.log(error);
                    })
                }
            }, function (error) {
                console.log(error);
            });
        }
    }

    angular.module('oweyaa')
        .controller("adminLoginCtrl", adminLoginCtrl);
})();