(function(){
  loginModalCtrl.$inject = ['$window','$uibModalInstance', 'User', 'Authentication', '$http'];
	function loginModalCtrl($window, $uibModalInstance, User, Authentication, $http){
    // Instantiate the var to this
		var loginvm = this;
    // Sets error variables
    // States the error message
    loginvm.formError = "";
    // Sets the boolean value for the login form
    // Sets the boolean value for the user Type box
    loginvm.userTypeCheck = true;
    loginvm.type = '';
    // Stores the credentials the users add in
    // Creates the JSON object to hold form field
    loginvm.credentials = {
      loginModal : {}
    };
    // The function that is call when a user cancels the opening of a modal
		loginvm.cancel = function(){
			$uibModalInstance.dismiss('cancel')
		};
    // The function that is call when the user closes the modal
		loginvm.close = function(result){
			$uibModalInstance.close(result);
		};
    // Will make a call to the server and php file
    loginvm.doLogin = function(e,user){
      e.preventDefault();
      // stores the user information in a JSON object
      var checkUser = {
        'username' : user.username,
        'password' : user.password,
        'type' : loginvm.type
      }
      Authentication.setToken(checkUser).then(function(data){
        if(data){
          User.getCurrentUser().then(function(data){
            for(var i = 0; i < 2; i++){
              if(data.data.user.prev_career_fields[i].start_date != null){
                data.data.user.prev_career_fields[i].start_date = new Date(data.data.user.prev_career_fields[i].start_date.substring(0,3),data.data.user.prev_career_fields[i].start_date.substring(5,6),data.data.user.prev_career_fields[i].start_date.substring(8,9),0,0,0,0 );
              }
              if(data.data.user.prev_career_fields[i].end_date != null){
                data.data.user.prev_career_fields[i].end_date = new Date(data.data.user.prev_career_fields[i].end_date);
              }
            }
            User.setUser(data.data.user);
            loginvm.close(data.data.user);
          },function(data){
            console.log(data);
            loginvm.cancel(data);
          });
        }else{
          console.log(data);
          loginvm.formError = "Username or password does not exist. Please try again";
        }
      },function(data){
        console.log(data);
      });
    };
    /*
    * function that will show the form with veteran field set
    */
    loginvm.registerVetCheck = function(){
      loginvm.type = 0;
      loginvm.userTypeCheck = false;
    };
    /*
    * function that will show the form with copmany field set
    */
    loginvm.registerCompCheck = function(){
      loginvm.type = 1;
      loginvm.userTypeCheck = false;
    };
    /*
    * Displays the title based on what type is selected
    */
    loginvm.displayFormTitle = function(type){
      if(type == 1){
        return "Company";
      }else{
        return "Veteran";
      }
    };
    /*
    *
    */
    loginvm.loginOppForm = function(){
      if(loginvm.type == 1){
        loginvm.type = 0;
      }else{
        loginvm.type = 1;
      }
    }
	}

    angular.module('oweyaa')
      .controller('loginModalCtrl', loginModalCtrl);
})();
