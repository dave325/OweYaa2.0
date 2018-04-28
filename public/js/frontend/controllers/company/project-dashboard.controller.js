(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal', '$http'];
    function projectDashboardCtrl(User, $uibModal, $http) {

        var vm = this;

        //get user details
        vm.user = User.getUser();

        vm.currentProjID = "dave111";

        var allProjects;

        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        const winClass = "col-xs-12 col-md-8 col-md-offset-2";   
        var projects = (User.getProjectDashboardProjects({username:vm.user.company_info.username})).then(
            function success(response)
            {
                allProjects = response.data; 
                vm.projectDescription = allProjects[0].info.projdescription;
                vm.projectTitle = allProjects[0].info.title;
                vm.projectManager = allProjects[0].managerInfo.managername;
                vm.candidates = allProjects[0].candidates;
                
                console.log(vm.candidates);
                console.log(allProjects);

            },
            function fail(){
                console.log("Failed on retrieve projects");
            }
        );
  
        vm.postNewDescription = function (title,description) {
            var req = {
                method: 'POST',
                url: '/api/projDash/editDescription',
                data: {description:description, id:vm.currentProjID,title:title}
            }
            $http(req).then(function(){console.log()},
            function(){});
        }

        vm.editDescription = function () {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-description'),
                controller: function ($scope, $uibModalInstance) {
                    
                    $scope.projectTitle = "parojpaerija";
                    $scope.projectDescription="taosduhasoudhaisudhasiuh";

                    $scope.ok = function () {
                        vm.postNewDescription(vm.projectTitle,vm.projectDescription);
                        $uibModalInstance.close();
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


