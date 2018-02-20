(function(){
    adminSer.$inject = ['$http'];
    function adminSer($http){
        const adminService = {
            login:function(user){
                return $http.post('/api/admin/login',user).then(
                    function(data){
                      if(data.data.token){
                        $window.sessionStorage.setItem('token', data.data.token);
                        // Returns the user data object to the login modal
                        return data;
                      }else{
                        return data;
                      }
                    },function(data){
                      // Returns information from error call
                      return data;
                    }
                  )
            },
            updateUser:function(data){
                return $http.post('/api/admin/updateUser', data);
            },
            retrieveAllVet:function(){
                return $http.post('/api/admin/retrieveAllVet');
            },
            retrieveVet:function(username){
                 return $http.post('/api/admin/retrieveVet',username);
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