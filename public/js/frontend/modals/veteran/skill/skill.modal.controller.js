(function(){
  skillModalCtrl.$inject = ['$uibModalInstance', 'Authentication','CurrUser','User'];
  function skillModalCtrl($uibModalInstance, Authentication,CurrUser,User){
    skillvm = this;
    skillvm.user = CurrUser;

    // add programming skills
    skillvm.newSkill = {};
    skillvm.newWant = {};
    skillvm.newLanguage = {};

    // Add a new skill
    skillvm.addToSkills = function() {
      skillvm.user.skill.push(skillvm.newSkill);
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
      skillvm.user.skill.splice(index, 1);
    }

    // Delete one of your wanted skills
    skillvm.deleteWant = function(index) {
      skillvm.user.wanted_skills.splice(index, 1);
    }

    // Delete one of the languages you know
    skillvm.deleteLanguage = function(index) {
      skillvm.user.language.splice(index, 1);
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
      User.updateUser(modal,data).then(function(data){
        skillvm.close(skillvm.user);
      },function(error){
        console.log(data);
      })
    }

    // Will Submit the form depending if everything is filled out
		skillvm.onSubmit = function(modal,data){
			skillvm.doskill(modal,data);
    }
  }
  angular.module('oweyaa')
  .controller('skillModalCtrl', skillModalCtrl);
})();
