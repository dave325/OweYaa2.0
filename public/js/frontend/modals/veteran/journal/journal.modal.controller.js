(function(){
  journalModalCtrl.$inject = ['$uibModalInstance'];
  function journalModalCtrl($uibModalInstance){
    journalvm = this;
    journalvm.content = { };

    // The function that is call when a user cancels the opening of a modal
	  journalvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		journalvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    journalvm.dojournal = function(){
      //Update server information
    }

    /*
    * Update the modal to add a new skill
    */
    journalvm.addElements = function(container, value){
      var size = content.length;
      var wrapper = document.getElementById(container);
      wrapper.append('<input ng-model="' + value + '_' + container + size + '" type="text" class="btn" ');
    }
    // Will Submit the form depending if everything is filled out
		journalvm.onSubmit = function(){
			journalvm.dojournal();
    }
  }
})();
