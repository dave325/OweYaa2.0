(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User', 'veteranId', '$route'];
	function profileCtrl($scope, User,veteranId, $route) {
		console.log($route.current.params);
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
