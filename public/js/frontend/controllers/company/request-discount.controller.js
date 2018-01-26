(function () {
	//Injector will protect against minification
	requestDiscountCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function requestDiscountCtrl($scope, $uibModal, User) {
		const reqDis = this;
		reqDis.user = User.getUser();
		console.log(reqDis.user);
		// Holds form questions
		reqDis.request = {};
		
	}
	angular
		.module('oweyaa')
		.controller('requestDiscountCtrl', requestDiscountCtrl);
})();
