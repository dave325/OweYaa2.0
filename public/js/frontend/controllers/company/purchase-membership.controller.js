(function(){
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User','$http'];
    function purchaseMembershipCtrl(User,$http) {
        var vm = this;
        vm.user = User.getUser();
        vm.payment = {};
        vm.charge = function charge() {
            $http.post('/api/payment/test', vm.payment)
              .then(function (payment) {
                console.log(payment)
              },function(data){
                console.log(data);
              });
          }
    }
    angular.module('oweyaa')
    .controller('purchaseMembershipCtrl', purchaseMembershipCtrl);
    
})();
    