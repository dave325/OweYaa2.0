(function(){
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User','$http'];
    function purchaseMembershipCtrl(User,$http) {
        var vm = this;
        vm.user = User.getUser();
        vm.openPayment = function(payType){
            if(User.getUser()){
                var m = $uibModal.open({
                    templateUrl: '/js/frontend/modals/company/purchaseMembership/purchaseMembership.modal.view.html',
                    controller: 'purchaseMembershipModalCtrl',
                    controllerAs: 'purchaseMembershipModalvm',
                    windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal",
                    resolve:{
                        PayType:payType
                    }
                });

                m.result
                    .then(function (data) {
                        console.log(data);
                    },function (reason) {
                        console.log(reason);
                    });
            }
        }
    }
    angular.module('oweyaa')
    .controller('purchaseMembershipCtrl', purchaseMembershipCtrl);
    
})();
    