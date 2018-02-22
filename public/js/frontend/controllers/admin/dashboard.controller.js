(function(){
    adminDashboardCtrl.$inject = ['AdminService','User'];
    function adminDashboardCtrl(AdminService, User){
        var adminDash = this;
        adminDash.internSearch = {};
        adminDash.formError = "";
        adminDash.user = User.getUser();
        adminDash.numProjects = 0;
        adminDash.numInterviewed = 0;
        adminDash.vetInProject = 0;
        AdminService.retrieveCompInfo().then(function(response){
            adminDash.compInfo = response.data.user.companies;
            for(var comp in adminDash.compInfo){
                if(!adminDash.compInfo.hasOwnProperty(comp)){
                    continue;
                }
                let obj = adminDash.compInfo[comp];
                if(obj.company_project){
                    adminDash.numProjects += obj.company_project.length;
                    if(obj.company_project.intern){
                        adminDash.vetInProject += obj.company_project.intern.length;
                    }
                }
            }
        },function(error){
            console.log(error);
        })
        AdminService.retrieveAllVet().then(function(response){
            adminDash.vet = response.data.users;
            for(let vet in adminDash.vet){
                if(!adminDash.vet.hasOwnProperty(vet)){
                    continue;
                }
                let obj = adminDash.vet[vet];
                if(obj.interview != undefined && obj.interview.length > 0){
                    adminDash.numInterviewed++;
                }
            }
        },function(error){
            console.log(error);
        });

        adminDash.retrieveVet = function(){
            if(adminDash.internSearch.username || adminDash.internSearch.username.length > 0){
                AdminService.retrieveVet(adminDash.internSearch).then(function(response){
                    console.log(response.data.user);
                },function(error){
                    console.log(error);
                });
            }else{
                adminDash.formError = "Please include a veteran username!";
            }
        }
    }
    angular.module('oweyaa')
        .controller('adminDashboardCtrl',adminDashboardCtrl);
})();