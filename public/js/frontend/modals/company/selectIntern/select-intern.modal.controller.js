(function () {
    //Injector will protect against minification
    selectInternModalCtrl.$inject = ['User','$uibModalInstance', 'CurrUser'];
    function selectInternModalCtrl(User,$uibModalInstance, CurrUser) {

        var selectInternvm = this;
        selectInternvm.user = User.getUser();
        selectInternvm.projects = selectInternvm.user.company_project;
        selectInternvm.projIds = [];
        for(let i = 0; i < selectInternvm.projects.length;i++){
            selectInternvm.projIds.push({
                title: selectInternvm.projects[i].jobInfo.title,
                id:selectInternvm.projects[i].jobInfo.projid
            });
        }

        // The function that is call when a user cancels the opening of a modal
        selectInternvm.cancel = function () {
            $uibModalInstance.dismiss('cancel')
        };

        // The function that is call when the user closes the modal
        selectInternvm.close = function (result) {
            $uibModalInstance.close(result);
        };

        selectInternvm.onSubmit = function(){
            console.log(CurrUser);
            let userInfo = {
                username: CurrUser.user.username,
                hours: 0,
                projid: selectInternvm.projectId,
              }
              console.log(userInfo);
              User.addIntern(userInfo).then(function(response){
                console.log(response);
                selectInternvm.user.company_project.push(userInfo);
                User.setUser(selectInternvm.user);
                selectInternvm.close(response);
              }, function(error){
                  console.log(error);
              });
        }
    }

    angular.module('oweyaa')
        .controller('selectInternModalCtrl', selectInternModalCtrl);
})();