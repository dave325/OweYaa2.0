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
								for(var i = 0; i < 2; i++){
									if($scope.user.prev_career_fields[i].start_date != null){
										$scope.user.prev_career_fields[i].start_date = new Date($scope.user.prev_career_fields[i].start_date);
									}
									if($scope.user.prev_career_fields[i].end_date != null){
										$scope.user.prev_career_fields[i].end_date = new Date($scope.user.prev_career_fields[i].end_date);
									}
								}
								return $scope.user;
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
	}
	angular.module('oweyaa')
	.controller('profileCtrl', profileCtrl);
})();
