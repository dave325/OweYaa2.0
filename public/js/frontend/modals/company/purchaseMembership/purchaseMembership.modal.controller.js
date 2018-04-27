(function(){
 //Injector will protect against minification
 purchaseMembershipModalCtrl.$inject = ['User','$http','PayType','$timeout','$uibModalInstance','STRIPE_PUBLISHABLE_KEY'];
 function purchaseMembershipModalCtrl(User,$http,PayType,$timeout,$uibModalInstance,STRIPE_PUBLISHABLE_KEY) {
     var purchaseMembershipModalvm = this;
     purchaseMembershipModalvm.user = User.getUser();
     // List of different types of payments 
     purchaseMembershipModalvm.paymentType = {
        "month":{
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Monthly Membership',
                amount: 120000,
            },
        },
        "quarter":{
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Quarter Membership',
                amount: 500000,
            },
        },
        "annual":{
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Annual Membership',
                amount: 1600000,
            },
        }
     }
     // List to store payment information in form and to send to server 
     purchaseMembershipModalvm.payment = {};
     purchaseMembershipModalvm.pay = {};
     // Dictates the type of payment to charge 
     purchaseMembershipModalvm.type = purchaseMembershipModalvm.paymentType[PayType.type];
     // Create a Stripe client
     const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

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
     window.onload = function(){
        // Create an instance of the card Element
        purchaseMembershipModalvm.payment.card = elements.create('cardNumber');
        purchaseMembershipModalvm.payment.cardCvc = elements.create('cardCvc');
        purchaseMembershipModalvm.payment.cardExpiry = elements.create('cardExpiry');
        
        // Add an instance of the card Element into the `card-element` <div>
        purchaseMembershipModalvm.payment.card.mount('#card-number');
        purchaseMembershipModalvm.payment.cardCvc.mount('#card-cvc');
        purchaseMembershipModalvm.payment.cardExpiry.mount('#card-expiry');
        // Handle real-time validation errors from the card Element.
        purchaseMembershipModalvm.payment.card.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-number-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
                displayError.style.display = "block";
            } else {
                displayError.textContent = '';
                displayError.style.display = "none";
            }
        });
        // Handle real-time validation errors from the card Element.
        purchaseMembershipModalvm.payment.cardCvc.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-cvc-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
                displayError.style.display = "block";
            } else {
                displayError.textContent = '';
                displayError.style.display = "none";
            }
        });
        // Handle real-time validation errors from the card Element.
        purchaseMembershipModalvm.payment.cardExpiry.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-expiry-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
                displayError.style.display = "block";
            } else {
                displayError.textContent = '';
                displayError.style.display = "none";
            }
        });
    };
    // Handle submition process 
     purchaseMembershipModalvm.charge = function charge() {
         // Create token from card information
        stripe.createToken(purchaseMembershipModalvm.payment.card).then(function(result) {
            if (result.error) {
            // Inform the customer that there was an error
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
            } else {
                // Creates an object containing information server needs to process payment
                purchaseMembershipModalvm.pay.tempToken = result.token.id;
                purchaseMembershipModalvm.pay.user = purchaseMembershipModalvm.user;
                purchaseMembershipModalvm.pay.type = purchaseMembershipModalvm.type;
                // Sends request to server
                $http.post('/api/payment/test', purchaseMembershipModalvm.pay).then(function (payment) {
                    console.log(payment);
                },function(data){
                    console.log(data);
                });
            }
        });
    }
    // The function that is call when a user cancels the opening of a modal
    purchaseMembershipModalvm.cancel = function(){
        $uibModalInstance.dismiss('cancel')
    };
    // The function that is call when the user closes the modal
    purchaseMembershipModalvm.close = function(result){
        $uibModalInstance.close(result);
    };
     // The function that is call when a user cancels the opening of a modal
    purchaseMembershipModalvm.cancel = function(){
        $uibModalInstance.dismiss('cancel')
    };
    // The function that is call when the user closes the modal
    purchaseMembershipModalvm.close = function(result){
        $uibModalInstance.close(result);
    };
     
 }
 angular.module('oweyaa')
 .controller('purchaseMembershipModalCtrl', purchaseMembershipModalCtrl);
})();