(function(){
  availibilityModalCtrl.$inject = ['$uibModalInstance', 'Authentication','CurrUser', '$scope'];
  function availibilityModalCtrl($uibModalInstance, Authentication,CurrUser, $scope){
    availibilityvm = this;
    availibilityvm.user = CurrUser;
    // Containers
    availibilityvm.hours = [];

		availibilityvm.start_time = new Date(), availibilityvm.start_time.setHours(9), availibilityvm.start_time.setMinutes(0), availibilityvm.start_time.setSeconds(0);
    availibilityvm.end_time = new Date(), availibilityvm.end_time.setHours(9), availibilityvm.end_time.setMinutes(0), availibilityvm.end_time.setSeconds(0);

    for (var i = 0; i < 24; i++) {
        // push interval of times at every half hour
        var temp_date = new Date();
        temp_date.setHours(i);
        temp_date.setMinutes(0);
        temp_date.setSeconds(0);
        availibilityvm.hours.push(temp_date);

        var temp_date2 = new Date();
        temp_date2.setHours(i);
        temp_date2.setMinutes(30);
        temp_date2.setSeconds(0);
        availibilityvm.hours.push(temp_date2);
    }

    // The function that is call when a user cancels the opening of a modal
	  availibilityvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		availibilityvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    availibilityvm.doAvailability = function(modal,data){
      //Update server information
      User.updateUser(modal,data).then(function(data){
        availabilityvm.close(availabilityvm.user);
      },function(error){
        console.log(data);
      })
    }

    // Will Submit the form depending if everything is filled out
		availibilityvm.onSubmit = function(modal,data){
			availibilityvm.doAvailability(modal,data);
    }
  }
  angular.module('oweyaa')
  .controller('availibilityModalCtrl', availibilityModalCtrl);
})();
