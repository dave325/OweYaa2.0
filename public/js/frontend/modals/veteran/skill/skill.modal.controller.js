(function(){
  skillModalCtrl.$inject = ['$uibModalInstance', 'Authentication','currUser','User'];
  function skillModalCtrl($uibModalInstance, Authentication,currUser,User){
    skillvm = this;
    skillvm.user = currUser();

    // add programming skills
    skillvm.newSkill = {};
    skillvm.newWant = {};
    skillvm.newLanguage = {};

    // Add a new skill
    skillvm.addToSkills = function() {
      skillvm.user.skills.push(skillvm.newSkill);
      skillvm.newSkill = {};
    }

    // Add a new skill that you want
    skillvm.addToWants = function() {
      skillvm.user.wantedskill.push(skillvm.newWant);
      skillvm.newWant = "";
    }

    // Add a new language that you know
    skillvm.addToLanguages = function() {
      skillvm.user.languages.push(skillvm.newLanguage);
      skillvm.newLanguage = null;
    }

    // Delete one of your skills
    skillvm.deleteSkill = function(index) {
      skillvm.user.skills.splice(index, 1);
    }

    // Delete one of your wanted skills
    skillvm.deleteWant = function(index) {
      skillvm.user.wanted.skills.splice(index, 1);
    }

    // Delete one of the languages you know
    skillvm.deleteLanguage = function(index) {
      skillvm.user.languages.splice(index, 1);
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
    skillvm.doskill = function(modal,data){
      //Update server information
      User.updateUser(modal,data)
    }

    // Will Submit the form depending if everything is filled out
		skillvm.onSubmit = function(modal,data){
			skillvm.doskill(modal,data);
    }
  }
  angular.module('oweyaa')
  .controller('skillModalCtrl', skillModalCtrl);
})();
