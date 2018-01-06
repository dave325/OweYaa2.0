(function(){
  // Fix issue with session that is not updating when user logs in
  userLogin.$inject = ['$window', '$http', 'Authentication'];
  function userLogin($window, $http, Authentication){
    var User = {
      data: {},
      /*
      * Login function that will check the database for a specific user and password
      * @params user - the information from the login modal
      */
      setUser : function(user){
        jUser = JSON.stringify(user);
        $window.sessionStorage.setItem('user', jUser);
      },
      getUser : function(){
        user = JSON.parse($window.sessionStorage.getItem('user'));
        return user;
      },
      /*
      * Register function that will register the user into the database
      * @params user - the information that is recieved from the form
      */
      register : function(user){
        // returns the http call that register the user variable in the database
        return $http.post('/api/addUser', user);
      },
      /*
      * Logout function that will logout the user from the database and return boolean
      * @params user - retrieves user information
      */
      logout: function(){
        Authentication.deleteToken();
        if(Authentication.getToken() == null){
          $window.sessionStorage.removeItem('user');
          return true;
        }else{
          return false;
        }
      },
      /*
      * isLoggedIn function will check the user information and returns specific user type
      */
      isLoggedIn: function(){
        // Checks if user is set and if not return null
        // Checks if user is set and stores the user inside a variable
        if(Authentication.getToken() == null){
          return false;
        }
        user = JSON.parse($window.sessionStorage.getItem('user'));
        type = user.type;
        $http({
          url : '/api/check', 
          method: 'POST',
          data:{"type" : type},
          headers:{
            "Authorization" : "Bearer " +  Authentication.getToken()
          }
        }).then(function(response){
          return true; 
        },function(response){
            return false;
        });
        console.log('h"');
        return false;
      },
      /*
      * getCurrentuser functoin will check if User is logged in and then return the information of the user
      */
      getCurrentUser: function(type, token){
        var user;
        if(token == null){
          return;
        }else{
          // returns the http call that register the user variable in the database
          return $http({
            url : '/api/check', 
            method: 'POST',
            data:{"type" : type},
            headers:{
              "Authorization" : "Bearer " +  token
            }
          });
        }
      }, // End of getCurrentuser
      updateUser: function(modal, data){
        if(Authentication.getToken() == null){
          return;
        }
        return $http({
          url : '/api/update/' + modal, 
          method: 'POST',
          data: data,
          headers:{
            "Authorization" : "Bearer " +  Authentication.getToken()
          }
        });
      }
    }
    return User;
  }
  angular.module('oweyaa')
    .factory('User', userLogin);
})();
