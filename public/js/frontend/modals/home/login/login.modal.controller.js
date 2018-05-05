(function(){
  loginModalCtrl.$inject = ['$window','$uibModalInstance', 'User', 'Authentication', '$http', '$location'];
	function loginModalCtrl($window, $uibModalInstance, User, Authentication, $http, $location){
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
			$uibModalInstance.dismiss('cancel');
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
        'username' : user.username.toLowerCase(),
        'password' : user.password,
        'type' : loginvm.type
      }
      Authentication.login(checkUser).then(function(data){
        if(data.status === 200){
          User.getCurrentUser(checkUser).then(function(data){
            console.log(data);
            User.setUser(data);
            loginvm.close(data);
          },function(data){
            loginvm.formError = "Username or password does not exist.<br/> Please try again.";
          });
        }else{
          loginvm.formError = "Username or password does not exist.<br/> Please try again.";
        }
      },function(){
        loginvm.formError = "There was an error logging in. <br /> Please try again.";
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

    loginvm.registerPage = function(){
      loginvm.close( {page: 'register'});
    }
	}

    angular.module('oweyaa')
      .controller('loginModalCtrl', loginModalCtrl);
})();
