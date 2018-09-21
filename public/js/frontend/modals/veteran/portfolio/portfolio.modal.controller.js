(function () {
  portfolioModalCtrl.$inject = ['$scope', '$uibModalInstance', 'CurrUser', '$http', '$timeout', 'Authentication', 'User'];
  function portfolioModalCtrl($scope, $uibModalInstance, CurrUser, $http, $timeout, Authentication, User) {
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
      if ($scope.autoCompleteDetails != undefined) {
        portfoliovm.user.contact_info.latitude = $scope.autoCompleteDetails.geometry.location.lat();
        portfoliovm.user.contact_info.longitude = $scope.autoCompleteDetails.geometry.location.lng();
      }
      portfoliovm.isDisabled = true;
      //Update server information
      User.updateUser(modal, data).then(function (data) {
        if (portfoliovm.pic) {
          var fileFormData = new FormData();
          fileFormData.append('file', portfoliovm.pic);
          //var deffered = $q.defer();
          $http.post("/api/uploadFile?username=" + portfoliovm.user.contact_info.username + '&count=' + portfoliovm.user.files.length + "&resume=false", fileFormData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined, 'Process-Data': false, "Authorization": "Bearer " + Authentication.getToken() },
          }).then(function (response) {
            console.log(response);
            let isChanged = true;
            if (response.data.success == true) {
              //portfoliovm.user.files.push(response['info']);
              for (let i = 0; i < portfoliovm.user.files.length; i++) {
                console.log(portfoliovm.user.files[i])
                if (portfoliovm.user.files[i].filename == response.data.info.filename) {
                  portfoliovm.user.files[i] = response.data.info;
                  isChanged = false;
                }
              }
              if (isChanged) {
                console.log('reach');
                portfoliovm.user.files.push(response.data.info);
              }
              portfoliovm.formInfo = "Succesfully Updated!";
              User.setUser(portfoliovm.user);
              portfoliovm.close(response.data);
            }
          }, function (response) {
            portfoliovm.formError = "There was an error. Please try again!";          });
        }
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
