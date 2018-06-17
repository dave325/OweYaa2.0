(function () {
    adminLoginCtrl.$inject = ['AdminService', 'User', 'Authentication', '$location'];
    function adminLoginCtrl(AdminService, User, Authentication, $location) {
        var adminLogin = this;
        adminLogin.user = {};

        adminLogin.loginUser = function () {
            AdminService.login(adminLogin.user).then(function (response) {
                if (response.status === 200) {
                    AdminService.getUser({type:2, admin:true}).then(function (data) {
                        console.log(data.data.user);
                        User.setUser(data.data.user);
                        $location.path('/admin/dashboard');
                    }, function (data) {
                        console.log(data);
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    }

    angular.module('oweyaa')
        .controller("adminLoginCtrl", adminLoginCtrl);
})();