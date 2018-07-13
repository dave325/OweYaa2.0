(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['$scope', 'User', '$uibModal', '$http', '$filter', '$location', '$window'];
    function projectDashboardCtrl($scope, User, $uibModal, $http, $filter, $location, $window) {

        var vm = this;


        //get user details
        vm.user = User.getUser();
        vm.curProj = {};
        var indexOfCurrentProject = 0;
        vm.matchedProj = null;
        vm.username = vm.user.company_info.username;
        if (vm.user.company_project.length > 0) {
            for (let i = 0; i < vm.user.company_project.length; i++) {
                if (vm.user.company_project[i].jobInfo.initiated == 1) {
                    vm.matchedProj = vm.user.company_project[i];
                    indexOfCurrentProject = i;
                }
            }
            vm.curProj = vm.user.company_project[indexOfCurrentProject];
            let hours = 0;
            function updateHours() {
                hours = 0;
                for (let i = 0; i < vm.curProj.candidates.length; i++) {
                    hours += vm.curProj.candidates[i].hours;
                }
                if ((hours - vm.user.membership_token.totalhours) === 0) {
                    $scope.error = "You have reached the # of hours that the account can use by. Please purchase more hours!";
                }
                else if (hours > vm.user.membership_token.totalhours) {
                    $scope.error = "You have reached the limit of hours that the account can use by " + (hours - vm.user.membership_token.totalhours) + ". Please purchase more hours!";
                }
                else if (hours >= vm.user.membership_token.totalhours - 10) {
                    $scope.error = "You are close to the limit of hours that the account can use. You have " + (vm.user.membership_token.totalhours - hours) + " remaining. Please purchase more hours";
                } else {
                    $scope.error = null;
                }
            }
            updateHours();
        } else {
            $scope.error = "No projects are currently assigned";
            vm.noProj = true;
        }
        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        vm.reloadPageNewID = function ($e, id) {
            $e.preventDefault();
            vm.user.company_project.forEach(function f(ele) {
                if (ele.jobInfo.projid == id) {
                    indexOfCurrentProject = vm.user.company_project.indexOf(ele);

                    vm.curProj = vm.user.company_project[indexOfCurrentProject];
                    var active = angular.element( document.getElementsByClassName( 'active' ) );
                    if(active.length > 0){
                        console.log('a');
                        active[0].classList.remove('active');
                    }
                    $e.currentTarget.classList.add('active');
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
            $http(req).then(function (response) {
                console.log(response);
            },
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
                        $scope.newSkill.skillid = $scope.addIndex('skills').replace(/\s/g, '');
                        $scope.newSkill.projid = vm.curProj.jobInfo.projid;
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
                        $scope.removeSkill('skills');
                        console.log(vm.curProj);
                        updateAll(vm.curProj);
                        vm.user.company_project[indexOfCurrentProject] = vm.curProj;
                        User.setUser(vm.user);
                        $uibModalInstance.close(vm.curProj);
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

        vm.completeProject = function () {
            if (confirm("Are you sure you want to mark " + vm.curProj.jobInfo.title + " completed?")) {
                vm.curProj.jobInfo.completed = 1;
                vm.curProj.jobInfo.initiated = 0;
                vm.curProj.candidates = [];
                updateAll(vm.curProj);
                vm.user.company_project[indexOfCurrentProject] = vm.curProj;
                if(vm.curProj == vm.matchedProj){
                    vm.matchedProj = null;
                }
                User.setUser(vm.user);
            }
        }

        vm.initiateProject = function () {
            if (confirm("Are you sure you want to mark " + vm.curProj.jobInfo.title + " initiated?")) {
                vm.curProj.jobInfo.initiated = 1;
                updateAll(vm.curProj);
                vm.user.company_project[indexOfCurrentProject] = vm.curProj;
                vm.matchedProj = vm.curProj;
                User.setUser(vm.user);
            }
        }

        vm.deleteProj = function(){
            if (confirm("Are you sure you want to mark " + vm.curProj.jobInfo.title + " initiated?")) {
                vm.curProj.delete = true;
                updateAll(vm.curProj);
                vm.user.company_project.splice(indexOfCurrentProject,1);
                indexOfCurrentProject = 0;
                vm.curProj = vm.user.company_project[0];
                vm.matchedProj = vm.curProj;
                User.setUser(vm.user);
            }
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


                    $scope.interns = vm.curProj.candidates.slice();
                    let deletedCandidates = [];
                    $scope.removeWorkingIntern = function (index, username) {
                        vm.curProj.candidates[index].delete = true;
                        $scope.interns.splice(index, 1);
                        deletedCandidates.push(username);
                    }
                    $scope.getAddOnHours = function () {
                        $location.path('/company/' + vm.user.company_info.userame + '/add-on');
                        $scope.cancel();
                    }
                    let hours = 0;
                    $scope.updateTotalHours = function (intern) {
                        hours = 0;
                        for (let i in vm.curProj.candidates) {
                            if (intern != null && intern.username == vm.curProj.candidates[i] && intern.hours != vm.curProj.candidates[i].hours) {
                                hours += intern.hours;
                                continue;
                            }
                            hours += vm.curProj.candidates[i].hours;
                        }
                        if ((hours - vm.user.membership_token.totalhours) === 0) {
                            $scope.error = "You have reached the # of hours that the account can use by. Please purchase more hours!";
                            vm.user.membership_token.currenthours = hours;
                            $scope.isDisabled = false;
                        }
                        else if (hours > vm.user.membership_token.totalhours) {
                            $scope.error = "You have reached the limit of hours that the account can use by " + (hours - vm.user.membership_token.totalhours) + ". Please purchase more hours!";
                            $scope.isDisabled = true;
                        }
                        else if (hours >= vm.user.membership_token.totalhours - 10) {
                            $scope.error = "You are close to the limit of hours that the account can use. You have " + (vm.user.membership_token.totalhours - hours) + " remaining. Please purchase more hours";
                            vm.user.membership_token.currenthours = hours;
                            $scope.isDisabled = false;
                        } else {
                            vm.user.membership_token.currenthours = hours;
                            $scope.error = null;
                            $scope.isDisabled = false;
                        }
                    }
                    function updateHours(intern) {
                        hours = 0;
                        for (let i in vm.curProj.candidates) {
                            if (intern != null && intern.username == vm.curProj.candidates[i] && intern.hours != vm.curProj.candidates[i].hours) {
                                hours += intern.hours;
                                continue;
                            }
                            hours += vm.curProj.candidates[i].hours;
                        }
                        if ((hours - vm.user.membership_token.totalhours) === 0) {
                            $scope.error = "You have reached the # of hours that the account can use by. Please purchase more hours!";
                            vm.user.membership_token.currenthours = hours;
                            $scope.isDisabled = false;
                        }
                        else if (hours > vm.user.membership_token.totalhours) {
                            $scope.error = "You have reached the limit of hours that the account can use by " + (hours - vm.user.membership_token.totalhours) + ". Please purchase more hours!";
                            $scope.isDisabled = true;
                        }
                        else if (hours >= vm.user.membership_token.totalhours - 10) {
                            $scope.error = "You are close to the limit of hours that the account can use. You have " + (vm.user.membership_token.totalhours - hours) + " remaining. Please purchase more hours";
                            vm.user.membership_token.currenthours = hours;
                            $scope.isDisabled = false;
                        } else {
                            vm.user.membership_token.currenthours = hours;
                            $scope.error = null;
                            $scope.isDisabled = false;
                        }
                    }
                    updateHours();
                    $scope.ok = function () {
                        if (vm.user.membership_token.currenthours > vm.user.membership_token.totalhours) {
                            $scope.error = "You have reached the limit of hours that the account can use by " + (hours - vm.user.membership_token.totalhours) + ". Please purchase more hours!";
                            $scope.isDisabled = false;
                        } else {
                            updateAll(vm.curProj);
                            for (let i = 0; i < vm.curProj.candidates.length; i++) {
                                for (let j = 0; j < deletedCandidates.length; j++) {
                                    if (deletedCandidates[j] === vm.curProj.candidates[i].username) {
                                        vm.curProj.candidates.splice(i, 1);
                                        vm.user.membership_token.currenthours -= vm.curProj.candidates[i].hours;
                                        break;
                                    }
                                }
                            }
                            vm.user.company_project[indexOfCurrentProject] = vm.curProj;
                            User.setUser(vm.user);
                            $uibModalInstance.close(vm.curProj);
                        }
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
            }).result.then(function (response) {
                updateHours();
                console.log(response);
            }, function (error) {
                console.log(error);
            });

        }


        vm.editMilestones = function (milestones) {


            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-mstones'),

                controller: function ($scope, $uibModalInstance) {

                    $scope.milestones = vm.curProj.milestones.slice();

                    var unmodified = JSON.parse(JSON.stringify(vm.curProj));
                    $scope.newMilestone = {};
                    $scope.ok = function () {
                        vm.curProj.username = vm.user.company_info.username;
                        $scope.removeMilestone('milestones');
                        for(let i = $scope.milestones.length -1; i >0;i--){
                            if($scope.milestones[i].milestone.length == 0){
                                te$scope.milestonesmp.splice(i,1);
                            }
                        }
                        vm.curProj.milestones = $scope.milestones;
                        console.log(vm.curProj);
                        console.log($scope.milestones);
                        for (let i = 0; i < vm.curProj.milestones.length; i++) {
                            vm.curProj.milestones[i].date = new Date($filter('date')(vm.curProj.milestones[i].date, "yyyy-MM-dd"));
                        }
                        updateAll(vm.curProj);
                        vm.user.company_project[indexOfCurrentProject] = vm.curProj;
                        User.setUser(vm.user);
                        $uibModalInstance.close();
                    };


                    $scope.cancel = function () {
                        vm.user.company_project[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.user.company_project[indexOfCurrentProject];

                        $uibModalInstance.close();
                    };

                    // Remove any skill in the User object 
                    $scope.removeMilestone = function (milestone) {
                        for (let i = 0; i < $scope.milestones.length; i++) {
                            if ($scope[milestone][i].delete) {
                                $scope[milestone].splice(i, 1);
                            }
                        }
                    }

                    // Delete one of your skills
                    $scope.deleteSkill = function (index) {
                        $scope.milestones[index].delete = true;
                    }

                    $scope.newSkill = {};

                    // Add a new milestone
                    $scope.addToMilestones = function (milestone) {
                        milestone.milestoneid = $scope.addIndex('milestones').replace(/\s/g, '');
                        milestone.projid = vm.curProj.jobInfo.projid;
                        $scope.milestones.push(milestone);
                    }

                    $scope.addIndex = function (milestone) {
                        let index;
                        for (let i = 0; i < $scope[milestone].length; i++) {
                            if ($scope[milestone][i].milestoneid.substr($scope[milestone][i].milestoneid.length - 1) == (i + 1)) {
                                continue;
                            } else {
                                index = vm.curProj.jobInfo.title + vm.user.company_info.username + (i + 1);
                            }
                        }
                        if (!index) {
                            return vm.curProj.jobInfo.title + vm.user.company_info.username + ($scope[milestone].length + 1)
                        } else {
                            return index;
                        }
                    }

                    $scope.onAdd = function () {
                        let milestone = {
                            completed: 0,
                            date: null,
                            milestone: "",
                        }
                        $scope.addToMilestones(milestone);
                    }

                },
                windowClass: winClass,
                resolve: {
                    CurrUser: function () {
                        for (let i = 0; i < vm.curProj.milestones.length; i++) {
                            vm.curProj.milestones[i].date = new Date($filter('date')(vm.curProj.milestones[i].date, "yyyy-MM-dd"));
                        }
                    }
                }
            });

        }




    }
    angular.module('oweyaa')
        .controller('projectDashboardCtrl', projectDashboardCtrl);
})();


