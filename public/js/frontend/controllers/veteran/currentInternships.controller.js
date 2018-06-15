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
	}

	vetIntern.inProj = function (user) {
		if (user.jobInfo.initiated == 1) {
			user.inProj = true;
		} else {
			user.inProj = false;
		}
	}
	angular
		.module('oweyaa')
		.controller('currentInternshipCtrl', currentInternshipCtrl);
})();
