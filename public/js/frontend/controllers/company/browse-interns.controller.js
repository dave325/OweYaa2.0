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
            for (let i = 0; i < vm.user; i++) {
                for (let j = 0; j < vm.user; j++) {
                    console.log(vm.user);
                    if (vm.user.skill[j].indexOf(vm.test) > -1) {
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
