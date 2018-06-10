(function(){
  socialModalCtrl.$inject = ['$uibModalInstance', 'Authentication'];
  function socialModalCtrl($uibModalInstance, Authentication){
    socialvm = this;

    // Container
     socialvm.github = "";
     socialvm.linkedin = "";
     socialvm.portfolio = "";
     socialvm.editMode = false;

     socialvm.triggerEditMode = function() {
       socialvm.editMode = !socialvm.editMode;
     }

    // The function that is call when a user cancels the opening of a modal
	  socialvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		socialvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    socialvm.dosocial = function(){
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		socialvm.onSubmit = function(){
			socialvm.dosocial();
    }
  }
  angular.module('oweyaa')
  .controller('socialModalCtrl', socialModalCtrl);
})();
