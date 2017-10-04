(function(){
	//Injector will protect against minification
	careerCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function careerCtrl($scope,$uibModal, User) {
		$scope.user =  User.getCurrentuser();
	  $scope.actions = {
			task1: "",
			task2: ""
		}

		$scope.actionsModal = function() {
			var am = $uibModal.open({
				templateUrl: 'js/frontend/modals/veteran/action/action.modal.view.html',
				controller: 'actionModalCtrl',
				controllerAs: 'actionvm'
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

		$scope.portfolio = {
			github: $scope.user.social.github,
			linkedin: $scope.user.social.linkedin
		}

		$scope.socialModal = function() {
			var som = $uibModal.open({
				templateUrl: 'frontend/modals/veteran/social/social.modal.view.html',
				controller: 'socialModalCtrl',
				controllerAs: 'socialvm'
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

		$scope.career = {
			prevField1: "",
			prevEmployer1: "",
			goal: ""
		}

		$scope.careerModal = function() {
			var cm = $uibModal.open({
				templateUrl: 'frontend/modals/veteran/career/career.modal.view.html',
				controller: 'careerModalCtrl',
				controllerAs: 'careervm'
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

		$scope.education = {
			school: "",
			course: "",
			providedCourse: ""
		}

		$scope.educationModal = function() {
			var em = $uibModal.open({
				templateUrl: 'frontend/modals/veteran/education/education.modal.view.html',
				controller: 'educationModalCtrl',
				controllerAs: 'educationvm'
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

		$scope.skill = {
			highestSkill: "",
			highestSkillLevel: ""
		}

		$scope.skillModal = function() {
			var skm = $uibModal.open({
				templateUrl: 'frontend/modals/veteran/skill/skill.modal.view.html',
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


	}
	angular
	.module('oweyaa')
	.controller('careerCtrl', careerCtrl);
})();
