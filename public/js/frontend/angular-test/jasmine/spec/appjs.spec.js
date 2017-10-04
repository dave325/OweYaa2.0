describe('App Module Loaded', function(){
  beforeEach(module('angTest'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it("Should increase new array length by 1", function(){
    var $scope = {};
    var controller = $controller('homeCtrl', {$scope:$scope});
    $scope.user = {
      person1 : {
				name:'adfsf'
      },
       person2 : {
				name:'adfsCXCVf'
      }
    };
    console.log($scope.user);
    expect(Object.keys($scope.user).length).toEqual(1);
  });
});
