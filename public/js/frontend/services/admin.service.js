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
                 $http.post('/api/admin/retrieveVet',username);
            },
            retrieveCompInfo:function(){
                return $http.post('/api/admin/retrieveComp');
            }
        }
        return adminService;
    }
    angular.module('oweyaa')
        .factory('AdminService',adminSer);
})();