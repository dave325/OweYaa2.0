(function () {
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User', '$location', '$uibModal'];
    function purchaseMembershipCtrl(User, $location, $uibModal) {
        var vm = this;
        vm.user = User.getUser();
        // Opens modal to begin payment
        vm.openPayment = function (payType) {
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
                        $location.path('/company/' + vm.user.company_info.username + '/dashboard');
                    }, function (reason) {
                        console.log(reason);
                    });
            }
        }
    }
    angular.module('oweyaa')
        .controller('purchaseMembershipCtrl', purchaseMembershipCtrl);

})();
