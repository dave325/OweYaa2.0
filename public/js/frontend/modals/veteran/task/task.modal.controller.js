(function () {
    taskModalCtrl.$inject = ['$uibModalInstance', 'CurrUser', 'User'];
    function taskModalCtrl($uibModalInstance, CurrUser, User) {
        taskvm = this;
        taskvm.user = CurrUser;
        taskvm.isDisabled = false;
        // The function that is call when a user cancels the opening of a modal
        taskvm.cancel = function () {
            $uibModalInstance.dismiss('cancel')
        }
        // The function that is call when the user closes the modal
        taskvm.close = function (result) {
            $uibModalInstance.close(result);
        }

        // Will make a call to the server and php file
        taskvm.dotask = function (modal, data) {
            taskvm.isDisabled = true;
            //Update server information
            User.updateUser(modal, data).then(function (data) {
                taskvm.formInfo = "Successfully Updated!";
                User.setUser(taskvm.user);
            }, function (data) {
                taskvm.isDisabled = false;
                if (data.status === 401) {
                    taskvm.formError = "Unauthorized, there was an error. Please try again!";
                } else {
                    taskvm.formError = "There was an error. Please try again!";
                }
            });
        }

        // Will Submit the form depending if everything is filled out
        taskvm.onSubmit = function (modal, data) {
            taskvm.dotask(modal, data);
        }
    }
    angular.module('oweyaa')
        .controller('taskModalCtrl', taskModalCtrl);
})();
