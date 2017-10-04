(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User'];
	function profileCtrl($scope, User) {
		//$scope.user =  User.getUser();
	    $scope.contact = {
			profile: {
				img: '../assets/images/User.jpg'
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
