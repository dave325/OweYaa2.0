(function(){
 //Injector will protect against minification
 purchaseMembershipModalCtrl.$inject = ['User','$http','PayType','$timeout'];
 function purchaseMembershipModalCtrl(User,$http,PayType,$timeout) {
     var purchaseMembershipModalvm = this;
     purchaseMembershipModalvm.user = User.getUser();
     purchaseMembershipModalvm.paymentType = {
        "month":{
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Monthly Membership',
                amount: 1600,
            },
        },
        "quarter":{
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Quarter Membership',
                amount: 5000,
            },
        },
        "annual":{
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Annual Membership',
                amount: 16000,
            },
        }
     }
     purchaseMembershipModalvm.payment = {};
     purchaseMembershipModalvm.error = {};
     purchaseMembershipModalvm.user.company.stripetoken = "cus_CAwlJkhI8PjHMj";
     purchaseMembershipModalvm.type = purchaseMembershipModalvm.paymentType[PayType];
     // Create a Stripe client
     const stripe = Stripe(purchaseMembershipModalvm.user.stripe_key);

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
     $timeout(function(){
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
                purchaseMembershipModalvm.error.card = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
        purchaseMembershipModalvm.payment.cardCvc.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-cvc-errors');
            if (event.error) {
                purchaseMembershipModalvm.error.cvc = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
        purchaseMembershipModalvm.payment.cardExpiry.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-expiry-errors');
            if (event.error) {
                purchaseMembershipModalvm.error.expiry = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
    },1000);
     purchaseMembershipModalvm.charge = function charge() {
         if(purchaseMembershipModalvm.user.company.stripetoken == null || purchaseMembershipModalvm.user.company.stripetoken == undefined){
             stripe.createToken(purchaseMembershipModalvm.payment).then(function(result) {
                 if (result.error) {
                 // Inform the customer that there was an error
                 var errorElement = document.getElementById('card-errors');
                 errorElement.textContent = result.error.message;
                 } else {
                     console.log(result);
                     purchaseMembershipModalvm.payment.stripetoken = result.token.id;
                     $http.post('/api/payment/test', purchaseMembershipModalvm.payment).then(function (payment) {
                         console.log(payment)
                     },function(data){
                         console.log(data);
                     });
                 }
           });
         }else{
             purchaseMembershipModalvm.payment.stripetoken = purchaseMembershipModalvm.user.company.stripetoken;
             $http.post('/api/payment/test', purchaseMembershipModalvm.payment).then(function (payment) {
                 console.log(payment)
             },function(data){
                 console.log(data);
             });
         }
       }
     
 }
 angular.module('oweyaa')
 .controller('purchaseMembershipModalCtrl', purchaseMembershipModalCtrl);
})();