(function(){
  navbarCtrl.$inject = ['$window', 'User', '$uibModal', '$location', '$timeout'];
  function navbarCtrl($window, User, $uibModal, $location, $timeout, $http){
    var navbarvm = this;
    // Sets the user name
    if(User.getUser()){
      navbarvm.user = User.getUser().name;
    }else{
      navbarvm.user = ""
    }
    /*
    * Show a message for logging out
    */
    navbarvm.message = "";

    /**
     * Sets whether to show message to user
     */
    navbarvm.showMessage = false;

    /**
     * Makes a modal for users to login 
     * @param backdrop - stops user from clicking outside of box
     */
    navbarvm.modal = function(click){
      var modal = $uibModal.open({
          animation:true,
          backdrop:'static',
  				templateUrl: '/js/frontend/modals/home/login/login.modal.view.html',
  				controller: 'loginModalCtrl',
  				controllerAs: click + 'vm',
          windowClass:"col-xs-12 col-md-8 col-md-offset-2 vetModal"
      });
      /**
       * Returns the modal 
       */
      modal.result
         .then(function (data) {
           var curUser = data.contact_info.name;
           if(data.type == 1){
   					$location.path('/company/' + curUser +'/dashboard');
   				}else{
   					$location.path('/veteran/' + curUser + '/profile');
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
        link : 'veteran/' + navbarvm.user + '/profile',
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
              link : 'company/' + navbarvm.user +'/browse-intern'
            },
            link2 : {
              name : 'Favorite Interns',
              link : 'company/' + navbarvm.user +'/favorite-intern'
            },
            link3 : {
              name : 'Project Submission',
              link : 'company/' + navbarvm.user +'/project-submission'
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
