app.controller('ArtistCtrl', function ($scope, artist, PlayerFactory) {
	
	$scope.artist = artist;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

}).config( function( $stateProvider, $urlRouterProvider ) {

	$stateProvider.state('artist', {
		abstract: true,
		url: '/artists/:artistId',
		templateUrl: '/views/artist.html',
		controller: 'ArtistCtrl',
		resolve: {
			artist: function( ArtistFactory, $stateParams ) {
				return ArtistFactory.fetchById($stateParams.artistId);
			}
		}
	}).state('artist.albums', {
		url: '/albums',
		templateUrl: '/views/artist_albums.html',
	}).state('artist.songs', {
		url: '/songs',
		templateUrl: '/views/artist_songs.html',
	})

});