(function(){
    adminSer.$inject = ['$http'];
    function adminSer($http){
        const adminService = {
            login:function(user){
                return $http.post('/api/admin/login',user);
            },
            updateUser:function(data){
                return $http.post('/api/admin/updateUser', data);
            },
            retrieveAllVet:function(){
                return $http.post('/api/admin/retrieveAllVet');
            },
            retrieveVet:function(username){
                 $http.post('/api/admin/retrieveVet',username)
                    .then(function(user){
                        return user.data.user;
                    },function(error){
                        return error.data;
                    });
            },
            retrieveCompInfo:function(){
                return $http.post('/api/admin/retrieveComp');
            }
        }
        return adminSevice;
    }
    angular.module('oweyaa')
        .factory('AdminService',adminSer);
})();