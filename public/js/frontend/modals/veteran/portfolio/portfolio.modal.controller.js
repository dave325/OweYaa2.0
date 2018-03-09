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
        if(portfoliovm.user.pic){
          var uploadPic = Upload.upload({
            url:"/api/uploadFile",
            data:{file:portfoliovm.user.pic, username:portfoliovm.user.contact_info.username}
          });
          uploadPic.then(function (response) {
            $timeout(function () {
              console.log(response);
            });
          }, function (response) {
            console.log(response);
            if (response.status > 0)
              console.log(response.status + ': ' + response.data);
          });
        }
        portfoliovm.formInfo = "Succesfully Updated!";
        User.setUser(portfoliovm.user);
      },function(data){
        if(data.status === 401){
          portfoliovm.formError = "Unauthorized, there was an error. Please try again!";
        }else{
          portfoliovm.formError = "There was an error. Please try again!";
        }
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
