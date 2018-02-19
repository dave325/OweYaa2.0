(function(){
    adminDashboardCtrl.$inject = ['AdminService', 'Vets', 'Companies'];
    function adminDashboardCtrl(AdminService, Vets,Companies){
        var adminDash = this;
        AdminService.retrieveCompInfo().then(function(response){
            adminDash.compInfo = response.data.user.companies;
            for(let comp in adminDash.compInfo){
                if(comp.company_project === undefined){
                    adminDash.numProjects;
                    adminDash.vetInProject;
                }else{
                    adminDash.numProjects += comp.company_project.length;
                    adminDash.vetInProject += comp.company_project.intern.length;
                }
            }
        },function(error){
            console.log(error);
        })
        AdminService.retrieveAllVet().then(function(response){
            adminDash.vet = response.data.users;
            for(let vet in adminDash.vet){
                if(vet.interview != undefined && vet.interview.length > 0){
                    adminDash.numInterviewed++;
                }
            }
        },function(error){
            console.log(error);
        });
        adminDash.internSearch = {};
        adminDash.numProjects = 0;
        adminDash.numInterviewed = 0;
        adminDash.vetInProject = 0;

        adminDash.retrieveVet = function(){
            AdminService.retrieveVet(adminDash.internSearch).then(function(response){
                console.log(response.data.user);
            },function(error){
                console.log(error);
            });
        }
    }
    angular.module('oweyaa')
        .controller('adminDashboardCtrl',adminDashboardCtrl);
})();