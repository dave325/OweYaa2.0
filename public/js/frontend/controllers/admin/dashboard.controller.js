(function(){
    adminDashboardCtrl.$inject = ['AdminService'];
    function adminDashboardCtrl(AdminService){
        var adminDash = this;
        adminDash.compInfo = AdminService.retrieveCompInfo();
        adminDash.vet = AdminService.retrievAllVet();
        adminDash.internSearch = {};
        adminDash.numProjects = 0;
        adminDash.numInterviewed = 0;
        adminDash.vetInProject = 0;
        for(let comp in adminDash.compInfo){
            adminDash.numProjects += comp.company_project.length;
            adminDash.vetInProject += comp.company_project.intern.length;
        }
        for(let vet in adminDash.vet){
            if(vet.interview.length > 0)
            adminDash.numInterviewed++;
        }

        adminDash.retrieveVet = function(){
            AdminService.retrieveVet(adminDash.internSearch);
            $location.path('/veteran/dashboard');
        }
    }
    angular.module('oweyaa')
        .controller('adminDashboardCtrl',adminDashboardCtrl);
})();