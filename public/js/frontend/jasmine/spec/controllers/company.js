describe('Company Module Loaded: Company', function(){

  beforeEach(module('oweyaa'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Action Controller',function(){
    it("Should return the current value", function(){
      var $scope = {};
      var controller = $controller('actionModalCtrl', {$scope: $scope});
      controller.addElements("hello", "swaggity");
      controller.addElements("hello", "booboo");
      controller.addElements("hello", "haha");
      controller.addElements("hello", "lololol");
      for (var i = 0; i < controller.content.current.length; i++) {
        expect(controller.content.current[i]).toEqual(4);
      }
    });
  });
});
