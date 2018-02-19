(function(){
    adminDashboardCtrl.$inject = ['AdminService'];
    function adminDashboardCtrl(AdminService){
        var adminDash = this;
        adminDash.compInfo = {};
        adminDash.vet = {};
        adminDash.compInfo = AdminService.retrieveCompInfo().then(function(response){
            return response.data.user.companies;    
        },function(error){
            console.log(error);
        });
        adminDash.vet = AdminService.retrieveAllVet().then(function(response){
            return response.data.users;    
        },function(error){
            console.log(error);
        });;
        console.log(adminDash.vet);
        console.log(adminDash.compInfo);
        adminDash.internSearch = {};
        adminDash.numProjects = 0;
        adminDash.numInterviewed = 0;
        adminDash.vetInProject = 0;
        for(let comp in adminDash.compInfo){
            if(comp.company_project === undefined){
                adminDash.numProjects = 0;
                adminDash.vetInProject = 0;
            }else{
                adminDash.numProjects += comp.company_project.length;
                adminDash.vetInProject += comp.company_project.intern.length;
            }
        }
        for(let vet in adminDash.vet){
            if(vet.interview != undefined && vet.interview.length > 0){
                adminDash.numInterviewed++;
            }
        }

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