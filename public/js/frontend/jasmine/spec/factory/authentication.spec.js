// testing controller
describe('Http test', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler;

   // Set up the module
   beforeEach(module('oweyaa'));

   beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     $http = $injector.get('$http');
     // backend definition common for all tests
     authRequestHandler = $httpBackend.when('GET', '/login')
                            .respond({userId: 'userX'}, {'A-Token': 'xxx'});

     // Get hold of a scope (i.e. the root scope)
     $rootScope = $injector.get('$rootScope');
     // The $controller service is used to create instances of controllers
     var $controller = $injector.get('$controller');

     createController = function() {
       return $controller('loginModalCtrl', {'$scope' : $rootScope });
     };
   }));


   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });
   it("Should return -1",function(){
     var $scope = {};

  /* code under test */
  $http.get('http://localhost/foo')
    .then(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    },function(data, status, headers, config) {
      $scope.valid = false;
  });
  /* end */
     $httpBackend
    .when('GET', 'http://localhost/foo')
    .respond(200, { foo: 'bar' });
    console.log($scope);
    expect($httpBackend.flush).not.toThrow();
    expect($scope.response.status).toBe(200);
    expect($scope.response.data).toEqual({ foo: 'bar' });
   })
 });
