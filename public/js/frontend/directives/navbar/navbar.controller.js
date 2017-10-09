(function(){
  navbarCtrl.$inject = ['$window', 'User', '$uibModal', '$location', '$timeout'];
  function navbarCtrl($window, User, $uibModal, $location, $timeout, $http){
    var navbarvm = this;
    navbarvm.message = "";
    navbarvm.showMessage = false;
    navbarvm.modal = function(click){
      var modal = $uibModal.open({
          animation:true,
          backdrop:'static',
  				templateUrl: '/js/frontend/modals/home/' + click + '/' + click +'.modal.view.html',
  				controller: click + 'ModalCtrl',
  				controllerAs: click + 'vm'
  		});
      modal.result
         .then(function (data) {
           User.setUser(data);
           if(data.type == 1){
   					$location.path('/company/:companyid/dashboard')
   				}else{
   					$location.path('/veteran/:veteranid/profile');
   				}
         },function (reason) {
           console.log(reason);
         })
    }
    navbarvm.click = function(e, click){
       e.preventDefault();
       if(click  != 'undefined'){
         navbarvm.modal(click);
       }else{
         return false;
       }
    }
    navbarvm.logout = function(){
      if(User.logout()){
        navbarvm.message = "Thank you. Please wait until you are successfully logged out.";
        navbarvm.showMessage = true;
        $timeout(function(){
          $location.path('/');
        },3000);
      }else{
        console.log('error');
      }
    }
    /*
    * Navbar to show users who are not logged in
    */
    navbarvm.regUser = {
      link1: {
        name: 'Home',
        link : '/',
        click:''
      },
      link2: {
        name: 'Veteran',
        link : 'veteran',
        click:''
      },
      link3: {
        name: 'Company',
        link : 'company',
        click:''
      },
      link4 : {
        name: 'Sign In',
        link:'',
        click : 'login'
      },
      link6: {
        name: 'Contact',
        link : 'contact',
        click:''
      }
    };

    /*
    * Navbar to show if user is logged in as a veteran
    */
    navbarvm.vetUser = {
      link1: {
        name: 'Home',
        link : '/',
        click:''
      },
      link2: {
        name: 'Veteran',
        link : 'veteran',
        click:''
      },
      link3: {
        name: 'Company',
        link : 'company',
        click:''
      },
      link4 : {
        name: 'Veteran Dashboard',
        link : 'veteran/:veteranid/profile',
        click:''
      },
      link5: {
        name: 'Sign Out',
        click : "logout"
      },
      link6: {
        name: 'Contact',
        link : 'contact',
        click:''
      }
    };

    /*
    * Navbar to show if user is logged in as a company
    */
    navbarvm.companyUser = {
      link1: {
        name: 'Home',
        link : '/'
      },
      link2: {
        name: 'Veteran',
        link : 'veteran'
      },
      link3: {
          name: 'Company',
          link : 'company'
        },
        link4 : {
          name: 'Company Dashboard',
          links : {
            link1: {
              name : "Browse Interns",
              link : 'company/:companyid/browse-intern'
            },
            link2 : {
              name : 'Favorite Interns',
              link : 'company/:companyid/favorite-intern'
            },
            link3 : {
              name : 'Project Submission',
              link : 'company/:companyid/project-submission'
            }
          }
        },
        link5: {
          name: 'Sign Out',
          click : "logout"
        },
      link6: {
        name: 'Contact',
        link : 'contact'
      }
    };
    /*
    * Return the designated navbar based on user information
    */
    var userStatus = User.getUser();
    if (userStatus == null){
      navbarvm.activeNav =  navbarvm.regUser;
    }else if(userStatus.type == 1){
      navbarvm.activeNav =  navbarvm.companyUser;
    }else{
      navbarvm.activeNav =  navbarvm.vetUser;
    }
  }
  angular.module('oweyaa')
    .controller('navbarCtrl', navbarCtrl);
})();
