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
                    console.log("ERROR: Retrieving DB candidates" + response);
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
            if (vm.test.length === 0) {
                vm.users = vm.copyUsers;
            } else {
                // Loop through every user in database
                for (let i = 0; i < vm.users.length; i++) {
                    // Loop through individual skills
                    for (let j = 0; j < vm.users[i].skill.length; j++) {
                        // Check if the skill exists in current user
                        if (vm.users[i].skill[j].skill.toLowerCase() === vm.test.toLowerCase()) {
                            // Add user to temp array
                            user.push(vm.users[i]);
                            break;
                        }
                    }
                }
                // Set vm.users to temp array and only show results
                vm.users = user;
            }
        }
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
