(function () {
    //Injector will protect against minification
    browseInternsCtrl.$inject = ['$scope', "User", "$http", "Authentication"];
    function browseInternsCtrl($scope, User, $http, Authentication) {
        var vm = this;
        vm.test = '';
        vm.resultInfo = "";
        vm.internsList = [];
        vm.user = User.getUser();
        if(vm.user.membership_token.stripetoken == null){
            vm.resultInfo = "Please purchase a membership to view available candidates!";
            vm.noToken = true;
        }else{
        vm.internsList =
            vm.retrieveInterns = function () {
                var req = {
                    method: 'POST',
                    url: '/api/matching',
                    headers: {
                        "Authorization": "Bearer " + Authentication.getToken()
                    }
                }
                $http(req).then(
                    function (response) {

                        vm.users = response.data;
                        User.getFavUsers(vm.user).then(function (response) {
                            for (let j = 0; j < vm.users.length - 1; j++) {
                                for (let i = 0; i < response.data.projects.length - 1; i++) {
                                    if (vm.users[j].contact_info != null && vm.users[j].contact_info.username === response.data.projects[i].user.contact_info.username) {
                                        vm.users[j].isFav = true;
                                    } else {
                                        vm.users[j].isFav = false;
                                    }
                                }
                            }
                        }, function (data) {
                            console.log(data);
                        });
                        vm.copyUsers = vm.users.slice();
                    },
                    function (response) {
                        console.log("ERROR: Retrieving DB candidates" + response);
                    }

                );
            }
        


        vm.retrieveInterns();




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
                    for (let j = 0; j < vm.copyUsers[i].skill.length; j++) {
                        // Check if the skill exists in current user
                        if (vm.copyUsers[i].skill[j].skill.toLowerCase().indexOf(vm.test.toLowerCase()) > -1) {
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
            console.log(vm.users[user]);
            favIntern = {
                username: vm.user.company_info.username,
                internid: vm.users[user].contactinfo.username,
                favid: vm.user.company_info.username + 1
            }
            User.addFavUser(favIntern).then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }
        vm.isFav = function (user) {
            return !user.isFav;
        }
    }
    console.log(vm.users);
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
