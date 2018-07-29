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
        vm.displayUsers = [];
        vm.users = [];
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
                        data: vm.user,
                        headers: {
                            "Authorization": "Bearer " + Authentication.getToken()
                        }
                    }
                    $http(req).then(
                        function (response) {

                            let temp = response.data;
                            User.getFavUsers(vm.user).then(function (response) {
                                vm.favUsers = response.data.projects;
                                for (let j = 0; j < temp.length - 1; j++) {
                                    for (let i = 0; i < response.data.projects.length; i++) {
                                        if (temp[j].contact_info != null && temp[j].contact_info.username === response.data.projects[i].user.contact_info.username) {
                                            temp[j].isFav = true;
                                            break;
                                        } else {
                                            temp[j].isFav = false;
                                        }
                                    }
                                }
                                vm.users = temp;
                                vm.totalItems = vm.users.length;
                                vm.currentPage = 1;
                                vm.itemsPerPage = 5;
                                $scope.$watch("vm.currentPage", function () {
                                    setPagingData(vm.currentPage);
                                });

                                function setPagingData(page) {
                                    var pagedData = vm.users.slice(
                                        (page - 1) * vm.itemsPerPage,
                                        page * vm.itemsPerPage
                                    );
                                    vm.displayUsers = pagedData;
                                }
                                setPagingData(vm.currentPage);
                            }, function (data) {
                                console.log(data);
                            });
                            vm.copyUsers = temp.slice();
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
                    vm.displayUsers = vm.copyUsers;
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
                        vm.displayUsers = [];
                        vm.resultInfo = "No interns match that criteria";
                    }
                    // If the length of currenct array is empty and the input field is empty return every user
                    else if (vm.test.length === 0) {
                        vm.displayUsers = vm.copyUsers;
                        vm.resultInfo = null;
                    } else {
                        // Set vm.users to temp array and only show results
                        vm.displayUsers = user;
                        vm.resultInfo = null;
                    }
                    vm.totalItems = vm.displayUsers.length;
                    vm.currentPage = 1;
                    vm.itemsPerPage = 5;
                    $scope.$watch("vm.currentPage", function () {
                        setPagingData(vm.currentPage);
                    });

                    function setPagingData(page) {
                        var pagedData = vm.displayUsers.slice(
                            (page - 1) * vm.itemsPerPage,
                            page * vm.itemsPerPage
                        );
                        vm.displayUsers = pagedData;
                    }
                    setPagingData(vm.currentPage);
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
            return !user.contact_info.inproj;
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
        vm.viewUser = function(user){
            location.path('/vateran/').search({username: user.contact_info.username});
        }
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
