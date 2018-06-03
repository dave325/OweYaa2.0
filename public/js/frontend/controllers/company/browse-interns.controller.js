(function () {
    //Injector will protect against minification
    browseInternsCtrl.$inject = ['$scope', "User", "$http", "Authentication", "$uibModal", "$timeout"];
    function browseInternsCtrl($scope, User, $http, Authentication, $uibModal, $timeout) {
        var vm = this;
        vm.test = '';
        vm.resultInfo = "";
        vm.internsList = [];
        vm.favUsers = [];
        vm.user = User.getUser();
        console.log(vm.user);
        if (vm.user.membership_token.stripetoken == null) {
            vm.resultInfo = "Please purchase a membership to view available candidates!";
            vm.noToken = true;
        } else {
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
                                vm.favUsers = response.data.projects;
                                for (let j = 0; j < vm.users.length - 1; j++) {
                                    for (let i = 0; i < response.data.projects.length; i++) {
                                        if (vm.users[j].contact_info != null && vm.users[j].contact_info.username === response.data.projects[i].user.contact_info.username) {
                                            vm.users[j].isFav = true;
                                            break;
                                        } else {
                                            vm.users[j].isFav = false;
                                        }
                                    }
                                    for (let i = 0; i < vm.user.company_project.length; i++) {
                                        for (let k = 0; k < vm.user.company_project.candidates.length; k++) {
                                            if (vm.users[j].contact_info != null && vm.user.company_project[i] == 1 && vm.users[j].contact_info.username === vm.user.company_project[i].candidates[k].contact_info.username) {
                                                vm.users[j].inProj = true;
                                                break;
                                            } else {
                                                vm.users[j].inProj = false;
                                            }
                                        }
                                    }
                                }
                                console.log(vm.users);
                                console.log(response);
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
        }

        vm.addFavUser = function (user) {
            favIntern = {
                username: vm.user.company_info.username,
                internid: vm.users[user].contact_info.username,
                favid: vm.getFavId()
            }
            User.addFavUser(favIntern).then(function (response) {
                vm.users[user].isFav = true;
                vm.resultInfo = "Successfully added candidate to favorites!";
                vm.favUsers.push(favIntern);
                $timeout(function () {
                    vm.resultInfo = "";
                }, 1500);

                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }
        vm.isFav = function (user) {
            return !user.isFav;
        }
        vm.inProj = function (user) {
            return !user.inProj;
        }

        vm.getFavId = function () {
            let index;
            for (let i = 0; i < vm.favUsers.length; i++) {
                // Check if the last number in the favid matches to the corresponding number formatting
                if (vm.favUsers[i].favid.substr(vm.favUsers[i].favid.length - 1) == (i + 1)) {
                    continue;
                } else {
                    index = vm.user.company_info.username + (i + 1);
                }
            }
            if (!index) {
                return vm.user.company_info.username + (vm.favUsers.length + 1)
            } else {
                return index;
            }
        }
        vm.addIntern = function (internid) {
            if (User.getUser()) {
                var m = $uibModal.open({
                    templateUrl: '/js/frontend/modals/company/selectIntern/select-intern.modal.view.html',
                    controller: 'selectInternModalCtrl',
                    controllerAs: 'selectInternvm',
                    windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
                    backdrop: false,
                    keyboard: false,
                    resolve: {
                        CurrUser: function () {
                            return { user: vm.users[internid] };
                        }
                    }
                });
                m.result.then(function (response) {
                    vm.resultInfo = "Successfully added candidate to project!";
                    vm.users[internid].inProj = true;
                    $timeout(function () {
                        vm.resultInfo = "";
                    }, 1500);
                }, function (error) {
                    console.log(error);
                });
            }
        }
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
