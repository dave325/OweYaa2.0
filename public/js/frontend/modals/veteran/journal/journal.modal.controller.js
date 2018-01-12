(function(){
  journalModalCtrl.$inject = ['$uibModalInstance','CurrUser','User','$filter'];
  function journalModalCtrl($uibModalInstance,CurrUser,User,$filter){
    journalvm = this;
    journalvm.user = CurrUser;

    // The function that is call when a user cancels the opening of a modal
	  journalvm.cancel = function(){
	   $uibModalInstance.dismiss('cancel')
	  }
    // The function that is call when the user closes the modal
		journalvm.close = function(result){
			$uibModalInstance.close(result);
		}
    // Will make a call to the server and php file
    journalvm.dojournal = function(modal,data){
      //Update server information
      User.updateUser(modal,data).then(function(data){
        for(var i = 0; i < 2; i++){
          if(journalvm.user.interviews[i].date != null){
            journalvm.user.interviews[i].date = new Date($filter('date')(journalvm.user.interviews[i].date,"yyyy-MM-dd"));
          }
        }
       journalvm.close(journalvm.user); 
      },function(error){
        console.log(error);
      });
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
		journalvm.onSubmit = function(modal,data){
			journalvm.dojournal(modal,data);
    }
  }
  angular.module('oweyaa')
    .controller('journalModalCtrl', journalModalCtrl);
})();
