(function(){
	//Injector will protect against minification
	internshipCtrl.$inject = ['$scope'];
	function internshipCtrl($scope) {
		var vm = this;

	  vm.internship = {
            company: "",
            manager: "",
            website: "",
            description: "",
            completionDate: "",
            deliverableMethod: "",
            nextCheckIn: "",
            resourses: ""
        };
	}
	angular.module('oweyaa')
	.controller('internshipCtrl', internshipCtrl);
})();
