(function () {
    adminLoginCtrl.$inject = ['AdminService', 'User', 'Authentication', '$location'];
    function adminLoginCtrl(AdminService, User, Authentication, $location) {
        var adminLogin = this;
        adminLogin.user = {};

        adminLogin.loginUser = function () {
            AdminService.login(adminLogin.user).then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    User.getCurrentUser(2).then(function (data) {
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