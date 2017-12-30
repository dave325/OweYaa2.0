(function(){
  contactModalCtrl.$inject = ['$uibModalInstance', 'CurrUser'];
  function contactModalCtrl($uibModalInstance, CurrUser){
    contactvm = this;
    contactvm.user = CurrUser;
    console.log(contactvm.user);
    // The function that is call when a user cancels the opening of a modal
	  contactvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		contactvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    contactvm.docontact = function(){
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		contactvm.onSubmit = function(){
			contactvm.docontact();
    }
  }
  angular.module('oweyaa')
    .controller('contactModalCtrl', contactModalCtrl);
})();
