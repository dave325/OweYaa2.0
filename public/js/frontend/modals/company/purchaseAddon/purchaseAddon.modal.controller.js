(function () {
    //Injector will protect against minification
    purchaseAddonModalCtrl.$inject = ['User', '$http', 'PayType', '$timeout', '$uibModalInstance', 'STRIPE_PUBLISHABLE_KEY'];
    function purchaseAddonModalCtrl(User, $http, PayType, $timeout, $uibModalInstance, STRIPE_PUBLISHABLE_KEY) {
        var purchaseAddonModalvm = this;
        purchaseAddonModalvm.user = User.getUser();
        purchaseAddonModalvm.isDisabled = false;
        // List of different types of payments 
        purchaseAddonModalvm.paymentType = [
            {
                country: 'US',
                currency: 'usd',
                hours: 10,
                total: {
                    label: '10 additional hours',
                    amount: 23000,
                },
            },
            {
                country: 'US',
                currency: 'usd',
                hours: 40,
                total: {
                    label: '40 additional hours',
                    amount: 92000,
                },
            },
            {
                country: 'US',
                currency: 'usd',
                hours: 140,
                total: {
                    label: '140 additional hours',
                    amount: 2400000,
                },
            },
            {
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Executive Match',
                    amount: 50000,
                },
            },
            {
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Interview Matched Intern',
                    amount: 5000,
                },
            },
            {
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'On-Site',
                    amount: 15000,
                },
            },
        ];
        // List to store payment information in form and to send to server 
        purchaseAddonModalvm.payment = {};
        purchaseAddonModalvm.pay = {};
        // Dictates the type of payment to charge 
        purchaseAddonModalvm.type = purchaseAddonModalvm.paymentType[PayType.type];
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
        $timeout(function () {
            // Create a Stripe client
            let stripe = Stripe("pk_test_bAOVRHXtmFofvJCyDlWoonrE");

            // Create an instance of Elements
            let elements = stripe.elements();
            // Create an instance of the card Element
            purchaseAddonModalvm.payment.card = elements.create('cardNumber');
            purchaseAddonModalvm.payment.cardCvc = elements.create('cardCvc');
            purchaseAddonModalvm.payment.cardExpiry = elements.create('cardExpiry');

            // Add an instance of the card Element into the `card-element` <div>
            purchaseAddonModalvm.payment.card.mount('#card-number');
            purchaseAddonModalvm.payment.cardCvc.mount('#card-cvc');
            purchaseAddonModalvm.payment.cardExpiry.mount('#card-expiry');
            // Handle real-time validation errors from the card Element.
            purchaseAddonModalvm.payment.card.addEventListener('change', function (event) {
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
            purchaseAddonModalvm.payment.cardCvc.addEventListener('change', function (event) {
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
            purchaseAddonModalvm.payment.cardExpiry.addEventListener('change', function (event) {
                var displayError = document.getElementById('card-expiry-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                    displayError.style.display = "block";
                } else {
                    displayError.textContent = '';
                    displayError.style.display = "none";
                }
            });

            // Handle submition process 
            purchaseAddonModalvm.charge = function charge() {
                purchaseAddonModalvm.isDisabled = true;
                // Create token from card information
                // Creates an object containing information server needs to process payment
                purchaseAddonModalvm.pay.token = purchaseAddonModalvm.user.membership_token.stripetoken;
                purchaseAddonModalvm.pay.user = purchaseAddonModalvm.user;
                purchaseAddonModalvm.pay.type = purchaseAddonModalvm.type;
                if(PayType > 2){
                    purchaseAddonModalvm.pay.flag = true;
                }else{
                    purchaseAddonModalvm.user.membership_token.totalhours += purchaseAddonModalvm.type.hours;
                }
                // Sends request to server
                $http.post('/api/payment/addon', purchaseAddonModalvm.pay).then(function (payment) {
                    if(PayType.type < 3){
                        purchaseAddonModalvm.user.membership_token.totalhours += purchaseAddonModalvm.type.hours;
                    }
                    User.setUser(purchaseAddonModalvm.user);
                    purchaseAddonModalvm.close(true);
                }, function (data) {
                    purchaseAddonModalvm.isDisabled = false;
                    console.log(data);
                });

            }
        }, 1000);
        // The function that is call when a user cancels the opening of a modal
        purchaseAddonModalvm.cancel = function () {
            $uibModalInstance.dismiss('cancel')
        };
        // The function that is call when the user closes the modal
        purchaseAddonModalvm.close = function (result) {
            $uibModalInstance.close(result);
        };

    }
    angular.module('oweyaa')
        .controller('purchaseAddonModalCtrl', purchaseAddonModalCtrl);
})();