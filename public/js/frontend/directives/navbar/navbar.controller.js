(function () {
  navbarCtrl.$inject = ['$window', 'User', '$uibModal', '$location', '$timeout', '$route'];
  function navbarCtrl($window, User, $uibModal, $location, $timeout, $route) {
    var navbarvm = this;
    // Sets the user name
    if (User.getUser()) {
      if (User.getUser().type == 1) {
        navbarvm.user = User.getUser().company.username;
      } else if (User.getUser().type == 0) {
        navbarvm.user = User.getUser().contact_info.username;
      } else {
        navbarvm.user = '';
      }
    } else {
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
    navbarvm.modal = function (click) {
      var modal = $uibModal.open({
        animation: true,
        backdrop: 'static',
        templateUrl: '/js/frontend/modals/home/login/login.modal.view.html',
        controller: 'loginModalCtrl',
        controllerAs: click + 'vm',
        windowClass: "col-xs-12 col-md-6 col-md-offset-3 vetModal login"
      });
      /**
       * Returns the modal 
       */
      modal.result
        .then(function (data) {
          if (data.page) {
            $location.path('/' + data.page);
          } else {
            navbarvm.message = "Thank you. Please wait until you are successfully logged in.";
            navbarvm.showMessage = true;
            $timeout(function () {
              console.log(data);
              if (data.type == 1) {
                var curUser = data.company.username;
                $location.path('/company/' + curUser + '/dashboard');
              } else {
                var curUser = data.contact_info.username;
                $location.path('/veteran/' + curUser + '/profile');
              }
            }, 3000);
          }
        }, function (reason) {
          console.log(reason);
        })
    }
    navbarvm.click = function (e, click) {
      e.preventDefault();
      if (click != 'undefined') {
        navbarvm.modal(click);
      } else {
        return false;
      }
    }
    navbarvm.logout = function () {
      if (User.logout()) {
        navbarvm.message = "Thank you. Please wait until you are successfully logged out.";
        navbarvm.showMessage = true;
        $timeout(function () {
          if ($location.path() === "/") {
            $route.reload();
          } else {
            $location.path('/');
          }
        }, 3000);
      } else {
        console.log('error');
      }
    }
    /*
    * Navbar to show users who are not logged in
    */
    navbarvm.regUser = {
      link1: {
        name: 'Home',
        link: '/',
        click: ''
      },
      link2: {
        name: 'Veteran',
        link: 'veteran',
        click: ''
      },
      link3: {
        name: 'Company',
        link: 'company',
        click: ''
      },
      link4: {
        name: 'Sign In',
        link: '',
        click: 'login'
      },
      link6: {
        name: 'Contact',
        link: 'contact',
        click: ''
      }
    };
    /*
    * Navbar to show if user is logged in as a veteran
    */
    navbarvm.adminUser = {
      link1: {
        name: 'Home',
        link: '/',
        click: ''
      },
      link2: {
        name: 'Veteran',
        link: 'veteran',
        click: ''
      },
      link3: {
        name: 'Company',
        link: 'company',
        click: ''
      },
      link4: {
        name: 'Admin Dashboard',
        link: 'admin/dashboard',
        click: ''
      },
      link5: {
        name: 'Sign Out',
        click: "logout"
      },
      link6: {
        name: 'Contact',
        link: 'contact',
        click: ''
      }
    };

    /*
    * Navbar to show if user is logged in as a veteran
    */
    navbarvm.vetUser = {
      link1: {
        name: 'Home',
        link: '/',
        click: ''
      },
      link2: {
        name: 'Veteran',
        link: 'veteran',
        click: ''
      },
      link3: {
        name: 'Company',
        link: 'company',
        click: ''
      },
      link4: {
        name: 'Veteran Profile',
        links: {
          link1: {
            name: "Veteran Dashboard",
            link: 'veteran/' + navbarvm.user + '/profile',
            click: ''
          },
          link2: {
            name: "Available Internships",
            link: 'veteran/' + navbarvm.user + '/internships',
            click: ''
          }
        }
      },
      link5: {
        name: 'Sign Out',
        click: "logout"
      },
      link6: {
        name: 'Contact',
        link: 'contact',
        click: ''
      }
    };

    /*
    * Navbar to show if user is logged in as a company
    */
    navbarvm.companyUser = {
      link1: {
        name: 'Home',
        link: '/',
        click: ''
      },
      link2: {
        name: 'Veteran',
        link: 'veteran',
        click: ''
      },
      link3: {
        name: 'Company',
        link: 'company',
        click: ''
      },
      link4: {
        name: 'Company Dashboard',
        links: {
          link1: {
            name: "Dashboard",
            link: 'company/' + navbarvm.user + '/dashboard',
            click: ''
          },
          link2: {
            name: "Browse Interns",
            link: 'company/' + navbarvm.user + '/browse-intern',
            click: ''
          },
          link3: {
            name: 'Favorite Interns',
            link: 'company/' + navbarvm.user + '/favorite-intern',
            click: ''
          },
          link4: {
            name: 'Project Dashboard',
            link: 'company/' + navbarvm.user + '/project-dashboard',
            click: ''
          },
          link5: {
            name: 'Project Submission',
            link: 'company/' + navbarvm.user + '/project-submission',
            click: ''
          }
        }
      },
      link5: {
        name: 'Sign Out',
        click: "logout"
      },
      link6: {
        name: 'Contact',
        link: 'contact',
        click: ''
      }
    };

    navbarvm.isLogout = function(){
      return navlink.click != 'logout' && navlink.name != 'Company Dashboard' || navlink.name != 'Veteran Profile';
    }

    /*
    * Return the designated navbar based on user information
    */
    var userStatus = User.getUser();
    if (userStatus == null) {
      navbarvm.activeNav = navbarvm.regUser;
    } else if (userStatus.type == 1) {
      navbarvm.activeNav = navbarvm.companyUser;
    } else if (userStatus.type == 0) {
      navbarvm.activeNav = navbarvm.vetUser;
    } else {
      navbarvm.activeNav = navbarvm.adminUser;
    }
  }
  angular.module('oweyaa')
    .controller('navbarCtrl', navbarCtrl);
})();
