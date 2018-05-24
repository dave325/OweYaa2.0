(function () {
    //Injector will protect against minification
    dashboardCtrl.$inject = ['User','$uibModal'];
    function dashboardCtrl(User,$uibModal) {
        var vm = this;
        vm.user = User.getUser();
        console.log(vm.user);
        vm.matched_projects = {};
        vm.unmatched_projects = [];
        vm.user.total_interns = 0;
        for (let i = 0; i < vm.user.company_project.length; i++) {
            if (vm.user.company_project[i].jobInfo.initiated == 1) {
                vm.matched_projects = vm.user.company_project[i];
            } else {
                vm.unmatched_projects.push(vm.user.company_project[i]);
            }
        }
        console.log(vm.unmatched_projects);
        console.log(vm.matched_projects);

        // Fake information. Once testing has progressed far enough we will add the info from the database
        vm.projects = {
            projectCard1: {
                text: "Total Projects With OweYaa",
                detail: "Count",
                amount: vm.user.company_project.length,
                img: "assets/images/signUpIcon.png"
            },
            projectCard2: {
                text: "Total Projects With Matched",
                detail: "Count",
                amount: 1,
                img: "assets/images/hands.PNG"
            },
            projectCard3: {
                text: "Projects With Unmatched",
                detail: "Count",
                amount: vm.unmatched_projects.length,
                img: "assets/images/Computer.PNG"
            },
            projectCard4: {
                text: "# Of Hires From Projects",
                detail: "Count",
                amount: 0,
                img: "assets/images/check.png"
            }
        }

        vm.openModal = function (modal) {
            if (User.getUser()) {
                let url, ctrl;
                console.log(modal);
                if(modal === 'stats'){
                    let url = '/js/frontend/modals/company/companySettingsStats/company-settings-stats.modal.view.html'
                    let ctrl = 'companySettingsStatsModalCtrl';
                    var m = $uibModal.open({                       
                        templateUrl: url,
                        controller: ctrl,
                        controllerAs: 'compSet',
                        windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
                        resolve: {
                            CurrUser: vm.user
                        }
                    });
                }else{
                    let url ='/js/frontend/modals/company/companySettingsInfo/company-settings.modal.view.html'
                    let ctrl = 'companySettingsModalCtrl'
                    var m = $uibModal.open({                       
                        templateUrl: url,
                        controller: ctrl,
                        controllerAs: 'compSet',
                        windowClass: "col-xs-12 col-md-8 col-md-offset-2 vetModal",
                        resolve: {
                            CurrUser: vm.user
                        }
                    });
                }
    
                m.result.then(
                function(data){
                    User.setUser(data);
                    vm.user = data;
                    console.log(data);
                },
                function(data){
                    console.log(data);
                }
                );
            }
        }
    }

    angular.module('oweyaa')
        .controller('dashboardCtrl', dashboardCtrl);
})();
