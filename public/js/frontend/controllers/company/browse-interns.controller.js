(function () {
    //Injector will protect against minification
    browseInternsCtrl.$inject = ['$scope', "User", "$http"];
    function browseInternsCtrl($scope, User, $http) {
        var vm = this;
        vm.test = '';
        skills = ['css', 'c++', 'javascript'];
        graduated = false;

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
            vm.users = response.data.user;
            User.getFavUsers(vm.user).then(function (response) {
                console.log(vm.users);
                for (let j = 0; j < vm.users.length - 1; j++) {
                    for (let i = 0; i < response.data.projects.length -1; i++) {
                        if(vm.users[j].contact_info != null && vm.users[j].contact_info.username === response.data.projects[i].user.contact_info.username){
                            console.log(true);
                            vm.users[j].isFav = true;
                        }else{
                            vm.users[j].isFav = false;
                        }
                    }
                }
            }, function (data) {
                console.log(data);
            });
            vm.copyUsers = vm.users.slice();
        }, function (data) {
            console.log(data);
        });

        // Filter user function
        vm.filterUsers = function () {
            let user = [];
            if (vm.copyUsers.length === null) {
                vm.resultInfo = "No interns are currectly selected";
                return;
            }
            if (vm.test == undefined || vm.test.length === 0) {
                vm.users = vm.copyUsers;
            } else {
                // Loop through every user in database
                for (let i = 0; i < vm.copyUsers.length; i++) {
                    // Loop through individual skills
                    for (let j = 0; j < vm.copyUsers[i].user.skill.length; j++) {
                        // Check if the skill exists in current user
                        if (vm.copyUsers[i].user.skill[j].skill.toLowerCase().indexOf(vm.test.toLowerCase()) > -1) {
                            // Add user to temp array
                            user.push(vm.copyUsers[i]);
                            break;
                        }
                    }
                }
                // If user with skill is not found, then return nothing.  
                if (user.length === 0) {
                    vm.users = [];
                    vm.resultInfo = "No interns match that criteria";
                }
                // If the length of currenct array is empty and the input field is empty return every user
                else if (vm.test.length === 0) {
                    vm.users = vm.copyUsers;
                    vm.resultInfo = null;
                } else {
                    // Set vm.users to temp array and only show results
                    vm.users = user;
                }
            }
        }

        vm.addFavUser = function (user) {
            favIntern = {
                username: vm.user.company_info.username,
                internid: vm.users[user].contact_info.username,
                favid: vm.user.company_info.username + 1
            }
            User.addFavUser(favIntern).then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }
        vm.isFav = function(user){
            return !user.isFav;
        }
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
