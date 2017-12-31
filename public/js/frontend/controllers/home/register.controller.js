(function(){
	registerCtrl.$inject = [ '$window', 'User', '$location', '$timeout'];
	function registerCtrl($window, User, $location, $timeout){
		var vm = this;
		// Sets error variables
		vm.formError = " ";
		// Stores the credentials the users add in
		vm.credentials = {
				username : "",
				email : "",
				password: ""
		};
		// Will make a call to the server and php file
		vm.doRegister = function(credentials){
			var user = {
				name : vm.credentials.username,
				password : vm.credentials.password,
				email : vm.credentials.email,
				type : vm.credentials.type
			};
			console.log(user);
			return;
			User.register(user).then(function(data){
				if(data){
					vm.formError = "Thank you very much. You will be redirected shortly Please sign in on the following screen. ";
					$timeout(function(){
		        		$location.path('/');
					},2000);
				}
			},function(data){
				vm.formError = "There was an error, please try again";
			});
		}
		vm.formTitle = function(){
			if(vm.credentials.type == 1){
				return "Company";
			}else{
				return "Veteran";
			}
		}
	}
	angular.module('oweyaa')
		.controller('registerCtrl', registerCtrl);
})();
