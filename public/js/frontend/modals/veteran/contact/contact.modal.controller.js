(function(){
  contactModalCtrl.$inject = ['$uibModalInstance', 'CurrUser', 'User'];
  function contactModalCtrl($uibModalInstance, CurrUser, User){
    contactvm = this;
    contactvm.user = CurrUser;
    // The function that is call when a user cancels the opening of a modal
	  contactvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		contactvm.close = function(result){
			$uibModalInstance.close(result);
    }
    
    // Will make a call to the server and php file
    contactvm.docontact = function(modal, data){
      //Update server information
      User.updateUser(modal, data).then(function(data){
        console.log(data);
        if(data.status === 201){
          contactvm.formInfo = "Succesfully Updated!";
          User.setUser(contactvm.user);
        }
      },function(data){
        if(data.status === 401){
          contactvm.formError = "Unauthorized, there was an error. Please try again!";
        }else{
          contactvm.formError = "There was an error. Please try again!";
        }
      });
    }

    // Will Submit the form depending if everything is filled out
		contactvm.onSubmit = function(modal, data){
			contactvm.docontact(modal, data);
    }
  }
  angular.module('oweyaa')
    .controller('contactModalCtrl', contactModalCtrl);
})();
