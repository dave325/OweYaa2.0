(function () {
  educationModalCtrl.$inject = ['$uibModalInstance', 'Authentication', 'CurrUser', 'User', '$filter'];
  function educationModalCtrl($uibModalInstance, Authentication, CurrUser, User, $filter) {
    educationvm = this;
    educationvm.user = CurrUser;
    educationvm.isDisabled = false;
    if (educationvm.user.education.graddate != null) {
      educationvm.graduated = true;
    } else {
      educationvm.graduated = false;
    }

    educationvm.careerOptions = ['developer','designer','marketing','sales','customer service'];
    // Containers
    educationvm.newPlan = {};
    educationvm.newCertification = {};
    educationvm.newCourse = {};
    educationvm.newBootcamp = {};
    if(educationvm.user.certifications.length === 0){
      educationvm.cert = [];
    }else{
      educationvm.cert = educationvm.user.certifications.slice();;
    }
    if(educationvm.user.course.length === 0){
      educationvm.course = [];
    }else{
      educationvm.course = educationvm.user.course.slice();
    }
    if(educationvm.user.bootcamp.length === 0){
      educationvm.bootcamp = [];
    }else{
      educationvm.bootcamp = educationvm.user.bootcamp.slice();
    }

    // The function that is call when a user cancels the opening of a modal
    educationvm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    }
    // The function that is call when the user closes the modal
    educationvm.close = function (result) {
      $uibModalInstance.close(result);
    }

    educationvm.addIndex = function (skill, id) {
      let index;
      for (let i = 0; i < educationvm.user[skill].length; i++) {
        if (educationvm.user[skill][i][id].substr(educationvm.user[skill][i][id].length - 1) == (i + 1)) {
          continue;
        } else {
          index = educationvm.user.contact_info.username + (i + 1);
        }
      }
      if (!index) {
        return educationvm.user.contact_info.username + (educationvm.user[skill].length + 1)
      } else {
        return index;
      }
    }

    // Remove any skill in the User object 
    educationvm.removeSkill = function (skill) {
      for (let i = 0; i < educationvm.user[skill].length; i++) {
        if (educationvm.user[skill][i].delete) {
          educationvm.user[skill].splice(i, 1);
        }
      }
    }

    // Will make a call to the server and php file
    educationvm.doEducation = function (modal, data) {
      educationvm.isDisabled = true;
      //Update server information
      if(!educationvm.user.education.attendedcollege){
        educationvm.user.education.graddate = 0;
        educationvm.user.education.school = null;
        educationvm.user.education.degree = null;
      }
      console.log(educationvm.user.education);
      User.updateUser(modal, data).then(function (data) {
        
        if (educationvm.user.education.graddate != null) {
          educationvm.user.education.graddate = new Date($filter('date')(educationvm.user.education.graddate, "yyyy-MM-dd"));
        }
        educationvm.removeSkill('certifications');
        educationvm.removeSkill('bootcamp');
        educationvm.removeSkill('course');
        educationvm.formInfo = "Successfuly Updated!";
        User.setUser(educationvm.user);
        educationvm.close();
      }, function (data) {
        if (data.status === 401) {
          educationvm.formError = "Unauthorized, there was an error. Please try again!";
        } else {
          educationvm.formError = "There was an error. Please try again!";
        }
      });

    }
    // Will Submit the form depending if everything is filled out
    educationvm.onSubmit = function (modal, data) {
      educationvm.doEducation(modal, data);
    }
  }
  angular.module('oweyaa')
    .controller('educationModalCtrl', educationModalCtrl);
})();
