(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal', '$http'];
    function projectDashboardCtrl(User, $uibModal, $http) {

        var vm = this;


        //get user details
        vm.user = User.getUser();
        vm.curProj = {};
        var indexOfCurrentProject = 0;
        vm.matchedProj = {};
        for (let i = 0; i < vm.user.company_project.length; i++) {
            if (vm.user.company_project[i].jobInfo.initiated == 1) {
                vm.matchedProj = vm.user.company_project[i];
                indexOfCurrentProject = i;
            }
        }
        vm.username = vm.user.company_info.username;
        vm.curProj = vm.user.company_project[indexOfCurrentProject];
        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        vm.reloadPageNewID = function ($e, id) {
            $e.preventDefault();
            vm.user.company_project.forEach(function f(ele) {
                if (ele.jobInfo.projid == id) {
                    indexOfCurrentProject = vm.user.company_project.indexOf(ele);

                    vm.curProj = vm.user.company_project[indexOfCurrentProject];

                    return;
                }
            });

        }

        const winClass = "col-xs-12 col-md-8 col-md-offset-2";
        /*
        User.getProjectDashboardProjects({ username: vm.username}).then(
            function success(response) {
                vm.allProjects = response.data;
                vm.curProj = vm.allProjects[indexOfCurrentProject];
                console.log(vm.curProj);
            },
            function fail() {
                console.log("Failed on retrieve projects");
            }
        );*/

        function updateAll(data) {
            var req = {
                method: 'POST',
                url: '/api/projDash/updateAll',
                data: data
            }
            $http(req).then(function (response) { console.log(response) },
                function (error) { error });
        }


        vm.editDescription = function () {
            var modal = $uibModal.open({
                templateUrl: getModalPath('project-dashboard-description'),
                controller: function ($scope, $uibModalInstance) {

                    $scope.curProj = vm.curProj;

                    //a hack to keep an unmodified version of the project if the user presses cancel.
                    var unmodified = JSON.parse(JSON.stringify(vm.curProj));

                    $scope.careerOptions = ['developer', 'designer', 'marketing', 'sales', 'customer service'];
                    // Remove any skill in the User object 
                    $scope.removeSkill = function (skill) {
                        for (let i = 0; i < vm.curProj.skills.length; i++) {
                            if (vm.curProj[skill][i].delete) {
                                vm.curProj[skill].splice(i, 1);
                            }
                        }
                    }

                    // Delete one of your skills
                    $scope.deleteSkill = function (index) {
                        vm.curProj.skills[index].delete = true;
                    }

                    $scope.newSkill = {};
                    // Add a new skill
                    $scope.addToSkills = function () {
                        $scope.newSkill.skillid = $scope.addIndex('skills');
                        vm.curProj.skills.push($scope.newSkill);
                        $scope.newSkill = {};
                    }
                    $scope.addIndex = function (skill) {
                        let index;
                        for (let i = 0; i < vm.curProj[skill].length; i++) {
                            if (vm.curProj[skill][i].skillid.substr(vm.curProj[skill][i].skillid.length - 1) == (i + 1)) {
                                continue;
                            } else {
                                index = vm.curProj.jobInfo.title + vm.user.company_info.username + (i + 1);
                            }
                        }
                        if (!index) {
                            return vm.curProj.jobInfo.title + vm.user.company_info.username + (vm.curProj[skill].length + 1)
                        } else {
                            return index;
                        }
                    }

                    $scope.ok = function () {

                        vm.curProj.username = vm.user.company_info.username;
                        console.log(vm.curProj);
                        updateAll(vm.curProj);
                        $scope.removeSkill('skills');

                        $uibModalInstance.close();
                    };
                    $scope.cancel = function () {
                        vm.user.company_project[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.user.company_project[indexOfCurrentProject];

                        $uibModalInstance.close();
                    };
                },
                windowClass: winClass
            });
        }

        vm.editManagerInfo = function () {
            var modal = $uibModal.open({
                templateUrl: getModalPath('project-dashboard-manager'),
                controller: function ($scope, $uibModalInstance) {


                    $scope.curProj = vm.curProj;

                    //a hack to keep an unmodified version of the project if the user presses cancel.
                    var unmodified = JSON.parse(JSON.stringify(vm.curProj));

                    $scope.ok = function () {
                        updateAll(vm.curProj);
                        $uibModalInstance.close();
                    };
                    $scope.cancel = function () {
                        vm.user.company_project[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.user.company_project[indexOfCurrentProject];

                        $uibModalInstance.close();
                    };
                },
                windowClass: winClass
            });
        }

        vm.editInternHours = function (interns) {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-editHours'),
                controller: function ($scope, $uibModalInstance) {

                    //a hack to keep an unmodified version of the project if the user presses cancel.
                    var unmodified = JSON.parse(JSON.stringify(vm.curProj));


                    $scope.interns = vm.curProj.candidates;

                    $scope.ok = function () {
                        updateAll(vm.curProj);
                        $uibModalInstance.close();
                    };



                    $scope.cancel = function () {
                        vm.user.company_project[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.user.company_project[indexOfCurrentProject];

                        $uibModalInstance.close();
                    };

                    $scope.increment = function (intern) {
                        intern.hours++;
                    }

                    $scope.decrement = function (intern) {
                        intern.hours--;
                    }

                },
                windowClass: winClass
            });

        }


        vm.editMilestones = function (milestones) {


            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-mstones'),

                controller: function ($scope, $uibModalInstance) {

                    $scope.milestones = vm.curProj.milestones;

                    var unmodified = JSON.parse(JSON.stringify(vm.curProj));


                    $scope.ok = function () {
                        updateAll(vm.curProj);
                        $uibModalInstance.close();
                    };


                    $scope.cancel = function () {
                        vm.user.company_project[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.user.company_project[indexOfCurrentProject];

                        $uibModalInstance.close();
                    };

                    $scope.onDelete = function (milestone) {

                        vm.milestones.splice(milestones.indexOf(milestone), 1);
                    }

                    $scope.onAdd = function (milestoneDescription, date, status) {

                        vm.milestones.push(new milestone(milestoneDescription, date, status));
                    }
                },
                windowClass: winClass
            });

        }




    }
    angular.module('oweyaa')
        .controller('projectDashboardCtrl', projectDashboardCtrl);
})();


