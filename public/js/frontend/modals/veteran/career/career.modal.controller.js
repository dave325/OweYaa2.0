(function(){
  careerModalCtrl.$inject = ['$uibModalInstance', 'Authentication', '$scope'];
  function careerModalCtrl($uibModalInstance, Authentication, $scope){
    careervm = this;
    // Containers
    careervm.togglePresent = function(c){
      idx = careervm.fromPresent + c;
      idx = true;
      careervm.from = "Present";
    }
    careervm.prevCareer = [
      {
        empl: "",
        contact:"",
        to: ""
      },
      {
        empl: "",
        contact:"",
        to: ""
      }
    ];
    careervm.newFields = [];
    careervm.hobbies = [];

    careervm.newPrevCareer = "";
    careervm.newPrevEmpl = "";
    careervm.newField = "";
    careervm.newHobby = "";
    careervm.relocate = "";
    careervm.editMode = false;

    // Add a new career
    careervm.addToPrevCareer = function() {
      careervm.prevCareer.push(careervm.newPrevCareer);
      careervm.newPrevCareer = "";
    }

    // Add a new employer
    careervm.addToPrevEmpl = function() {
      careervm.prevEmpl.push(careervm.newPrevEmpl);
      careervm.newPrevEmpl = "";
    }

    // Add a new field
    careervm.addToNewFields = function() {
      careervm.newFields.push(careervm.newField);
      careervm.newField = "";
    }

    // Add a new hobby
    careervm.addToHobbies = function() {
      careervm.hobbies.push(careervm.newHobby);
      careervm.newHobby = "";
    }

    // Delete a career
    careervm.deletePrevCareer = function(index) {
      careervm.prevCareer.splice(index, 1);
    }

    // Delete an employer
    careervm.deletePrevEmpl = function(index) {
      careervm.prevEmpl.splice(index, 1);
    }

    // Delete a field
    careervm.deleteNewField = function(index) {
      careervm.newFields.splice(index, 1);
    }

    // Delete a hobby
    careervm.deleteHobby = function(index) {
      careervm.hobbies.splice(index, 1);
    }

    careervm.triggerEditMode = function() {
      careervm.editMode = !careervm.editMode;
    }

    // The function that is call when a user cancels the opening of a modal
	  careervm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		careervm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    careervm.docareer = function(){
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		careervm.onSubmit = function(){
			careervm.docareer();
    }
    careervm.present = function(c){
      career.from = "Present";
      careervm.fromPresent = true;
    }
  }
  angular.module('oweyaa')
  .controller('careerModalCtrl', careerModalCtrl);
})();
