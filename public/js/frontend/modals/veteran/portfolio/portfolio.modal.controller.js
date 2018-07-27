(function () {
  portfolioModalCtrl.$inject = ['$scope', '$uibModalInstance', 'CurrUser', '$http', '$timeout', 'Upload', 'User'];
  function portfolioModalCtrl($scope, $uibModalInstance, CurrUser, $http, $timeout, Upload, User) {
    portfoliovm = this;
    portfoliovm.user = CurrUser;
    portfoliovm.isDisabled = false;
    portfoliovm.options = [
      {
        name: "Spouse",
        value: 0
      },
      {
        name: "Veteran",
        value: 1
      }
    ];
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
    // List for army 
    portfoliovm.branchOptions = ['Coast Guard', 'Army', 'Navy', 'Marines', 'Air force'];
    // The function that is call when a user cancels the opening of a modal
    portfoliovm.cancel = function () {
      $uibModalInstance.dismiss('cancel')
    }
    // The function that is call when the user closes the modal
    portfoliovm.close = function (result) {
      $uibModalInstance.close(result);
    }
    // Will make a call to the server and php file
    portfoliovm.doportfolio = function (modal, data) {
      if ($scope.autoCompleteDetails != undefined ) {
        portfoliovm.user.contact_info.latitude = $scope.autoCompleteDetails.geometry.location.lat();
        portfoliovm.user.contact_info.longitude = $scope.autoCompleteDetails.geometry.location.lng();
      }
      portfoliovm.isDisabled = true;
      //Update server information
      User.updateUser(modal, data).then(function (data) {
        if (portfoliovm.user.pic) {
          var uploadPic = Upload.upload({
            url: "/api/uploadFile",
            data: { file: portfoliovm.user.pic, username: portfoliovm.user.contact_info.username, fileid:(portfoliovm.user.contact_info.username + portfoliovm.user.files.length)}
          });
          uploadPic.then(function (response) {
            $timeout(function () {
              console.log(response);
            });
          }, function (response) {
            console.log(response);
            if (response.status > 0)
              console.log(response.status + ': ' + response.data);
          });
        }
        portfoliovm.formInfo = "Succesfully Updated!";
        User.setUser(portfoliovm.user);
        portfoliovm.close();
      }, function (data) {
        portfoliovm.isDisabled = false;
        if (data.status === 401) {
          portfoliovm.formError = "Unauthorized, there was an error. Please try again!";
        } else {
          portfoliovm.formError = "There was an error. Please try again!";
        }
      });
    }

    // Will Submit the form depending if everything is filled out
    portfoliovm.onSubmit = function (modal, data) {
      if (portfoliovm.user.contact_info.firstname.length < 1 || portfoliovm.user.contact_info.lastname.length < 1) {
        portfoliovm.formError = "You must submit a first name  and last nameto save the information";
      } else {
        portfoliovm.doportfolio(modal, data);
      }
    }

  }
  angular.module('oweyaa')
    .controller('portfolioModalCtrl', portfolioModalCtrl);
})();
