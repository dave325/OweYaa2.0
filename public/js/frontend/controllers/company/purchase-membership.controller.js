(function(){
    //Injector will protect against minification
    purchaseMembershipCtrl.$inject = ['User','$http'];
    function purchaseMembershipCtrl(User,$http) {
        var vm = this;
        vm.user = User.getUser();
        // Create a Stripe client
        const stripe = Stripe(vm.user.stripe_key);

        // Create an instance of Elements
        const elements = stripe.elements();

        // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        var style = {
            base: {
            color: '#32325d',
            lineHeight: '18px',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
            },
            invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
            }
        };
        // Create an instance of the card Element
        vm.payment.cardNum = elements.create('cardNumber', {style: style});
        vm.payment.cardCvc = elements.create('cardCvc', {style: style});
        vm.payment.cardExpiry = elements.create('cardExpiry', {style: style});
        // Add an instance of the card Element into the `card-element` <div>
        vm.payment.cardNum.mount('#card-elements');
        vm.payment.cardCvc.mount('#card-elements');
        vm.payment.cardExpiry.mount('#card-elements');

        // Handle real-time validation errors from the card Element.
        vm.payment.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
        });

        vm.charge = function charge() {
            stripe.createToken(vm.payment).then(function(result) {
                if (result.error) {
                  // Inform the customer that there was an error
                  var errorElement = document.getElementById('card-errors');
                  errorElement.textContent = result.error.message;
                } else {
                    console.log(result);
                    vm.payment.stripetoken = result.token.id;
                    $http.post('/api/payment/test', vm.payment)
                    .then(function (payment) {
                      console.log(payment)
                    },function(data){
                      console.log(data);
                    });
                }
              });
          }
    }
    angular.module('oweyaa')
    .controller('purchaseMembershipCtrl', purchaseMembershipCtrl);
    
})();
    