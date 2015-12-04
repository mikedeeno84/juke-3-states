app.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});

}).config(function ($stateProvider) {
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/views/albumlist.html',
        controller: 'AlbumsCtrl'
    });
});


