(function(){
  educationModalCtrl.$inject = ['$uibModalInstance', 'Authentication'];
  function educationModalCtrl($uibModalInstance, Authentication){
    educationvm = this;

    // Containers
    educationvm.plans = [];
    educationvm.certfications = [];
    educationvm.courses = [];
    educationvm.bootcamps = [];
    educationvm.focusArea = [];

    educationvm.newPlan = "";
    educationvm.newCertification = "";
    educationvm.newCourse = "";
    educationvm.newBootcamp = "";
    educationvm.newFocusArea = "";

    educationvm.school = "";
    educationvm.degree = "";
    educationvm.grad = "";
    educationvm.editMode = false;

    // Add a new plan
    educationvm.addToPlan = function() {
      educationvm.plans.push(educationvm.newPlan);
    }

    // Add a new certification
    educationvm.addToCertifications = function() {
      educationvm.certfications.push(educationvm.newCertification);
    }

    // Add a new course
    educationvm.addToCourses = function() {
      educationvm.courses.push(educationvm.newCourse);
    }

    // Add a new bootcamp
    educationvm.addToBootcamps = function() {
      educationvm.bootcamps.push(educationvm.newBootcamp);
    }

    // Add a new area of focus
    educationvm.addToFocusArea = function() {
      educationvm.focusArea.push(educationvm.newFocusArea);
    }

    // Delete one of your plans
    educationvm.deletePlan = function(index) {
      educationvm.plans.splice(index, 1);
    }

    // Delete one of your certifications
    educationvm.deleteCertification = function(index) {
      educationvm.certfications.splice(index, 1);
    }

    // Delete one of your courses
    educationvm.deleteCourse = function(index) {
      educationvm.courses.splice(index, 1);
    }

    // Delete one of your bootcamps
    educationvm.deleteBootcamp = function(index) {
      educationvm.bootcamps.splice(index, 1);
    }

    // Delete one of your areas of focus
    educationvm.deleteFocusArea = function(index) {
      educationvm.focusArea.splice(index, 1);
    }

    // Allow editing
    educationvm.triggerEditMode = function() {
      educationvm.editMode = !educationvm.editMode;
    }

    // The function that is call when a user cancels the opening of a modal
	  educationvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		educationvm.close = function(result){
			$uibModalInstance.close(result);
		}

    // Will Submit the form depending if everything is filled out
		educationvm.onSubmit = function(){

    }
  }
  angular.module('oweyaa')
  .controller('educationModalCtrl', educationModalCtrl);
})();
