(function(){
    /*
    * Authentication service is used to update all the information to the modals and updates session detailes
    * Returns CRUD session
    */
    authentication.$inject = ['$window', '$http'];
    function authentication ($window, $http){
      var Session = {
        /*
        * information that will be stored and return to user
        */
        data: {},
        /*
        * Saves the user session
        * @params user - the user informtaion that will be set in sessionStorage
        */
        setToken: function(user) {
          return $http.post('https://oweyaa.herokuapp.com/api/login', user).then(
            function(data){
               console.log(data);
              if(data.data.token){
                $window.sessionStorage.setItem('token', data.data.token);
                // Returns the user data object to the login modal
                return true;
              }else{
                return false;
              }
            },function(data){
              // Returns information from error call
              return data;
            }
          )
        },
        /*
        * Deletes the user session from the database
        * @params user - the user information that will be logged out in php
        */
        deleteToken:function(user){
          return $window.sessionStorage.removeItem('token');
        },
        /*
        * Retrieves the session from the $window.sessionStorage
        */
        getToken : function(){
          // Add call to http function
          return  $window.sessionStorage.getItem('token');
        }
      };
      return Session;
  }
  angular.module('oweyaa')
    .factory('Authentication', authentication);
})();
