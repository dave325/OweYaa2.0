(function () {
	//Injector will protect against minification
	currentInternshipCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function currentInternshipCtrl($scope, $uibModal, User) {
		let vetIntern = this;
		User.getAllProjects().then(function (response) {
			console.log(response.data);
			vetIntern.projects = response.data;
			vetIntern.totalItems = vetIntern.projects.length;
			vetIntern.currentPage = 1;
			vetIntern.itemsPerPage = 5;
			$scope.$watch("vetIntern.currentPage", function () {
				setPagingData(vetIntern.currentPage);
			});

			function setPagingData(page) {
				var pagedData = vetIntern.projects.slice(
					(page - 1) * vetIntern.itemsPerPage,
					page * vetIntern.itemsPerPage
				);
				vetIntern.displayUsers = pagedData;
			}
			setPagingData(vetIntern.currentPage);
		}, function (error) {
			console.log(error);
		});

		vetIntern.inProj = function (user) {
			if (user.jobInfo.initiated === 1) {
				user.inProj = true;
				return true;
			} else {
				user.inProj = false;
				return false;
			}
		}

		vetIntern.addProj = function (internid) {
			if (User.getUser()) {
				var m = $uibModal.open({
					templateUrl: '/js/frontend/modals/company/selectIntern/select-intern.modal.view.html',
					controller: 'selectInternModalCtrl',
					controllerAs: 'selectInternvetIntern',
					windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
					backdrop: false,
					keyboard: false,
					resolve: {
						CurrUser: function () {
							return { user: vetIntern.users[internid] };
						}
					}
				});
				m.result.then(function (response) {
					vetIntern.resultInfo = "Successfully added candidate to project!";
					vetIntern.users[internid].inProj = true;
					$timeout(function () {
						vetIntern.resultInfo = "";
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
