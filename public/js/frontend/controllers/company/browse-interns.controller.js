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
        }, function (data) {
            console.log(data);
        });
        vm.filterUsers = function () {
            let user = [];
            console.log(vm.test);
            for (let i = 0; i < vm.users.length; i++) {
                for (let j = 0; j < vm.users[i].skill.length; j++) {
                    console.log(vm.user[i].skill[j].skill);
                    if (vm.user[i].skill[j].skill === vm.test) {
                        user.push(vm.user[i]);
                    }
                }
            }
            console.log(user);
        }
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
