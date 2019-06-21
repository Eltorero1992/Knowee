'use strict';


angular
	.module('knoweeApp', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'views/user.html',
				controller: 'UserCtrl as user',
				resolve: {
					user: function(userFinder) {
						return userFinder.getUsers();
					}
				}
			})

			.state('teacher', {
				url:'/teacher/:name',
				templateUrl: 'views/teacher.html',
				controller: 'TeacherCtrl as teacher'

			});

		$urlRouterProvider.otherwise('/');

	}]);