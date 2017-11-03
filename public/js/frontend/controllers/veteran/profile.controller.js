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
				cm.result
					.then(function (data) {
					console.log(data);
					},function (reason) {
					console.log(reason);
					});
			};
		}
		
		$scope.availibility = [];
		$scope.availibilityModal = function() {
			var avm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/availibility/availibility.modal.view.html',
				controller: 'availibilityModalCtrl',
				controllerAs: 'availibilityvm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal"
			});
			avm.result
				.then(function (data) {
					$scope.availibility = [];
					for(var i = 0; i < data.length; i++){
						$scope.availibility.push(data[i]);
					}
				},function (reason) {
				console.log(reason);
				});
		}
		$scope.skills = {
					have:[
					{
						skill:"HTML",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					}
				],
				want:[
					{
						skill:"HTML"
					},
					{
						skill:"CSS"
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					}
				],
				programming:[
					{
						skill:"HTML",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					},
					{
						skill:"CSS",
						amount:4
					}
				]

		}
		$scope.skillModal = function() {
			var skm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/skill/skill.modal.view.html',
				controller: 'skillModalCtrl',
				controllerAs: 'skillvm'
			});
			$scope.openModalPopup = function () {
				skm.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
			};
		}
		$scope.journalModal = function() {
			var skm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/journal/journal.modal.view.html',
				controller: 'journalModalCtrl',
				controllerAs: 'journalvm'
			});
			$scope.openModalPopup = function () {
				skm.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
			};
		}
		$scope.contactModal = function() {
			var cm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/contact/contact.modal.view.html',
				controller: 'contactModalCtrl',
				controllerAs: 'contactvm'
			});
			$scope.openModalPopup = function () {
				cm.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
			};
		}
		$scope.interviews = [{
			company:"Test",
			date:"4",
			contact:'3456',
			notes: "3456"

		},{
			company:"Test",
			date:"4",
			contact:'3456',
			notes: "3456"

		}];
		$scope.netEvents = []
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
