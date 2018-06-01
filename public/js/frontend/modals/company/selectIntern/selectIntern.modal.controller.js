(function () {
    //Injector will protect against minification
    selectInternModalCtrl.$inject = ['User', '$http', '$timeout', '$uibModalInstance', 'CurrUser'];
    function selectInternModalCtrl(User, $http, $timeout, $uibModalInstance, CurrUser) {

        let selectIntern = this;
        selectIntern.user = User.getUser();
        selectIntern.projects = selectIntern.user.company_project;
        // The function that is call when a user cancels the opening of a modal
        selectIntern.cancel = function () {
            $uibModalInstance.dismiss('cancel')
        };
        // The function that is call when the user closes the modal
        selectIntern.close = function (result) {
            $uibModalInstance.close(result);
        };

        selectIntern.onSubmit = function(selectIntern){
            let userInfo = {
                username: vm.user.company_info.username,
                hours: 0,
                projid: selectIntern.projectId
              }
              console.log(userInfo);
        }

        


    }
    angular.module('oweyaa')
        .controller('selectInternModalCtrl', selectInternModalCtrl);
})();