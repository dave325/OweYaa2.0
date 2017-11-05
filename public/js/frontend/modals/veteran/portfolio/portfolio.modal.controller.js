(function(){
  portfolioModalCtrl.$inject = ['$uibModalInstance', 'currUser'];
  function portfolioModalCtrl($uibModalInstance, currUser){
    portfoliovm = this;
    portfoliovm.user = currUser;
    console.log(portfoliovm.user);
    // The function that is call when a user cancels the opening of a modal
	  portfoliovm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		portfoliovm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    portfoliovm.doportfolio = function(){
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		portfoliovm.onSubmit = function(){
			portfoliovm.doportfolio();
    }
  }
  angular.module('oweyaa')
    .controller('portfolioModalCtrl', portfolioModalCtrl);
})();
