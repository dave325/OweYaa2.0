(function(){
  actionModalCtrl.$inject = ['$uibModalInstance', 'Authentication'];
  function actionModalCtrl($uibModalInstance, Authentication){
    var actionvm = this;
    actionvm.isDisabled = false;
    //Containers
    actionvm.current = [];
    actionvm.completed = [];

    actionvm.newTask = "";
    actionvm.editMode = false;

    // Add a new task
    actionvm.addToCurrent = function() {
      actionvm.current.push(actionvm.newTask);
      actionvm.newTask = "";
    }

    // Move task from current to completed
    actionvm.addToCompleted = function(index) {
      var toBeAdded = actionvm.current[index];
      actionvm.current.splice(index, 1);
      actionvm.completed.push(toBeAdded);
    }

    // Allow for Edit
    actionvm.triggerEditMode = function() {
      actionvm.editMode = !actionvm.editMode;
    }

    // Remove Task entirely
    actionvm.deleteTask = function(index) {
      actionvm.current.splice(index, 1);
    }

    // Remove Task entirely
    actionvm.deleteCompletedTask = function(index) {
      actionvm.completed.splice(index, 1);
    }

    // The function that is call when a user cancels the opening of a modal
	  actionvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		actionvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    actionvm.doAction = function(){
      actionvm.isDisabled = true;
      //Update server information
    }

    // Will Submit the form depending if everything is filled out
		actionvm.onSubmit = function(){
			actionvm.doAction();
    }
  }
  angular.module('oweyaa')
  .controller('actionModalCtrl', actionModalCtrl);
})();
