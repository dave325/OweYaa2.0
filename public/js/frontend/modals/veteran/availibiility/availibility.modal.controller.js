(function(){
  availbilityModalCtrl.$inject = ['$uibModalInstance', 'Authentication', '$scope'];
  function availibilityModalCtrl($uibModalInstance, Authentication, $scope){
    availibiltyvm = this;
    // Containers
    availibilityvm.prevCareer = [
      {
        empl: "",
        contact:"",
        to: "",
        present: false
      },
      {
        empl: "",
        contact:"",
        to: "",
        present:false
      }
    ];
    availibilityvm.newFields = [];
    availibilityvm.hobbies = [];

    availibilityvm.newPrevCareer = "";
    availibilityvm.newPrevEmpl = "";
    availibilityvm.newField = "";
    availibilityvm.newHobby = "";
    availibilityvm.relocate = "";
    availibilityvm.editMode = false;

    // Add a new career
    availibilityvm.addToPrevCareer = function() {
      availibilityvm.prevCareer.push(availibilityvm.newPrevCareer);
      availibilityvm.newPrevCareer = "";
    }

    // Add a new employer
    availibilityvm.addToPrevEmpl = function() {
      availibilityvm.prevEmpl.push(availibilityvm.newPrevEmpl);
      availibilityvm.newPrevEmpl = "";
    }

    // Add a new field
    availibilityvm.addToNewFields = function() {
      availibilityvm.newFields.push(availibilityvm.newField);
      availibilityvm.newField = "";
    }

    // Add a new hobby
    availibilityvm.addToHobbies = function() {
      availibilityvm.hobbies.push(availibilityvm.newHobby);
      availibilityvm.newHobby = "";
    }

    // Delete a career
    availibilityvm.deletePrevCareer = function(index) {
      availibilityvm.prevCareer.splice(index, 1);
    }

    // Delete an employer
    availibilityvm.deletePrevEmpl = function(index) {
      availibilityvm.prevEmpl.splice(index, 1);
    }

    // Delete a field
    availibilityvm.deleteNewField = function(index) {
      availibilityvm.newFields.splice(index, 1);
    }

    // Delete a hobby
    availibilityvm.deleteHobby = function(index) {
      availibilityvm.hobbies.splice(index, 1);
    }

    availibilityvm.triggerEditMode = function() {
      availibilityvm.editMode = !availibilityvm.editMode;
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
  .controller('careerModalCtrl', careerModalCtrl);
})();
