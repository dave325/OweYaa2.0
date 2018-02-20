(function () {
    adminLoginCtrl.$inject = ['AdminService', 'User', '$location'];
    function adminLoginCtrl(AdminService, User, $location) {
        var adminLogin = this;
        adminLogin.user = {};

        adminLogin.loginUser = function () {
            AdminService.login(adminLogin.user).then(function (response) {
                if (response.status === 200) {
                    User.getCurrentUser(response.data.token).then(function (data) {
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