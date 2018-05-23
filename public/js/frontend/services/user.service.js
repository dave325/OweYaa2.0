(function () {
  // Fix issue with session that is not updating when user logs in
  userLogin.$inject = ['$window', '$http', 'Authentication'];
  function userLogin($window, $http, Authentication) {
    var data;
    var User = {
      /*
      * Login function that will check the database for a specific user and password
      * @params user - the information from the login modal
      */
      setUser: function (user) {
        jUser = JSON.stringify(user);
        $window.sessionStorage.setItem('user', jUser);
      },
      getUser: function () {
        user = JSON.parse($window.sessionStorage.getItem('user'));
        return user;
      },
      /*
      * Register function that will register the user into the database
      * @params user - the information that is recieved from the form
      */
      register: function (user) {
        // returns the http call that register the user variable in the database
        return $http.post('/api/addUser', user);
      },
      /*
      * Logout function that will logout the user from the database and return boolean
      * @params user - retrieves user information
      */
      logout: function () {
        Authentication.deleteToken();
        if (Authentication.getToken() == null) {
          $window.sessionStorage.removeItem('user');
          return true;
        } else {
          return false;
        }
      },
      /*
      * isLoggedIn function will check the user information and returns specific user type
      */
      isLoggedIn: function () {
        // Checks if user is set and if not return null
        // Checks if user is set and stores the user inside a variable
        user = JSON.parse($window.sessionStorage.getItem('user'));
        if (Authentication.getToken() == null || user == null || user.type == null) {
          return;
        }
        type = user.type;
        return $http({
          url: '/api/check',
          method: 'POST',
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        });
      },
      /*
      * getCurrentuser functoin will check if User is logged in and then return the information of the user
      */
      getCurrentUser: function (user) {
        if (Authentication.getToken() == null) {
          return;
        } else {
          // returns the http call that register the user variable in the database
          return $http({
            url: '/api/getUser',
            method: 'POST',
            data: { type: user.type },
            headers: {
              "Authorization": "Bearer " + Authentication.getToken()
            }
          });
        }
      }, // End of getCurrentuser
      
      updateUser: function (modal, data) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: '/api/update/' + modal,
          method: 'POST',
          data: data,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        });
      },
      addProjects: function (data) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/addProjects",
          method: 'POST',
          data: data,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      },

      getAllProjects: function () {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/getProjects",
          method: 'POST',
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      },

      getProjectDashboardProjects: function (data) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/projDash/getProjects",
          method: 'POST',
          data: data,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      },
      
      updateAllProjectDash: function (data) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/projDash/updateAll",
          method: 'POST',
          data: data,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      },
      
      getFavUsers: function (user) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/getFavUsers",
          method: 'POST',
          data: user,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      },

      addFavUser: function (user) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/addFavUsers",
          method: 'POST',
          data: user,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      },

      removeFavUser: function (user) {
        if (Authentication.getToken() == null) {
          return;
        }
        return $http({
          url: "/api/removeFavUser",
          method: 'POST',
          data: user,
          headers: {
            "Authorization": "Bearer " + Authentication.getToken()
          }
        })
      }
    }
    return User;
  }
  angular.module('oweyaa')
    .factory('User', userLogin);
})();
