(function () {
    //Injector will protect against minification
    selectInternModalCtrl.$inject = ['User', '$uibModalInstance', 'CurrUser'];
    function selectInternModalCtrl(User, $uibModalInstance, CurrUser) {

        var selectInternvm = this;
        selectInternvm.user = User.getUser();
        selectInternvm.projects = selectInternvm.user.company_project;
        selectInternvm.projIds = [];
        selectInternvm.isError = false;
        for (let i = 0; i < selectInternvm.projects.length; i++) {
            selectInternvm.projIds.push({
                title: selectInternvm.projects[i].jobInfo.title,
                id: selectInternvm.projects[i].jobInfo.projid
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

        selectInternvm.checkProjLength = function () {
            for (let i = 0; i < selectInternvm.projects.length; i++) {
                if(selectInternvm.projectId == selectInternvm.project[i].jobInfo.projid){
                    if(selectInternvm.project[i].candidates.length > 1){
                        selectInternvm.isError = true;
                    }
                }
            }
        }
        selectInternvm.onSubmit = function () {
            console.log(CurrUser);
            let userInfo = {
                username: CurrUser.user.contact_info.username,
                hours: 0,
                projid: selectInternvm.projectId,
            }
            console.log(userInfo);
            User.addIntern(userInfo).then(function (response) {
                console.log(response);
                for (let i = 0; i < selectInternvm.user.company_project.length; i++) {
                    if (selectInternvm.user.company_project[i].jobInfo.projid == selectInternvm.projectId) {
                        selectInternvm.user.company_project[i].candidates.push(response.data.user);
                        break;
                    }
                }
                User.setUser(selectInternvm.user);
                selectInternvm.close(response);
            }, function (error) {
                console.log(error);
            });
        }
    }

    angular.module('oweyaa')
        .controller('selectInternModalCtrl', selectInternModalCtrl);
})();