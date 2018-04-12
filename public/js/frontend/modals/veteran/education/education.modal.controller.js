(function () {
  educationModalCtrl.$inject = ['$uibModalInstance', 'Authentication', 'CurrUser', 'User', '$filter'];
  function educationModalCtrl($uibModalInstance, Authentication, CurrUser, User, $filter) {
    educationvm = this;
    educationvm.user = CurrUser;
    if (educationvm.user.education.graddate != null) {
      educationvm.graduated = true;
    } else {
      educationvm.graduated = false;
    }
    // Containers
    educationvm.newPlan = {};
    educationvm.newCertification = {};
    educationvm.newCourse = {};
    educationvm.newBootcamp = {};

    // Add a new certification
    educationvm.addToCertifications = function () {
      educationvm.newCertification.certid = educationvm.addIndex('certification', 'certid');
      educationvm.user.certifications.push(educationvm.newCertification);
      educationvm.newCertification = {};
    }

    // Add a new course
    educationvm.addToCourses = function () {
      educationvm.newCourse.courseid = educationvm.addIndex('course', 'courseid');
      educationvm.user.course.push(educationvm.newCourse);
      educationvm.newCourse = {};
    }

    // Add a new bootcamp
    educationvm.addToBootcamps = function () {
      educationvm.newBootcamp.bootcampid = educationvm.addIndex('bootcamp', 'bootcampid');
      educationvm.user.bootcamp.push(educationvm.newBootcamp);
      educationvm.newBootcamp = {};
    }

    // Delete one of your plans
    educationvm.deletePlan = function (index) {
      educationvm.user.plan[index].delete = true;
    }

    // Delete one of your certifications
    educationvm.deleteCertification = function (index) {
      educationvm.user.certifications[index].delete = true;
    }

    // Delete one of your courses
    educationvm.deleteCourse = function (index) {
      educationvm.user.course[index].delete = true;
    }

    // Delete one of your bootcamps
    educationvm.deleteBootcamp = function (index) {
      educationvm.user.bootcamp[index].delete = true;
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
      //Update server information
      User.updateUser(modal, data).then(function (data) {
        if (educationvm.user.education.graddate != null) {
          educationvm.user.education.graddate = new Date($filter('date')(educationvm.user.education.graddate, "yyyy-MM-dd"));
        }
        if(educationvm.user.education.attendedcollege === 0){
          educationvm.user.education.graddate = 0;
          educationvm.user.education.school = null;
          educationvm.user.education.degree = null;
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
