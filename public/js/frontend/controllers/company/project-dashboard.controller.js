(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal', '$http'];
    function projectDashboardCtrl(User, $uibModal, $http) {

        var vm = this;

        //get user details
        vm.user = User.getUser();


        var allProjects;
        var indexOfCurrentProject = 0;

        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        function reloadPageNewID(id)
        {
            allProjects.forEach(function f(ele)
            {
               if(ele.id == id)
               {
                   indexOfCurrentProject = array.indexOf(ele);
                   
                   vm.projectDescription = allProjects[indexOfCurrentProject].info.projdescription;
                   vm.projectTitle = allProjects[indexOfCurrentProject].info.title;
                   vm.projectManager = allProjects[indexOfCurrentProject].managerInfo.managername;
                   vm.candidates = allProjects[indexOfCurrentProject].candidates;
                   vm.milestones = allProjects[indexOfCurrentProject].milestones;

                   return;
               } 
            });

        }

        //
        const winClass = "col-xs-12 col-md-8 col-md-offset-2";   
        var projects = (User.getProjectDashboardProjects({username:vm.user.company_info.username})).then(
            function success(response)
            {
                allProjects = response.data; 
                vm.projectDescription = allProjects[indexOfCurrentProject].info.projdescription;
                vm.projectTitle = allProjects[indexOfCurrentProject].info.title;
                vm.projectManager = allProjects[indexOfCurrentProject].managerInfo.managername;
                vm.candidates = allProjects[indexOfCurrentProject].candidates;
                vm.milestones = allProjects[indexOfCurrentProject].milestones;


                vm.titles = [];
                allProjects.forEach(function f(ele)
                {
                    vm.titles.push({title:ele.info.title,id:ele.id});
                });
                
                console.log(vm.titles);

            },
            function fail(){
                console.log("Failed on retrieve projects");
            }
        );


        vm.editDescription = function () {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-description'),
                controller: function ($scope, $uibModalInstance) {
                    
                    $scope.projectTitle = vm.projectTitle;
                    $scope.projectDescription=vm.projectDescription;

                    $scope.ok = function () {
                        vm.projectTitle = $scope.projectTitle;
                        vm.projectDescription=$scope.projectDescription;
                        User.updateAllProjectDash({title:vm.projectTitle,description:vm.projectDescription,id:"dave111"});
                        $uibModalInstance.close('save');
                    };
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: winClass
            });
        }
  


        vm.editInternHours = function (interns) {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-editHours'),
                controller: function ($scope, $uibModalInstance) {
                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };

                    $scope.interns = interns;

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');

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

                    $scope.milestones = vm.milestones;

                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
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


