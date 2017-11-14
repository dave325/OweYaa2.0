(function(){
  portfolioModalCtrl.$inject = ['$uibModalInstance', 'CurrUser'];
  function portfolioModalCtrl($uibModalInstance, CurrUser){
    portfoliovm = this;
    portfoliovm.user = CurrUser;
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
      $http({
        url : '/api/update/education', 
        method: 'POST',
        data:portfoliovm.user
      });
      
    }

    // Will Submit the form depending if everything is filled out
		portfoliovm.onSubmit = function(){
			portfoliovm.doportfolio();
    }

  }
  angular.module('oweyaa')
    .controller('portfolioModalCtrl', portfolioModalCtrl);
})();
