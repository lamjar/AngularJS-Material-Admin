angular

	.module('bt.components.module', [])

	.directive('configurationWidget', function () {
		return {
			scope: {},
			controller: ["$scope", function ($scope) {

				$scope.springBootApps = [
					{name: 'Article', wanted: true},
					{name: 'Posts', wanted: false},
					{name: 'Users', wanted: false},
					{name: 'Configuration', wanted: true}
				];
				$scope.settings = [
					{name: 'Lazarus', extraScreen: 'Wi-fi menu', icon: 'undo', enabled: true},
					{
						name: 'Notification',
						extraScreen: 'Bluetooth menu',
						icon: 'communication:message',
						enabled: false
					},
				];
			}],
			templateUrl: 'app/module/_components/tpl/configuration.widget.tpl.html',
		}
	})

	.directive('menuWidget', function () {
		return {
			scope: {},
			controller: ['$scope', function ($scope) {

				$scope.menu = [
					{
						link: 'dashboard',
						title: 'Dashboard',
						icon: 'favorite'
					},
					{
						link: 'article',
						title: 'Article',
						icon: 'list'
					}
				];

				$scope.menuAdmin = [
					{
						link: 'configuration',
						title: 'Configuration',
						icon: 'extension'
					},
				];
			}],
			templateUrl: 'app/module/_components/tpl/menu.widget.tpl.html'
		}
	})

	.directive('topWidget', function () {
		return {
			scope: {},
			controller: ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

				$scope.toggleSidenav = function (menuId) {
					$mdSidenav(menuId).toggle();
				};
			}],
			templateUrl: 'app/module/_components/tpl/top.widget.tpl.html'
		}
	})

;