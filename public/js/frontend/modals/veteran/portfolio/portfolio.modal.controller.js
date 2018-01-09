(function(){
  portfolioModalCtrl.$inject = ['$uibModalInstance', 'CurrUser','$http','$timeout','Upload','User'];
  function portfolioModalCtrl($uibModalInstance, CurrUser,$http,$timeout,Upload,User){
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
    portfoliovm.doportfolio = function(modal, data){
      //Update server information
      User.updateUser(modal, data).then(function(data){
        var uploadPic = Upload.upload({
          url:"/api/uploadFile",
          data:{file:portfoliovm.user.pic, username:portfoliovm.user.contact_info.username}
        });
        uploadPic.then(function (response) {
          $timeout(function () {
            console.log("Worked \n" + response);
          });
        }, function (response) {
          console.log(response);
          if (response.status > 0)
            console.log(response.status + ': ' + response.data);
        });
        portfoliovm.close(portfoliovm.user);
      },function(data){
        console.log(data);
      });
      
    }

    // Will Submit the form depending if everything is filled out
		portfoliovm.onSubmit = function(modal,data){
			portfoliovm.doportfolio(modal,data);
    }

  }
  angular.module('oweyaa')
    .controller('portfolioModalCtrl', portfolioModalCtrl);
})();
