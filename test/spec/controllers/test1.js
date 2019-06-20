'use strict';

describe('Controller: Test1Ctrl', function () {

  // load the controller's module
  beforeEach(module('knoweeApp'));

  var Test1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Test1Ctrl = $controller('Test1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Test1Ctrl.awesomeThings.length).toBe(3);
  });
});
