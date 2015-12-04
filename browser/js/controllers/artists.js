app.controller('ArtistsCtrl', function ($scope, $rootScope, ArtistFactory) {
	ArtistFactory.fetchAll()
	.then(function (artists) {
		$scope.artists = artists;
	});
	$scope.viewArtist = function (artistId) {
		$rootScope.$broadcast('changeView', {
			name: 'oneArtist',
			id: artistId
		});
	};
}).config(function($stateProvider){
	$stateProvider.state('artistList',{
		url: '/artists',
		templateUrl: '/views/artistlist.html',
		controller: 'ArtistsCtrl'
	});
});