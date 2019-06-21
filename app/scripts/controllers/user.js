'use strict';

angular.module('knoweeApp')
	.controller('UserCtrl', function (user) {

// [TODO] Add new entry on user "Level"

	this.teachers = user;

	this.increment = function (item) {
		item.rating += 1;
	};

	this.decrement = function (item) {
		item.rating -= 1;
	};

});

