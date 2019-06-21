'use strict';

angular.module('knoweeApp')
	.controller('UserCtrl', function (userFinder,user) {
		// Define this for controller scope vm = view model
	console.log(user);
	this.teachers = user;

	// userFinder.getUsers().then(function onSuccess(data){
	// 	vm.teachers = data;
	// 	return vm.teachers;
	// })

	this.increment = function (item) {
		item.rating += 1;
	};

	this.decrement = function (item) {
		item.rating -= 1;
	};

});

