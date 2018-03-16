(function(){
	//Injector will protect against minification
	currentInternshipCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function currentInternshipCtrl($scope,$uibModal, User) {
		let vetIntern = this;
		User.getAllProjects().then(function(response){
			console.log(response.data.user.companies);

		},function(error){
			console.log(error);
		});
	}
	angular
	.module('oweyaa')
	.controller('currentInternshipCtrl', currentInternshipCtrl);
})();
