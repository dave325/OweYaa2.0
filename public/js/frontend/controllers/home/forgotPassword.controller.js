(function(){

    forgotPasswordCtrl.$inject = ['$http'];
    function forgotPasswordCtrl($http){
        var vm = this;
        vm.formError = '';
        vm.formInfo = '';
        vm.submit = function(){
            if(vm.username.length < 5){
                vm.formError = "Username is too short";
            }else{
                $http.post('/api/forgotPassword',{username:vm.username}).then(function(res){
                    vm.formInfo = "Thank you, an email will be sent shortly with the reset link. The link will expire in 24 hours.";
                },function(err){
                    vm.formError = "An error occured, please try again."
                })
            }
        }
    }

    angular.module('oweyaa').controller('forgotPassword',forgotPasswordCtrl);
})();