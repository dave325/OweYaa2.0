(function(){
  portfolioModalCtrl.$inject = ['$uibModalInstance', 'CurrUser','$http','Authentication'];
  function portfolioModalCtrl($uibModalInstance, CurrUser,$http,Authentication){
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
        url : '/api/update/contactInfo', 
        method: 'POST',
        data: portfoliovm.user,
        headers:{
          "Authorization" : "Bearer " +  Authentication.getToken()
        }
      }).then(function(data){
        console.log(data);
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
