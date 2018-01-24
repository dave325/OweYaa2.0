(function(){
	//Injector will protect against minification
	requestDiscountCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function requestDiscountCtrl($scope,$uibModal, User) {
        const reqDis = this;
        reqDis.user = User.getUser();
        reqDis.request = {};
	}
	angular
	.module('oweyaa')
	.controller('requestDiscountCtrl', requestDiscountCtrl);
})();
