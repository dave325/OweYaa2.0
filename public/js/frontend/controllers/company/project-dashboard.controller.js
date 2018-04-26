(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal', '$http'];
    function projectDashboardCtrl(User, $uibModal, $http) {
        var vm = this;
        vm.user = User.getUser();


        //Retrieve project information
        vm.projects = User.getUser().company_project;
        //ng-repeat on projects.
        vm.activeProject = vm.projects[0];

        var id = vm.activeProject.projid;



        function intern(name, email, hours) {
            return {
                name: name,
                email: email,
                hours: hours,
            }
        }

        function milestone(description, completiondate, isCompleted) {
            return {
                description: description,
                completionDate: completiondate,
                isCompleted: isCompleted
            }

        }

        vm.milestones = [
            new milestone("Presentation in Manhattan", "10/22/2018", "critical"),
            new milestone("Submit Patents", "11/17/2018", "todo"),
            new milestone("Create Presentation Models", "09/16/2018", "todo"),
        ];

        vm.projectDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        vm.projectTitle = "Project Title";

        vm.interns = [
            new intern("Candidate One", "candidate@gmail.com", 24),
            new intern("Candidate One", "candidate@gmail.com", 24),
            new intern("Candidate One", "candidate@gmail.com", 24),
            new intern("Candidate Three", "candidate@gmail.com", 24),
            new intern("Candidate One", "candidate@gmail.com", 24)
        ];




        //TODO add interns table with laravel model and controller
        //and use $http get

        console.log(vm.projects[1]);

        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        const winClass = "col-xs-12 col-md-8 col-md-offset-2";


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

        vm.postNewDescription = function (description) {
            var req = {
                method: 'POST',
                url: '/api/projDash/editDescription',
                data: { description, id }
            }


            $http(req).then(
                function (response) {
                    console.log(response);
                },
                function (response) {
                    console.log(response);
                }

            );

        }

        vm.editDescription = function (title, description) {
            $uibModal.open({
                templateUrl: getModalPath('project-dashboard-description'),
                controller: function ($scope, $uibModalInstance) {
                    $scope.ok = function () {

                        $uibModalInstance.close();
                    };

                    $scope.title = title;

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
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
