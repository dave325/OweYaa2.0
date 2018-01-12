(function(){
  careerModalCtrl.$inject = ['$uibModalInstance', 'Authentication','CurrUser','User', '$scope'];
  function careerModalCtrl($uibModalInstance, Authentication,CurrUser,User, $scope){
    careervm = this;
    // Containers
    careervm.user = CurrUser;
    careervm.newPrevCareer = {};
    careervm.newHobby = {};
    careervm.relocate = {};

    // Add a new career
    careervm.addToPrevCareer = function() {
      careervm.user.prev_career_fields.push(careervm.newPrevCareer);
      careervm.newPrevCareer = {};
    }

    // Add a new hobby
    careervm.addToHobbies = function() {
      careervm.user.hobbies.push(careervm.newHobby);
      careervm.newHobby = {};
    }

    // Delete a career
    careervm.deletePrevCareer = function(index) {
      careervm.user.prevCareer.splice(index, 1);
    }

    // Delete a field
    careervm.deleteNewField = function(index) {
      careervm.newFields.splice(index, 1);
    }

    // Delete a hobby
    careervm.deleteHobby = function(index) {
      careervm.user.hobbies.splice(index, 1);
    }

    // The function that is call when a user cancels the opening of a modal
	  careervm.cancel = function(){
	   $uibModalInstance.dismiss('cancel');
	  }
    // The function that is call when the user closes the modal
		careervm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    careervm.docareer = function(modal,data){
      //Update server information
      User.updateUser(modal,data).then(function(data){
        careervm.close(careervm.user);
      },function(error){
        console.log(error);
      });
    }

    // Will Submit the form depending if everything is filled out
		careervm.onSubmit = function(modal,data){
			careervm.docareer(modal,data);
    }
    careervm.present = function(c){
      careervm.from = Date.now().getMilliseconds();
      careervm.fromPresent = true;
    }
  }
  angular.module('oweyaa')
  .controller('careerModalCtrl', careerModalCtrl);
})();
