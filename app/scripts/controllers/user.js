'use strict';

angular.module('knoweeApp')
	.controller('UserCtrl', ['teacherFinder', function (item) {
		// Define this for controller scope vm = view model
	var vm = this;

	item.getUser().then(function(data){
		console.log(data)
		vm.teachers = data;
	});

	this.increment = function (item) {
		item.rating += 1;
	};

	this.decrement = function (item) {
		item.rating -= 1;
	};

}]);

