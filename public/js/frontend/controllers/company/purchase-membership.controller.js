(function(){
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User','stripe'];
    function purchaseMembershipCtrl(User,stripe) {
        var vm = this;
        vm.user = User.getUser();
        vm.payment = {};
        vm.charge = function charge() {
            return stripe.card.createToken(vm.payment)
              .then(function (response) {
                console.log('token created for card ending in ', response.card.last4)
                var payment = angular.copy(vm.member.payment)
                payment.card = undefined
                payment.token = response.id
                return $http.post('/api/payment/test', payment)
              })
              .then(function (payment) {
                console.log('successfully submitted payment for $', payment.amount)
              })
              .catch(function (err) {
                if (err.type && /^Stripe/.test(err.type)) {
                  console.log('Stripe error: ', err.message)
                }
                else {
                  console.log('Other error occurred, possibly with your API', err.message)
                }
              })
          }
    }
    angular.module('oweyaa')
    .controller('purchaseMembershipCtrl', purchaseMembershipCtrl);
    
})();
    