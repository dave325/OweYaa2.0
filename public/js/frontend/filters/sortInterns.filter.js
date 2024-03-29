// Check if input is null, then return everybody.
// Otherwise, return people matching that skill.

// Needs to include "people who have no skills".

(function () {

  // Ensures that the parameters match specifically for sortInterns.
  // sortInterns is the filter name
  // Injector will protector against minification.
  /**
   * Function name: sortInterns
   * Description: Sorts interns based on skills. Checks if the input (search
   * query) is null, if it is null, then return all of the interns. Otherwise,
   * return interns matching that skill.
   *
   * @param input - The input search query.
   * @param interns - An array containing all interns, and their information.
  **/

  function sortInterns() {
    return function works(interns, input) {
      console.log(interns);
      // Create a new array to store interns that match the input search query.
      let output = [];
      // If the input search query is empty, or null...
      if (input == null) {

        // Return everybody.
        return interns;

      }

      // Otherwise, the input search query is not empty.

      // Iterate through the interns array, searching for interns that match the
      // input search query. Index is the current index number, starting at 0.
      // Interns.length is the total number of interns.
      for (var index = 0; index < interns.length; index++) {
        // The current intern index in the array.
        var intern = interns[index];
        if (intern.skill.find(input) > -1) {
          // If the value of the input search query matches that of the intern's
          // skill, add the intern to the filteredInterns array.
          // intern.skill is the intern's skill. This method checks only for one
          // skill per intern, for now.
          output.push(intern);
        }
      }
      console.log(output);
      // Return filtered array.
      return output;
    }
  }
  angular.module('oweyaa')
    .filter('sortInterns', sortInterns);
})();
