app.controller('ArtistsCtrl', function ($scope, artists) {
	
	$scope.artists = artists;

}).config(function($stateProvider){
	$stateProvider.state('artistList',{
		url: '/artists',
		templateUrl: '/views/artistlist.html',
		controller: 'ArtistsCtrl',
		resolve: {
			artists: function( ArtistFactory ) {
				return ArtistFactory.fetchAll();
			}
		}
	});
});