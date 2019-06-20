'use strict';

angular.module('knoweeApp')
	.service('teacherFinder', function () {

		this.getUser = function() {
			return $.get('/users/users.json');
		};

		this.getTeacher = function(name) {
			var teacherItemFile = '/users/' + name + '.json';
			return $.get( teacherItemFile );
		};
	});
