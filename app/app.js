angular

	.module('app', [
		'ngMaterial',
		'ngMdIcons',
		'ui.router',

		'bt.components.module',

		'bt.dashboard.module',
		'bt.article.module',
		'bt.configuration.module'
	])

.config(function ($mdThemingProvider) {
	$mdThemingProvider
		.theme('default')
		.primaryPalette('blue')
		.accentPalette('pink')
	;
})

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/dashboard');
	}])

	.config(function ($stateProvider) {

		$stateProvider
			.state('users', {
				url: '/users',
				controller: 'UsersCtrl',
				templateUrl: 'user.tpl.html'
			})
	})
;