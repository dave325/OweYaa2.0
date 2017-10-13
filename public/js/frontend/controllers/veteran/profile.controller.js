(function(){
	//Injector will protect against minification
	profileCtrl.$inject = ['$scope', 'User'];
	function profileCtrl($scope, User) {
		$scope.isObjectEmpty = function(card){
			return Object.keys(card).length === 0;
		 }
	    $scope.contact = {
			profile: {
				img: 'assets/images/User.jpg'
	        },
			user: User.getUser(),
			// Temporary fill for actions 
			// Wil; add dynamically when admin area is created
			actions:{
			}
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
