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
    contactvm.docontact = function(modal, data){
      //Update server information
      User.updateUser(modal, data).then(function(data){
        portfoliovm.close(portfoliovm.user);
      },function(data){
        console.log(data);
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
