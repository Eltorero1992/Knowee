'use strict';

describe('Service: userFinder', function () {

  // load the service's module
  beforeEach(module('knoweeApp'));

  // instantiate service
  var userFinder;
  beforeEach(inject(function (_userFinder_) {
    userFinder = _userFinder_;
  }));

  it('should do something', function () {
    expect(!!userFinder).toBe(true);
  });

});
