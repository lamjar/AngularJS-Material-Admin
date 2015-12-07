angular

	.module('bt.article.module', [])

	.config(function ($mdIconProvider) {
		$mdIconProvider
			.iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
	})

	.config(function ($stateProvider) {

		$stateProvider

			.state('article', {
				url: '/article',
				controller: 'articleCtrl',
				templateUrl: 'app/module/article/article.tpl.html'
			})

			.state('articleDetails', {
				url: '/article/id/{id}',
				controller: 'articleDetailsCtrl',
				templateUrl: 'app/module/article/article.form.tpl.html'
			})

			.state('articleNew', {
				url: '/article/new',
				controller: 'articleNewCtrl',
				templateUrl: 'app/module/article/article.form.tpl.html'
			})

	})

	.controller('articleCtrl', ["$scope", "$state", function ($scope, $state) {

		var imagePath = 'img/me.png';

		$scope.goToArticle = function (articleId) {
			$state.go("articleDetails", {id: articleId}, {inherit: false});
		};

		$scope.articles = [
			{
				face: imagePath,
				id: 1,
				author: 'Michał Szałkowski',
				title: 'Lorem ipsum',
				when: '3:08PM',
				notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit consectetur risus non finibus. Proin neque purus, pharetra vitae magna at, sodales sollicitudin diam. Cras mattis maximus arcu, quis iaculis ipsum laoreet sed. Vestibulum ut nisi sit amet quam ultrices auctor. "
			},
			{
				face: imagePath,
				id: 2,
				author: 'Michał Szałkowski',
				title: 'Lorem ipsum',
				when: '3:08PM',
				notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit consectetur risus non finibus. Proin neque purus, pharetra vitae magna at, sodales sollicitudin diam. Cras mattis maximus arcu, quis iaculis ipsum laoreet sed. Vestibulum ut nisi sit amet quam ultrices auctor. "
			},
			{
				face: imagePath,
				id: 3,
				author: 'Michał Szałkowski',
				title: 'Lorem ipsum',
				when: '3:08PM',
				notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit consectetur risus non finibus. Proin neque purus, pharetra vitae magna at, sodales sollicitudin diam. Cras mattis maximus arcu, quis iaculis ipsum laoreet sed. Vestibulum ut nisi sit amet quam ultrices auctor. "
			}
		];

	}])

	.controller('articleNewCtrl', ["$scope", function ($scope) {

		$scope.title = "New Article";

		$scope.article = {
			author: 'Michał Szałkowski',
			type: 'post',
		};

		$scope.states = [
			{id: "DRAFT", name: "Draft"},
			{id: "PUBLISHED", name: "Published"},
			{id: "ARCHIVED", name: "Archived"}
		];


	}])

	.controller('articleDetailsCtrl', ["$scope", function ($scope) {

		$scope.title = "Article";

		$scope.article = {
			title: 'Lorem Ipsum',
			subtitle: 'Maecenas feugiat',
			author: 'Michał Szałkowski',
			type: 'post',
			state: 'DRAFT',
			short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus, nibh non ornare iaculisat maximus semper. Rneque sapien fringilla ipsum.',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus, nibh non ornare iaculis, diam nibh cursus urna, vitae elementum neque sapien fringilla ipsum. Nullam viverra sapien non nibh vehicula luctus. Sed a condimentum ipsum. Aliquam fermentum ex aliquet vulputate ultricies. Cras blandit risus sit amet tempus ultricies. Curabitur blandit porttitor lectus, nec blandit lacus. Morbi vel ligula justo. Donec neque nisl, scelerisque ac lectus ut, imperdiet porta tortor. Maecenas feugiat maximus semper.'
		};

		$scope.states = [
			{id: "DRAFT", name: "Draft"},
			{id: "PUBLISHED", name: "Published"},
			{id: "ARCHIVED", name: "Archived"}
		];


	}])

;