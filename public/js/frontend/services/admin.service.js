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
                $http.post('/api/admin/retrieveAllVet').then(function(response){
                    console.log(response);
                    return response.data.user;    
                },function(error){
                    console.log(error);
                });
            },
            retrieveVet:function(username){
                 return $http.post('/api/admin/retrieveVet',username);
            },
            retrieveCompInfo:function(){
                return $http.post('/api/admin/retrieveComp').then(function(response){
                    console.log(response);
                    return response.data.user;    
                },function(error){
                    console.log(error);
                });
            }
        }
        return adminService;
    }
    angular.module('oweyaa')
        .factory('AdminService',adminSer);
})();