angular

	.module('bt.configuration.module', [])

	.config(function ($mdIconProvider) {
		$mdIconProvider
			.iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
			.defaultIconSet('img/icons/sets/core-icons.svg', 24);
	})

	.config(function ($stateProvider) {

		$stateProvider

			.state('configuration', {
				url: '/configuration',
				controller: 'configurationCtrl',
				templateUrl: 'app/module/configuration/configuration.tpl.html'
			})

	})

	.controller('configurationCtrl', ["$scope", function ($scope) {

	}])


;