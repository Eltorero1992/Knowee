'use strict';

/**
 * @ngdoc service
 * @name knoweeApp.userFinder
 * @description
 * # userFinder
 * Service in the knoweeApp.
 */
angular.module('knoweeApp')
  .service('userFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getUsers = function (){
    	return $.get('users.json');
    };

  });
