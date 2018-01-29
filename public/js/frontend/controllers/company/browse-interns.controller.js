(function () {
    //Injector will protect against minification
    browseInternsCtrl.$inject = ['$scope', "User"];
    function browseInternsCtrl($scope, User) {
        var vm = this;
        vm.results = 'result';
        vm.user = User.getUser();
        $http({
            url: '/api/getUsers',
            method: 'POST'
        }).then(function (response) {
            console.log(response);
            vm.users = response.data.user;
        }, function (data) {
            console.log(data);
        });
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
