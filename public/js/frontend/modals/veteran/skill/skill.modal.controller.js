(function(){
  skillModalCtrl.$inject = ['$uibModalInstance', 'Authentication'];
  function skillModalCtrl($uibModalInstance, Authentication){
    skillvm = this;

    // Containers
    skillvm.skills = [{
      skill:"HTML",
      amount:4
    }];
    skillvm.wants = [];
    skillvm.languages = [];

    skillvm.newSkill;
    skillvm.newWant = "";
    skillvm.newLanguage = "";
    skillvm.editMode = false;

    // Add a new skill
    skillvm.addToSkills = function() {
      skillvm.skills.push(skillvm.newSkill);
      skillvm.newSkill = "";
    }

    // Add a new skill that you want
    skillvm.addToWants = function() {
      skillvm.wants.push(skillvm.newWant);
      skillvm.newWant = "";
    }

    // Add a new language that you know
    skillvm.addToLanguages = function() {
      skillvm.languages.push(skillvm.newLanguage);
      skillvm.newLanguage = "";
    }

    // Delete one of your skills
    skillvm.deleteSkill = function(index) {
      skillvm.skills.splice(index, 1);
    }

    // Delete one of your wanted skills
    skillvm.deleteWant = function(index) {
      skillvm.wants.splice(index, 1);
    }

    // Delete one of the languages you know
    skillvm.deleteLanguage = function(index) {
      skillvm.languages.splice(index, 1);
    }

    // Allow editing
    skillvm.triggerEditMode = function() {
      skillvm.editMode = !skillvm.editMode;
    }

    // The function that is call when a user cancels the opening of a modal
	  skillvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		skillvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    skillvm.doskill = function(){
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		skillvm.onSubmit = function(){
			skillvm.doskill();
    }
  }
  angular.module('oweyaa')
  .controller('skillModalCtrl', skillModalCtrl);
})();
