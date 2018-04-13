(function () {
    //Injector will protect against minification
    browseInternsCtrl.$inject = ['$scope', "User", "$http"];
    function browseInternsCtrl($scope, User, $http) {
        var vm = this;
        vm.test = '';
        vm.retrieveInterns = function (graduated, skills) {
            var req = {
                method: 'POST',
                url: '/api/matching',
                data: { graduated, skills }
            }


            $http(req).then(
                function (response) {
                    console.log(response);
                },
                function (response) {
                    console.log("ERROR: Retrieving DB interns" + response);
                }

            );

        }


        vm.retrieveInterns();



        vm.results = 'result';
        vm.user = User.getUser();
        $http({
            url: '/api/getUsers',
            method: 'POST'
        }).then(function (response) {
            //         console.log(response);
            vm.users = response.data.user;
            vm.copyUsers = vm.users.slice();
        }, function (data) {
            console.log(data);
        });
        vm.filterUsers = function () {
            let user = [];
            console.log(vm.test.length)
            if (vm.test.length === 0) {
                vm.users = vm.copyUsers;
            } else {
                for (let i = 0; i < vm.users.length; i++) {
                    for (let j = 0; j < vm.users[i].skill.length; j++) {
                        if (vm.users[i].skill[j].skill.toLowerCase() === vm.test.toLowerCase()) {
                            user.push(vm.users[i]);
                        }
                    }
                }
                vm.users = user;
            }
        }
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
