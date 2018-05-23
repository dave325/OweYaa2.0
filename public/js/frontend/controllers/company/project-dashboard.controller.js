(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal', '$http'];
    function projectDashboardCtrl(User, $uibModal, $http) {

        var vm = this;
        

        //get user details
        vm.user = User.getUser();
        vm.curProj = {};
        var indexOfCurrentProject = 0;
        console.log(vm.user);
        vm.username = vm.user.company_info.username;
        vm.curProj = vm.allProjects[indexOfCurrentProject];
        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        function reloadPageNewID(id) {
            allProjects.forEach(function f(ele) {
                if (ele.id == id) {
                    indexOfCurrentProject = array.indexOf(ele);
             
                    vm.curProj = vm.allProjects[indexOfCurrentProject];
    
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
                data:data 
            }
            $http(req).then(function () { console.log("Updated Info") },
                function () { "Update Failed"});
        }


        vm.editDescription = function () {
            var modal = $uibModal.open({
                templateUrl: getModalPath('project-dashboard-description'),
                controller: function ($scope, $uibModalInstance) {

                    $scope.curProj = vm.curProj;
                    
                    //a hack to keep an unmodified version of the project if the user presses cancel.
                    var unmodified = JSON.parse(JSON.stringify(vm.curProj));

                    $scope.careerOptions = ['developer', 'designer', 'marketing', 'sales', 'customer service'];
                    $scope.ok = function () {
                        
                       
                        updateAll(vm.curProj);
                        
                        $uibModalInstance.close();
                    };
                    $scope.cancel = function () {
              
                        console.log(unmodified);
                        vm.allProjects[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.allProjects[indexOfCurrentProject];
      
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
                        vm.allProjects[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.allProjects[indexOfCurrentProject];
      
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
                        vm.allProjects[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.allProjects[indexOfCurrentProject];
      
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
                        vm.allProjects[indexOfCurrentProject] = unmodified;
                        vm.curProj = vm.allProjects[indexOfCurrentProject];
      
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


