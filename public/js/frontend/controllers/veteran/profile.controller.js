(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', '$uibModal','$filter'];
	function profileCtrl($scope, User, $uibModal,$filter) {
		// Retrieve current user 
		$scope.user = User.getUser();
		$scope.requiredFields = [];
		$scope.recommendedFields = [];
		console.log($scope.user);
		$scope.progress = calcProgress($scope.user);
		function calcProgress(user){
			let sum = 0;
			let total = 11.0;
			if(user.contact_info.name != null && user.contact_info.name.length > 0){
				sum++;
			}else{
				$scope.requiredFields.push('Name');
				$scope.fix += "\nName";
			}
			if(user.contact_info.imgurl != null && user.contact_info.imgurl.length > 0){
				sum++;
			}else{
				$scope.recommendedFields.push("Profile Image");
			}
			if(user.contact_info.email != null && user.contact_info.email.length > 0){
				sum++;
			}else{
				$scope.requiredFields.push('Email');
			}
			if(user.contact_info.phone != null && user.contact_info.phone.length > 0){
				sum++;
			}else{
				$scope.recommendedFields.push("Phone Number");
			}
			if(user.contact_info.location != null && user.contact_info.location.length > 0){
				sum++;
			}else{
				$scope.requiredFields.push('Location');
			}
			if(user.contact_info.branch != null && user.contact_info.branch.length > 0){
				sum++;
			}else{
				$scope.requiredFields.push('Branch of Military');
			}
			if(user.education.attendedCollege){
				sum++;
			}else{
				$scope.requiredFields.push('Did you attend college');
			}
			if(user.prev_career_fields.length > 0){
				sum++;
			}else{
				$scope.recommendedFields.push("Previous Career Fields");
			}
			if(user.availability.length > 0){
				sum++;
			}else{
				$scope.requiredFields.push('Availability');
			}
			if(user.month_availability.length > 0){
				sum++;
			}else{
				$scope.requiredFields.push('Month Availability');
			}
			if(user.skill.length > 4){
				sum++;
			}else{
				$scope.requiredFields.push('Add more than 5 skills');
			}
			
			return Math.round((sum/total) * 100);
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
						$scope.user = User.getUser();
						$scope.progress = calcProgress(User.getUser());
					},function (reason) {
						console.log(reason);
					});
			}
		}
	}
	angular.module('oweyaa')
	.controller('profileCtrl', profileCtrl);
})();
