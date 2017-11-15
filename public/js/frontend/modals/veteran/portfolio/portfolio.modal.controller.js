(function(){
  portfolioModalCtrl.$inject = ['$uibModalInstance', 'CurrUser','$http','User'];
  function portfolioModalCtrl($uibModalInstance, CurrUser,$http,User){
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
      console.log(portfoliovm.user);
      $http({
        url : '/api/update/education', 
        method: 'POST',
        data: portfoliovm.user,
        responseType:'json'
      }).then(function(data){
        portfoliovm.close(portfoliovm.user);
      },function(data){
        console.log(data);
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
