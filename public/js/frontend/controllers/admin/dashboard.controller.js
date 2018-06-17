(function () {
    adminDashboardCtrl.$inject = ['AdminService', 'User'];
    function adminDashboardCtrl(AdminService, User) {
        var adminDash = this;
        adminDash.internSearch = {};
        adminDash.formError = "";
        adminDash.user = User.getUser();
        adminDash.numProjects = 0;
        adminDash.numInterviewed = 0;
        adminDash.vetInProject = 0;
        for (var comp in adminDash.user.companies) {
            if (!adminDash.user.companies.hasOwnProperty(comp)) {
                continue;
            }
            let obj = adminDash.user.companies[comp];
            if (obj.company_project) {
                adminDash.numProjects += obj.company_project.length;
                if (obj.company_project.intern) {
                    adminDash.vetInProject += obj.company_project.intern.length;
                }
            }
        }

        for (let vet in adminDash.user.candidates) {
            if (!adminDash.user.candidates.hasOwnProperty(vet)) {
                continue;
            }
            let obj = adminDash.user.candidates[vet];
            if (obj.interviews != undefined && obj.interviews.length > 0) {
                adminDash.numInterviewed++;
            }
        }

        adminDash.retrieveVet = function () {
            if (adminDash.internSearch.username && adminDash.internSearch.username.length > 0) {
                AdminService.retrieveVet(adminDash.internSearch).then(function (response) {
                    console.log(response.data.user);
                }, function (error) {
                    console.log(error);
                });
            } else {
                adminDash.formError = "Please include a veteran username!";
            }
        }
        adminDash.activateComp = function () {
            if (adminDash.compSearch.username && adminDash.compSearch.username.length > 0) {
                AdminService.activateComp(adminDash.compSearch).then(function (response) {
                    if(response.status === 200)
                        adminDash.comp.formSuccess = "Successfully updated user";
                }, function (error) {
                    console.log(error);
                });
            } else {
                adminDash.comp.formError = "Please include a company username!";
            }
        }
    }
    angular.module('oweyaa')
        .controller('adminDashboardCtrl', adminDashboardCtrl);
})();