(function(){
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User','$http'];
    function purchaseMembershipCtrl(User,$http) {
        var vm = this;
        vm.user = User.getUser();
        // Create a Stripe client
        var stripe = Stripe(vm.user.stripe_key);

        // Create an instance of Elements
        var elements = stripe.elements();
        // Create an instance of the card Element
        vm.payment= elements.create('card', {style: style});

        // Add an instance of the card Element into the `card-element` <div>
        vm.payment.mount('#card-element');

        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
        });

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
    