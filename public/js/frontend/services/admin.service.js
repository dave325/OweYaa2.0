(function () {
    adminSer.$inject = ['$http', '$window'];
    function adminSer($http, $window) {
        const adminService = {
            login: function (user) {
                return $http.post('/api/admin/login', user).then(
                    function (data) {
                        if (data.data.token) {
                            $window.sessionStorage.setItem('token', data.data.token);
                            // Returns the user data object to the login modal
                            return data;
                        } else {
                            return data;
                        }
                    }, function (data) {
                        // Returns information from error call
                        return data;
                    }
                )
            },
            getUser: function (user) {
                if (Authentication.getToken() == null) {
                    return;
                } else {
                    // returns the http call that register the user variable in the database
                    return $http({
                        url: '/api/check',
                        method: 'POST',
                        data: { user },
                        headers: {
                            "Authorization": "Bearer " + Authentication.getToken()
                        }
                    });
                }
            },
            updateUser: function (data) {
                return $http.post('/api/admin/updateUser', data);
            },
            retrieveAllVet: function () {
                return $http.post('/api/admin/retrieveAllVet');
            },
            retrieveVet: function (username) {
                return $http.post('/api/admin/retrieveVet', username);
            },
            retrieveCompInfo: function () {
                return $http.post('/api/admin/retrieveComp');
            }
        }
        return adminService;
    }
    angular.module('oweyaa')
        .factory('AdminService', adminSer);
})();