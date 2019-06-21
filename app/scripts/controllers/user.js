'use strict';

angular.module('knoweeApp')
	.controller('UserCtrl', function (user) {

	this.teachers = user;

	this.increment = function (item) {
		item.rating += 1;
	};

	this.decrement = function (item) {
		item.rating -= 1;
	};

});

