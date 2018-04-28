(function(){
  footerCtrl.$inject = [];
  function footerCtrl(){
    var footervm = this;
    footervm.links = {
      link1 :{
        name : 'Home-',
        link : '/'
      },

      link2 :{
        name : 'About-',
        link : ''
      },

      link3 :{
        name : 'Blog-',
        link : ''
      },

      link5 :{
        name : ' FAQ-',
        link : ''
      },

      link6 :{
        name : ' Contact',
        link : 'contact'
      }
    };
    footervm.Address = {
      street : '',
      city: '',
      state: ''
    };
    footervm.phone = 'jakdhga';
    footervm.about = 'salaslh';
    footervm.email = 'support@company.com';
  }
  angular.module('oweyaa')
    .controller('footerCtrl',footerCtrl);
})();
