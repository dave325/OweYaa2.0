(function () {
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', '$uibModal', '$filter', '$location', '$timeout'];
	function profileCtrl($scope, User, $uibModal, $filter, $location, $timeout) {

		if ($location.search().hasOwnProperty('username') && $location.search().username.length > 0) {
			User.returnUser($location.search().username).then(function (res) {
				$scope.user = res.data.user;
				$scope.user.type = 1;

				if ($location.search().hasOwnProperty('username')) {
					$location.search('username', null);
					return;
				}
			}, function (err) {
				location.path('/company/' + User.getUser().company_info.username + '/browse-interns')
			});
		} else {
			$scope.user = User.getUser();
		}
		$scope.requiredFields = [];
		$scope.recommendedFields = [];
		console.log($scope.user);
		if ($scope.user.type === 1) {
			return;
		} else {
			$scope.progress = calcProgress($scope.user);
		}
		function arrayContains(needle, arrhaystack) {
			return (arrhaystack.indexOf(needle) > -1);
		}
		function calcProgress(user) {
			let sum = 0;
			let total = 11.0;
			if (user.contact_info.firstname != null && user.contact_info.firstname.length > 0) {
				sum++;
				if (arrayContains('First Name', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('First Name'), 1);
				}
			} else {
				if (!arrayContains('First Name', $scope.requiredFields)) {
					$scope.requiredFields.push('First Name');
				}
			}
			if (user.contact_info.lastname != null && user.contact_info.lastname.length > 0) {
				sum++;
				if (arrayContains('last Name', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('Last Name'), 1);
				}
			} else {
				if (!arrayContains('Last Name', $scope.requiredFields)) {
					$scope.requiredFields.push('Last Name');
				}
			}
			if (user.contact_info.imgurl != null && user.contact_info.imgurl.length > 0) {
				sum++;
				if (arrayContains('Profile Image', $scope.recommendedFields)) {
					$scope.recommendedFields.splice($scope.recommendedFields.indexOf('Profile Image'), 1);
				}
			} else {
				if (!arrayContains('Profile Image', $scope.recommendedFields)) {
					$scope.recommendedFields.push("Profile Image");
				}
			}
			if (user.contact_info.email != null && user.contact_info.email.length > 0) {
				sum++;
				if (arrayContains('Email', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('Email'), 1);
				}
			} else {
				if (!arrayContains('Email', $scope.requiredFields)) {
					$scope.requiredFields.push('Email');
				}
			}
			if (user.contact_info.phone != null && user.contact_info.phone.length > 0) {
				sum++;
				if (arrayContains('Phone Number', $scope.recommendedFields)) {
					$scope.recommendedFields.splice($scope.recommendedFields.indexOf('Phone Number'), 1);
				}
			} else {
				if (!arrayContains('Phone Number', $scope.recommendedFields)) {
					$scope.recommendedFields.push("Phone Number");
				}
			}
			if (user.contact_info.location != null && user.contact_info.location.length > 0) {
				sum++;
				if (arrayContains('Location', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('Location'), 1);
				}
			} else {
				if (!arrayContains('Location', $scope.requiredFields)) {
					$scope.requiredFields.push('Location');
				}
			}
			if (user.contact_info.isVet === 1) {
				if (user.contact_info.branch != null && user.contact_info.branch.length > 0) {
					sum++;
					if (arrayContains('Branch of Military', $scope.requiredFields)) {
						$scope.requiredFields.splice($scope.requiredFields.indexOf('Branch of Military'), 1);
					}
				} else {
					if (!arrayContains('Branch of Military', $scope.requiredFields)) {
						$scope.requiredFields.push('Branch of Military');
					}
				}
			}
			if (user.education.attendedcollege && user.education.attendedcollege != null) {
				sum++;
				if (arrayContains('Did you attend college?', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('Did you attend college?'), 1);
				}
			} else {
				if (!arrayContains('Did you attend college?', $scope.requiredFields)) {
					$scope.requiredFields.push('Did you attend college?');
				}
			}
			if (user.prev_career_fields.length > 0) {
				sum++;
				if (arrayContains('Previous Career Fields', $scope.recommendedFields)) {
					$scope.recommendedFields.splice($scope.recommendedFields.indexOf('Previous Career Fields'), 1);
				}
			} else {
				if (!arrayContains('Previous Career Fields', $scope.recommendedFields)) {
					$scope.recommendedFields.push("Previous Career Fields");
				}
			}/*
			if (user.availability.length > 0) {
				sum++;
				if (arrayContains('Availability', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('Availability'), 1);
				}
			} else {
				if (!arrayContains('Availability', $scope.requiredFields)) {
					$scope.requiredFields.push('Availability');
				}
			}
			*/
			if (user.month_availability.length > 0) {
				sum++;
				if (arrayContains('Month Availability', $scope.requiredFields)) {
					$scope.requiredFields.splice($scope.requiredFields.indexOf('Month Availability'), 1);
				}
			} else {
				if (!arrayContains('Month Availability', $scope.requiredFields)) {
					$scope.requiredFields.push('Month Availability');
				}
			}
			if (user.skill.length > 4) {
				sum++;
				if (arrayContains('Add more than 5 skills', $scope.recommendedFields)) {
					$scope.recommendedFields.splice($scope.recommendedFields.indexOf('Add more than 5 skills'), 1);
				}
			} else {
				if (!arrayContains('Add more than 5 skills', $scope.recommendedFields)) {
					$scope.recommendedFields.push('Add more than 5 skills');
				}
			}
			let progressbar = Math.round((sum / total) * 100);
			let type;
			if (progressbar < 50) {
				type = "danger";
			} else if (progressbar < 75) {
				type = "warning";
			} else {
				type = "success"
			}
			let info = {
				progress: progressbar,
				type: type
			}
			return info;
		}
		$scope.openModal = function (modal) {
			if (User.getUser()) {
				var m = $uibModal.open({
					templateUrl: '/js/frontend/modals/veteran/' + modal + '/' + modal + '.modal.view.html',
					controller: modal + 'ModalCtrl',
					controllerAs: modal + 'vm',
					windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
					backdrop: false,
					keyboard: false,
					resolve: {
						CurrUser: function () {
							for (var i = 0; i < 2; i++) {
								if ($scope.user.prev_career_fields[i].start_date != null) {
									$scope.user.prev_career_fields[i].start_date = new Date($filter('date')($scope.user.prev_career_fields[i].start_date, "yyyy-MM-dd"));
									$scope.user.prev_career_fields[i].start_date.setDate($scope.user.prev_career_fields[i].start_date.getDate() + 1);
								}
								if ($scope.user.prev_career_fields[i].end_date != null) {
									$scope.user.prev_career_fields[i].end_date = new Date($filter('date')($scope.user.prev_career_fields[i].end_date, "yyyy-MM-dd"));
									$scope.user.prev_career_fields[i].end_date.setDate($scope.user.prev_career_fields[i].end_date.getDate() + 1);
								}
								if ($scope.user.interviews[i].date != null) {
									$scope.user.interviews[i].date = new Date($filter('date')($scope.user.interviews[i].date, "yyyy-MM-dd"));
									$scope.user.interviews[i].date.setDate($scope.user.interviews[i].date.getDate() + 1);
								}
							}
							if ($scope.user.education.graddate != null) {
								$scope.user.education.graddate = new Date($filter('date')($scope.user.education.graddate, "yyyy-MM-dd"));
								$scope.user.education.graddate.setDate($scope.user.education.graddate.getDate() + 1);
							}
							return $scope.user;
						}
					}
				});

				m.result
					.then(function (data) {
						$scope.user = User.getUser();
						$scope.progress = calcProgress(User.getUser());
					}, function (reason) {
						console.log(reason);
					});
			}
		}
	}
	angular.module('oweyaa')
		.controller('profileCtrl', profileCtrl);
})();
