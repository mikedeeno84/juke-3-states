app.controller('AlbumCtrl', function ($scope, $location, PlayerFactory, album) {

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};
	$scope.mailHref = function() {
		console.log( "getting mail link")
		return "mailto:" +
			"?subject=" + $scope.album.name +
			"&body=Check out this rad album! " + $location.absUrl();
	}

	$scope.album = album;

}).config(function($stateProvider){
	$stateProvider.state('album',{
		url: '/albums/:albumId',
		templateUrl: '/views/album.html',
		controller:'AlbumCtrl',
		resolve: {
			album: function( AlbumFactory, $stateParams ) {
				return AlbumFactory.fetchById( $stateParams.albumId );
			}
		}
	});
});