(function () {
	//Injector will protect against minification
	currentInternshipCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function currentInternshipCtrl($scope, $uibModal, User) {
		let vetIntern = this;
		User.getAllProjects().then(function (response) {
			console.log(response.data);
			vetIntern.projects = response.data;
			vm.totalItems = vetIntern.projects.length;
			vm.currentPage = 1;
			vm.itemsPerPage = 5;
			$scope.$watch("vetIntern.currentPage", function () {
				setPagingData(vm.currentPage);
			});

			function setPagingData(page) {
				var pagedData = vetIntern.projects.slice(
					(page - 1) * vm.itemsPerPage,
					page * vm.itemsPerPage
				);
				vm.displayUsers = pagedData;
			}
			setPagingData(vm.currentPage);
		}, function (error) {
			console.log(error);
		});

		vetIntern.inProj = function (user) {
			if (user.jobInfo.initiated == 1) {
				user.inProj = true;
			} else {
				user.inProj = false;
			}
		}

		vm.addProj = function (internid) {
			if (User.getUser()) {
				var m = $uibModal.open({
					templateUrl: '/js/frontend/modals/company/selectIntern/select-intern.modal.view.html',
					controller: 'selectInternModalCtrl',
					controllerAs: 'selectInternvm',
					windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
					backdrop: false,
					keyboard: false,
					resolve: {
						CurrUser: function () {
							return { user: vm.users[internid] };
						}
					}
				});
				m.result.then(function (response) {
					vm.resultInfo = "Successfully added candidate to project!";
					vm.users[internid].inProj = true;
					$timeout(function () {
						vm.resultInfo = "";
					}, 1500);
				}, function (error) {
					console.log(error);
				});
			}
		}
	}
	angular
		.module('oweyaa')
		.controller('currentInternshipCtrl', currentInternshipCtrl);
})();
