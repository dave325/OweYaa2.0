(function(){
    adminDashboardCtrl.$inject = ['AdminService','User'];
    function adminDashboardCtrl(AdminService, User){
        var adminDash = this;
        adminDash.internSearch = {};
        adminDash.user = User.getUser();
        console.log(adminDash.user);
        adminDash.numProjects = 0;
        adminDash.numInterviewed = 0;
        adminDash.vetInProject = 0;
        AdminService.retrieveCompInfo().then(function(response){
            adminDash.compInfo = response.data.user.companies;
            for(let comp in adminDash.compInfo){
                if(comp.company_project != undefined){
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