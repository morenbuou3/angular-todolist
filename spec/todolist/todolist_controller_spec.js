describe("Midway: Testing Controller", function() {
  beforeEach(module('todo'));

  var $controller, $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('test controller props', function() {
    it('test the todos default has two items', function() {
      var $scope = $rootScope.$new();
      var controller = $controller('todolistController', { $scope: $scope });
      expect($scope.todos.length).toEqual(2);
    });
  });
});