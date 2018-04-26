(function () {
    //Injector will protect against minification
    projectDashboardCtrl.$inject = ['User', '$uibModal', '$http'];
    function projectDashboardCtrl(User, $uibModal, $http) {

        var vm = this;
        //vm.user = User.getUser();

        vm.currentProjID = "dave111";

        function getModalPath(modalName) {
            return '/js/frontend/modals/company/project-dashboard/' + modalName + '.modal.view.html';
        }

        const winClass = "col-xs-12 col-md-8 col-md-offset-2";

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
      
        var projects;
        
        $http({
            method: 'POST',
            url: '/api/projDash/getProjects',
            data: {id:vm.currentProjID}
        })
        .then(
        function success(response) {
            /*
           projects = response.data;
           vm.projects = projects.info;
           vm.projectDescription = projects.info[0].projdescription
           vm.projectTitle = projects.info[0].title;

           vm.projectManager = projects.managerInfo[0].managername;
           vm.location = projects.managerInfo[0].managername;

           vm.interns = projects.candidates;
           */
           vm.projects = response.data;
           console.log(response.data);


           vm.milestones = [
            new milestone("Presentation in Manhattan", "10/22/2018", "critical"),
            new milestone("Submit Patents", "11/17/2018", "todo"),
            new milestone("Create Presentation Models", "09/16/2018", "todo"),
        ];

        },
        function fail(data) {
           return "ERROR on project retrieve";
        });
        
       
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
                    
                    $scope.projectTitle = vm.projectTitle;
                    $scope.projectDescription=vm.projectDescription;
                    $scope.ok = function () {

                         vm.projectTitle = $scope.projectTitle;
                         vm.projectDescription = $scope.projectDescription;
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
