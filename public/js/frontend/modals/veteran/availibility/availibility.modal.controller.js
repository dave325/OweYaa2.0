(function(){
  availibilityModalCtrl.$inject = ['$uibModalInstance', 'Authentication', '$scope'];
  function availibilityModalCtrl($uibModalInstance, Authentication, $scope){
    availibiltyvm = this;
    // Containers
    availibilityvm.schedule = [{
			day:"Monday",
			min: "8:00AM",
			max:"8:00PM"
		},{
			day:"Tuesday",
			min:"8:00AM",
			max:"8:00PM"
		},{
			day:"Wednesday",
			min: "8:00AM",
			max:"8:00PM"
		},{
			day:"Thursday",
			min:"8:00AM",
			max:"8:00PM"
		},{
			day:"Friday",
			min: "8:00AM",
			max:"8:00PM"
		},{
			day:"Saturday",
			min:"8:00AM",
			max:"8:00PM"
		}];
    // The function that is call when a user cancels the opening of a modal
	  availibilityvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		availibilityvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    availibilityvm.docareer = function(){
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		availibilityvm.onSubmit = function(){
			availibilityvm.docareer();
    }
    availibilityvm.present = function(c){
      career.from = "Present";
      availibilityvm.fromPresent = true;
    }
  }
  angular.module('oweyaa')
  .controller('availibilityModalCtrl', availibilityModalCtrl);
})();
