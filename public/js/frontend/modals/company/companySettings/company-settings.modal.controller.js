(function () {


    companySettingsModalCtrl.$inject = ['CurrUser', '$uibModalInstance','User'];

    function companySettingsModalCtrl(CurrUser, $uibModalInstance,User) {

        var compSet = this;

        compSet.user = CurrUser;

        // The function that is call when a user cancels the opening of a modal
        compSet.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }
        // The function that is call when the user closes the modal
        compSet.close = function (result) {
            $uibModalInstance.close(result);
        }

        compSet.onSubmit = function(modal, data){
            User.updateUser(modal, data).then(function(response){
                console.log(response);
                compSet.close(compSet.user);
            },function(error){
                console.log(error);
            });
        }

    }


    angular.module('oweyaa')
        .controller('companySettingsModalCtrl', companySettingsModalCtrl);
})();

