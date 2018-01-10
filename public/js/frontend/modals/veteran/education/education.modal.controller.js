(function(){
  educationModalCtrl.$inject = ['$uibModalInstance', 'Authentication', 'CurrUser', 'User'];
  function educationModalCtrl($uibModalInstance, Authentication,CurrUser,User){
    educationvm = this;
    educationvm.user = CurrUser;
    // Containers
    educationvm.newPlan = {};
    educationvm.newCertification ={};
    educationvm.newCourse = {};
    educationvm.newBootcamp = {};

    // Add a new certification
    educationvm.addToCertifications = function() {
      educationvm.user.certifications.push(educationvm.newCertification);
      educationvm.newCertification = {};
    }

    // Add a new course
    educationvm.addToCourses = function() {
      educationvm.user.course.push(educationvm.newCourse);
      educationvm.newCourse = {};
    }

    // Add a new bootcamp
    educationvm.addToBootcamps = function() {
      educationvm.user.bootcamp.push(educationvm.newBootcamp);
      educationvm.newBootcamp = {};
    }

    // Delete one of your plans
    educationvm.deletePlan = function(index) {
      educationvm.user.plan.splice(index, 1);
    }

    // Delete one of your certifications
    educationvm.deleteCertification = function(index) {
      educationvm.user.certifications.splice(index, 1);
    }

    // Delete one of your courses
    educationvm.deleteCourse = function(index) {
      educationvm.user.course.splice(index, 1);
    }

    // Delete one of your bootcamps
    educationvm.deleteBootcamp = function(index) {
      educationvm.user.bootcamp.splice(index, 1);
    }

    // The function that is call when a user cancels the opening of a modal
	  educationvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel');
	  }
    // The function that is call when the user closes the modal
		educationvm.close = function(result){
			$uibModalInstance.close(result);
		}

    // Will make a call to the server and php file
    educationvm.doEducation = function(modal, data){
      //Update server information
      User.updateUser(modal, data).then(function(data){
        educationvm.close(educationvm.user);
      },function(data){
        console.log(data);
      });
      
    } 
    // Will Submit the form depending if everything is filled out
		educationvm.onSubmit = function(modal,data){
      educationvm.doEducation(modal,data);
    }
  }
  angular.module('oweyaa')
  .controller('educationModalCtrl', educationModalCtrl);
})();
