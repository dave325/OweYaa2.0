(function () {


    companySettingsModalCtrl.$inject = ['$scope','CurrUser', '$uibModalInstance', 'User'];

    function companySettingsModalCtrl($scope,CurrUser, $uibModalInstance, User) {

        var compSet = this;

        compSet.user = User.getUser();
        compSet.isDisabled = false;

        // The function that is call when a user cancels the opening of a modal
        compSet.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }
        // The function that is call when the user closes the modal
        compSet.close = function (result) {
            $uibModalInstance.close(result);
        }
        //Auto Complete Stuffs
        $scope.form = {
            type: 'geocode',
            bounds: { SWLat: 49, SWLng: -97, NELat: 50, NELng: -96 },
            country: 'ca',
            typesEnabled: false,
            boundsEnabled: false,
            componentEnabled: true,
            watchEnter: false
        }

        $scope.options = {};

        $scope.options.watchEnter = $scope.form.watchEnter

        if ($scope.form.typesEnabled) {
            $scope.options.types = $scope.form.type
        }
        if ($scope.form.boundsEnabled) {

            var SW = new google.maps.LatLng($scope.form.bounds.SWLat, $scope.form.bounds.SWLng)
            var NE = new google.maps.LatLng($scope.form.bounds.NELat, $scope.form.bounds.NELng)
            var bounds = new google.maps.LatLngBounds(SW, NE);
            $scope.options.bounds = bounds

        }
        if ($scope.form.componentEnabled) {
            $scope.options.country = $scope.form.country
        }

        // Autocomplete Ends
        compSet.onSubmit = function (modal, data) {
            if ($scope.autoCompleteDetails != undefined) {
                compSet.user.company_info.latitude = $scope.autoCompleteDetails.geometry.location.lat();
                compSet.user.company_info.longitude = $scope.autoCompleteDetails.geometry.location.lng();
              }
            compSet.isDisabled = true;
            User.updateUser(modal, data).then(function (response) {
                console.log(response);
                compSet.close(compSet.user);
            }, function (error) {
                compSet.isDisabled = false;
                console.error(error);
                compSet.cancel();
            });
        }

    }


    angular.module('oweyaa')
        .controller('companySettingsModalCtrl', companySettingsModalCtrl);
})();

