(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', '$uibModal','$filter'];
	function profileCtrl($scope, User, $uibModal,$filter) {
		// Retrieve current user 
		$scope.user = User.getUser();
		console.log($scope.user);
		$scope.progress = calcProgress();
		function calcProgress(){
			let total = 0;
			if($scope.user.contact_info.name){
				total++;
			}
			if($scope.user.contact_info.location){
				total++;
			}
			if($scope.user.contact_info.branch){
				total++;
			}
			if($scope.user.education.attendedCollege){
				total++;
			}
			if($scope.user.previous_career_fields.length > 0){
				total++;
			}
			if($scope.user.availability.length > 0){
				total++;
			}
			if($scope.user.monthavailability.length > 0){
				total++;
			}
			
		}
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
										$scope.user.prev_career_fields[i].start_date = new Date($filter('date')($scope.user.prev_career_fields[i].start_date,"yyyy-MM-dd"));
									}
									if($scope.user.prev_career_fields[i].end_date != null){
										$scope.user.prev_career_fields[i].end_date = new Date($filter('date')($scope.user.prev_career_fields[i].end_date,"yyyy-MM-dd"));
									}
									if($scope.user.interviews[i].date != null){
										$scope.user.interviews[i].date = new Date($filter('date')($scope.user.interviews[i].date,"yyyy-MM-dd"));
									}
								}
								if($scope.user.education.graddate != null){
									$scope.user.education.graddate = new Date($filter('date')($scope.user.education.graddate,"yyyy-MM-dd"));
								  }
								return $scope.user;
							}
					}
				});

				m.result
					.then(function (data) {
						console.log(data);
						$scope.user = data;
					},function (reason) {
						console.log(reason);
					});
			}
		}
	}
	angular.module('oweyaa')
	.controller('profileCtrl', profileCtrl);
})();
