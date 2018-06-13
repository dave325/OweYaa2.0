(function () {


    companyCultureSetsModalCtrl.$inject = ['$scope', 'CurrUser', '$uibModalInstance', 'User'];

    function companyCultureSetsModalCtrl($scope, CurrUser, $uibModalInstance, User) {

        var setvm = this;

        setvm.user = User.getUser();
        setvm.isDisabled = false;

        // The function that is call when a user cancels the opening of a modal
        setvm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }
        // The function that is call when the user closes the modal
        setvm.close = function (result) {
            $uibModalInstance.close(result);
        }

        setvm.cultureSets = [
            [
                "employees have room to grow",
                "employees can be career starters",
                "employees have business acumen",
                "we have the best professionals in the field"
            ],
            [
                "employees have room to grow",
                "employees can be career starters",
                "employees have business acumen",
                "we have the best professionals in the field",
            ],
            [
                "Company values personal values",
                "Company values professional goals",
                "Company values innovation in field",
                "Company values excellence first",
            ],
            [
                "Company leads the field",
                "Employees are doing specials things in their field",
                "our company is special",
            ],
            [
                "I know everyone at my company",
                "I know some people at my company",
                "I know a few people at my company",
            ]
        ];
        
        setvm.onSubmit = function (modal, data) {
            if ($scope.autoCompleteDetails == undefined) {
                setvm.user.company_info.latitude = $scope.autoCompleteDetails.geometry.location.lat();
                setvm.user.company_info.longitude = $scope.autoCompleteDetails.geometry.location.lng();
            }
            setvm.isDisabled = true;
            User.updateUser(modal, data).then(function (response) {
                console.log(response);
                setvm.close(setvm.user);
            }, function (error) {
                setvm.isDisabled = false;
                console.error(error);
                setvm.cancel();
            });
        }

    }


    angular.module('oweyaa')
        .controller('companyCultureSetsModalCtrl', companyCultureSetsModalCtrl);
})();

