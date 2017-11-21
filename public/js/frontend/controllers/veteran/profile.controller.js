(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', '$uibModal'];
	function profileCtrl($scope, User, $uibModal) {
		// Retrieve current user 
	    $scope.user = User.getUser();
		 console.log($scope.user);
		 $scope.openModal = function(modal){
			if(User.getUser()){
				var m = $uibModal.open({
					templateUrl: '/js/frontend/modals/veteran/' + modal +'/' + modal + '.modal.view.html',
					controller: modal + 'ModalCtrl',
					controllerAs: modal + 'vm',
					windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal",
					resolve: {
							CurrUser:function(){
								return User.getUser();
							}
					}
				});

				m.result
					.then(function (data) {
						console.log(data);
						$scope.user = data;
						User.setUser(data);
					},function (reason) {
						console.log(reason);
					});
			}
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
				controllerAs: 'skillvm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal"
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
				controllerAs: 'journalvm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal"
			});
				skm.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
		}
		$scope.contactModal = function() {
			var cm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/contact/contact.modal.view.html',
				controller: 'contactModalCtrl',
				controllerAs: 'contactvm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal",
				resolve:{
					currUser:function(){
						return User.getUser();
					}
				}
			});
				cm.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
		}
		$scope.portfolioModal = function() {
			var cm = $uibModal.open({
				templateUrl: '/js/frontend/modals/veteran/portfolio/portfolio.modal.view.html',
				controller: 'portfolioModalCtrl',
				controllerAs: 'portfoliovm',
				windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal",
				resolve:{
					currUser:function(){
						return User.getUser();
					}
				}
			});
				cm.result
					.then(function (data) {
						console.log(data);
					},function (reason) {
						console.log(reason);
					});
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
		$scope.netEvents = [];
		$scope.jobSearch = {
			goal:{
				One:"sads",
				Two:"asdas",
				Five: "asdas",
			},
			careerSearch:[{
				for:"asdf",
				title:"asdf",
				status:"sdf"
			},{
				for:"asdf",
				title:"asdf",
				status:"sdf"
			}],
			parallel:"asdfs"
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
