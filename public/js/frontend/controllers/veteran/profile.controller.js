(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', 'veteranId'];
	function profileCtrl($scope, User,veteranId) {
		$scope.veteranId = veteranId;
		console.log(veteranId);
		//$scope.user =  User.getUser();
	    $scope.contact = {
			profile: {
				img: 'assets/images/User.jpg'
	        },
			user: User.getUser()
	    }
		$scope.careerSummary = {
			careerTracks : {
			},
			skills: {
			},
			wantedSkills: {
			},
			bio : ''
		}

		$scope.internshipSummary = {
		}

		$scope.availability 
	}
	angular.module('oweyaa')
	.controller('profileCtrl', profileCtrl);
})();
