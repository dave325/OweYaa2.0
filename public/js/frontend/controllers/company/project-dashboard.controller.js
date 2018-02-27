(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal'];
    function projectDashboardCtrl(User, $uibModal) {
        var vm = this;
        vm.user = User.getUser();


        //Retrieve project information
        vm.projects = User.getUser().company_project;
        //ng-repeat on projects.

        function intern(name,email,hours)
        {
            return {
                name:name,
                email:email,
                hours:hours,
            }
        }

        function milestone(description,completiondate,isCompleted)
        {
            return {
                description:description,
                completionDate:completiondate,
                isCompleted:isCompleted
            }

        }

        vm.milestones = [
            new milestone("Presentation in Manhattan","10/22/2018","critical"),
            new milestone("Submit Patents","11/17/2018","todo"),
            new milestone("Create Presentation Models","09/16/2018","todo"),
        ];

        vm.interns = [
            new intern("Intern One","intern@gmail.com",24),
            new intern("Intern One","intern@gmail.com",24),
            new intern("Intern One","intern@gmail.com",24),
            new intern("Intern Three","intern@gmail.com",24),
            new intern("Intern One","intern@gmail.com",24)
        ];




        //TODO add interns table with laravel model and controller
        //and use $http get

        console.log(vm.projects[1]);

        function getModalPath(modalName)
        {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        const winClass="col-xs-12 col-md-8 col-md-offset-2";

        vm.openProjectsList = function () {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-editProjects'),
                controller: function ($scope, $uibModalInstance) {
                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass:winClass
            });

        }

        vm.editDescription = function () {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-Description'),
                controller: function ($scope, $uibModalInstance) {
                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass:winClass
            });

        }

        vm.editMilestones = function () {


            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-Milestones'),

                controller: function ($scope, $uibModalInstance) {

                    $scope.milestones = vm.milestones;

                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass:winClass
            });

        }


    }
    angular.module('oweyaa')
        .controller('projectDashboardCtrl', projectDashboardCtrl);
})();