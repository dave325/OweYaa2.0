(function () {
    //Injector will protect against minification
    addonCtrl.$inject = ['User', '$http', '$uibModal'];
    function addonCtrl(User, $http, $uibModal) {
        var addonvm = this;
        addonvm.user = User.getUser();
        addonvm.purchase = function(index){
            console.log(index);
        }
        // Opens modal to begin payment
        addonvm.openPayment = function (payType) {
            if (User.getUser()) {
                var m = $uibModal.open({
                    templateUrl: '/js/frontend/modals/company/purchaseMembership/purchaseMembership.modal.view.html',
                    controller: 'purchaseMembershipModalCtrl',
                    controllerAs: 'purchaseMembershipModalvm',
                    windowClass: "col-xs-12 col-md-4 col-md-offset-4 compModal",
                    windowTopClass: "col-xs-12 ",
                    resolve: {
                        PayType: { type: payType }
                    }
                });

                m.result
                    .then(function (data) {
                        console.log(data);
                    }, function (reason) {
                        console.log(reason);
                    });
            }
        }
    }
    angular.module('oweyaa')
        .controller('addonCtrl', addonCtrl);

})();
