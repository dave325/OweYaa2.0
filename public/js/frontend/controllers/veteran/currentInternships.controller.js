(function(){
	//Injector will protect against minification
	currentInternshipsCtrl.$inject = ['$scope', '$uibModal', 'User'];
	function currentInternshipsCtrl($scope,$uibModal, User) {
		let vetIntern = this;
		User.getAllProjects().then(function(response){
			console.log(response.data);
		},function(error){
			console.log(error);
		});
	}
	angular
	.module('oweyaa')
	.controller('currentInternshipsCtrl', currentInternshipsCtrl);
})();
