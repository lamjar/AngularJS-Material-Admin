angular

	.module('bt.dashboard.module', [])

	.config(function ($stateProvider) {

		$stateProvider

			.state('dashboard', {
				url: '/dashboard',
				controller: 'dashboardCtrl',
				templateUrl: 'app/module/dashboard/dashboard.tpl.html'
			})

	})

	.controller('dashboardCtrl', ["$scope", function ($scope) {

	}])


;