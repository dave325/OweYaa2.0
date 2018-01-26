(function () {
    //Injector will protect against minification
    browseInternsCtrl.$inject = ['$scope', "User"];
    function browseInternsCtrl($scope, User) {
        var vm = this;
        vm.results = 'result';
        // Fake information to show on site. Will be called dynamically in the next sprint

        /*{
         content1: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac blandit dolor. In est augue, lobortis a eros euismod, ultricies porta neque. Donec erat orci, laoreet vel est et, posuere luctus tellus. Integer interdum congue velit, id scelerisque metus. Praesent neque diam, imperdiet nec mattis in, lacinia sit amet odio. Proin maximus, turpis eget rhoncus sodales, sem urna condimentum nunc, ullamcorper feugiat velit diam eu nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at risus vitae leo commodo tempor. Sed auctor, mauris ut posuere lacinia, leo sem pretium massa, quis fringilla magna odio at nulla. Proin commodo sollicitudin suscipit. Curabitur lacinia sem nisi, a posuere ipsum dictum id. Integer egestas, neque ac vehicula lacinia, libero justo consequat massa, ut consectetur augue augue ut dolor. Vivamus egestas risus ipsum, laoreet suscipit ex dictum eu. Fusce suscipit tristique elit ut cursus. Vestibulum porttitor risus ipsum, sed semper ex tempor vel. In et arcu in elit iaculis placerat in non massa. Sed quis dui eu lorem commodo molestie. Ut pellentesque ante ut nunc porta consequat. Cras a diam finibus, malesuada quam vitae, tincidunt justo. Sed ac consequat eros. Nullam at arcu odio. Fusce ullamcorper ipsum non auctor laoreet. Integer dapibus ante eget imperdiet malesuada. Proin facilisis dui quis placerat feugiat. Cras in lobortis urna, in ultricies magna. Vestibulum id massa magna. Aliquam erat volutpat. Mauris ultrices eros ut nunc ornare, et malesuada turpis viverra. Aenean in orci a erat sagittis pulvinar et in elit. In tincidunt venenatis venenatis. Aliquam convallis est ullamcorper iaculis consequat. Praesent malesuada enim urna, ornare tincidunt sem aliquet nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque sodales volutpat ullamcorper. Proin accumsan non est quis dignissim. Aenean imperdiet dolor id sem sagittis, at faucibus magna rutrum. Donec porttitor est non nulla rhoncus, sed ullamcorper nibh tincidunt. Donec a dolor dignissim, convallis libero a, vulputate ante. Vestibulum in est eu tellus iaculis pretium eu et dolor.',
            img: "../../assets/images/test.jpeg"
        },
    
         content2: {
             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac blandit dolor. In est augue, lobortis a eros euismod, ultricies porta neque. Donec erat orci, laoreet vel est et, posuere luctus tellus. Integer interdum congue velit, id scelerisque metus. Praesent neque diam, imperdiet nec mattis in, lacinia sit amet odio. Proin maximus, turpis eget rhoncus sodales, sem urna condimentum nunc, ullamcorper feugiat velit diam eu nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at risus vitae leo commodo tempor. Sed auctor, mauris ut posuere lacinia, leo sem pretium massa, quis fringilla magna odio at nulla. Proin commodo sollicitudin suscipit. Curabitur lacinia sem nisi, a posuere ipsum dictum id. Integer egestas, neque ac vehicula lacinia, libero justo consequat massa, ut consectetur augue augue ut dolor. Vivamus egestas risus ipsum, laoreet suscipit ex dictum eu. Fusce suscipit tristique elit ut cursus. Vestibulum porttitor risus ipsum, sed semper ex tempor vel. In et arcu in elit iaculis placerat in non massa. Sed quis dui eu lorem commodo molestie. Ut pellentesque ante ut nunc porta consequat. Cras a diam finibus, malesuada quam vitae, tincidunt justo. Sed ac consequat eros. Nullam at arcu odio. Fusce ullamcorper ipsum non auctor laoreet. Integer dapibus ante eget imperdiet malesuada. Proin facilisis dui quis placerat feugiat. Cras in lobortis urna, in ultricies magna. Vestibulum id massa magna. Aliquam erat volutpat. Mauris ultrices eros ut nunc ornare, et malesuada turpis viverra. Aenean in orci a erat sagittis pulvinar et in elit. In tincidunt venenatis venenatis. Aliquam convallis est ullamcorper iaculis consequat. Praesent malesuada enim urna, ornare tincidunt sem aliquet nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque sodales volutpat ullamcorper. Proin accumsan non est quis dignissim. Aenean imperdiet dolor id sem sagittis, at faucibus magna rutrum. Donec porttitor est non nulla rhoncus, sed ullamcorper nibh tincidunt. Donec a dolor dignissim, convallis libero a, vulputate ante. Vestibulum in est eu tellus iaculis pretium eu et dolor.',
             img:   "../../assets/images/test.jpeg"
        },
    
         content3: {
             text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac blandit dolor. In est augue, lobortis a eros euismod, ultricies porta neque. Donec erat orci, laoreet vel est et, posuere luctus tellus. Integer interdum congue velit, id scelerisque metus. Praesent neque diam, imperdiet nec mattis in, lacinia sit amet odio. Proin maximus, turpis eget rhoncus sodales, sem urna condimentum nunc, ullamcorper feugiat velit diam eu nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at risus vitae leo commodo tempor. Sed auctor, mauris ut posuere lacinia, leo sem pretium massa, quis fringilla magna odio at nulla. Proin commodo sollicitudin suscipit. Curabitur lacinia sem nisi, a posuere ipsum dictum id. Integer egestas, neque ac vehicula lacinia, libero justo consequat massa, ut consectetur augue augue ut dolor. Vivamus egestas risus ipsum, laoreet suscipit ex dictum eu. Fusce suscipit tristique elit ut cursus. Vestibulum porttitor risus ipsum, sed semper ex tempor vel. In et arcu in elit iaculis placerat in non massa. Sed quis dui eu lorem commodo molestie. Ut pellentesque ante ut nunc porta consequat. Cras a diam finibus, malesuada quam vitae, tincidunt justo. Sed ac consequat eros. Nullam at arcu odio. Fusce ullamcorper ipsum non auctor laoreet. Integer dapibus ante eget imperdiet malesuada. Proin facilisis dui quis placerat feugiat. Cras in lobortis urna, in ultricies magna. Vestibulum id massa magna. Aliquam erat volutpat. Mauris ultrices eros ut nunc ornare, et malesuada turpis viverra. Aenean in orci a erat sagittis pulvinar et in elit. In tincidunt venenatis venenatis. Aliquam convallis est ullamcorper iaculis consequat. Praesent malesuada enim urna, ornare tincidunt sem aliquet nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque sodales volutpat ullamcorper. Proin accumsan non est quis dignissim. Aenean imperdiet dolor id sem sagittis, at faucibus magna rutrum. Donec porttitor est non nulla rhoncus, sed ullamcorper nibh tincidunt. Donec a dolor dignissim, convallis libero a, vulputate ante. Vestibulum in est eu tellus iaculis pretium eu et dolor.',
             img:   "../../assets/images/test.jpeg"
        }
      }*/
        $http({
            url: '/api/getUsers',
            method: 'POST'
        }).then(function (response) {
            console.log(response);
            vm.users = response.data.user;
        }, function (data) {
            console.log(data);
        });
    }
    angular.module('oweyaa')
        .controller('browseInternsCtrl', browseInternsCtrl);

})();
