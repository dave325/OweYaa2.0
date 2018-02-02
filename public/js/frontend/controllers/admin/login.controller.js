(function(){
    adminLoginCtrl.$inject = [];
    function adminLoginCtrl(){
        var adminLogin = this;
        adminLoginCtrl.user = {};
    }

    angular.module('oweyaa')
        .controller("adminLoginCtrl",adminLoginCtrl);
})();