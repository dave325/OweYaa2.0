(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', '$uibModal'];
	function profileCtrl($scope, User, $uibModal) {
		$scope.isObjectEmpty = function(card){
			return Object.keys(card).length === 0;
		 }
	    $scope.contact = {
			profile: {
				img: 'assets/images/User.jpg'
	        },
			user: User.getUser(),
			// Temporary fill for actions 
			// Wil; add dynamically when admin area is created
			actions:{
				task1 : "Task 1",
				task2 : "Task 2"
			}
		}
		$scope.education = {
			school: "",
			course: "",
			providedCourse: ""
		}

		$scope.educationModal = function() {
			var em = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/education/education.modal.view.html',
				controller: 'educationModalCtrl',
				controllerAs: 'educationvm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal",
				resolve: {
					userEd:function(){
						return User.getUser();
					}
				}
			});

			em.result
				.then(function (data) {
					console.log(data);
				},function (reason) {
					console.log(reason);
				});
		}

		$scope.career = {
			prevField1: "",
			prevEmployer1: "",
			goal: ""
		}

		$scope.careerModal = function() {
			var cm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/career/career.modal.view.html',
				controller: 'careerModalCtrl',
				controllerAs: 'careervm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal"
			});
			$scope.openModalPopup = function () {
				am.result
					.then(function (data) {
					console.log(data);
					},function (reason) {
					console.log(reason);
					});
			};
		}
		$scope.skillModal = function() {
			var skm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/skill/skill.modal.view.html',
				controller: 'skillModalCtrl',
				controllerAs: 'skillvm'
			});
			$scope.openModalPopup = function () {
				am.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
			};
		}
		$scope.careerSummary = {
			careerTracks : {
			},
			skills: {
			},
			wantedSkills: {
			},
			bio : ''
		}

		$scope.internshipSummary = {
		}

		$scope.availability 
	}
	angular.module('oweyaa')
	.controller('profileCtrl', profileCtrl);
})();
