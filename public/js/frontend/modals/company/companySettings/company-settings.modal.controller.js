(function () {


    companySettingsModalCtrl.$inject = ['CurrUser', '$uibModalInstance'];

    function companySettingsModalCtrl(CurrUser, $uibModalInstance) {

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


    }


    angular.module('oweyaa')
        .controller('companySettingsModalCtrl', companySettingsModalCtrl);
})();

