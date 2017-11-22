(function(){
  availibilityModalCtrl.$inject = ['$uibModalInstance', 'Authentication','CurrUser', '$scope'];
  function availibilityModalCtrl($uibModalInstance, Authentication,CurrUser, $scope){
    availibilityvm = this;
    availabilityvm.user = currUser;
		availibilityvm.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    availibilityvm.hours = []; // list of intervals, eg: 12:00 am, 12:30 am, 1:00 am
    // Containers
    availibilityvm.schedule = [];

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

    for (var j = 0; j < availibilityvm.weekdays.length; j++) {
        // Pre-populating object literal with working hours 9 am to 5 pm everyday that will be sent to server
        var date = new Date();
        var begin_time = date.setHours(9);
        begin_time = date.setMinutes(0);
        begin_time = date.setSeconds(0);
        var date2 = new Date();
        date2.setMinutes(0);
        date2.setSeconds(0);
        var end_time = date2.setHours(5);
        availibilityvm.schedule.push({
            day: availibilityvm.weekdays[j],
            begin_time: begin_time,
            end_time: end_time
        })
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
